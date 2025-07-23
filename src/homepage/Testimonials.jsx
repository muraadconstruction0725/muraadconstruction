import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data
const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechNova",
    testimonial:
      "This product transformed our workflow. It's fast, reliable, and incredibly easy to use!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mark Davis",
    role: "CTO, CloudMetrics",
    testimonial:
      "Outstanding support and clean code. Definitely one of the best decisions we've made.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager, DevHub",
    testimonial:
      "A game-changer for our team. The UI is intuitive and the performance is top-notch.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "John Smith",
    role: "Designer, PixelCraft",
    testimonial:
      "Beautiful UI and smooth interactions. This tool made my job easier and faster!",
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
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover mb-4 shadow-sm"
                    />
                    <p className="text-gray-600 italic mb-4 leading-relaxed">
                      “{item.testimonial}”
                    </p>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
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
