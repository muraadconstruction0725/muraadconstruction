import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from "react-icons/fa";

// Sample data
const testimonials = [
  {
    name: "Sheikhazhar Sultan",
    role: "CEO, TechNova",
    testimonial:
      "Time me complete karne aur acha kam karne ka shukrja",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Madhu Netam",
    role: "CTO, CloudMetrics",
    testimonial:
      "Fast complition and good quality aswell",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Azlaan Ali",
    role: "Product Manager, DevHub",
    testimonial:
      "Quality work thanks for the dream house",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dinesh Kumar Sinha",
    role: "Designer, PixelCraft",
    testimonial:
      "amazing Quality work",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-black"
  >
    <ChevronLeft size={28} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-black"
  >
    <ChevronRight size={28} />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="relative px-4">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <FaUserCircle size={50} className="text-gray-500"/>
                    <p className="text-gray-600 italic mb-4 leading-relaxed">
                      “{item.testimonial}”
                    </p>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h4>
                    {/* <p className="text-sm text-gray-500">{item.role}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
