import Link from 'next/link';
import CardsSection from './tciprogram';

export default function Careers() {
  return (
    <section className="careers-section py-20 relative pt-32 pb-10 md:pt-40 md:pb-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-fuchsia-600">Join Our Team at AiNEST</h1>
        <p className="text-xl mt-4 text-gray-400 p-2" >
          At AiNEST, we’re constantly on the lookout for passionate and talented individuals who are eager to make an impact. Whether you’re interested in internships or full-time positions, we offer a dynamic environment where innovation thrives.
        </p>

        {/* Internship Offers */}
        
        <div className="mt-10 text-left px-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-600 text-center">Current Internship Offers</h2>
          <CardsSection />
        </div>


          {/* Open Postions */}
        <div>
          <h2 className="mt-10 text-3xl font-bold text-slate-600 text-center">Open Positions</h2>
          <p className="mt-4 text-lg text-gray-400 text-justify px-10">
            Currently, we do not have any open full-time positions. However, we’re always excited to connect with talented individuals who are passionate about making a difference. We encourage you to check back soon or reach out to us directly for future opportunities.
          </p>

          <p className="mt-10 text-gray-400 text-lg px-10">
            If you’re passionate about shaping the future of technology and want to be part of an innovative team, Mail to 
            <a href="mailto:careers@ainest.in" className="text-lg text-slate-200">
                &nbsp;careers@ainest.in&nbsp;
            </a>
            we're eager to hear from you.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}
