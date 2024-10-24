export const metadata = {
  title: 'AiNEST | AI Solutions, Web Development & Automation Services',
  description: 'Explore AiNEST’s AI solutions, web development, automation services, and industry-specific solutions. Our expertise helps businesses transform digitally.',
  icons: {
    icon: '/ainestLogo.ico',
  },
  keywords: 'AI solutions, automation services, web development, industry-specific solutions, digital transformation',
  robots: 'index, follow',
  canonical: 'https://www.ainest.in/whatwedo',
}


import BackToTop from '@/components/backtotop'
import AiSol from '@/components/whatwedo/aisol'
import AutoSol from '@/components/whatwedo/autosol'
import IndSol from '@/components/whatwedo/indussol'
import Landing from '@/components/whatwedo/landing'
import WebDes from '@/components/whatwedo/webdes'
import WebDev from '@/components/whatwedo/webdev'

export default function Home() {
  return (
    <>
      <Landing />
      <section id="AISolutions">
        <AiSol />
      </section>
      <section id="AutomationSolutions">
        <AutoSol />
      </section>
      <section id="WebDesign">
        <WebDes />
      </section>
      <section id="WebDevelopment">
        <WebDev />
      </section>
      <section id="IndustrySpecificSolutions">
        <IndSol />
      </section>
      <BackToTop />
    </>
  )
}
