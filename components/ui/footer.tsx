import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="AiNEST">
                  <img src="/images/ainestLogo.png" alt="AiNEST Logo" className="h-12 w-auto" />
                </Link>
              </div>
              <div className="text-gray-400">AiNEST is your go-to solution for AI-based applications, innovative web design, and RPA-driven automation.</div>
              <br></br>
              <div className="text-gray-400">
                <a href="mailto:info@ainest.in" className="text-sm text-slate-400">
                  <FontAwesomeIcon icon={faEnvelope} className="text-fuchsia-500 h-4 w-4 pr-2" />
                  &nbsp;info@ainest.in
                </a>
              </div>
              <div className="text-gray-400 pt-2">     
                <a href="tel:+91 9999999999" className="text-sm text-slate-400">
                  <FontAwesomeIcon icon={faPhone} className="text-fuchsia-500 h-4 w-4" />
                  &nbsp; &nbsp;+91 6385858791
                </a>
              </div>
            </div>

            {/* 2nd, 3rd, 4th and 5th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              {/* <div className="text-sm">
                <h6 className="bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent font-bold mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/products" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Explore our Products</Link>
                  </li>
                </ul>
              </div> */}

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent font-bold mb-1">What We Do</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/whatwedo#AISolutions" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">AI Solutions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/whatwedo#AutomationSolutions" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Automation Solutions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/whatwedo#WebDesign" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Design</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/whatwedo#WebDevelopment" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Development</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/whatwedo#IndustrySpecificSolutions" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Industry-Specific Solutions</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent font-bold mb-1">Quick Links</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/#about" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About Us</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/#service" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Our Services</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/#features" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Features</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/#contact" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* 5th block */}
              <div className="text-sm">
                <h6 className="bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent font-bold mb-1">Careers</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/careers" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Explore The Opportunity</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://www.linkedin.com/company/ainest-in" target='_blank' className="flex justify-center items-center text-fuchsia-500 bg-gray-800 hover:text-gray-100 hover:bg-fuchsia-500 rounded-full transition duration-150 ease-in-out" aria-label="LinkedIn">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://discord.gg/hqkkmvum" target='_blank' className="flex justify-center items-center text-fuchsia-500 bg-gray-800 hover:text-gray-100 hover:bg-fuchsia-500 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(0.9) translate(1.2, 1.2)">
                      <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.517.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249a18.52 18.52 0 00-5.487 0 12.23 12.23 0 00-.617-1.25.071.071 0 00-.073-.035c-1.645.309-3.218.82-4.884 1.517a.066.066 0 00-.03.027C.533 9.037-.32 13.52.1 17.959a.078.078 0 00.031.052c2.052 1.51 4.043 2.422 6.001 3.029a.075.075 0 00.081-.027c.464-.642.873-1.318 1.226-2.021a.076.076 0 00-.041-.104 11.32 11.32 0 01-1.614-.78.074.074 0 01-.007-.126c.109-.082.218-.168.324-.256a.072.072 0 01.075-.01c3.392 1.554 7.065 1.554 10.42 0a.073.073 0 01.076.009c.107.089.216.175.324.257a.074.074 0 01-.006.125c-.514.307-1.054.565-1.614.781a.075.075 0 00-.04.104c.387.764.806 1.479 1.26 2.021a.075.075 0 00.081.027c1.958-.607 3.949-1.519 6.001-3.029a.076.076 0 00.031-.051c.5-5.077-.819-9.524-3.549-13.563a.061.061 0 00-.029-.028zM8.02 15.331c-1.085 0-1.978-.99-1.978-2.207 0-1.217.878-2.207 1.978-2.207 1.103 0 1.986.998 1.978 2.207 0 1.217-.878 2.207-1.978 2.207zm7.958 0c-1.085 0-1.978-.99-1.978-2.207 0-1.217.878-2.207 1.978-2.207 1.103 0 1.986.998 1.978 2.207 0 1.217-.878 2.207-1.978 2.207z"/>
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">Copyright &copy; 2024 AiNEST | All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
