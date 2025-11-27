import { useState } from "react";

const categories = ["All", "Living Room", "Bedroom", "Gym", "Bathroom", "Dining"];

const images = [
  // Living Room
  {
    url: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Living Room",
  },
  {
    url: "https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Living Room",
  },
  {
    url: "https://images.unsplash.com/photo-1612637968894-660373e23b03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Living Room",
  },

  // Bedroom
  {
    url: "https://images.unsplash.com/photo-1432297984334-707d34c4163a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
    category: "Bedroom",
  },
  
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
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
