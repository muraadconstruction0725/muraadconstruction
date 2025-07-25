import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { MdAccountBalance, MdManageAccounts } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" py-16 px-6 max-lg:px-0 max-lg:bg-[#2c3e50]" id="contact">
      <div className="w-full max-w-[1200px]  mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-0.5 bg-yellow-500"></div>
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <div className="w-16 h-0.5 bg-yellow-500"></div>
          </div>

          {/* <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Create Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Amazing Together
            </span>
          </h1> */}

          <p className="text-xl max-w-3xl mx-auto leading-relaxed max-lg:text-white">
            Ready to transform your vision into reality? We're here to help
            ambitious leaders shape the future with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  p-4 rounded-lg bg-[#2c3e50]">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-4 px-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h2>

            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Mobile Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-14 max-lg:w-15 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="w-full">
                  <h3 className="text-white font-bold">Call Us</h3>
                  <div className="flex gap-1 max-lg:flex-wrap ">
                    <span className="flex items-center">
                      <a
                        href="tel:91-9617099998"
                        className="flex justify-center items-center gap-1 text-white"
                      >
                        {" "}
                        91-9617099998,
                      </a>
                    </span>
                    <span className="flex items-center text-white">
                      <a href="tel:91-9926415706">91-9926415706,</a>
                    </span>
                    <span className="flex items-center text-white">
                      <a href="tel:91-8103628472">91-8103628472</a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Email Us</h3>
                  <a href="mailto:muraad.cons2808@gmail.com" className="text-gray-300">muraad.cons2808@gmail.com</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Office Hours</h3>
                  <p className="text-gray-300">Mon - Sat: 10:30 AM - 8:00 PM</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Location</h3>
                  <p className="text-gray-300">Aman Nagar Mowa Raipur (C.G.)</p>
                </div>
              </div>
               {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <MdManageAccounts className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">GST Number</h3>
                  <p className="text-gray-300">22DOWPK2393B3ZT</p>
                </div>
              </div>
               {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <MdAccountBalance className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">PWD Registration Number</h3>
                  <p className="text-gray-300">CGeR26247</p>
                </div>
              </div>
              
            </div>

            {/* Additional Info */}
            {/* <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-3 text-2xl">
                Ready to start your project?
              </h3>
              <p className="text-gray-300 text-base mb-4">
                Contact us today for a free consultation and let's discuss your
                ideas.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors duration-300">
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
