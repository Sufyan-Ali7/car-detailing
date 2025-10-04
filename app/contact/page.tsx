import type { Metadata } from 'next'
import ContactContent from '@/component/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us - CrystalDetails',
  description: 'Get in touch with Crystal for questions or to book your detailing service.',
}

export default function ContactPage() {
  return <ContactContent />
}
