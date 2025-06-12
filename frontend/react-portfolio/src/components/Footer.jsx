import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-20 relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left - Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">DevPortfolio</h2>
          <p className="text-sm text-gray-400">
            Crafted with 💻 by a passionate full stack developer. Let’s build something great together.
          </p>
        </div>

        {/* Center - Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect with me</h3>
          <div className="flex justify-center md:justify-start gap-5 mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-indigo-400 transition"
            >
              <Mail />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
