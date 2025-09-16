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
    <div className='w-full max-w-md mx-auto bg-black text-white rounded-xl p-5 sm:p-6 shadow-xl'>
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

      <h3 className='text-xl sm:text-2xl font-semibold tracking-tight mb-2'>{heading}</h3>
      <p className='text-sm sm:text-base text-zinc-400 leading-relaxed'>
        {text}
      </p>

      <Link href="#" className='inline-flex items-center gap-2 text-zinc-200 hover:text-white mt-5 sm:mt-6'>
        <span>Learn more</span>
        <span aria-hidden>→</span>
      </Link>
    </div>
  )
}

export default Card
