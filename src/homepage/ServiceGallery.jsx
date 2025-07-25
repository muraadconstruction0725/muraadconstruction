import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image imports
import elevation1 from "../assets/servicesgallery/elevation/elevation1.jpg";
import elevation2 from "../assets/servicesgallery/elevation/elevation2.jpg";
import elevation3 from "../assets/servicesgallery/elevation/elevation3.jpg";
import elevation4 from "../assets/servicesgallery/elevation/elevation4.jpg";
import elevation5 from "../assets/servicesgallery/elevation/elevation5.jpg";
import elevation6 from "../assets/servicesgallery/elevation/elevation6.jpg";

import finishing1 from "../assets/servicesgallery/finishing/finishing1.jpg";
import finishing2 from "../assets/servicesgallery/finishing/finishing2.jpg";
import finishing3 from "../assets/servicesgallery/finishing/finishing3.jpg";
import finishing4 from "../assets/servicesgallery/finishing/finishing4.jpg";
import finishing5 from "../assets/servicesgallery/finishing/finishing5.jpg";
import finishing6 from "../assets/servicesgallery/finishing/finishing6.jpg";
import finishing7 from "../assets/servicesgallery/finishing/finishing7.jpg";
import finishing8 from "../assets/servicesgallery/finishing/finishing8.jpg";
import finishing9 from "../assets/servicesgallery/finishing/finishing9.jpg";
import finishing10 from "../assets/servicesgallery/finishing/finishing10.jpg";
import finishing11 from "../assets/servicesgallery/finishing/finishing11.jpg";
import finishing12 from "../assets/servicesgallery/finishing/finishing12.jpg";
import finishing13 from "../assets/servicesgallery/finishing/finishing13.jpg";
import finishing14 from "../assets/servicesgallery/finishing/finishing14.jpg";
import finishing15 from "../assets/servicesgallery/finishing/finishing15.jpg";
import finishing16 from "../assets/servicesgallery/finishing/finishing16.jpg";
import finishing17 from "../assets/servicesgallery/finishing/finishing17.jpg";
import finishing18 from "../assets/servicesgallery/finishing/finishing18.jpg";
import finishing19 from "../assets/servicesgallery/finishing/finishing19.jpg";
import finishing20 from "../assets/servicesgallery/finishing/finishing20.jpg";

import Interior1 from "../assets/servicesgallery/Interior/Interior1.jpg";
import Interior2 from "../assets/servicesgallery/Interior/Interior2.jpg";
import Interior3 from "../assets/servicesgallery/Interior/Interior3.jpg";
import Interior4 from "../assets/servicesgallery/Interior/Interior4.jpg";
import Interior5 from "../assets/servicesgallery/Interior/Interior5.jpg";
import Interior6 from "../assets/servicesgallery/Interior/Interior6.jpg";
import Interior7 from "../assets/servicesgallery/Interior/Interior7.jpg";
import Interior8 from "../assets/servicesgallery/Interior/Interior8.jpg";
import Interior9 from "../assets/servicesgallery/Interior/Interior9.jpg";
import Interior10 from "../assets/servicesgallery/Interior/Interior10.jpg";
import Interior11 from "../assets/servicesgallery/Interior/Interior11.jpg";
import Interior12 from "../assets/servicesgallery/Interior/Interior12.jpg";
import Interior13 from "../assets/servicesgallery/Interior/Interior13.jpg";
import Interior14 from "../assets/servicesgallery/Interior/Interior14.jpg";
import Interior15 from "../assets/servicesgallery/Interior/Interior15.jpg";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 z-10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Previous Slide"
  >
    <ChevronLeft className="w-6 h-6 text-gray-800" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 z-10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Next Slide"
  >
    <ChevronRight className="w-6 h-6 text-gray-800" />
  </button>
);

// Helper function to check if URL is a video
const isVideoUrl = (url) => {
  return (
    url.includes(".mp4") ||
    url.includes(".webm") ||
    url.includes(".mov") ||
    url.includes("video/upload")
  );
};

