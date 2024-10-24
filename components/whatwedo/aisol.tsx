import Link from 'next/link';
import Image from 'next/image';
// import AiSolImg from '@/public/images/AiSolution.jpeg'
import eye  from "@/public/images/servicesPics/eye.png"
export default function AiSol () {
  return (
    <section id="ai-solutions" className="ai-solutions-section py-20 max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent text-center">AI Solutions</h2>
        <p className="mt-4 text-gray-400 text-lg text-center max-w-2xl mx-auto">
          At AiNEST, we deliver AI solutions that redefine what's possible, tailored to your unique business needs. Our solutions are continuously optimized to meet your evolving requirements.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Key Benefits of Our AI Solutions</h3>
            <ul className="mt-4 space-y-3 text-gray-400 text-justify">
              <li><span className="font-bold text-gray-300">1. Enhanced Decision Making: &nbsp;</span> Our AI algorithms provide data-driven insights, helping you make smarter business decisions.</li>
              <li><span className="font-bold text-gray-300">2. Process Automation: &nbsp;</span> Automate routine tasks and free up your team to focus on more strategic initiatives.</li>
              <li><span className="font-bold text-gray-300">3. Customer Personalizatio: &nbsp;</span> Tailor your offerings to individual customers with AI-powered personalization.</li>
              <li><span className="font-bold text-gray-300">4. Scalable Solutions: &nbsp;</span> Our AI models can scale with your business, ensuring consistent performance as you grow.</li>
              <li><span className="font-bold text-gray-300">5. Continuous Improvement: &nbsp;</span> Our Agile approach ensures that AI solutions evolve in response to your business growth, keeping you ahead of the competition.</li>
            </ul>
          </div>
          <div>
            <Image src={eye} alt="AI Solutions" className="w-full h-auto rounded-lg " />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Our Approach to AI Solutions</h3>
          <p className="mt-4 text-gray-400 text-lg">
            We start by understanding your business needs, then design and implement AI models that align with your goals. Our team of experts ensures seamless integration with your existing systems, providing continuous support and optimization.
          </p>
        </div>
        <div className="mt-10 text-center">
          <Link href="/#contact" className="inline-block bg-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-700 transition duration-300">
            Learn More & Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
