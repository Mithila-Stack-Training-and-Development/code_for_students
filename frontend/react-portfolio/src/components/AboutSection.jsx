import { BadgeCheck, Code, Laptop, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero-section.avif";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT - Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I'm a <span className="font-semibold text-indigo-600">Full Stack Developer</span> who loves turning
            ideas into reality through code. With hands-on experience in both frontend and backend technologies,
            I build fast, responsive, and scalable applications.
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-3">
              <BadgeCheck className="text-indigo-600" /> Strong foundation in React, Node.js, and MongoDB
            </li>
            <li className="flex items-center gap-3">
              <Laptop className="text-indigo-600" /> Passionate about UI/UX, animations, and clean code
            </li>
            <li className="flex items-center gap-3">
              <Code className="text-indigo-600" /> Experienced with REST APIs, Auth, Stripe, Firebase & Appwrite
            </li>
            <li className="flex items-center gap-3">
              <Layers3 className="text-indigo-600" /> Comfortable with Git, CI/CD, and deployment workflows
            </li>
          </ul>
        </motion.div>

        {/* RIGHT - Image or Illustration */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={HeroImage}
            alt="About Developer"
            className="w-80 md:w-96"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
