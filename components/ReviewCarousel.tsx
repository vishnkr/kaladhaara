import { useEffect, useState } from "react"


type ShortTestimonials = {
    name: string,
    feedback: string,
    imagePath?: string
  }[]
const reviews: ShortTestimonials = [
    {
        name: "Sadhana Suresh",
        feedback: "Dance itself is a way for self-expression, allowing me to display my talents through a variety of steps and expressions. Dance class is a place where I not only learn new skills but also show the result of my practice. It is a platform where I can confidently demonstrate all the hard work and effort I have put into refining my dance.",
    },
    {
        name: "Sathvika Siddharth",
        feedback: "I think Kaladhaara is a great dance school because there are amazing teachers. I love that I get wonderful opportunities to perform at many places. I have made many friends, met many people and I always feel like Kaladhaara is a big family.",
    },
    {
        name: "Samyuktha Suresh",
        feedback: "Dance has given me the chance to learn different steps and how I convey myself to others through characters in stories. Dancing helps me become flexible, and gives me the ability to become stronger. The more challenging the dance is the more it feels like an adventure that takes me successfully onto the next level",
    },
    { name: "Gopika Srivastava",
      feedback: "I enjoy dance class because I really have fun learning about the stories told through dance. Two dance productions which I really enjoyed learning and performing were the Rasleela and the 12 months production"
    },
    {
      feedback: "Dance class is my escape from the world, a place where I can let go of all inhibitions and express myself freely through the art of movement. It's where I feel truly alive, surrounded by a community that shares my passion and supports my growth as a dancer and individual",
      name: "Samyuktha Rajkumar"
    },
    {
      name: "Sahana Shankar",
      feedback: "I consider myself very fortunate to have found my passion in an art form that not only allows me to become mentally and physically strong but connects me back to my cultural roots. Through this form of dance, I find ways to express myself like never before"
    },
    {
      name: "Anika Maragathavel",
      feedback: "Dance class to me is a place to express myself in a way which I cannot do in other places. It enables me to portray myself as someone who is confident and empowered on the stage and in front of others. I discover my true self surrounded by some of my closest friends and mentors"
    },
    {
      name: "Diya Frank",
      feedback: "I like the teachers and the ways they teach me. I like how they correct my stance when I go wrong. I think the best way to learn Bharatanatyam is to go to  Kaladhaara"
    },
    {
      name: "Lavanya Gnanakumar",
      feedback: "In addition to learning Bharatanatyam, dance class has taught me much about dedication, discipline, and perseverance. Kaladhaara is an extremely supportive environment that fosters a strong sense of community, which makes learning just as fun and exciting as it is instructive"
    },
    {
      name: "Aaradhana Arvind",
      feedback: "I am 10 years old and have been learning dance for the past 5 years. I can't express the gratitude I have towards Mathura Auntie and Kaladhara teachers. Dancing gives me self confidence and joy. With my teachers help I am able to connect with the music and dance gracefully."
    }
  ] 

  const ReviewCarousel = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentReviewIndex((currentReviewIndex) => (currentReviewIndex + 1) % reviews.length);
      }, 12000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="w-full flex overflow-hidden">
        {reviews.map((review, index) => (
          <section
            key={index}
            className={`w-full bg-slate-100 rounded-md ${
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
              <svg className="h-8 mx-auto mb-3 text-gray-400 dark:text-orange-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                <p className="text-base sm:text-xl font-medium text-gray-900">
                  {review.feedback}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900">
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


/*<figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    {review.name}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"></div>
                </div>
              </figcaption>*/