// Media component to handle both images and videos
const MediaItem = ({ item }) => {
  const isVideo = isVideoUrl(item.url);

  return (
    <div className="relative rounded-xl shadow-lg bg-gray-200 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
      {isVideo ? (
        <video
          src={item.url}
          className="w-full h-96 max-lg:h-72 object-cover"
          controls
          muted
          loop
          playsInline
          poster={item.poster || undefined}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={item.url}
          alt={item.alt}
          className="w-full h-96 max-lg:h-72 object-cover"
          loading="lazy"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-white text-xl font-semibold tracking-tight">
          {item.alt}
        </h3>
        {isVideo && <span className="text-white/80 text-sm">📹 Video</span>}
      </div>
    </div>
  );
};

const ServiceGallery = () => {
  const sliderRef = useRef({});

  const servicesData = {
    "Structure Work": {
      description:
        "We specialize in foundational and structural frameworks, including concrete, steel, and site development work.",
      items: [
        {
          id: 1,
          url: "https://res.cloudinary.com/dp3gufm2a/video/upload/v1753360540/structurevideo1_e6cdkv.mp4",
          alt: "Foundation Work Video",
          type: "video",
        },
        {
          id: 2,
          url: "https://res.cloudinary.com/dp3gufm2a/image/upload/v1753360518/structure1_kt8wbb.jpg",
          alt: "Foundation Work",
          type: "image",
        },
        {
          id: 3,
          url: "https://res.cloudinary.com/dp3gufm2a/image/upload/v1753360529/structure2_bn7gvn.jpg",
          alt: "Concrete Structure",
          type: "image",
        },
        {
          id: 4,
          url: "https://res.cloudinary.com/dp3gufm2a/image/upload/v1753360529/structure3_wn6qr7.jpg",
          alt: "Steel Framework",
          type: "image",
        },
      ],
    },
    "Finishing Works": {
      description:
        "High-quality interior and exterior finishes including painting, tiling, flooring, ceilings, and more.",
      items: [
        { id: 1, url: finishing1, alt: "Interior Finishing", type: "image" },
        { id: 2, url: finishing2, alt: "Wall Finishing", type: "image" },
        { id: 3, url: finishing3, alt: "Floor Finishing", type: "image" },
        { id: 4, url: finishing4, alt: "Paint Work", type: "image" },
        { id: 5, url: finishing5, alt: "Tiling Work", type: "image" },
        { id: 6, url: finishing6, alt: "Ceiling Work", type: "image" },
        { id: 7, url: finishing7, alt: "Interior Finishing", type: "image" },
        { id: 8, url: finishing8, alt: "Wall Finishing", type: "image" },
        { id: 9, url: finishing9, alt: "Floor Finishing", type: "image" },
        { id: 10, url: finishing10, alt: "Paint Work", type: "image" },
        { id: 11, url: finishing11, alt: "Tiling Work", type: "image" },
        { id: 12, url: finishing12, alt: "Ceiling Work", type: "image" },
        { id: 13, url: finishing13, alt: "Interior Finishing", type: "image" },
        { id: 14, url: finishing14, alt: "Wall Finishing", type: "image" },
        { id: 15, url: finishing15, alt: "Floor Finishing", type: "image" },
        { id: 16, url: finishing16, alt: "Paint Work", type: "image" },
        { id: 17, url: finishing17, alt: "Tiling Work", type: "image" },
        { id: 18, url: finishing18, alt: "Ceiling Work", type: "image" },
        { id: 19, url: finishing19, alt: "Tiling Work", type: "image" },
        { id: 20, url: finishing20, alt: "Ceiling Work", type: "image" },
      ],
    },
    "Elevation Work": {
      description:
        "Modern and elegant elevation designs to enhance the external appearance of buildings and homes.",
      items: [
        { id: 1, url: elevation1, alt: "Building Elevation", type: "image" },
        { id: 2, url: elevation2, alt: "Modern Elevation", type: "image" },
        { id: 3, url: elevation3, alt: "Facade Design", type: "image" },
        { id: 4, url: elevation4, alt: "Facade Design", type: "image" },
        { id: 5, url: elevation5, alt: "Front Elevation", type: "image" },
        { id: 6, url: elevation6, alt: "Exterior Design", type: "image" },
      ],
    },
    "Interior Designing Work": {
      description:
        "Creative and functional interior design services for living spaces, offices, kitchens, and more.",
      items: [
        { id: 1, url: Interior1, alt: "Living Room Design", type: "image" },
        { id: 2, url: Interior2, alt: "Bedroom Design", type: "image" },
        { id: 3, url: Interior3, alt: "Kitchen Design", type: "image" },
        { id: 4, url: Interior4, alt: "Bathroom Design", type: "image" },
        { id: 5, url: Interior5, alt: "Office Interior", type: "image" },
        { id: 6, url: Interior6, alt: "Modern Interior", type: "image" },
        { id: 7, url: Interior7, alt: "Living Room Design", type: "image" },
        { id: 8, url: Interior8, alt: "Bedroom Design", type: "image" },
        { id: 9, url: Interior9, alt: "Kitchen Design", type: "image" },
        { id: 10, url: Interior10, alt: "Bathroom Design", type: "image" },
        { id: 11, url: Interior11, alt: "Office Interior", type: "image" },
        { id: 12, url: Interior12, alt: "Modern Interior", type: "image" },
        { id: 13, url: Interior13, alt: "Living Room Design", type: "image" },
        { id: 14, url: Interior14, alt: "Bedroom Design", type: "image" },
        { id: 15, url: Interior15, alt: "Kitchen Design", type: "image" },
      ],
    },
    "Renovation Work": {
      description: "Transform outdated spaces into modern, functional environments with our expert renovation service",
      items: [
        { id: 1, url: Interior1, alt: "Living Room Design", type: "image" },
        { id: 2, url: Interior2, alt: "Bedroom Design", type: "image" },
        { id: 3, url: Interior3, alt: "Kitchen Design", type: "image" },
        { id: 4, url: Interior4, alt: "Bathroom Design", type: "image" },
        { id: 5, url: Interior5, alt: "Office Interior", type: "image" },
        { id: 6, url: Interior6, alt: "Modern Interior", type: "image" },
        { id: 7, url: Interior7, alt: "Living Room Design", type: "image" },
      ],
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-100 ">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Our Project Showcase
        </h1>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Explore our professional construction and design services, crafted
          with precision and excellence.
        </p>
      </div>

      <div className="space-y-16">
        {Object.entries(servicesData).map(([serviceName, data]) => (
          <div
            key={serviceName}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            id={serviceName.replace(/\s+/g, "-").toLowerCase()}
          >
            <div className="px-8 max-lg:px-4 py-5">
              <h2 className="text-4xl font-bold tracking-wide mb-2">
                {serviceName}
              </h2>
              <p className="text-lg w-xl max-lg:w-full relative">{data.description}</p>
            </div>

            <div className="p-8 max-xl:p-4 max-lg:py-8 relative group">
              <Slider
                {...settings}
                ref={(slider) =>
                  (sliderRef.current = {
                    ...sliderRef.current,
                    [serviceName]: slider,
                  })
                }
              >
                {data.items.map((item) => (
                  <div key={item.id} className="px-3">
                    <MediaItem item={item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;
