import Link from 'next/link';
import Image from 'next/image';
import webdev from '@/public/images/blogPics/webdesign1.jpg'
export default function WebDes () {
  return (
    <section id="web-design" className="web-design-section py-20 max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent text-center">Web Design</h2>
        <p className="mt-4 text-gray-400 text-lg text-center max-w-2xl mx-auto">
          A compelling web presence is crucial for business success. Our approach to web design ensures that your website is not only visually stunning but also user-centric and aligned with your brand’s identity.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Key Features of Our Web Design Services</h3>
            <ul className="mt-4 space-y-3 text-gray-400 text-justify">
              <li><span className="font-bold text-gray-300">1. Responsive Design: &nbsp;</span> Create websites that deliver a seamless experience across all devices, ensuring your brand reaches every potential customer.</li>
              <li><span className="font-bold text-gray-300">2. User-Centric Approach: &nbsp;</span> We focus on creating intuitive and engaging interfaces that resonate with your audience.</li>
              <li><span className="font-bold text-gray-300">3. Brand Consistency: &nbsp;</span> We ensure your website reflects your brand's identity, strengthening your online presence.</li>
              <li><span className="font-bold text-gray-300">4. Creative Innovation: &nbsp;</span> Incorporate unique, cutting-edge design elements that set your website apart from the competition.</li>
              <li><span className="font-bold text-gray-300">5. SEO Optimized: &nbsp;</span> Our designs are built with SEO best practices in mind, helping you rank higher in search results.</li>
            </ul>
          </div>
          <div>
            <Image src={webdev} alt="Web Design" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Our Web Design Process</h3>
          <p className="mt-4 text-gray-400 text-lg">
            We start by understanding your brand and audience, then create wireframes and prototypes to visualize the design. After your approval, we move to full development, ensuring that every aspect of the design aligns with your vision.
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

