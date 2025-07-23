import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaHammer,
} from "react-icons/fa";
import hero1 from '../assets/hero/hero1.jpg'
import hero2 from '../assets/hero/hero2.jpg'
import hero3 from '../assets/hero/hero3.jpg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      image: hero1,
      title: "Building Tomorrow, Today",
      subtitle: "Premium Construction Services",
      description:
        "Transform your vision into reality with our expert construction and building solutions. Over 20+ years of excellence in construction industry.",
    },
    {
      image:hero2,
      title: "Excellence in Every Project",
      subtitle: "Quality Construction & Renovation",
      description:
        "From residential homes to commercial complexes, we deliver outstanding construction services with unmatched quality and precision.",
    },
    {
      image: hero3,
      title: "Your Vision, Our Expertise",
      subtitle: "Trusted Construction Partner",
      description:
        "Professional construction services backed by certified engineers and skilled craftsmen. Building dreams with dedication and expertise.",
    },
  ];

  const stats = [
    { icon: FaHammer, number: "500+", label: "Projects Completed" },
    { icon: FaUsers, number: "50+", label: "Expert Team" },
    { icon: FaAward, number: "20+", label: "Years Experience" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden pt-[5rem] max-lg:pt-[4rem]" id="hero">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 ">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r max-lg:bg-black/60 lg:from-gray-900 lg:via-gray-900/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 py-20 ">
        <div className=" gap-12 items-center flex justify-center flex-col">
          {/* Left Content */}
          <div className="text-white space-y-8 w-full max-w-[1180px]">
            {/* Badge */}
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2">
              <FaAward className="text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium">
                Over 9+ Years Leader In
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Construction</span>
                <span className="block">
                  Building{" "}
                  <span className="text-yellow-500 relative">
                    Service
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500 rounded"></div>
                  </span>
                </span>
              </h1>

              <p className="text-xl max-lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
                {heroSlides[1].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Free Quote
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsVideoPlaying(true)}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-2 ">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-orange-500 w-8" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

    

     
    </section>
  );
};

export default Hero;
