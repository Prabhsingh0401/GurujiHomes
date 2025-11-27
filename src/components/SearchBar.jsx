import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSearch({
      location: formData.get('location'),
      priceRange: formData.get('priceRange'),
      guests: formData.get('guests'),
    });
  };

  return (
    <section className="bg-gradient-to-b from-stone-50 to-white py-8 mx-0 rounded-3xl -mt-20 relative z-10 mb-12 shadow-lg">
      <form
        onSubmit={handleSearch}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-end justify-between px-6 md:px-12 lg:px-16"
      >
        {/* Location Input */}
        <div className="flex-1 min-w-[200px] transform transition duration-300 hover:scale-105">
          <label className="block text-sm font-semibold text-stone-800 mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Search by location..."
            className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition duration-300 hover:border-stone-400"
          />
        </div>

        {/* Price Range */}
        <div className="flex-1 min-w-[200px] transform transition duration-300 hover:scale-105">
          <label className="block text-sm font-semibold text-stone-800 mb-2">
            Price Range
          </label>
          <select
            name="priceRange"
            className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition duration-300 bg-white text-stone-800 hover:border-stone-400 cursor-pointer"
          >
            <option value="">All Prices</option>
            <option value="0-500">$0 - $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000+">$2,000+</option>
          </select>
        </div>

        {/* Guests / Rooms */}
        <div className="flex-1 min-w-[200px] transform transition duration-300 hover:scale-105">
          <label className="block text-sm font-semibold text-stone-800 mb-2">
            Rooms
          </label>
          <select
            name="guests"
            className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:border-transparent transition duration-300 bg-white text-stone-800 hover:border-stone-400 cursor-pointer"
          >
            <option value="">All Rooms</option>
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
            <option value="4+">4+ Rooms</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-900 hover:to-black text-white font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <Search size={20} /> Search
        </button>
      </form>
    </section>
  );
}
