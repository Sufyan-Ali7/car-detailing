import { Button } from '@/component/ui/button';
import { Input } from '@/component/ui/input';
import { Label } from '@/component/ui/label';
import { Textarea } from '@/component/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - AutoLux',
  description: 'Get in touch with AutoLux for questions or to book your detailing service.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
       <div className="text-center">
        <h1 className="font-headline text-4xl font-medium md:text-5xl">Get In Touch</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Have questions or need a custom quote? We're here to help.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-2xl font-semibold">Contact Form</h2>
          <form className="mt-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="block text-lg">Name</Label>
              <Input id="name"  className='bg-[#1e1e1e] text-white placeholder:!text-gray-400' placeholder="Your Name" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="email" className="block text-lg">Email</Label>
              <Input id="email"  className='bg-[#1e1e1e] text-white placeholder:!text-gray-400' type="email" placeholder="your.email@example.com" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="message" className="block text-lg">Message</Label>
              <Textarea id="message"  className='bg-[#1e1e1e] text-white placeholder:!text-gray-400' placeholder="How can we help you?" />
            </div>
            <button type="submit"  className="w-full bg-[#1e1e1e] hover:bg-[#191919] transition-transform duration-300 hover:scale-105 py-3 rounded-2xl">Send Message</button>
          </form>
        </div>
        <div className="space-y-8">
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
                    >
                 </iframe>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
