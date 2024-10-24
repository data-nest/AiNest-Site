import Link from 'next/link';
import Image from 'next/image';
import rpa from '@/public/images/blogPics/rpaservice1.jpg'
export default function AutoSol () {
  return (
    <section id="automation-solutions" className="automation-solutions-section py-20 max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent text-center">Automation Solutions</h2>
        <p className="mt-4 text-gray-400 text-lg text-center max-w-2xl mx-auto">
          Efficiency and adaptability are essential in today’s fast-paced business environment. Our automation solutions are designed to optimize your operations, offering flexibility and scalability as your business grows.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src={rpa} alt="Automation Solutions" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Key Benefits of Our Automation Solutions</h3>
            <ul className="mt-4 space-y-3 text-gray-400 text-justify">
              <li><span className="font-bold text-gray-300">1. Efficiency Boost: &nbsp;</span> Automate repetitive tasks, freeing up your team to focus on strategic initiatives and innovation.</li>
              <li><span className="font-bold text-gray-300">2. Cost Reduction: &nbsp;</span> Reduce operational costs by minimizing human errors and manual processes.</li>
              <li><span className="font-bold text-gray-300">3. Workflow Automation: &nbsp;</span> Streamline processes to reduce bottlenecks and enhance productivity, with workflows that adapt to your changing needs.</li>
              <li><span className="font-bold text-gray-300">4. Scalable Solutions: &nbsp;</span> Our automation tools are designed to grow with your business, ensuring they remain effective as your operations expand.</li>
              <li><span className="font-bold text-gray-300">5. Iterative Integration: &nbsp;</span> Implement automation in iterative phases, allowing for continuous feedback and improvement, ensuring alignment with your business goals.</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">How We Automate Your Business</h3>
          <p className="mt-4 text-gray-400 text-lg">
            Our team works closely with you to identify bottlenecks and inefficiencies, then designs automation workflows that are tailored to your specific needs. We integrate these solutions seamlessly into your operations, ensuring a smooth transition and ongoing support.
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
