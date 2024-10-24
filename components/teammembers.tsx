'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JeevaImg from '@/public/images/teammemPics/Jeeva.jpg';
import RaagulImg from '@/public/images/teammemPics/Raagul.jpg';
import NitheshImg from '@/public/images/teammemPics/Nithesh.jpg';
import NishanthImg from '@/public/images/teammemPics/Nishanth.jpg';
import MitheleshImg from '@/public/images/teammemPics/Mithelesh.jpg';
import HariImg from '@/public/images/teammemPics/Hari.jpg';
import VipinImg from '@/public/images/teammemPics/Vipin.jpg';

const testimonials = [
  {
    image: JeevaImg,
    text: "As an AI Engineer and full-stack developer, I thrive on solving complex challenges and creating innovative solutions. My role allows me to integrate cutting-edge AI technologies with seamless full-stack development, ensuring our projects are both intelligent and efficient. I love turning ambitious ideas into functional, high-performing systems.",
    name: "Jeeva",
    title: "AI Engineer, Full-stack Developer",
    linkedin: "https://www.linkedin.com/in/jeeva" // Add LinkedIn URL
  },
  {
    image: RaagulImg,
    text: "My passion lies in AI and backend development. I focus on crafting robust backend systems that power our applications with high performance and scalability. By leveraging advanced algorithms and data structures, I contribute to making our solutions smarter and more efficient, enhancing the overall user experience.",
    name: "Raagul",
    title: "AI Engineer, Backend Developer",
    linkedin: "https://www.linkedin.com/in/raagul" // Add LinkedIn URL
  },
  {
    image: NitheshImg,
    text: "I’m passionate about blending RPA and front-end development to create smooth, automated processes and user-centric designs. My work involves building intuitive interfaces while automating repetitive tasks, making our workflows more efficient and our applications more engaging for users.",
    name: "Nithesh",
    title: "RPA Developer, Front-end Developer",
    linkedin: "https://www.linkedin.com/in/nithesh" // Add LinkedIn URL
  },
  {
    image: NishanthImg,
    text: "In my role as an RPA Developer, I focus on automating complex processes to streamline our workflows. My goal is to save time and resources by creating reliable automation solutions that improve efficiency and productivity. I’m dedicated to finding innovative ways to enhance our automation capabilities.",
    name: "Nishanth Subramanian",
    title: "RPA Developer",
    linkedin: "https://www.linkedin.com/in/nishanth" // Add LinkedIn URL
  },
  {
    image: MitheleshImg,
    text: "As a Creditor, I ensure that our financial management is precise and transparent. My role involves overseeing financial transactions and maintaining strong relationships with creditors, ensuring our company's financial health is in top shape. My focus is on accuracy and accountability in all financial matters.",
    name: "Mithelesh",
    title: "Creditor",
    linkedin: "https://www.linkedin.com/in/mithelesh" // Add LinkedIn URL
  },
  {
    image: HariImg,
    text: "Being a Full-stack Developer, I enjoy tackling projects from both front-end and back-end perspectives. I strive to create applications that are both functional and dynamic by seamlessly integrating various technologies. My goal is to deliver high-quality solutions that meet our users' needs and exceed their expectations.",
    name: "Hari",
    title: "Full-stack Developer",
    linkedin: "https://www.linkedin.com/in/hari" // Add LinkedIn URL
  },
  {
    image: VipinImg,  // Replace with the actual image variable or path for Vipin
    text: "As a Full-stack Developer, I am passionate about building robust and scalable applications that deliver excellent user experiences. My expertise spans both front-end and back-end development, allowing me to bridge the gap between design and functionality. I am committed to writing clean, efficient code that brings our projects to life and meets the evolving needs of our users.",
    name: "Vipin",
    title: "Full-stack Developer",
    linkedin: "https://www.linkedin.com/in/vipin" // Add LinkedIn URL
  }
];

export default function Members() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 6000);

    return () => resetTimeout();
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex === testimonials.length) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50); // Small delay to re-enable the transition
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement; // Assert the type of target
    target.dataset.touchStartX = e.touches[0].clientX.toString(); // Use dataset to store touchStartX
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement; // Assert the type of target
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = parseFloat(target.dataset.touchStartX || '0'); // Retrieve touchStartX from dataset

    if (touchStartX - touchEndX > 50) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    if (touchStartX - touchEndX < -50) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Hear from Our Team</h2>
            <p className="text-xl text-gray-400">Discover the voices behind our innovative solutions. Our team shares their experiences and insights, showcasing their unique contributions to our projects and the impact they make.</p>
          </div>

          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex ${transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full p-6 bg-gray-800 text-center">
                  <div className="relative inline-flex flex-col mb-4 items-center">
                    <Image
                      className="rounded-full"
                      src={testimonial.image}
                      alt={`Testimonial ${index + 1}`}
                      width={170}
                      height={170}
                    />
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">{testimonial.text}</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">{testimonial.name}</cite> - <span className="text-cyan-600">{testimonial.title}</span>
                    <div className="flex justify-center items-center mt-2">
                      <Link href={testimonial.linkedin} className="text-fuchsia-500 bg-gray-800 hover:text-gray-100 hover:bg-fuchsia-500 rounded-full transition duration-150 ease-in-out" aria-label="LinkedIn">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-cyan-300' : 'bg-gray-600'}`}
                  aria-label={`Testimonial ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
