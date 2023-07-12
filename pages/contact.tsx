
import ContactForm from "@/components/ContactForm";
import Head from 'next/head'
import {Inter} from 'next/font/google';

const inter = Inter({subsets:["latin"]})
export default function Contact() {
    return (
      <section className={`${inter.className}`}>
        <Head>
          <title>Contact Us - Kaladhaara</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1 className="text-3xl font-semibold text-center">CONTACT US</h1>
        <h3 className="font-semibold text-center">Get in touch!</h3>
        <div className="w-full mx-10 my-5">
          <ContactForm />
        </div>
      </section>
    );
  }

  