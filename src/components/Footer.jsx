import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-10">
    <p>© 2024 Target AI Beta. All Rights Reserved.</p>
    <div className="mt-4 flex justify-center space-x-4">
      <a href="#" className="hover:text-blue-500">
        <FaTwitter size={30} /> {/* Ikon Twitter */}
      </a>
      <a href="#" className="hover:text-blue-500">
        <FaTelegram size={30} /> {/* Ikon Discord */}
      </a>
    </div>
  </footer>
);

export default Footer;
