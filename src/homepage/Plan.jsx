import React, { useState } from 'react';
import { Check, Star, Crown, Zap, Phone, Mail } from 'lucide-react';

export default function Plan() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: 'silver',
      name: 'Silver Plan',
      price: '₹500',
      icon: <Star className="w-8 h-8" />,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      borderColor: 'border-gray-300',
      features: [
        'Minor dismantling of slab & wall repair (up to 200 sqft)',
        'Floor dismantling & new tiles (up to ₹40/sqft)',
        'Ceiling dismantling & false ceiling with electrical',
        'Inner painting with minor putty repair (Distemper)'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Plan',
      price: '₹900',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-300',
      popular: true,
      features: [
        'Minor dismantling of slab & wall repair (up to 300 sqft)',
        'Floor dismantling & new tiles (up to ₹60/sqft)',
        'Ceiling dismantling & false ceiling with electrical',
        'Inner & outer painting with putty repair (Distemper)',
        'Flush door with veneering',
        'Door granite frame',
        'Modular kitchen panel (without chimney)'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum Plan',
      price: '₹1,300',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      borderColor: 'border-purple-300',
      features: [
        'Complete dismantling of slab & wall repair',
        'Floor dismantling & new tiles (up to ₹80/sqft)',
        'Complete ceiling work with false ceiling & electrical',
        'Premium plastic paint (inner & outer) with putty',
        'Flush door with veneering & accessories',
        'Door & window granite frames',
        'Aluminum 3-track windows',
        'Modular kitchen panel with chimney',
        'Complete sanitary work with IS materials'
      ]
    },
    {
      id: 'platinum-super',
      name: 'Platinum Super Plan',
      price: '₹1,700',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-indigo-400 to-purple-600',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-300',
      premium: true,
      features: [
        'Complete dismantling of slab & wall repair',
        'Premium tiles or granite flooring (up to ₹100/sqft)',
        'Premium false ceiling work with electrical',
        'Premium plastic paint with texture putty (outer)',
        'Premium flush doors with veneering & accessories',
        'Granite or ply door & window frames',
        'PVC 3-track windows',
        'Complete modular kitchen with chimney',
        'Branded sanitary fittings',
        'Wall paneling (up to 200 sqft)',
        'Elevation repair work',
        'Custom TV units as required',
        'Wardrobe for each room'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6">
            Renovation Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your space with our comprehensive renovation packages. Choose the perfect plan that matches your vision and budget.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${plan.bgColor} rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl ${plan.borderColor} border-2 ${
                hoveredPlan === plan.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Premium Badge */}
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Premium Choice
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${plan.color} text-white mb-4 shadow-lg`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ sqft</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Material included</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${plan.color} hover:shadow-xl hover:scale-105 transform`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Customization?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            For full description and customization of any plan, contact our expert team. 
            We'll help you create the perfect renovation package for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg">
              <Mail className="w-5 h-5" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * All plans include materials and labor. Final pricing may vary based on specific requirements and site conditions.
          </p>
        </div>
      </div>
    </div>
  );
}