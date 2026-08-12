import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  console.log("DEBUG — SHEET_ID:", JSON.stringify(process.env.GOOGLE_SHEET_ID));
  console.log("DEBUG — SERVICE_EMAIL:", JSON.stringify(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL));
  console.log("DEBUG — KEY length:", process.env.GOOGLE_PRIVATE_KEY?.length ?? "undefined");

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body as ContactPayload;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
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