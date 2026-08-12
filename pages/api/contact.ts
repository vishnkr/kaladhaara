import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body as ContactPayload;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing required Google Sheets environment variables");
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), name, email, phone, message]],
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to write to Google Sheet:", err);
    return res.status(500).json({ error: "Failed to save submission" });
  }
}