'use client';
import { useState } from 'react';
import Image from 'next/image';
import rpa from '@/public/images/careers/rpa-c.jpg';
import python from '@/public/images/careers/Python.jpg'
import js from '@/public/images/careers/js.png'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


// JSON data for the cards
const cardData = [
  {
    programDomain: "Python",
    aboutProgram: "Master the power of Python, the language driving innovation across industries.",
    description: "Dive deep into Python, from core concepts to advanced applications. This program equips you with the skills to build real-world projects, automate processes, and unlock endless possibilities in AI, web development, and data science.",
    imgsrc: python,
    addonPoints: {
      point1: "Hands-on learning with industry-relevant projects.",
      point2: "Master automation and data handling in Python.",
      point3: "Create real-world applications with expert guidance.",
      point4: "Unlock opportunities in AI, web development, and more.",
      point5: "Receive personalized feedback to sharpen your skills."
    },
    downloadLink:'/brochure/Python T-C-I-Program.pdf'
  },
  {
    programDomain: "JavaScript",
    aboutProgram: "Become a JavaScript pro and power the web with dynamic, interactive experiences.",
    description: "Learn JavaScript, the backbone of web development. From building dynamic websites to creating interactive applications, this program will transform you into a proficient JavaScript developer, ready to craft amazing digital experiences.",
    imgsrc: js,
    addonPoints: {
      point1: "Learn to build dynamic, user-friendly websites.",
      point2: "Gain skills in both frontend and backend JavaScript.",
      point3: "Work on interactive applications with real-world use cases.",
      point4: "Unlock full-stack development potential.",
      point5: "Receive mentorship from experienced web developers."
    },
    downloadLink: "/brochure/JS T-C-I-Program.pdf"
  },
  {
    programDomain: "RPA (UiPath)",
    aboutProgram: "Automate the future with UiPath, and become a leader in Robotic Process Automation.",
    description: "This program is designed to teach you how to automate repetitive tasks and enhance business efficiency using UiPath. Learn to develop automation workflows that bring businesses to the next level by freeing up valuable resources and reducing errors.",
    imgsrc: rpa,
    addonPoints: {
      point1: "Create automation solutions that save time and resources.",
      point2: "Master workflow automation with UiPath tools.",
      point3: "Build projects that have real-world business impact.",
      point4: "Become proficient in one of the fastest-growing industries.",
      point5: "Gain industry-recognized certification upon completion."
    },
    downloadLink: "/brochure/RPA T-C-I-Program.pdf"
  }
];

export default function CardsSection() {
const router = useRouter()

    const [activeCard, setActiveCard] = useState(0);

    // Function to handle card switching
    const switchCard = (index: number) => {
      setActiveCard(index);
    };

    // Pagination handling
    const handlePagination = (direction: 'prev' | 'next') => {
      if (direction === 'next') {
        setActiveCard((prevIndex) => (prevIndex + 1) % cardData.length);
      } else {
        setActiveCard((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
      }
    };

    const downloadFile = async (fileUrl: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop() || 'brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
    const handleRedirection = () =>{
        router.push("/T-C-I-RegistrationForm")

    }
    
    return (
      <section className="cards-section py-20 max-w-7xl mx-auto mt-3 px-4 sm:px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 bg-clip-text text-transparent text-center">
            Explore Our Comprehensive Training-Cum-Internship Program
          </h2>
          <p className="mt-4 text-justify text-gray-400">
            Unlock your potential with AiNEST’s expertly designed 6-week, 35-hour Training-Cum-Internship Program in Python, JavaScript, and RPA (UiPath). Whether you're aspiring to master AI-driven Python applications, create interactive JavaScript websites, or lead the way in Robotic Process Automation, our hands-on approach, real-world projects, and expert mentorship will prepare you to excel in today’s fast-evolving tech landscape.
          </p>

          {/* Cards Container */}
          <div className="mt-24 relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeCard * 100}%)` }}
            >
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col md:flex-row"
                  style={{ flex: '0 0 100%' }}
                >
                  {/* Image Section with Buttons underneath */}
                  <div className="relative w-full md:w-1/3 mt-3 h-[50vh] flex flex-col">
                    <div className="relative w-full h-[75%] sm:w-[90%]">
                      <Image
                        src={card.imgsrc}
                        alt={card.programDomain}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        priority={true}
                      />
                    </div>
                    <div className="flex m-auto ">
                <button
            className="btn px-4 py-2 rounded-full text-xs font-semibold bg-fuchsia-700 text-white hover:bg-fuchsia-800 transition duration-300"
            onClick={async () => {
              if (card.downloadLink) {
                await downloadFile(card.downloadLink); // Download the file
                toast('Brochure downloaded successfully');
              } else {
                toast('Download link is not available.');
              }
            }}
          >
            Download Brochure
          </button>

                      <button className="btn mx-1 px-4 py-2 rounded-full text-xs font-semibold bg-fuchsia-700 text-white hover:bg-fuchsia-800 transition duration-300"
                      onClick={handleRedirection}
                      >
                        Register
                      </button>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col w-full md:w-2/3 pt-0 md:pl-4 flex-grow">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center md:text-left">
                      {card.programDomain}
                    </h3>
                    
                    {/* Description */}
                    <p className="mt-2 text-sm md:text-base text-gray-400 text-justify md:text-left">
                      {card.description}
                    </p>

                    {/* Addon Points */}
                    <ul className="mt-4 md:mt-6 list-disc list-inside text-gray-400 space-y-2">
                      {Object.values(card.addonPoints).map((point, idx) => (
                        <li key={idx} className="text-xs md:text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons for larger screens */}
          <div className="hidden md:flex justify-center mt-10 text-center">
            {cardData.map((card, index) => (
              <button
                key={index}
                onClick={() => switchCard(index)}
                className={`btn mx-2 px-6 py-3 rounded-full font-semibold
                  ${activeCard === index ? 'bg-fuchsia-700  ' : 'bg-slate-300 text-fuchsia-700'}
                  hover: bg-fuchsia-700 focus:bg-fuchsia-800 transition duration-300`}
              >
                {card.programDomain}
              </button>
            ))}
          </div>

          {/* Pagination for mobile screens */}
          <div className="md:hidden mt-10 flex justify-center">
            <button
              onClick={() => handlePagination('prev')}
              className="btn px-4 py-2 rounded-full font-semibold bg-fuchsia-700 text-white hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={() => handlePagination('next')}
              className="btn px-4 py-2 rounded-full font-semibold bg-fuchsia-700 text-white hover:bg-fuchsia-800  focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-300 ml-4"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    );
  }
