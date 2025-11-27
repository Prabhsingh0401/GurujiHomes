import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-300 mt-20 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div className="transform transition duration-300 hover:translate-y--2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-stone-600 to-stone-700 rounded-xl flex items-center justify-center shadow-md transform transition duration-300 hover:scale-110">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <h3 className="text-xl font-bold text-white">GuruJi Homes</h3>
            </div>
            <p className="text-stone-400 leading-relaxed text-sm transition duration-300 hover:text-stone-300">
              Your trusted platform for finding luxurious apartments and amazing properties. We connect you with the best homes and hosts worldwide.
            </p>
          </div>

          {/* Links */}
          <div className="transform transition duration-300 hover:translate-y--2">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#home" className="hover:text-stone-200 transition duration-300 relative group">Home<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-200 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#apartments" className="hover:text-stone-200 transition duration-300 relative group">Apartments<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-200 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#about" className="hover:text-stone-200 transition duration-300 relative group">About Us<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-200 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#contact" className="hover:text-stone-200 transition duration-300 relative group">Contact<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-200 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#terms" className="hover:text-stone-200 transition duration-300 relative group">Terms & Privacy<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-200 group-hover:w-full transition-all duration-300"></span></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="transform transition duration-300 hover:translate-y--2">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 transition duration-300 hover:text-stone-100">
                <MapPin size={20} className="text-stone-500 flex-shrink-0 transition duration-300 group-hover:text-stone-300" />
                <span>123 Main Street, City, State 12345</span>
              </div>
              <div className="flex items-center gap-3 transition duration-300 hover:text-stone-100">
                <Phone size={20} className="text-stone-500 flex-shrink-0 transition duration-300 group-hover:text-stone-300" />
                <a href="tel:+1234567890" className="hover:text-stone-200 transition duration-300">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 transition duration-300 hover:text-stone-100">
                <Mail size={20} className="text-stone-500 flex-shrink-0 transition duration-300 group-hover:text-stone-300" />
                <a href="mailto:info@staysteetapts.com" className="hover:text-stone-200 transition duration-300">
                  info@hotelaptts.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-700 py-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm mb-6 md:mb-0 transition duration-300 hover:text-stone-300">
            © 2025 Hotel Apartments. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#facebook" className="text-stone-400 hover:text-stone-200 transition duration-300 transform hover:scale-110 active:scale-95">
              <Facebook size={24} />
            </a>
            <a href="#twitter" className="text-stone-400 hover:text-stone-200 transition duration-300 transform hover:scale-110 active:scale-95">
              <Twitter size={24} />
            </a>
            <a href="#instagram" className="text-stone-400 hover:text-stone-200 transition duration-300 transform hover:scale-110 active:scale-95">
              <Instagram size={24} />
            </a>
            <a href="#linkedin" className="text-stone-400 hover:text-stone-200 transition duration-300 transform hover:scale-110 active:scale-95">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
