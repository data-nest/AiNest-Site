export const metadata = {
  title: 'AiNEST',
  description: 'Welcome to AiNEST, your trusted partner for AI-driven solutions, automation, web development, and RPA. Empower your business with cutting-edge technology.',
  icons: {
    icon: '/ainestLogo.ico',
  },
  keywords: 'AiNEST, AI solutions, automation, web development, RPA, business solutions, technology',
  robots: 'index, follow',
  canonical: 'https://www.ainest.in/',
}


import Hero from '@/components/hero'
import About from '@/components/about'
import Features from '@/components/features'
import Services from '@/components/services'
// import Members from '@/components/teammembers'
import BackToTop from '@/components/backtotop'
import ContactUs from '@/components/contactus'

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Services />
      </section>
      <section id="features">
        <Features />
      </section>
      {/* <section id="team">
        <Members />
      </section> */}
      <section id="contact">
        <ContactUs />
      </section>
      <BackToTop />
    </>
  )
}
