import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaArrowRight,
  FaHammer,
  FaAward,
  FaCertificate
} from 'react-icons/fa';

const Footer = () => {
  const services = [
    'Structure Work',
    'Finishing Works',
    'Renovation Work',
    'Elevation Work',
    'Interior Designing Work'
  ];

  const quickLinks = [
    'About Us',
    'Our Projects',
    'Services',
    'Testimonials',
    'Contact'
  ];

  const sectionLinks = [
    'about',
    'projects',
    'services',
    'testimonials',
    'contact'
  ];

  const handleNavClick = (path) => {
    console.log(`Navigate to: ${path}`);
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-red-100 text-gray-700 relative overflow-hidden pt-14">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-red-400"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center flex-col">
        {/* Main Footer Content */}
        <div className="max-w-[1200px] w-full max-lg:pl-4">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-red-700">Muraad Construction</span>
              </div>
              <p className="mb-6 leading-relaxed text-gray-600">
                Building dreams with precision and excellence. Over 9 years of experience in construction and architectural solutions.
              </p>

              {/* Social Links & CTA */}
              <div className="border-t border-red-300 pt-2">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold mb-4 text-gray-800">Follow Us:</span>
                  <div className="flex items-center space-x-4">
                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                      <FaInstagram />
                    </a>
                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <p 
                      onClick={() => handleNavClick("services")}
                      className="cursor-pointer hover:text-red-600 transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      onClick={() => handleNavClick(sectionLinks[index])}
                      className="cursor-pointer hover:text-red-600 transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="">Aman Nagar Mowa Raipur (C.G.)</p>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-red-500 mr-3 -scale-x-100 lg:w-5 lg:h-5" />
                  <div className='flex flex-wrap gap-1'>
                    <a href='tel:91-9617099998' className="hover:text-red-600">91-9617099998,</a>
                    <a href='tel:91-9926415706' className="hover:text-red-600">91-9926415706,</a>
                    <a href='tel:91-8103628472' className="hover:text-red-600">91-8103628472</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-red-500 mr-3" />
                  <p className="">muraad.cons2808@gmail.com</p>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-red-500 mr-3 mt-1" />
                  <div>
                    <p className="">Mon - Sat: 10:30 AM - 8:00 PM</p>
                    <p className="">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-red-400 py-8 w-full border-t border-red-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center text-sm text-black">
              <p>
                Copyright © 2025. All rights reserved. Designed and developed by{' '}
                <a className="text-white hover:underline" href="https://spadvertising.in" target="_blank" rel="noopener noreferrer">
                  SP Advertising
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;