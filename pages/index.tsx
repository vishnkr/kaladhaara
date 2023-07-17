import ReviewCarousel from '@/components/ReviewCarousel'
import Head from 'next/head'

export default function Home() {
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
            <div className="md:hidden">
              {/* For smaller screens, place the image above the text */}
              <img src="/dog.jpg" className="border rounded w-full mb-4 md:w-96" alt="Premier Dance Institute" />
            </div>
            <div className="hidden md:block">
              {/* For larger screens, keep the image on the right */}
              <img src="/dog.jpg" className="border rounded" width="470" alt="Premier Dance Institute" />
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
