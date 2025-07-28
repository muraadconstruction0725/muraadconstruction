import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { MdAccountBalance, MdManageAccounts } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY", // <-- Replace this with your actual access key
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setStatus("SUCCESS");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="py-16 px-6 max-lg:px-0" id="contact">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-0.5 bg-yellow-500"></div>
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <div className="w-16 h-0.5 bg-yellow-500"></div>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your dream project begins with a conversation. Contact us today to
            start building with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 rounded-lg bg-red-100">
          {/* Form Section */}
          <div className="bg-red-300 rounded-xl p-4 px-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-white border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  required
                  className="w-full bg-white border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-white border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-white border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status === "SUCCESS" && (
                <p className="text-green-600 font-medium mt-2">
                  Message sent successfully!
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-red-600 font-medium mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-6">
              <ContactInfo
                icon={<Phone className="w-6 h-6 text-white" />}
                label="Call Us"
                content={
                  <div className="flex flex-wrap gap-2">
                    <a href="tel:91-9617099998">91-9617099998,</a>
                    <a href="tel:91-9926415706">91-9926415706,</a>
                    <a href="tel:91-8103628472">91-8103628472</a>
                  </div>
                }
              />
              <ContactInfo
                icon={<Mail className="w-6 h-6 text-white" />}
                label="Email Us"
                content={<a href="mailto:muraad.cons2808@gmail.com">muraad.cons2808@gmail.com</a>}
              />
              <ContactInfo
                icon={<Clock className="w-6 h-6 text-white" />}
                label="Office Hours"
                content={<p>Mon - Sat: 10:30 AM - 8:00 PM</p>}
              />
              <ContactInfo
                icon={<MapPin className="w-6 h-6 text-white" />}
                label="Location"
                content={<p>Aman Nagar Mowa Raipur (C.G.)</p>}
              />
              <ContactInfo
                icon={<MdManageAccounts className="w-6 h-6 text-white" />}
                label="GST Number"
                content={<p>22DOWPK2393B3ZT</p>}
              />
              <ContactInfo
                icon={<MdAccountBalance className="w-6 h-6 text-white" />}
                label="PWD Registration Number"
                content={<p>CGeR26247</p>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, label, content }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="font-bold">{label}</h3>
      {content}
    </div>
  </div>
);

export default ContactUs;
