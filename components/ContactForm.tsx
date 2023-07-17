import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

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
                  <Link href="https://www.youtube.com/channel/UCtlYWV3SmKg-CXTQyzwh6ag" target="_blank" className="mx-2">
                    <FontAwesomeIcon icon={faYoutube}/> -
                    @kaladhaara</Link>
                  </p>
              </div>
              
            </div>

            </div>
            <form className="bg-white shadow-lg rounded px-4 pt-6 pb-8 mx-4">
                <div className="my-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                />
                </div>
                <div className="my-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                ></textarea>
                </div>
                <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
      
    );
  };
  
  export default ContactForm;

  const ContactFormgu = () => {
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md ring-4 ring-indigo-600 lg:max-w-xl">
          <form className="mt-6">
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  placeholder="John cooks"
                />
              </label>
            </div>
            <div className="my-4">
              <label>
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
              block
              w-full
              mt-2 px-16 py-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  placeholder="john.cooks@example.com"
                  required
                />
              </label>
            </div>
            <div className="my-4">
              <label>
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
              block
              w-full
              mt-2 px-16 py-8
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  rows={5}
                ></textarea>
              </label>
            </div>
  
            <div className="mb-6">
              <button
                type="submit"
                className="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
              >
                Contact Us
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    );
  };