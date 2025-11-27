import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-stone-50 to-stone-100 border-b border-stone-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition duration-300 transform hover:scale-105">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-stone-700 to-stone-800 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition duration-300">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-stone-900">GuruJi Homes</h1>
                <p className="text-xs text-stone-600 font-medium">Premium Stays</p>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="#home" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300 relative group">Home<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-700 group-hover:w-full transition-all duration-300"></span></a></li>
            <li><a href="#apartments" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300 relative group">Apartments<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-700 group-hover:w-full transition-all duration-300"></span></a></li>
            <li><a href="#about" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300 relative group">Amenities<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-700 group-hover:w-full transition-all duration-300"></span></a></li>
            <li><a href="#gallery" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300 relative group">Gallery<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-700 group-hover:w-full transition-all duration-300"></span></a></li>
            <li><a href="#contact" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300 relative group">Contact<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-700 group-hover:w-full transition-all duration-300"></span></a></li>
            <li><button className="bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-900 hover:to-black text-white px-6 py-2 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg hover:scale-105 transform">Book Now</button></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-stone-700 hover:text-stone-900 transition duration-300 transform hover:scale-110"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 pb-4 bg-white rounded-xl mx-2 p-4 animate-slide-up">
            <li><a href="#home" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300">Home</a></li>
            <li><a href="#apartments" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300">Apartments</a></li>
            <li><a href="#about" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300">Amenities</a></li>
            <li><a href="#gallery" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300">Gallery</a></li>
            <li><a href="#contact" className="text-stone-700 hover:text-stone-900 font-medium transition duration-300">Contact</a></li>
            <li><button className="w-full bg-gradient-to-r from-stone-800 to-stone-900 text-white px-6 py-2 rounded-xl font-semibold transition duration-300 hover:shadow-lg">Book Now</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
