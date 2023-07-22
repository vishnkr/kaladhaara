import ReviewCarousel from '@/components/ReviewCarousel'
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {
  const images = ['/other/arangetram3.jpg','/other/arangetram2.jpg', '/gallery/gallery1.jpg', '/gallery/gallery2.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Effect to change the image every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(updateImageIndex, 3000);

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
            <div className="hidden md:block">
              <div className="w-[30rem] h-96 overflow-hidden rounded-md">
                <img
                  src={images[currentImageIndex]}
                  className="w-full h-full object-cover"
                  alt="Premier Dance Institute"
                />
              </div>
            </div>
            <div className="md:hidden">
              <img src={images[currentImageIndex]} className="border rounded w-full mb-4 md:w-96" alt="Premier Dance Institute" />
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
