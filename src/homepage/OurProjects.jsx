import React, { useRef } from 'react';
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const OurProjects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -100 : 100,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    // your full project array here...
    { id: 1, title: "Structure", location: "Spotswood, NJ", type: "500 Sq Ft", image: project1, bgColor: "from-blue-500 to-blue-700" },
    { id: 2, title: "Structure", location: "Spotswood, NJ", type: "500 Sq Ft", image: project2, bgColor: "from-gray-600 to-gray-800" },
    { id: 3, title: "Finishing", location: "Spotswood, NJ", type: "500 Sq Ft", image: project3, bgColor: "from-blue-400 to-blue-600" },
    { id: 4, title: "Renovation", location: "Spotswood, NJ", type: "500 Sq Ft", image: project4, bgColor: "from-cyan-400 to-cyan-600" },
    { id: 5, title: "Renovation", location: "Spotswood, NJ", type: "500 Sq Ft", image: project5, bgColor: "from-gray-500 to-gray-700" },
    { id: 6, title: "Elevation", location: "Spotswood, NJ", type: "500 Sq Ft", image: project6, bgColor: "from-green-500 to-green-700" },
    { id: 1, title: "Structure", location: "Spotswood, NJ", type: "500 Sq Ft", image: project1, bgColor: "from-blue-500 to-blue-700" },
    { id: 2, title: "Structure", location: "Spotswood, NJ", type: "500 Sq Ft", image: project2, bgColor: "from-gray-600 to-gray-800" },
    { id: 3, title: "Finishing", location: "Spotswood, NJ", type: "500 Sq Ft", image: project3, bgColor: "from-blue-400 to-blue-600" },
    { id: 4, title: "Renovation", location: "Spotswood, NJ", type: "500 Sq Ft", image: project4, bgColor: "from-cyan-400 to-cyan-600" },
    { id: 5, title: "Renovation", location: "Spotswood, NJ", type: "500 Sq Ft", image: project5, bgColor: "from-gray-500 to-gray-700" },
    { id: 6, title: "Elevation", location: "Spotswood, NJ", type: "500 Sq Ft", image: project6, bgColor: "from-green-500 to-green-700" },
    
  ];

  return (
    <section className="py-16 bg-black text-white" id='projects'>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className=" text-sm font-medium mb-2 tracking-wider">
            --- OUR PROJECTS
          </p>
          <h2 className="text-4xl text-yellow-500 md:text-5xl font-bold">
            We Provide Effective<br />
            Solution In Construction
          </h2>
        </div>

        {/* Slider Section */}
        <div className="relative">
          {/* Left/Right Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-md"
          >
           <FaArrowLeft/>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-md"
          >
      <FaArrowRight/>
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex justify-start items-center gap-6 overflow-hidden max-lg:overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {projects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className={`
                  relative flex-shrink-0 w-40 hover:w-80 h-96 rounded-lg overflow-hidden
                  group cursor-pointer snap-start
                  transform transition-all duration-500 ease-out
                  hover:scale-105 hover:-translate-y-2
                  ${index === 0 ? 'shadow-2xl shadow-orange-500/20' : ''}
                `}
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="w-full h-full bg-black/30 absolute"></div>

                {/* Content */}
                <div className="relative flex justify-center items-end z-10 p-6 h-full">
                  <div className="group-hover:block hidden">
                    {project.location && (
                      <div className="flex items-center text-sm text-white/80 mb-2">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {project.location}
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-6">{project.type}</p>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center">
                        Explore Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Vertical Text */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
                  <span className="text-3xl group-hover:hidden text-white font-light tracking-widest whitespace-nowrap">
                    {project.title.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
