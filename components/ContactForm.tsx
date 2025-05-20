import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ContactForm = () => {
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
                    <FontAwesomeIcon icon={faInstagram}/> -
                    @kaladhaara_arts_academy</Link>
                  </p>
                  <p className="md:text-xl text-lg hover:text-blue-600">
                  <Link href="https://www.facebook.com/Kaladhaara" target="_blank" className="mx-2">
                    <FontAwesomeIcon icon={faFacebook}/> -
                    Kaladhaara</Link>
                  </p>
                  <p className="md:text-xl text-lg hover:text-red-600">
                  <Link href="https://youtube.com/@kaladhaaraarts5000" target="_blank" className="mx-2">
                    <FontAwesomeIcon icon={faYoutube}/> -
                    @kaladhaaraarts5000</Link>
                  </p>
              </div>
              
            </div>

            </div>
            <form className="bg-white shadow-lg rounded px-4 pt-6 pb-8 mx-4" action="https://formspree.io/f/xrgwbyge"
  method="POST">
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
                    required
                />
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
                    required
                ></textarea>
                <input type="text" name="_gotcha" className='hidden' />
                </div>
                <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
      
    );
  };
  
  export default ContactForm;
