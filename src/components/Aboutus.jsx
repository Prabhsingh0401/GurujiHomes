export default function AboutUs() {
  return (
    <section id="aboutus" className="w-full py-20 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Big Number Box */}
       <div className="flex justify-center">
  {/* OUTER FRAME WITH BACKGROUND IMAGE */}
  <div
    className="relative w-80 h-80 p-4 shadow-lg"
    style={{
      backgroundImage:
        "url('https://www.shutterstock.com/image-photo/high-rise-buildings-office-area-600nw-2474260777.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* INNER WHITE BOX */}
          <div className="w-full h-full bg-white flex flex-col justify-center items-center border-[14px] border-transparent">
            
            <h1
              className="text-9xl font-bold text-transparent bg-clip-text 
                        bg-[url('https://www.shutterstock.com/image-photo/high-rise-buildings-office-area-600nw-2474260777.jpg')] 
                        bg-cover bg-center"
            >
              10
            </h1>

            <p
              className="uppercase tracking-widest text-lg font-sembold mt-3 text-transparent bg-clip-text 
                        bg-[url('https://www.shutterstock.com/image-photo/high-rise-buildings-office-area-600nw-2474260777.jpg')] 
                        bg-cover bg-center text-center"
            >
              Years of <br /> Experience
            </p>

          </div>

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
              <h3 className="text-3xl font-bold text-[#0A2A3B]">5+</h3>
              <p className="text-sm text-[#1D80B2]">Managed Properties</p>
            </div>
          </div>

          {/* Button */}
          <button className="border border-[#125476] px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#125476] hover:text-white transition duration-300"
          onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
            EXPLORE IT
          </button>
        </div>
      </div>
    </section>
  );
}
