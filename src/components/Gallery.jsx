import { useState } from "react";

const images = [
  {
    url: "/Image(1).jpeg",
    category: "Living Room",
  },
  {
    url: "/Image(2).jpeg",
    category: "Living Room",
  },
  {
    url: "/Image(3).jpeg",  
    category: "Living Room",
  },
  {
    url: "/Image(4).jpeg",
    category: "Bedroom",
  },
  {
    url: "/Image(5).jpeg",
    category: "Dining",
  },
  {
    url: "/Image(6).jpeg",
    category: "Dining",
  },
];


export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center text-[#0A2A3B] font-bold">Our Inside Pictures</h2>
      <p className="text-center text-[#1D80B2] mt-2">
        Take a look at some pretty pictures captured in and around our premises.
      </p>

      {/* Gallery Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img.url}
              alt=""
              className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
