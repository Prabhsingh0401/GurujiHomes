import { Star, MapPin, DollarSign, Users, Wifi, AirVent, Car, Flower2, UtensilsCrossed } from 'lucide-react';

const amenityIcons = {
  wifi: Wifi,
  ac: AirVent,
  parking: Car,
  balcony: Flower2,
  kitchen: UtensilsCrossed,
};

const amenityLabels = {
  wifi: 'Free WiFi',
  ac: 'Air Conditioning',
  parking: 'Parking Available',
  balcony: 'Balcony',
  kitchen: 'Full Kitchen',
};

export default function PropertyDetailsSection({ property }) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-stone-200 animate-slide-up">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="md:col-span-2 row-span-2 h-96 rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-lg">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
          />
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-32 md:h-auto rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-lg">
            <img
              src={property.image}
              alt={`${property.title} ${i + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Title & Price */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 transition duration-300">{property.title}</h1>

          {/* Location */}
          <div className="flex items-center gap-2 text-stone-700 mb-4 transition duration-300 hover:text-stone-900">
            <MapPin size={20} className="text-stone-600" />
            <span className="text-lg">{property.location}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < Math.floor(property.rating)
                      ? 'fill-stone-400 text-stone-400'
                      : 'text-stone-300'
                  }
                />
              ))}
            </div>
            <span className="text-stone-700 font-medium transition duration-300">
              {property.rating} ({property.reviews} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-stone-700 text-lg leading-relaxed mb-8 transition duration-300">
            {property.description}
          </p>

          {/* Amenities */}
          <h3 className="text-2xl font-bold text-stone-900 mb-6 transition duration-300">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {property.amenities.map((amenity) => {
              const Icon = amenityIcons[amenity];
              return Icon ? (
                <div
                  key={amenity}
                  className="flex items-center gap-3 bg-stone-100 p-4 rounded-xl hover:bg-stone-200 transition duration-300 border border-stone-300 transform hover:scale-105"
                >
                  <Icon size={24} className="text-stone-700 transition duration-300" />
                  <span className="text-stone-800 font-medium transition duration-300">
                    {amenityLabels[amenity] || amenity}
                  </span>
                </div>
              ) : null;
            })}
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div>
          <div className="bg-gradient-to-br from-stone-50 via-white to-stone-50 rounded-2xl shadow-lg p-6 sticky top-20 border border-stone-200 transform transition duration-300 hover:shadow-xl">
            {/* Price Card */}
            <div className="mb-6 pb-6 border-b-2 border-stone-200">
              <p className="text-stone-700 text-sm mb-2 font-medium">Price per night</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-stone-900">
                  ${property.price}
                </span>
              </div>
            </div>

            {/* Host Card */}
            <div className="bg-white rounded-xl p-4 mb-6 border border-stone-300 transform transition duration-300 hover:shadow-md">
              <p className="text-sm text-stone-700 font-medium mb-3">Hosted by</p>
              <div className="flex items-center gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=host"
                  alt="Host"
                  className="w-12 h-12 rounded-full border-2 border-stone-300 transform transition duration-300 hover:scale-110"
                />
                <div>
                  <p className="font-semibold text-stone-900">Premium Host</p>
                  <p className="text-xs text-stone-600 font-medium">Superhost</p>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <button className="w-full bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-900 hover:to-black text-white font-bold py-3 px-4 rounded-xl transition duration-300 transform hover:scale-105 active:scale-95 mb-4 shadow-md hover:shadow-lg">
              Book Now
            </button>

            {/* Contact Info */}
            <p className="text-xs text-stone-600 text-center transition duration-300">
              Response time: within 1 hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
