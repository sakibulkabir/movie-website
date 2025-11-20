// src/components/PricingSection.jsx
import React from "react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$5/mo",
    features: ["Access to 10 Movies", "Standard Quality", "Limited Support"],
  },
  {
    name: "Standard",
    price: "$10/mo",
    features: ["Access to 50 Movies", "HD Quality", "Priority Support"],
  },
  {
    name: "Premium",
    price: "$20/mo",
    features: ["All Movies & Shows", "4K Quality", "24/7 Support"],
  },
];

const Pricing = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-white font-bold mb-12 text-center">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50 cursor-pointer"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{plan.name}</h2>
              <p className="text-yellow-400 text-3xl font-extrabold mb-6">{plan.price}</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded hover:bg-yellow-400 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
