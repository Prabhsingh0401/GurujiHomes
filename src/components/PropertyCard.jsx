import { Star, Wifi, AirVent, Car, Flower2, UtensilsCrossed } from 'lucide-react';

const amenityIcons = {
  wifi: Wifi,
  ac: AirVent,
  parking: Car,
  balcony: Flower2,
  kitchen: UtensilsCrossed,
};

export default function PropertyCard({ property, onImageClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-102 hover:-translate-y-2 cursor-pointer border border-stone-200 group animate-scale-in">
      {/* Image */}
      <div
        className="relative h-48 bg-cover bg-center overflow-hidden cursor-pointer group"
        onClick={() => onImageClick(property.image)}
        style={{ backgroundImage: `url('${property.image}')` }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-stone-700 to-stone-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform transition duration-300 group-hover:scale-110">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2 transition duration-300 group-hover:text-stone-700">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-stone-600 text-sm mb-4 flex items-center gap-1 transition duration-300">
          <span>📍</span> {property.location}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-stone-200">
          <span className="text-2xl font-bold text-stone-900">
            ${property.price}
          </span>
          <span className="text-sm text-stone-500">/night</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(property.rating)
                    ? 'fill-stone-400 text-stone-400'
                    : 'text-stone-300'
                }
              />
            ))}
          </div>
          <span className="text-sm text-stone-600">({property.reviews})</span>
        </div>

        {/* Amenities */}
        <div className="flex gap-2 flex-wrap mb-4">
          {property.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity];
            return Icon ? (
              <div
                key={amenity}
                className="bg-stone-100 p-2 rounded-xl hover:bg-stone-200 transition duration-300 border border-stone-300 transform hover:scale-110"
                title={amenity}
              >
                <Icon size={18} className="text-stone-700" />
              </div>
            ) : null;
          })}
        </div>

        {/* Book Button */}
        <button className="w-full bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-900 hover:to-black text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
}
