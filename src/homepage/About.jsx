import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import about1 from "../assets/about/about1.jpg";

const About = () => {
  return (
    <div className=" bg-gray-50 p-6" id="about">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex gap-10 items-center max-lg:flex-col">
          {/* Right Visual Section */}
          <div className="w-full ">
            <img className="rounded-xl " src={about1} alt="" />
          </div>

          {/* Left Content Section */}
          <div className="space-y-6  ">
            {/* Main Heading */}
            <h1 className="text-5xl max-xl:text-3xl max-lg:text-center  font-bold text-gray-800 leading-tight">
              Leading Global
              <br />
              <span className="text-yellow-500">Builder And Developer</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              After more than twenty years of success in the wood products
              industry, the Bilder family founded its capital venture in 2005
              investing in real estate in the western United States.
            </p>

            {/* Services List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Innovation Eco power Technologies
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Regularly Maintaining and organizing your Tools
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Regularly organizing and Maintaining your Tools
                </span>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 relative">
              {/* CEO Info */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SK</span>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-orange-500 text-lg">
                    Shahbaz Khan
                  </p>
                  <p className="text-gray-500 text-sm">CEO & Founder</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                We have multiple models of engagement:
                <br />
                We can work directly with individuals for private residences,
                partner.
              </p>
            </div>

            {/* Contact Section */}
            <div className="flex items-center space-x-6">
            

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Contact Us</p>
                  <p className="font-bold text-gray-800 text-lg">
                    +91-9617099998
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
