import Link from 'next/link';

export default function Landing () {
  return (
    <section className="landing-section py-20 relative pt-32 pb-10 md:pt-40 md:pb-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-fuchsia-600">Welcome to Our World of Innovation</h1>
        <p className="text-xl mt-4 text-gray-400">
          We specialize in &nbsp;
          <Link href="/whatwedo#AISolutions" className="text-bold text-2xl text-slate-300">AI</Link>
          , &nbsp;
          <Link href="/whatwedo#AutomationSolutions" className="text-bold text-2xl text-slate-300">Automation</Link>
          , &nbsp;
          <Link href="/whatwedo#WebDesign" className="text-bold text-2xl text-slate-300">Web Design</Link>
          , &nbsp;
          <Link href="/whatwedo#WebDevelopment" className="text-bold text-2xl text-slate-300">Web Development</Link>
          , and &nbsp;
          <Link href="/whatwedo#IndustrySpecificSolutions" className="text-bold text-2xl text-slate-300">Industry-Specific</Link>
          &nbsp; Solutions.
        </p>
        <p className="mt-4 text-gray-400 text-justify p-8">
            At AiNEST, we deliver more than just technology—we deliver results. Whether it’s AI solutions that drive future growth, automation that boosts operational efficiency, or web design that captivates and converts, our expertise is tailored to your success. We prioritize innovation, compliance, and scalability, ensuring your business is prepared for today’s demands and tomorrow’s opportunities.
        </p>
      </div>
    </section>
  )
}
