import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN NAVBAR */}
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/BaitAlLogo.png" className="h-13"></img>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10">
            {["Home", "About Us", "Services", "Contact Us"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-black font-semibold tracking-wide uppercase text-sm hover:text-gray-800 transition relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}


            {/* Reservation Button */}
            <li>
              <button className="bg-[#125476] text-white font-semibold tracking-widest uppercase px-6 py-2 rounded-sm shadow-sm hover:bg-[#0E415C] transition-all cursor-pointer"
              onClick={() => document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' })}>
                Reservation
              </button>
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 bg-white border rounded-lg p-4 mt-2">
            {["Home", "About Us", "Services", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-black font-medium tracking-wide uppercase text-sm hover:text-gray-800 transition"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Mobile Reservation Button */}
            <li>
              <button className="w-full bg-[#125476] text-white font-semibold tracking-widest uppercase px-6 py-2 rounded-sm shadow hover:bg-[#0E415C] transition-all">
                Reservation
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
