import ReviewCarousel from '@/components/ReviewCarousel'
import Head from 'next/head'

export default function Home() {
  return (
          <main className='flex flex-col min-h-screen'>
            <Head>
            <title>Kaladhaara</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="relative px-6 lg:px-8 py-16 sm:py-8">
              <div className='pb-8'>
                <div className='flex space-x-8 items-center justify-center'>
                  <div className='text-left w-[38rem]'>
                    <h1 className='text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl'>
                      A 
                      <span className='pl-2 text-transparent bg-clip-text bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-600 via-yellow-500 to-orange-700'>
                        Premier Dance Institute
                      </span>
                      </h1>
                      <h1 className='text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl'> Of Greater Sacramento
                    </h1>
                    
                  </div>
                  <div className='hidden sm:block'>
                    <img src='/dog.jpg' className='border rounded' width="470"></img>
                    <div className='flex justify-end py-4'></div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className='flex flex-col text-center'>
                <h3 className='my-2 text-md md:text-2xl'>What our students are saying about Kaladhaara </h3>
                <ReviewCarousel />
             </div>
          </main>

  )
}
