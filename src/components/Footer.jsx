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
    'About',
    'Projects',
    'Services',
    'Testimonials',
    'Contact'
  ];

  const certifications = [
    'ISO 9001:2015',
    'Green Building',
    'Safety Certified',
    'Quality Assured'
  ];

   const handleNavClick = (path) => {
    console.log(`Navigate to: ${path}`);
    const section = document.getElementById(path); // ✅ Corrected
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden pt-14">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-500 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-orange-500"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center flex-col">
        {/* Main Footer Content */}
        <div className="max-w-[1200px] w-full max-lg:pl-4">
        

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
              
                <span className="text-2xl font-bold text-yellow-500">Muraad Construction</span>
              </div>
              <p className=" mb-6 leading-relaxed">
                Building dreams with precision and excellence. Over 20 years of experience in construction and architectural solutions.
              </p>
               {/* Social Links & CTA */}
          <div className="border-t border-gray-700 pt-2">
            <div className="flex flex-col">
            
               <span className="text-xl font-semibold mb-4 ">Follow Us:</span>
              <div className="flex items-center space-x-4">
               
                <a href="#" className="bg-gray-900 hover:bg-gray-700 p-3 rounded-full transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-gray-700 p-3 rounded-full transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-gray-700 p-3 rounded-full transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
            
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 ">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <p 
                        onClick={() => handleNavClick("services")}
                      className=" hover:text-orange-400 transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 ">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                     onClick={() => handleNavClick(sectionLinks[index].toLowerCase())}
                      className=" hover:text-orange-400 transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
          
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 ">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="">Aman Nagar Mowa Raipur (C.G.)</p>
                  
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaPhone className="text-orange-400 mr-3 -scale-x-100 lg:w-5 lg:h-5" />
                  <div className='flex flex-wrap gap-1'>
                    <a href='tel:91-9617099998' className="">91-9617099998,</a>
                    <a href='tel:91-9926415706' className="">91-9926415706,</a>
                    <a href='tel:91-8103628472' className="">91-8103628472</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaEnvelope className="text-orange-400 mr-3" />
                  <p className="">muraad.cons2808@gmail.com</p>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-orange-400 mr-3 mt-1" />
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
        <div className=" bg-[#2c3e50] py-8 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center text-sm text-gray-400">
              <div className="mb-2 md:mb-0 ">
                <p> Copyright © 2025. All rights reserved, Designed and developed by <a className='text-white' href="https://spadvertising.in">SP Advertising</a></p>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
