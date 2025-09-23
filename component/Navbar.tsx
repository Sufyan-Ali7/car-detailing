"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cart-context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cartCount } = useCart();

  return (
    <nav className='flex flex-col md:flex-row md:justify-between md:items-center py-6 px-4 text-white max-w-7xl mx-auto w-full'>
      {/* Logo + Mobile Menu Button */}
      <div className='flex items-center justify-between w-full md:w-auto'>
        <div className='text-[22px]'>LuxureDetails</div>
        <button
          aria-label='Toggle menu'
          className='md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/30 hover:border-white/60 transition'
          onClick={() => setIsOpen((v) => !v)}
        >
          <span aria-hidden className='block w-5 h-[2px] bg-white relative'>
            <span className={`absolute left-0 top-[-6px] w-5 h-[2px] bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
            <span className={`absolute left-0 top-[6px] w-5 h-[2px] bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
          </span>
        </button>
      </div>

      {/* Desktop Nav Links */}
      <ul className={`hidden md:flex gap-8 lg:gap-12 mt-4 md:mt-0`}>
        <Link href='/'><li className='text-[16px] hover:text-white/70 transition'>Home</li></Link>
        <Link href='/services'><li className='text-[16px] hover:text-white/70 transition'>Services</li></Link>
        <Link href='/pricing'><li className='text-[16px] hover:text-white/70 transition'>Pricing</li></Link>
        <Link href='/about'><li className='text-[16px] hover:text-white/70 transition'>About</li></Link>
        <Link href='/contact'><li className='text-[16px] hover:text-white/70 transition'>Contact</li></Link>
      </ul>

      {/* Desktop Get a Quote button */}
      <Link href="/booking" className="relative hidden md:inline-block">
        <button className='px-6 py-2 rounded-lg border border-white/60 hover:border-white transition-colors duration-200 hover:bg-white/10 flex items-center gap-2'>
          <ShoppingCart className="h-5 w-5" />
          Get a quote
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-sm text-white">
              {cartCount}
            </span>
          )}
        </button>
      </Link>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden w-full mt-4'>
          <ul className='flex flex-col gap-4 border-t border-white/10 pt-4'>
            <Link href='/' onClick={() => setIsOpen(false)}><li className='text-[16px]'>Home</li></Link>
            <Link href='/services' onClick={() => setIsOpen(false)}><li className='text-[16px]'>Services</li></Link>
            <Link href='/pricing' onClick={() => setIsOpen(false)}><li className='text-[16px]'>Pricing</li></Link>
            <Link href='/about' onClick={() => setIsOpen(false)}><li className='text-[16px]'>About</li></Link>
            <Link href='/contact' onClick={() => setIsOpen(false)}><li className='text-[16px]'>Contact</li></Link>
          </ul>

          {/* Mobile Get a Quote button */}
          <Link href="/booking" className="relative w-full">
            <button className='mt-4 w-full px-6 py-2 rounded-lg border border-white/60 hover:border-white transition-colors duration-200 hover:bg-white/10 flex items-center justify-center gap-2'>
              <ShoppingCart className="h-5 w-5" />
              Get a quote
              {cartCount > 0 && (
                <span className="absolute right-2  flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-md text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
