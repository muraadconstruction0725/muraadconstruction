import React from "react";
import { ArrowRight, Shield, Globe, Briefcase, Leaf } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      icon: <Shield className="w-8 h-8" />,
      title: "Healthy & Safety",
      description:
        "We prioritize the well-being of our team and clients by adhering to the highest safety standards on every job site.",
    },
    {
      id: "02",
      icon: <Globe className="w-8 h-8" />,
      title: "Experience & Quality",
      description:
        "With over nine years of construction experience, our craftsmanship is second to none. ",
    },
    {
      id: "03",
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Ethics",
      description:
        "Integrity, transparency, and accountability are at the core of everything we do.",
    },
    {
      id: "04",
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental",
      description:
        "We’re committed to sustainable building practices that reduce waste, conserve energy, and protect our environment. ",
    },
  ];

  return (
    <div className="w-full bg-[#2c3e50] text-white py-16 px-6">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden h-96 lg:h-[600px] bg-gradient-to-br from-gray-700 to-gray-800">
              {/* Top Image - Construction Workers */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dp3gufm2a/image/upload/v1753360464/project5_fjfopj.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

             
            </div>
          </div>

          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-4 max-lg:text-center">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Why You Choose
                <br />
                <span className="text-yellow-500">Muraad Construction</span>
              </h1>

              <p className=" text-lg leading-relaxed">
                We improve the supply chain management process. Our commitment
                to sustainable construction helps improve the communities in
                which we build.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex items-start space-x-4 group"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-yellow-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className=" text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
