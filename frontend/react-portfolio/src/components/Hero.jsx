import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero-section.avif";

const HeroSection = () => {
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT - Text */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            A passionate <span className="font-semibold">Full Stack Developer</span> crafting
            beautiful & performant web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Illustration */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full"
        >
          <img
            src={HeroImage}
            alt="Developer Illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
