import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { CounterContext } from "../provider/CounterProvider";

const Navbar = () => {
  const { counter } = useContext(CounterContext)
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Products",
      href: "/products",
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 tracking-wide">
          Dev<span className="text-gray-800">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.href}
              className="hover:text-indigo-600 transition duration-300 relative group"
            >
              {link.name}
              <span className="block h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}

          <span className="text-red-500">Count: {counter}</span>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4 text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.href}
                className="hover:text-indigo-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
