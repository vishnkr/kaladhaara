import { useEffect, useState } from "react"


type ShortTestimonials = {
    name: string,
    feedback: string,
    imagePath?: string
  }[]
const reviews: ShortTestimonials = [
    {
        name: "John Doe",
        feedback: "Kaladhaara is awesome!",
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
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
    const currentReview =reviews[currentReviewIndex]
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentReviewIndex(currentReviewIndex => (currentReviewIndex + 1) % reviews.length)
      }, 5000)
  
      return () => clearInterval(intervalId)
    }, [])
  
    return (
        <div className="w-full">
            <div className="top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-gray-200 flex justify-around space-x-3 rounded-lg shadow-md p-8 transform transition-opacity duration-500 ease-in-out opacity-100 review-card active">
                <div className="rounded-full overflow-hidden w-20 h-20 mb-4">
                    <img src='/dog.jpg' alt="Reviewer profile image" className="w-full h-full object-cover" />
                </div>
                <div>
                <p className="text-lg font-medium mb-2">John Doe</p>
                <p className="text-sm text-gray-700 mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante vel est blandit efficitur ut sit amet magna."</p>
                <p className="text-sm text-gray-700 mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante vel est blandit efficitur ut sit amet magna."</p>
                </div>

                
                </div>
            </div>
        </div>
      
    )
  }
  
  export default ReviewCarousel;
  {/* <div className="relative h-300">
        <div className="absolute top-0 left-0 w-full 
            h-full flex flex-col items-center justify-center bg-[#f2f2f2] rounded-lg
            shadow shadow-black	p-32 box-border transition ease-in opacity-100 delay-500">
          <div className="review-image">
            <img src={currentReview.imagePath} alt={currentReview.name} />
          </div>
          <div className="review-content">
            <p className="review-feedback">{currentReview.feedback}</p>
            <p className="review-name">{currentReview.name}</p>
          </div>
        </div>
      </div> */}