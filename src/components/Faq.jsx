import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.section
      className="py-16 px-8 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              What is Target AI?
            </h3>
            <p className="mt-2 text-gray-600">
              Target AI is a smart chatbot designed to assist you with accurate
              answers and solutions for various problems.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              How much does it cost?
            </h3>
            <p className="mt-2 text-gray-600">
              Target AI offers a variety of plans, including a free Basic Plan
              for personal use. See the Pricing section for details.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              How secure is my data?
            </h3>
            <p className="mt-2 text-gray-600">
              Your data is handled with utmost security, adhering to
              industry-standard encryption and privacy policies.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Can I customize the chatbot?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, the Pro and Enterprise plans offer advanced customization
              options to meet your specific needs.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Is there a trial period for the Pro plan?
            </h3>
            <p className="mt-2 text-gray-600">
              Currently, we do not offer a trial period, but the free Basic Plan
              lets you explore our features.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              What platforms does Target AI support?
            </h3>
            <p className="mt-2 text-gray-600">
              Target AI is accessible via web browsers and mobile platforms.
              Additional integrations are coming soon!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default Faq;
