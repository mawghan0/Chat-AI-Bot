import Hero from "./components/Hero";
import Chat from "./components/Chat";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import { useRef } from "react";
import { motion } from "framer-motion";

const App = () => {
  const chatRef = useRef(null); // Referensi untuk bagian chat

  const scrollToChat = () => {
    const target = chatRef.current;
    const start = window.pageYOffset; // Posisi scroll saat ini
    const end = target.offsetTop; // Posisi scroll ke bawah
    const distance = end - start; // Jarak yang harus digulirkan
    const duration = 500; // Durasi scroll dalam milidetik (2000ms = 2 detik)
    let startTime = null;

    const scroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = Math.min(timeElapsed / duration, 1) * distance;
      window.scrollTo(0, start + scrollAmount);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };
  return (
    <div className="bg-sky-100">
      <Hero scrollToChat={scrollToChat} />
      <h2 ref={chatRef} className="text-4xl font-bold text-center mt-16">
        What is Target AI?
      </h2>
      <div className="flex flex-col lg:flex-row mt-2 mb-10 px-10">
        <div className="lg:w-2/3 p-5  mb-10">
          <p className="mt-4 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-justify shadow-2xl p-2 rounded-2xl">
            Target AI is an advanced AI-powered chatbot designed to provide
            accurate answers and assist you in solving a wide range of problems.
            Whether you need help with quick queries, complex tasks, or general
            information, Target AI is here to guide you with its cutting-edge
            natural language processing capabilities.
          </p>
          <p className="mt-4 text-lg text-justify">
            With continuous learning and improvement, Target AI aims to enhance
            your experience by offering personalized and intelligent
            interactions. It is not just a tool, but a smart companion designed
            to understand your needs and respond with precision.
          </p>
          <p className="mt-4 text-lg bg-gradient-to-r text-justify shadow-2xl from-blue-500 to-indigo-600 text-white  p-2 rounded-2xl">
            Whether you are looking for technical support, advice, or even just
            a friendly chat, Target AI is ready to assist. Explore the potential
            of artificial intelligence with Target AI, where efficiency and
            innovation meet to deliver seamless conversations.
          </p>
        </div>

        <div className="lg:w-1/3">
          <Chat />
        </div>
      </div>
      <motion.div
        className="mt-8 md:mt-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/ai2.jpg"
          alt="AI Illustration"
          className="w-[90%] h-52 object-cover mx-auto lg:mb-20 mb-10"
        />
      </motion.div>
      <Roadmap />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
};
export default App;
