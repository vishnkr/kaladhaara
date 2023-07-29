import ReviewCarousel from '@/components/ReviewCarousel'
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {
  const images = 6;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

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
      {showAnnouncement && (
        <div className='bg-black bg-opacity-50 z-10 fixed top-0 left-0 w-full h-full flex items-center rounded-md justify-center'>
          <div className="bg-orange-100 p-4 flex flex-col items-center justify-center rounded-sm relative mx-2">
            <p className="text-xl md:text-3xl text-slate-700 font-semibold text-center my-2">
              Don't Miss Our Upcoming Event!
            </p>
            <div className='flex flex-col items-center justify-center'>
              <div className="max-w-md sm:max-w-lg">
                <img
                  className="w-full h-full object-fit"
                  src="/events/cosmic-elements.jpg"
                  alt="Cosmic Elements"
                />
              </div>
              <div className=''>
                <p className="text-lg md:text-xl text-slate-700 font-semibold text-center my-2">
                  "Cosmic Elements" - A Thematic Bharatanatyam presentation by Kaladhaara's finest dancers and Live orchestra.
                </p>
              </div>
              <div className=''>
                <a href="https://tinyurl.com/CE13th" target="_blank">
                  <button className='bg-red-800 rounded-md px-4 py-2 text-white text-md md:text-lg'>Get Your Tickets Now!</button>
                </a>
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
              <img src={`/homepage/homepage${currentImageIndex}.jpg`} className="border object-cover rounded w-full mb-4" alt="Premier Dance Institute" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h3 className="my-2 text-xl font font-semibold md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600">What our students are saying about Kaladhaara</h3>
        <ReviewCarousel />
      </div>
    </main>
  );
}
