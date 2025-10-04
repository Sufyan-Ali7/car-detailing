import type { Metadata } from 'next'
import AboutContent from '@/component/about-content'

export const metadata: Metadata = {
  title: 'About Us - CrystalDetails',
  description: 'Learn more about CrystalDetails, our story, and why customers trust us for premium detailing services.',
}

export default function AboutPage() {
  return <AboutContent />
}
