export const metadata = {
  title: 'AiNEST Careers | Join Our Innovative Team',
  description: 'Explore exciting career opportunities at AiNEST. Join our dynamic team and be a part of cutting-edge AI, automation, and web development projects.',
  icons: {
    icon: '/ainestLogo.ico',
  },
  keywords: 'AiNEST careers, AI jobs, automation jobs, web development careers, technology jobs',
  robots: 'index, follow',
  canonical: 'https://www.ainest.in/careers',
}

import Careers from "@/components/careers/landing"
import BackToTop from '@/components/backtotop'


export default function Home() {
  return (
    <>
      
      <BackToTop />
    </>
  )
}
