"use client";

import ContactForm from '@/component/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactContent() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
       {/* Animated heading */}
       <motion.div
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="text-center"
       >
        <h1 className="font-headline text-4xl font-medium md:text-5xl">Get In Touch</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Have questions or need a custom quote? We&apos;re here to help.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {/* Left side - Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-2xl font-semibold">Contact Form</h2>
          <ContactForm />
        </motion.div>

        {/* Right side - Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
           {/* Contact info */}
           <div>
            <h2 className="font-headline text-2xl font-medium">Our Information</h2>
             <div className="mt-6 space-y-4 text-muted-foreground">
               <div className="flex items-center gap-4">
                 <Phone className="h-5 w-5 text-gray-300" />
                 <span className='text-gray-300'>(555) 123-4567</span>
               </div>
               <div className="flex items-center gap-4">
                 <Mail className="h-5 w-5 text-gray-300" />
                 <span className='text-gray-300'>crystalclearautodetailing8.com</span>
               </div>
               <div className="flex items-center gap-4">
                 <MapPin className="h-5 w-5 text-gray-300" />
                 <span className='text-gray-300'>Serving all 50 states across the USA.</span>
               </div>
             </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-headline text-2xl font-medium">Service Areas</h2>
             <div className="aspect-video w-full overflow-hidden rounded-lg border">
                 <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12705527.568460334!2d-104.498901234375!3d39.8130931557434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1687289876543!5m2!1sen!2sus"
                 />
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
