import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Genius",
    desc: "SaaS platform with AI tools for chat, image & code generation, Stripe billing & Firebase auth.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Stripe", "OpenAI"],
    live: "https://aigenius.vercel.app",
    github: "https://github.com/yourusername/aigenius",
    image: "/projects/aigenius.png",
  },
  {
    title: "Monkey Store",
    desc: "Full stack MERN E-Commerce store with custom design upload, Stripe payments & admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Redux", "Tailwind"],
    live: "https://monkeycloth.vercel.app/",
    github: "https://github.com/yourusername/monkey-ecommerce",
    image: "/projects/monkeystore.png",
  },
  {
    title: "Task Tracker Pro",
    desc: "A task manager with star-based difficulty rating, due dates & mobile support. Built using Expo.",
    tech: ["React Native", "Expo", "Firebase", "Zod"],
    live: "#",
    github: "https://github.com/yourusername/task-tracker",
    image: "/projects/tasktracker.png",
  },
  {
    title: "Family Expense Tracker",
    desc: "Track shared and individual income/expenses. Dashboard for parents and children.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Chart.js"],
    live: "#",
    github: "https://github.com/yourusername/family-expense-tracker",
    image: "/projects/familytracker.png",
  },
  {
    title: "Crockery Shop Online",
    desc: "Local eCommerce platform with user and admin site, low-price model, and order tracking.",
    tech: ["React", "Express", "MongoDB", "Redux", "Stripe"],
    live: "#",
    github: "https://github.com/yourusername/crockery-shop",
    image: "/projects/crockeryshop.png",
  },
  {
    title: "DConnec Site",
    desc: "Business website built in HTML, Bootstrap, and JS. Includes hero, services, team & contact form.",
    tech: ["HTML", "Bootstrap", "JavaScript", "AOS", "Swiper"],
    live: "https://risingbihar.org",
    github: "https://github.com/yourusername/dconnec",
    image: "/projects/dconnec.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-indigo-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-sm text-gray-600">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-black transition"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
