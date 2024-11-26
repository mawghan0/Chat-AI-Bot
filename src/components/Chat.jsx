import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
// import axios from "axios";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(input);
      console.log(result.response.text());

      const botMessage = {
        sender: "bot",
        text: result.response.text(),
      };
      setMessages((prev) => [...prev, botMessage]);

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Gagal mendapatkan respons." },
      ]);
    }
    setInput("");
  };

  return (
    <div className="bg-sky-50 shadow-md rounded-3xl p-4 flex flex-col h-[500px] md:w-[70%] lg:w-full relative mx-auto">
      <p className="text-gray-500 -top-6 absolute">Beta Version</p>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`p-2 my-2 transition-transform duration-300 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.3, duration: 0.5 }}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-blue-900 text-white"
              }`}
            >
              {msg.text}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border rounded-l-lg p-2 w-2/3"
          placeholder="Write message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <motion.button
          className="bg-blue-500 text-white px-4 rounded-r-lg w-1/3"
          onClick={handleSend}
          whileHover={{ scale: 1.1 }} // Efek hover: memperbesar tombol
          whileTap={{ scale: 0.9 }} // Efek klik: memperkecil tombol
        >
          Send
        </motion.button>
      </div>
    </div>
  );
};

export default Chat;
