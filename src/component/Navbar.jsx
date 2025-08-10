import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#2c1b10] to-black text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-montserrat">
          <span className="text-white">𝓓𝓮𝓵𝓲𝓰𝓱𝓽 </span>
          <span className="text-orange-400">𝓒𝓪𝓯𝓮</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-montserrat tracking-wide">
          <Link to="/" className="hover:text-orange-400">𝓗𝓸𝓶𝓮</Link>
          <Link to="/about" className="hover:text-orange-400">𝓐𝓫𝓸𝓾𝓽 𝓤𝓼</Link>
          <Link to="/products" className="hover:text-orange-400">𝓟𝓻𝓸𝓭𝓾𝓬𝓽𝓼</Link>
          <Link to="/blog" className="hover:text-orange-400">𝓑𝓵𝓸𝓰</Link>
          <Link to="/contact" className="hover:text-orange-400">𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓤𝓼</Link>
        </nav>

        {/* Book a Table Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/book-a-table"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow-md transition font-semibold"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-orange-400 focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a120b] text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-[#2c1b10] to-black">
          <h2 className="text-xl font-bold text-orange-400">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-orange-400">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 font-montserrat">
          <Link to="/" onClick={() => setIsOpen(false)}>𝓗𝓸𝓶𝓮</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>𝓐𝓫𝓸𝓾𝓽 𝓤𝓼</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>𝓟𝓻𝓸𝓭𝓾𝓬𝓽𝓼</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>𝓑𝓵𝓸𝓰</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓤𝓼</Link>
          <Link
            to="/book-a-table"
            className="bg-orange-500 text-center px-4 py-2 rounded-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
    
  );
}
