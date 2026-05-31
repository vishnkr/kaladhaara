import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const router = useRouter();
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    setShowNotice(router.query.notice === "waitlist");
  }, [router.isReady, router.query.notice]);

  return (
    <section className={inter.className}>
      <Head>
        <title>Contact Us - Kaladhaara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Toast notice (dismissible) */}
      {showNotice && (
        <div className="fixed left-1/2 z-20 -translate-x-1/2 top-30 md:top-28">

          <div className="relative mx-2 rounded-md border border-orange-200 bg-[#fdebd1] px-4 py-3 shadow-lg">
            <p className="text-center text-sm md:text-base text-slate-800">
              <strong>Notice:</strong> New admissions for 2026 are now open. Please fill out the contact form to get in touch with us!
            </p>
            <button
              aria-label="Close notice"
              onClick={() => setShowNotice(false)}
              className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-slate-700 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <h1 className="text-2xl md:text-3xl font-semibold text-center">CONTACT US</h1>
      <h3 className="font-semibold text-center">Get in touch!</h3>
      <div className="w-full mx-10 my-5">
        <ContactForm />
      </div>
    </section>
  );
}
