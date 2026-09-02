import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

const LOCATION_OPTIONS = ["Folsom", "Roseville", "Rancho Cordova"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    kidName: "",
    kidDob: "",
    location: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const results = await Promise.allSettled([
        fetch("https://formspree.io/f/xrgwbyge", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        }),
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }),
      ]);

      const anySucceeded = results.some(
        (r) => r.status === "fulfilled" && r.value.ok
      );

      if (anySucceeded) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          kidName: "",
          kidDob: "",
          location: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="font-inter grid md:grid-cols-2 grid-cols-1">
      <div className="text-xl ">
        <h2 className="md:text-2xl text-lg font-semibold">Mathura Viswanathan</h2>
        <div className='my-2'>
          <p className="text-lg md:text-md"> <FontAwesomeIcon icon={faPhone}/> +1 (916)-496-8817</p>
          <p className="text-lg md:text-md"><FontAwesomeIcon icon={faPhone}/> +1 (405)-334-6861</p>
          <p className="text-lg md:text-md"><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:kaladhaara.artsacademy@gmail.com" className='hover:text-blue-600'>kaladhaara.artsacademy@gmail.com</a></p>
        </div>
        <div className='flex flex-col md:text-2xl text-lg px-3 items-center justify-center'>
          <h3>Follow us on our socials for more updates!</h3>
          <div className='flex flex-col'>
            <p className="md:text-xl text-lg hover:text-pink-600">
              <Link href="https://www.instagram.com/kaladhaara_arts_academy/" target="_blank" className="mx-2">
                <FontAwesomeIcon icon={faInstagram}/> - @kaladhaara_arts_academy
              </Link>
            </p>
            <p className="md:text-xl text-lg hover:text-blue-600">
              <Link href="https://www.facebook.com/Kaladhaara" target="_blank" className="mx-2">
                <FontAwesomeIcon icon={faFacebook}/> - Kaladhaara
              </Link>
            </p>
            <p className="md:text-xl text-lg hover:text-red-600">
              <Link href="https://youtube.com/@kaladhaaraarts5000" target="_blank" className="mx-2">
                <FontAwesomeIcon icon={faYoutube}/> - @kaladhaaraarts5000
              </Link>
            </p>
          </div>
        </div>
      </div>

      <form className="bg-white shadow-lg rounded px-4 pt-6 pb-8 mx-4" onSubmit={handleSubmit}>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kidName">
            Child's Name<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kidName"
            type="text"
            placeholder="Enter your child's name"
            name="kidName"
            value={formData.kidName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kidDob">
            Child's Date of Birth<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kidDob"
            type="date"
            name="kidDob"
            value={formData.kidDob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location Preference<span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-2">
            {LOCATION_OPTIONS.map((location) => (
              <label key={location} className="flex items-center gap-2 text-gray-700 font-normal">
                <input
                  type="radio"
                  name="location"
                  value={location}
                  checked={formData.location === location}
                  onChange={handleChange}
                  className="w-4 h-4"
                  required
                />
                {location}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {status === "success" && (
          <p className="text-green-600 text-sm mb-4 text-center">Thanks! Your message was sent.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mb-4 text-center">Something went wrong. Please try again or email us directly.</p>
        )}

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;