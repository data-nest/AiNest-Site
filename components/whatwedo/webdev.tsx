import Link from 'next/link';
import Image from 'next/image';
import webdev from '@/public/images/blogPics/webdev.jpg'
export default function WebDev () {
  return (
    <section id="web-development" className="web-development-section py-20 max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent text-center">Web Development</h2>
        <p className="mt-4 text-gray-400 text-lg text-center max-w-2xl mx-auto">
          Your website is the backbone of your online presence. Our web development services focus on building robust, scalable, and secure websites that meet your current needs and adapt to future challenges.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src={webdev} alt="Web Development" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Key Aspects of Our Web Development Services</h3>
            <ul className="mt-4 space-y-3 text-gray-400 text-justify">
              <li><span className="font-bold text-gray-300">1. Custom Web Development: &nbsp;</span> Develop solutions tailored specifically to your business, ensuring a perfect fit and seamless integration.</li>
              <li><span className="font-bold text-gray-300">2. Performance Optimization: &nbsp;</span> Deliver high-performing websites optimized for speed, reliability, and superior user experience.</li>
              <li><span className="font-bold text-gray-300">3. Security First: &nbsp;</span> Implement the latest security measures to protect your website and user data, with ongoing updates to counter emerging threats.</li>
              <li><span className="font-bold text-gray-300">4. Scalable Architecture: &nbsp;</span> Build websites that can grow with your business, ensuring they remain efficient as your operations expand.</li>
              <li><span className="font-bold text-gray-300">5. Ongoing Support: &nbsp;</span> Provide continuous updates and support to keep your website at peak performance as your business evolves.</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Our Web Development Process</h3>
          <p className="mt-4 text-gray-400 text-lg">
            From initial concept to final launch, we follow a rigorous development process that ensures your website meets all your business objectives. We provide ongoing maintenance and support to keep your site running smoothly.
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
