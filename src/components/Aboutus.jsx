export default function AboutUs() {
  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Big Number Box */}
        <div className="flex justify-center">
          <div className="border-4 border-[#1D80B2] p-10 w-72 h-72 flex flex-col justify-center items-center shadow-xl">
            <h1 className="text-7xl font-bold text-[#0A2A3B]">10</h1>
            <p className="uppercase tracking-widest text-sm mt-4 text-[#1D80B2]">
              Years of<br />Experience
            </p>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div>
          <p className="uppercase text-sm tracking-widest text-[#1D80B2] mb-2">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-[#0A2A3B] leading-tight mb-6">
            Unlocking Doors to Your<br /> Dream Vacation Home
          </h2>

          {/* Content Description */}
          <p className="text-[#125476] leading-relaxed mb-4">
            BAIT AL MAREEH ™ (Bait Al Mareeh Vacations Homes Rental L.L.C) is a 
            DTCM licensed operator managing vacation rental apartments for short-term 
            stays in Dubai. With a handpicked collection of properties, our guests 
            experience boutique-style living and authentic stays in real homes like 
            locals, while enjoying housekeeping and concierge services similar to 
            luxurious hotels.
          </p>

          <p className="text-[#125476] leading-relaxed mb-8">
            All our holiday homes offer a stylish living experience and excellent value, 
            ensuring a comfortable and memorable stay for every guest.
          </p>

          {/* Stats */}
          <div className="flex gap-16 mb-10">
            <div>
              <h3 className="text-3xl font-bold text-[#0A2A3B]">500+</h3>
              <p className="text-sm text-[#1D80B2]">Happy Guests</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0A2A3B]">300+</h3>
              <p className="text-sm text-[#1D80B2]">Managed Properties</p>
            </div>
          </div>

          {/* Button */}
          <button className="border border-[#125476] px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#125476] hover:text-white transition duration-300">
            EXPLORE IT
          </button>
        </div>
      </div>
    </section>
  );
}
