// src/components/PricingSection.js
import { motion } from "framer-motion";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic Plan",
      description: "Perfect for personal use and small projects.",
      price: "$0 / month",
      buttonText: "Select",
      style: "bg-white",
    },
    {
      title: "Pro Plan",
      description: "For teams and professionals.",
      price: "$29 / month",
      buttonText: "Select",
      style: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
    },
    {
      title: "Enterprise Plan",
      description: "For large organizations with custom needs.",
      price: "$99 / month",
      buttonText: "Select",
      style: "bg-white",
    },
  ];

  return (
    <motion.section
      className="py-16 px-8 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-6 shadow-lg rounded-lg ${plan.style}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger effect for each card
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-lg mb-4">{plan.description}</p>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
