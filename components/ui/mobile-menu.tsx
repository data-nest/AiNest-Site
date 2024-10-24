'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({
    service: false,
    whatWeDo: false,
    careers: false,
  })

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Adjust height dynamically for each dropdown
  const getDropdownHeight = (): number => {
    let totalHeight = 0
    if (dropdownOpen.service) totalHeight += 48 * 2 // 2 options for Service
    if (dropdownOpen.whatWeDo) totalHeight += 48 * 6 // 5 options for What We Do + main option
    if (dropdownOpen.careers) totalHeight += 48 * 2 // 1 option for Careers + main option
    return totalHeight
  }

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // Close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // Toggle dropdown and close other dropdowns
  const toggleDropdown = (menu: string) => {
    setDropdownOpen((prevState) => {
      const updatedState = Object.keys(prevState).reduce(
        (acc, key) => ({ ...acc, [key]: key === menu ? !prevState[key] : false }),
        {}
      )
      return updatedState
    })
  }

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownOpen({
      service: false,
      whatWeDo: false,
      careers: false,
    })
  }

  // Down arrow by default, up arrow when dropdown is open
  const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      {isOpen ? (
        <path fillRule="evenodd" d="M10 8a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 8z" clipRule="evenodd" />
      ) : (
        <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 9.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 12z" clipRule="evenodd" />
      )}
    </svg>
  )

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-fuchsia-300 hover:text-fuchsia-300 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: `${getDropdownHeight() + 200}px`, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <Link
              href="/#about"
              className="flex font-medium w-full text-fuchsia-600 hover:text-white py-2 justify-center"
              onClick={() => {
                setMobileNavOpen(false)
                closeAllDropdowns()
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#service"
              className="flex items-center font-medium w-full text-fuchsia-600 hover:text-white py-2 justify-center"
              onClick={() => toggleDropdown('service')}
            >
              Service
              <ArrowIcon isOpen={dropdownOpen.service} />
            </Link>
            {dropdownOpen.service && (
              <ul className="mt-2 bg-gray-700">
                <li className="py-1 text-center">
                  <Link
                    href="/#features"
                    className="text-fuchsia-600 hover:text-white"
                    onClick={() => {
                      setMobileNavOpen(false)
                      closeAllDropdowns()
                    }}
                  >
                    Features
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/whatwedo"
              className="flex items-center font-medium w-full text-fuchsia-600 hover:text-white py-2 justify-center"
              onClick={() => toggleDropdown('whatWeDo')}
            >
              What We Do
              <ArrowIcon isOpen={dropdownOpen.whatWeDo} />
            </Link>
            {dropdownOpen.whatWeDo && (
              <ul className="mt-2 bg-gray-700">
                <li className="py-1 text-center">
                  <Link
                    href="/whatwedo#AISolutions"
                    className="text-fuchsia-600 hover:text-white"
                    onClick={() => {
                      setMobileNavOpen(false)
                      closeAllDropdowns()
                    }}
                  >
                    AI Solutions
                  </Link>
                </li>
                <li className="py-1 text-center">
                  <Link
                    href="/whatwedo#AutomationSolutions"
                    className="text-fuchsia-600 hover:text-white"
                    onClick={() => {
                      setMobileNavOpen(false)
                      closeAllDropdowns()
                    }}
                  >
                    Automation Solutions
                  </Link>
                </li>
                <li className="py-1 text-center">
                  <Link
                    href="/whatwedo#WebDesign"
                    className="text-fuchsia-600 hover:text-white"
                    onClick={() => {
                      setMobileNavOpen(false)
                      closeAllDropdowns()
                    }}
                  >
                    Web Design
                  </Link>
                </li>
                <li className="py-1 text-center">
                  <Link
                    href="/whatwedo#WebDevelopment"
                    className="text-fuchsia-600 hover:text-white"
                    onClick={() => {
                      setMobileNavOpen(false)
                      closeAllDropdowns()
                    }}
                  >
                    Web Development
                  </Link>
                </li>
                <li className="py-1 text-center">
                  <Link
                    href="/whatwedo#IndustrySpecificSolutions"
                    className="text-fuchsia-600 hover:text-white"
                    onClick={() => {
                      setMobileNavOpen(false)
                      closeAllDropdowns()
                    }}
                  >
                    Industry-Specific Solutions
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/careers"
              className="flex font-medium w-full text-fuchsia-600 hover:text-white py-2 justify-center"
              onClick={() => {
                setMobileNavOpen(false)
                closeAllDropdowns()
              }}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="flex font-medium w-full text-fuchsia-600 hover:text-white py-2 justify-center"
              onClick={() => {
                setMobileNavOpen(false)
                closeAllDropdowns()
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
