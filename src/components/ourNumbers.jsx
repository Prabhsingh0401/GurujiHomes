export default function NumbersSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — THE GRID LIKE THE IMAGE */}
        <div className="grid grid-cols-3 gap-10 text-center">

          {/* Managed Properties */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">100+</div>
            <p className="text-[#125476] mt-2 text-sm">Managed Properties</p>
          </div>

          {/* AED Worth Portfolio */}
          <div>
            <div className="text-6xl font-bold text-[#125476]">M</div>
            <p className="text-[#125476] mt-2 text-sm">AED worth Portfolio</p>
          </div>

          {/* Staff Members */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">50+</div>
            <p className="text-[#125476] mt-2 text-sm">Staff Members</p>
          </div>

          {/* Accommodated Guests */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">20+</div>
            <p className="text-[#125476] mt-2 text-sm">Accommodated Guests</p>
          </div>

          {/* Booked Nights */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">300+</div>
            <p className="text-[#125476] mt-2 text-sm">Booked Nights</p>
          </div>

          {/* Nationalities */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">10+</div>
            <p className="text-[#125476] mt-2 text-sm">Nationalities</p>
          </div>

        </div>

        {/* RIGHT — CONTENT TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#0A2A3B] mb-4">
            Unlocking the True Potential of Vacation Homes
          </h2>

          <p className="text-[#125476] leading-relaxed mb-6">
            BAIT AL MAREEH™ unlocks the possibilities and simplifies the experience of 
            vacation home rentals. Property owners trust our proven ability to deliver 
            comprehensive property care and unbeatable revenue.
          </p>

          <p className="text-[#125476] leading-relaxed mb-6">
            Guests book Bait Al Mareeh Vacation Homes Rental L.L.C with confidence, 
            relying on professionally trained staff to help them find exactly what they’re 
            looking for—and know exactly what they’ll get. With 7 days a week customer-care 
            teams, guests count on professional service, cleanliness, and comfort so they can 
            fully enjoy their time with family and friends.
          </p>

          <p className="text-[#125476] leading-relaxed">
            Our in-house Revenue Management and Property Management software make it possible 
            to deliver this consistent experience—from pricing our holiday homes to scheduling 
            post-stay cleans. Our people make it happen, with detailed caretaking teams in 
            every area we manage homes, strong central support staff, and 7-days customer service.
          </p>
        </div>
      </div>
    </section>
  );
}
