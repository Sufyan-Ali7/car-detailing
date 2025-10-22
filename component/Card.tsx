import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    imageURL: string;
    heading: string;
    text: string;

  }

const  Card: React.FC<CardProps> = ({ imageURL, heading, text }) => {
  return (
    <div className='w-full max-w-md mx-auto bg-[#000000] text-white rounded-xl p-3 sm:p-4  font-medium shadow-lg hover:shadow-gray-500/40'>
      <div className='overflow-hidden rounded-2xl mb-5 sm:mb-6'>
        <Image
          src={imageURL}
          alt="Luxury Car"
          width={960}
          height={640}
          className='w-full h-auto object-cover'
          priority
        />
      </div>

      <h3 className='text-xl sm:text-2xl font-medium tracking-tight mb-2'>{heading}</h3>       
      <p className='text-[16px] sm:text-[20px] text-[#7a7575] '>
        {text}
      </p>

      {/* <Link href="#" className='inline-flex items-center gap-2 text-white hover:text-white/60 mt-3 sm:mt-4'>
        <span>Learn more</span>
        <span aria-hidden className="text-2xl leading-none">→</span>
      </Link> */}
    </div>
  )
}

export default Card
