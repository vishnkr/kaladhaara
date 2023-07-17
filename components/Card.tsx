import { Maven_Pro } from 'next/font/google';
const maven = Maven_Pro({subsets:['latin']});
interface CardProps {
    title: string,
    content: string,
    color: string,
    img:string,
}

import React, { useState } from 'react';

function Card({title,content,color,img}:CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={img}
          className={`object-cover w-full h-full ${isHovered || isClicked ? 'grayscale-0' : 'grayscale'}`}
        />
      </div>
      {isClicked || isHovered ?
        <div 
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-0'}`}
            style={{
                background: "linear-gradient(90deg, rgba(249,249,249,1) 0%, rgba(226,146,67,1) 99%)",
              }}
        >
          <h2 className={`text-4xl text-center font-bold mb-4 ${maven.className}`}>{title}</h2>
          <p className="text-lg text-center">{content}</p>
        </div>
        : <div className='absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex flex-col justify-center items-center'>
            <h2 className={`text-white text-4xl font-bold mb-4 text-center ${maven.className}`}>{title.toUpperCase()}</h2>
        </div>
      }
    </div>
  );
}

export default Card;