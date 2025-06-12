import { Mail, Phone, MapPin, Send, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")

    setLoading(true)


    // api call

    setTimeout(() => {
      setLoading(false)
      alert("Form Submit successfully")
    }, 3000);

  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" />
              <span className="text-gray-600">youremail@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" />
              <span className="text-gray-600">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" />
              <span className="text-gray-600">Your City, India</span>
            </div>
            <p className="text-gray-500 text-sm">
              Feel free to reach out via email or use the form to send a message directly.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-indigo-50 rounded-xl p-6 shadow-lg space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                value={formData.name}
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                value={formData.email}
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                value={formData.message}
                id="message"
                rows="4"
                required
                name="message"
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? <Loader className="animate-spin"/> :<Send size={16} />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
