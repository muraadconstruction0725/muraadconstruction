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
            <img className="rounded-xl " src={"https://res.cloudinary.com/dp3gufm2a/image/upload/v1753519315/front-view-man-holding-construction-plan_zozphg.jpg"} alt="" />
          </div>

          {/* Left Content Section */}
          <div className="space-y-6  w-full">
            {/* Main Heading */}
            <h1 className="text-5xl max-xl:text-3xl max-lg:text-center  font-bold text-gray-800 leading-tight">
              We Don’t Just Build <br />
              We Define Standards
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              At Muraad Construction, we bring over 9 years of hands-on
              experience in the construction industry. From residential homes to
              large-scale commercial developments, we’ve built a reputation for
              delivering high-quality craftsmanship, on-time delivery, and
              unmatched customer service.
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
                 Committed to Quality Craftsmanship and Safety
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                 Serving Residential and Commercial Clients
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
                 Whether you're an individual building a private residence or a
                business seeking a reliable partner—we're here to build with
                you.
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
