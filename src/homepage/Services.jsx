import React from "react";

// Using placeholder images since we can't access your assets
const service1 =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop";
const service2 =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop";
const service3 =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop";
const service4 =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop";

const services = [
  {
    id: "01",
    title: "Structure Work",
    description:
      "We provide complete structural framework construction including strong foundations, durable columns, reinforced beams, and quality concrete slabs for safe building structures.",
    price: "Starting from ₹775/sqft",
    image: service1,
    viewimages: "structure-work"
  },
  {
    id: "02",
    title: "Finishing Works",
    description:
      "Complete building construction from foundation to final touches including interior exterior finishing, plastering, painting, flooring, electrical plumbing and all modern amenities.",
    price: "Starting from ₹1,275/sqft",
    image: service2,
    viewimages: "finishing-works"
  },
{
    id: "03",
    title: "Renovation Work",
    description: `We offer expert renovation services for both residential and commercial properties.
      Our services include interior redesign, and modernization
      of old spaces using high-quality materials`,
    price: "Starting from ₹5 lakh",
    image: service3,
    viewimages: "renovation-work"
  },
  {
    id: "04",
    title: "Elevation Work",
    description:
      "Professional building elevation design and construction services to enhance your property aesthetics with modern architectural designs, quality materials and expert craftsmanship.",
    price: "Starting from ₹500/sqft",
    image: service4,
    viewimages: "elevation-work"
  },
  {
    id: "05",
    title: "Interior Designing Work",
    description:
      "Creative and customized interior designing services to transform your spaces with modern aesthetics, functional layouts, premium materials, and expert craftsmanship.",
    price: "Starting from ₹500/sqft",
    image: service4,
    viewimages: "interior-designing-work"
  },
  
];

export default function ServiceCards() {

  
    const handleNavClick = (path) => {
      console.log(`Navigate to: ${path}`);
      const section = document.getElementById(path); // ✅ Corrected
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div className="flex flex-col justify-center items-center" id="services">
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center py-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-bold text-gray-800 mb-4">Our Services</h1>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Explore Our Services
          </h2>
        </div>

        <div className="flex flex-wrap max-lg:w-[90%] gap-6 p-0 items-start justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden w-[24rem] shadow-md relative hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />

                {/* Number Tag */}
                <div className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-tl-lg font-bold px-3 py-1 text-lg">
                  {service.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>

                {/* Price */}
                <div className="text-orange-500 font-bold text-lg mb-4">
                  {service.price}
                </div>

                <button onClick={() => handleNavClick(service.viewimages)} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded shadow transition-colors">
                  VIEW SERVICE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
