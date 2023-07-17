import { useEffect, useState } from "react"


type ShortTestimonials = {
    name: string,
    feedback: string,
    imagePath?: string
  }[]
const reviews: ShortTestimonials = [
    {
        name: "John Doe",
        feedback: "Kaladhaara is just awesome. I made some great friends and became a better dancer during my time at Kaladhaara ",
        imagePath: '/dog.png'
    },
    {
        name: "John Doe Jr.",
        feedback: "You're missing out on some great lessons if you don't join",
        imagePath: '/dog.png'
    },
    {
        name: "John Doe Sr.",
        feedback: "Had a great time and my skills have improved so much",
        imagePath: '/dog.png'
    },
  ] 

  const ReviewCarousel = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentReviewIndex((currentReviewIndex) => (currentReviewIndex + 1) % reviews.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="w-full flex overflow-hidden">
        {reviews.map((review, index) => (
          <section
            key={index}
            className={`w-full bg-slate-500 rounded-md ${
              index === currentReviewIndex ? "slide-active" : "slide-inactive"
            }`}
            style={{
              transform: `translateX(-${currentReviewIndex * 100}%)`,
              minWidth: "100%",
              transition: "transform 0.5s ease",
            }}
          >
            <div className="max-w-screen-sm px-4 py-3 mx-auto text-center lg:py-5">
            <figure className="max-w-screen-md mx-auto">
              <svg className="h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                <p className="text-base sm:text-xl font-medium text-gray-900 dark:text-white">
                  "{review.feedback}"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    {review.name}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"></div>
                </div>
              </figcaption>
            </figure>
            </div>
          </section>
        ))}
      </div>
    );
  };
  
  export default ReviewCarousel;


