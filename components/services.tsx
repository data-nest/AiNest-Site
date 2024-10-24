import Link from 'next/link';
import Image from 'next/image'


import rpa from '@/public/images/rpa.jpg'
import webb from '@/public/images/servicesPics/webb.jpg'
import ai from '@/public/images/servicesPics/aipic.jpg'

export default function Services() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-fuchsia-500 rounded-full mb-4">Achieve More with Us</div>
            <h1 className="h2 mb-4">Innovative Services, Tailored Solutions</h1>
            <p className="text-xl text-gray-400">Explore a world where technology meets creativity, driving solutions that empower your business to reach new heights.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item - AI-Based Applications */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ai} width={540} height={405} alt="AI Applications" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-fuchsia-600 mb-2">AI-Based Applications</div>
                  <h3 className="h3 mb-3">Revolutionize Your Business with AI</h3>

                  <p className="text-xl text-gray-400 mb-4 text-justify">
                    Harness the power of artificial intelligence to transform your business operations. Our AI-based solutions are designed to automate processes, enhance decision-making, and unlock new opportunities for growth.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Custom AI models tailored to your needs</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Scalable solutions for businesses of all sizes</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Data-driven insights for better decision making</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item - Website Development */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={webb} width={540} height={500} alt="Website Development" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-fuchsia-600 mb-2">Low & No Code Development</div>
                  <h3 className="h3 mb-3">Website Development Reimagined</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">
                    Crafting digital experiences that engage and convert. Our web development services use the latest technologies to create responsive, user-friendly websites that align with your brand and business goals.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Seamless integration with existing systems</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Highly customizable design options</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Optimized for performance and speed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item - RPA Solutions */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={rpa} width={540} height={405} alt="RPA Solutions" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-fuchsia-600 mb-2">Robotic Process Automation</div>
                  <h3 className="h3 mb-3">Streamline Your Operations with RPA</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">
                    Enhance productivity and reduce costs by automating repetitive tasks. Our RPA solutions are designed to help you achieve operational excellence by automating mundane processes, allowing your team to focus on higher-value work.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>End-to-end automation services</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Scalable solutions for growing businesses</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-fuchsia-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Quick implementation with minimal disruption</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='text-center pb-11'>
          <Link className="btn text-white bg-fuchsia-600 hover:bg-fuchsia-800 w-full mb-4 sm:w-auto sm:mb-0" href="/whatwedo">Know more about &nbsp; <span className='font-bold'>What We Do</span></Link>
        </div>
      </div>
    </section>
  )
}
