'use client';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-150 ease-in-out"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </>
  );
}
