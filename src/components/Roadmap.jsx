import { motion } from "framer-motion";

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "Improved Natural Language Processing",
      description: "Making responses even more accurate and contextual.",
    },
    {
      title: "Voice Input Support",
      description:
        "Allowing users to interact with Target AI through voice commands.",
    },
    {
      title: "Customizable Chat Interface",
      description: "Enabling users to personalize their chat experience.",
    },
    {
      title: "Integration with Third-Party Tools",
      description:
        "Expanding capabilities by connecting to popular apps and services.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        What is Next for Target AI?
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-10">
        Target AI is still in its beta stage, but we are continuously working to
        enhance its capabilities. Here is a sneak peek at what is coming soon:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
