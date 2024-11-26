// src/components/HeroSection.js
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const HeroSection = ({ scrollToChat }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-8 h-screen flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 lg:text-6xl xl:text-7xl">
            Welcome to Target AI
          </h1>
          <p className="text-lg mb-6 xl:text-xl">
            Experience the future of AI-driven conversations. Fast, intuitive,
            and always improving.
          </p>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/AI.png"
            alt="AI Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
      <div className=" justify-center flex ">
        <motion.button
          onClick={scrollToChat}
          className="bg-white text-blue-600 font-semibold mt-16 py-3 px-6 rounded-lg xl:text-3xl"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#3b82f6", // Warna biru saat hover
            color: "#ffffff", // Teks menjadi putih
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Efek bayangan
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Durasi transisi dan easing
        >
          Try Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
