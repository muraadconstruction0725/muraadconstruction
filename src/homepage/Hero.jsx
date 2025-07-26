import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaHammer,
  FaTimes,
  FaPause,
} from "react-icons/fa";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMainVideoPlaying, setIsMainVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // Sample hero images (using placeholder images)
  const heroSlides = [
    {
      image:
        "https://res.cloudinary.com/dp3gufm2a/image/upload/v1753360465/hero1_rnkju8.jpg",
      title: "Building Tomorrow, Today",
      subtitle: "Premium Construction Services",
      description:
        "Transform your vision into reality with our expert construction and building solutions. Over 20+ years of excellence in construction industry.",
    },
    {
      image:
        "https://res.cloudinary.com/dp3gufm2a/image/upload/v1753508621/2151589592_bnvzvi.jpg",
      title: "Excellence in Every Project",
      subtitle: "Quality Construction & Renovation",
      description:
        "From residential homes to commercial complexes, we deliver outstanding construction services with unmatched quality and precision.",
    },
    {
      image:
        "https://res.cloudinary.com/dp3gufm2a/image/upload/v1753508955/2151317232_zzqgrl.jpg",
      title: "Your Vision, Our Expertise",
      subtitle: "Trusted Construction Partner",
      description:
        "Professional construction services backed by certified engineers and skilled craftsmen. Building dreams with dedication and expertise.",
    },
  ];

  // Sample construction videos (using sample video URLs)
  const videos = [
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360540/structurevideo1_e6cdkv.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "3:45",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360544/structurevideo10_he5lmr.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "5:20",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360546/structurevideo11_iobyv9.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "2:30",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360552/structurevideo2_upzet6.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "4:15",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360542/structurevideo3_md58dz.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "3:10",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360544/structurevideo4_qd5ovx.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "6:00",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360548/structurevideo5_i5yqky.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "6:00",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360549/structurevideo6_n8drr1.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "6:00",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360553/structurevideo7_zvaxh5.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "6:00",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360547/structurevideo8_kad4fo.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "6:00",
    },
    {
      url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360550/structurevideo9_dmz1bi.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Structure Work",
      duration: "6:00",
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

  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
  };

  const handleVideoSelect = (index) => {
    setCurrentVideoIndex(index);
    setIsMainVideoPlaying(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPlaying(false);
    setIsMainVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMainVideo = () => {
    if (videoRef.current) {
      if (isMainVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsMainVideoPlaying(!isMainVideoPlaying);
    }
  };

  const handleScrollClick = (path) => {
const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <section
        className="relative flex items-center overflow-hidden pt-[5rem] max-lg:pt-[4rem]"
        id="hero"
      >
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
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
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 py-20">
          <div className="gap-12 items-center flex justify-center flex-col">
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
                  <span className="block">Building with Integrity, <br /> Delivering with Precision</span>
                  
                </h1>

                <p className="text-xl max-lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
                  {heroSlides[1].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => handleScrollClick("contact")} className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Build With Us
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
          <div className="flex justify-center mt-12 space-x-2">
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

      {/* Video Popup */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] ">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-white text-xl font-semibold">
                Our Construction Work
              </h3>
              <button
                onClick={closeVideoPopup}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex flex-col ">
              {/* Main Video Player */}
              <div className="flex items-center justify-center relative overflow-hidden p-4">
                <video
                  ref={videoRef}
                  key={currentVideoIndex}
                  className="w-[40vw] h-auto max-h-[50vh] rounded-lg"
                  controls
                  autoPlay
                  onEnded={handleVideoEnd}
                  onPlay={() => setIsMainVideoPlaying(true)}
                  onPause={() => setIsMainVideoPlaying(false)}
                >
                  <source
                    src={videos[currentVideoIndex].url}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Playlist */}
              <div className="  p-2 lg:max-h-none">
                <div className="">
                  <h4 className="text-white font-semibold mb-4">
                    More Videos ({videos.length})
                  </h4>
                  <div className="space-y-3 flex gap-2 w-full  overflow-scroll scrollbar-hide scrollbar-none">
                    {videos.map((video, index) => (
                      <div
                        key={index}
                        onClick={() => handleVideoSelect(index)}
                        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          index === currentVideoIndex
                            ? "bg-orange-500/20 border border-orange-500/30"
                            : "hover:bg-gray-700"
                        }`}
                      >
                        <div className="relative flex-shrink-0">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            {index === currentVideoIndex &&
                            isMainVideoPlaying ? (
                              <FaPause className="text-white text-sm" />
                            ) : (
                              <FaPlay className="text-white text-sm" />
                            )}
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-white text-sm font-medium truncate">
                            {video.title}
                          </h5>
                          <p className="text-gray-400 text-xs">
                            {video.duration}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
