import React from "react";
import { Home, Users, Landmark, ConciergeBell } from "lucide-react";

const Whychooseus = () => {
  return (
    <div
    className="w-full py-24 px-4 flex justify-center bg-[#125476]"
    style={{
        backgroundImage: "url('https://apexworldadvisor.com/assets/curve.png'), linear-gradient(#125476, #125476)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-7xl mt-10">

        {/* CARD 1 */}
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-3 md:-mt-14 mb-0 lg:mb-20">
          <Home size={32} strokeWidth={1.5} className="text-[#0A506B]" />
          <h3 className="font-semibold text-lg text-[#0A506B]">
            Spacious & Private Stays
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Unlike traditional hotel rooms, our vacation homes offer ample space with
            multiple bedrooms, living areas, and fully equipped kitchens for comfort and privacy.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-3 md:mt-10">
          <Users size={32} strokeWidth={1.5} className="text-[#0A506B]" />
          <h3 className="font-semibold text-lg text-[#0A506B]">
            Better Value for Groups
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our rentals provide excellent value, especially for families or groups, as multiple
            guests can stay together at a lower cost per person than booking several hotel rooms.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-3 md:-mt-14 mb-0 lg:mb-20">
          <Landmark size={32} strokeWidth={1.5} className="text-[#0A506B]" />
          <h3 className="font-semibold text-lg text-[#0A506B]">
            Live Like a Local
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Guests can immerse themselves in Dubai’s vibrant culture, staying in local
            neighbourhoods and experiencing the city from a resident’s perspective.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-3 md:mt-10">
          <ConciergeBell size={32} strokeWidth={1.5} className="text-[#0A506B]" />
          <h3 className="font-semibold text-lg text-[#0A506B]">
            Tailored Services
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We offer concierge assistance and local recommendations, ensuring your
            stay caters to individual preferences and needs.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Whychooseus;
