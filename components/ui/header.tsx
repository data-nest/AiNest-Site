'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({
    service: false,
    whatWeDo: false,
  });

  // Handle scroll effect on the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        // Close all dropdowns when clicking outside of the header
        setDropdownOpen({
          service: false,
          whatWeDo: false,
        });
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Toggle dropdown and close other dropdowns
  const toggleDropdown = (menu: string) => {
    setDropdownOpen((prevState) => {
      const updatedState = Object.keys(prevState).reduce(
        (acc, key) => ({ ...acc, [key]: key === menu ? !prevState[key] : false }),
        {}
      );
      return updatedState;
    });
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownOpen({
      service: false,
      whatWeDo: false,
    });
  };

  // Arrow icon component for dropdowns
  const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d={isOpen
          ? 'M10 8a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 8z'
          : 'M10 12a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 9.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 12z'}
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className={`fixed w-full z-30 top-0 transition duration-300 ease-in-out ${isScrolled ? 'backdrop-blur-lg bg-opacity-90' : 'bg-opacity-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src="/images/ainestLogo.png" alt="AiNEST Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="group text-center relative">
                <Link href="/#about" className="font-medium text-fuchsia-600 hover:text-gray-200 px-4 py-3 scroll-smooth flex flex-col items-center transition duration-150 ease-in-out" onClick={closeAllDropdowns}>
                  About
                </Link>
              </li>
              <li className="group text-center relative">
                <Link
                  href="/#service"
                  className="font-medium text-fuchsia-600 hover:text-gray-200 px-4 py-3 scroll-smooth flex items-center transition duration-150 ease-in-out"
                  onClick={() => toggleDropdown('service')}
                >
                  Services
                  <ArrowIcon isOpen={dropdownOpen.service} />
                </Link>
                {dropdownOpen.service && (
                  <ul className="absolute bg-gray-800 mt-2 py-2 w-48">
                    <li>
                      <Link href="/#features" className="block px-4 py-2 text-fuchsia-600 hover:text-white" onClick={closeAllDropdowns}>
                        Features
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="group text-center relative">
                <Link
                  href="/whatwedo"
                  className="font-medium text-fuchsia-600 hover:text-gray-200 px-4 py-3 scroll-smooth flex items-center transition duration-150 ease-in-out"
                  onClick={() => toggleDropdown('whatWeDo')}
                >
                  What We Do
                  <ArrowIcon isOpen={dropdownOpen.whatWeDo} />
                </Link>
                {dropdownOpen.whatWeDo && (
                  <ul className="absolute bg-gray-800 mt-2 py-2 w-48">
                    {/* Dropdown items */}
                    <li>
                      <Link href="/whatwedo#AISolutions" className="block px-4 py-2 text-fuchsia-600 hover:text-white" onClick={closeAllDropdowns}>
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/whatwedo#AutomationSolutions" className="block px-4 py-2 text-fuchsia-600 hover:text-white" onClick={closeAllDropdowns}>
                        Automation Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/whatwedo#WebDesign" className="block px-4 py-2 text-fuchsia-600 hover:text-white" onClick={closeAllDropdowns}>
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link href="/whatwedo#WebDevelopment" className="block px-4 py-2 text-fuchsia-600 hover:text-white" onClick={closeAllDropdowns}>
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/whatwedo#IndustrySpecificSolutions" className="block px-4 py-2 text-fuchsia-600 hover:text-white" onClick={closeAllDropdowns}>
                        Industry-Specific Solutions
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="group text-center relative">
                <Link href="/careers" className="font-medium text-fuchsia-600 hover:text-gray-200 px-4 py-3 scroll-smooth flex flex-col items-center transition duration-150 ease-in-out" onClick={closeAllDropdowns}>
                  Careers
                </Link>
              </li>
              <li className="group text-center relative">
                <Link href="/#contact" className="font-medium text-fuchsia-600 hover:text-gray-200 px-4 py-3 scroll-smooth flex flex-col items-center transition duration-150 ease-in-out" onClick={closeAllDropdowns}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
