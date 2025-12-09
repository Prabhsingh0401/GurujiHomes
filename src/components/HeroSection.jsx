export default function HeroSection() {
  return (
    <section id="home" className="relative h-auto lg:h-[600px] overflow-hidden shadow-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=600&fit=crop')`,
        }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#125476]/80 via-[#125476]/60 to-transparent" />

      {/* Content Wrapper */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full px-6 md:px-12 lg:px-16 py-12 gap-10">

        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col justify-center text-white animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Unlocks the possibilities and simplifies the experience of vacation home rentals.
          </h2>

          <button 
            className="bg-white hover:bg-gray-200 text-[#125476] font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl active:scale-95 mt-10 w-max cursor-pointer"
            onClick={() => document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' })}
          >          
          Know More
          </button>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="flex justify-center items-center w-full animate-slide-up delay-200">
          <form className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5">
            <h3 className="text-2xl font-semibold text-[#125476] mb-2">Book Your Stay</h3>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#125476]"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#125476]"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Check-in & Check-out */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#125476]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#125476]"
                />
              </div>
            </div>

            {/* Adults & Children */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#125476]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#125476]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#125476] text-white font-bold py-3 rounded-xl hover:bg-[#0E415C] transition duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
