import ReviewCarousel from "@/components/ReviewCarousel";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const images = 6;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showAnnouncement2, setShowAnnouncement2] = useState(false);
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images);
  };

  useEffect(() => {
    const interval = setInterval(updateImageIndex, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main className="flex flex-col min-h-screen">
      <Head>
        <title>Kaladhaara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {showAnnouncement2 &&  <div className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-900 to-orange-600 text-white p-6 md:p-4 text-center rounded-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Trial classes and Admissions are open!
        </h2>
        <h2 className="text-xl md:text-2xl font-bold m-2">
          Check out our trial classes
        </h2>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <div className="my-4">
              <h3 className="text-lg md:text-xl font-bold">Folsom Studio:</h3>
              <p className="text-md md:text-lg">Mondays: July 22nd, 29th - 7pm</p>
              <p className="text-md md:text-lg">Wednesday: July 24th - 7:30pm</p>
            </div>
            <div className="my-4">
              <h3 className="text-lg md:text-xl font-bold">Mather Studio:</h3>
              <p className="text-md md:text-lg">
                Tuesday: July 23rd, 30th - 6pm
              </p>
              <p className="text-md md:text-lg">Thursday: July 25th - 6pm</p>
            </div>
            <div className="my-4">
              <h3 className="text-lg md:text-xl font-bold">
                Roseville Studio:
              </h3>
              <p className="text-md md:text-lg">
                Wednesday: Aug 7th, 14th - 6:15pm
              </p>
            </div>
            
            <div className="my-4">
                <a href="https://forms.gle/RDj9YdsmmQ7rB2qV8" target="_blank" rel="noopener noreferrer" className="text-md md:text-lg inline-block bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-semibold px-8 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg">
                    Click here to sign up for our trial classes
                </a>
            </div>
            <p className="text-md md:text-lg font-semibold m-2">For more info, join our WhatsApp group <a href="https://chat.whatsapp.com/EoBdjVffFsiInmEJMfFeW6" target="_blank" className="text-green-400 hover:underline">here</a>.</p>

          </div>
          
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src="/trial-class.png"
              alt="Trial Classes Flyer"
              className="mx-auto rounded-md shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-4">
          <div className="md:w-1/2 p-2">
            <h2 className="text-xl md:text-2xl font-bold m-2">
              Register for new admissions -{" "}
              <a
                href="https://app.classmanager.com/portal/kaladhaara-arts-academy/register"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md md:text-lg inline-block bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-semibold px-8 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg"
              >
                Register Now
              </a>
            </h2>
          </div>
          <div className="md:w-1/2 p-2">
            <p className="text-md md:text-lg font-semibold m-2">
              Existing families can login to our portal here -{" "}
              <a
                href="https://app.classmanager.com/portal/kaladhaara-arts-academy/login"
                target="_blank"
                className="text-md md:text-lg inline-block bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-semibold px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-lg"
              >
                Login
              </a>
            </p>
            <p className="text-md md:text-lg font-semibold m-2">
              For enquiries,{" "}
              <a
                href="https://app.classmanager.com/kaladhaara-arts-academy/lead-forms/95a5eccf-dc16-4779-8f34-55990dd890a0"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                visit here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      }
      {showAnnouncement && (
        <div className="bg-black bg-opacity-50 z-10 fixed top-0 left-0 w-full h-full flex items-center rounded-md justify-center">
          <div className="bg-orange-100 p-4 flex flex-col items-center justify-center rounded-sm relative mx-2">
            <p className="text-xl md:text-3xl text-slate-700 font-semibold text-center my-2">
              Trial Classes are here!!
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-md sm:max-w-lg">
                <img className="w-full h-full object-fit" src="/fall.jpg" />
              </div>
            </div>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute top-0 right-0 mt-2 mr-2 w-6 h-6 flex items-center justify-center font-bold text-black rounded-full bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="relative px-6 lg:px-8 py-16 sm:py-8">
        <div className="pb-8">
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row md:items-center">
            <div className="text-center md:text-left md:w-[38rem]">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                A
                <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-orange-700">
                  Premier Dance Institute
                </span>
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Of Greater Sacramento
              </h1>
            </div>
            <div className="hidden md:block md:w-[50%] md:h-[50%] overflow-hidden rounded-md ">
              <div className="items-center aspect-w-1 aspect-h-1">
                <img
                  src={`/homepage/homepage${currentImageIndex}.jpg`}
                  className="w-full h-full object-cover"
                  alt="Premier Dance Institute"
                />
              </div>
            </div>
            <div className="md:hidden w-full h-[50%]">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={`/homepage/homepage${currentImageIndex}.jpg`}
                  className="border object-cover rounded w-full mb-4"
                  alt="Premier Dance Institute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h3 className="my-2 text-xl font font-semibold md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600">
          What our students are saying about Kaladhaara
        </h3>
        <ReviewCarousel />
      </div>
    </main>
  );
}
