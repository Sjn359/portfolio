import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* <Link href="/" className="text-xl font-bold text-pink-500">
          SJ
        </Link> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* <Link
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
          >
            About
          </Link> */}
          {/* <Link
            href="#skills"
            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
          >
            Contact
          </Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
