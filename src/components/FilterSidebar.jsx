import { Wifi, AirVent, Car, Flower2, UtensilsCrossed, Star } from 'lucide-react';
import { useState } from 'react';

export default function FilterSidebar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyType: [],
    priceMin: 0,
    priceMax: 5000,
    amenities: [],
    rating: 0,
  });

  const amenitiesOptions = [
    { id: 'wifi', label: 'WiFi', icon: Wifi },
    { id: 'ac', label: 'Air Conditioning', icon: AirVent },
    { id: 'parking', label: 'Parking', icon: Car },
    { id: 'balcony', label: 'Balcony', icon: Flower2 },
    { id: 'kitchen', label: 'Kitchen', icon: UtensilsCrossed },
  ];

  const propertyTypes = ['Studio', 'Apartment', 'Duplex', 'House'];

  const handlePropertyTypeChange = (type) => {
    const updated = filters.propertyType.includes(type)
      ? filters.propertyType.filter(t => t !== type)
      : [...filters.propertyType, type];
    const newFilters = { ...filters, propertyType: updated };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAmenitiesChange = (amenity) => {
    const updated = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    const newFilters = { ...filters, amenities: updated };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating) => {
    const newFilters = { ...filters, rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <aside className="w-full lg:w-64 bg-white rounded-2xl shadow-md p-6 sticky top-20 h-fit border border-stone-200 transition duration-300 hover:shadow-lg">
      <h3 className="text-2xl font-bold text-stone-900 mb-6 transition duration-300">Filters</h3>

      {/* Property Type */}
      <div className="mb-8 pb-8 border-b border-stone-200">
        <h4 className="text-lg font-semibold text-stone-800 mb-4">Property Type</h4>
        <div className="space-y-3">
          {propertyTypes.map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group transition duration-300">
              <input
                type="checkbox"
                checked={filters.propertyType.includes(type)}
                onChange={() => handlePropertyTypeChange(type)}
                className="w-4 h-4 rounded-lg border-stone-300 text-stone-600 cursor-pointer accent-stone-600 transition duration-300"
              />
              <span className="text-stone-700 group-hover:text-stone-900 transition duration-300">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8 pb-8 border-b border-stone-200">
        <h4 className="text-lg font-semibold text-stone-800 mb-4">Price Range</h4>
        <div className="space-y-4">
          <div className="transform transition duration-300">
            <label className="text-sm text-stone-600 mb-2 block">
              Min: <span className="font-semibold text-stone-800">${filters.priceMin}</span>
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.priceMin}
              onChange={(e) => handlePriceChange(e, 'priceMin')}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-600 transition duration-300"
            />
          </div>
          <div className="transform transition duration-300">
            <label className="text-sm text-stone-600 mb-2 block">
              Max: <span className="font-semibold text-stone-800">${filters.priceMax}</span>
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.priceMax}
              onChange={(e) => handlePriceChange(e, 'priceMax')}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-600 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-8 pb-8 border-b border-stone-200">
        <h4 className="text-lg font-semibold text-stone-800 mb-4">Amenities</h4>
        <div className="space-y-3">
          {amenitiesOptions.map(({ id, label, icon: Icon }) => (
            <label key={id} className="flex items-center gap-3 cursor-pointer group transition duration-300">
              <input
                type="checkbox"
                checked={filters.amenities.includes(id)}
                onChange={() => handleAmenitiesChange(id)}
                className="w-4 h-4 rounded-lg border-stone-300 text-stone-600 cursor-pointer accent-stone-600 transition duration-300"
              />
              <Icon size={18} className="text-stone-700 group-hover:text-stone-900 transition duration-300" />
              <span className="text-stone-700 group-hover:text-stone-900 transition duration-300">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="text-lg font-semibold text-stone-800 mb-4">Minimum Rating</h4>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1, 0].map((rating) => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group transition duration-300">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => handleRatingChange(rating)}
                className="w-4 h-4 text-stone-600 cursor-pointer accent-stone-600 transition duration-300"
              />
              <div className="flex items-center gap-1">
                {rating > 0 && (
                  <>
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-stone-400 text-stone-400 transition duration-300" />
                    ))}
                    <span className="ml-2 text-stone-700 group-hover:text-stone-900 transition duration-300">{rating}+ Stars</span>
                  </>
                )}
                {rating === 0 && <span className="text-stone-700 group-hover:text-stone-900 transition duration-300">All Ratings</span>}
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
