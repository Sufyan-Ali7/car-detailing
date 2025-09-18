import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='w-full px-4 mt-12 text-white'>
      <div className='max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 py-6 border-t border-white/40'>
        <div className='text-[18px] sm:text-[20px]'>LuxureDetails@2025</div>
        <ul className='flex flex-col sm:flex-row gap-3 sm:gap-8'>
          <Link href='/'><li className='text-[16px] sm:text-[18px] hover:text-white/70 transition'>Cookie policy</li></Link>
          <Link href='/'><li className='text-[16px] sm:text-[18px] hover:text-white/70 transition'>Terms of service</li></Link>
          <Link href='/'><li className='text-[16px] sm:text-[18px] hover:text-white/70 transition'>Privacy policy</li></Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
