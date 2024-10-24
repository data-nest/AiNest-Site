import Link from 'next/link';
import Image from 'next/image';
import industry from '@/public/images/blogPics/industry.jpg'
export default function IndSol () {
  return (
    <section id="industry-solutions" className="industry-solutions-section py-20 max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent text-center">Industry-Specific Solutions</h2>
        <p className="mt-4 text-gray-400 text-lg text-center max-w-2xl mx-auto">
          Every industry has its unique challenges and opportunities. At AiNEST, we combine deep industry knowledge with tailored solutions to meet your specific requirements, ensuring you stay ahead of the curve.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Why Choose Our Industry-Specific Solutions?</h3>
            <ul className="mt-4 space-y-3 text-gray-400 text-justify">
              <li><span className="font-bold text-gray-300">1. Deep Industry Expertise: &nbsp;</span> Leverage our extensive experience across various industries to develop solutions that address your unique challenges.</li>
              <li><span className="font-bold text-gray-300">2. Regulatory Compliance: &nbsp;</span> Ensure your solutions comply with industry regulations and standards, minimizing risk and enhancing reliability.</li>
              <li><span className="font-bold text-gray-300">3. Innovative Approaches: &nbsp;</span> Stay ahead of industry trends with cutting-edge technologies and methodologies that drive measurable success.</li>
              <li><span className="font-bold text-gray-300">4. Scalable Solutions: &nbsp;</span> Develop solutions that grow with your business, ensuring they remain effective and efficient as industry dynamics evolve.</li>
              <li><span className="font-bold text-gray-300">5. Collaborative Innovation: &nbsp;</span> Partner with us to co-create solutions that are tailored to your industry’s specific needs, combining our expertise with your insights to develop practical, forward-thinking strategies.</li>
            </ul>
          </div>
          <div>
            <Image src={industry} alt="Industry-Specific Solutions" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Our Industry-Focused Approach</h3>
          <p className="mt-4 text-gray-400 text-lg">
            We start by analyzing your industry's challenges and opportunities, then develop customized solutions that align with your business objectives. Our team works closely with you to ensure a seamless implementation and ongoing support.
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


