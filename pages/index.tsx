import ReviewCarousel from '@/components/ReviewCarousel'
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {
  const images = 6;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images);
  };

  useEffect(() => {
    const interval = setInterval(updateImageIndex, 4000);

    // Clean up the interval when the component unmounts
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
      <div className="relative px-6 lg:px-8 py-10 sm:py-8">
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
                  src={`/homepage/homepage${currentImageIndex+1}.jpg`}
                  className="w-full h-full object-cover"
                  alt="Premier Dance Institute"
                />
              </div>
            </div>
            <div className="md:hidden w-full h-[50%]">
             <div className="aspect-w-1 aspect-h-1">
              <img src={`/homepage/homepage${currentImageIndex+1}.jpg`} className="border object-cover rounded w-full mb-4" alt="Premier Dance Institute" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h3 className="my-2 text-md md:text-2xl">What our students are saying about Kaladhaara</h3>
        <ReviewCarousel />
      </div>
    </main>
  );
}
