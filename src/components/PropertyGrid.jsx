import PropertyCard from './PropertyCard';

export default function PropertyGrid({ properties, onImageClick }) {
  if (properties.length === 0) {
    return (
      <div className="col-span-full text-center py-12 animate-fade-in">
        <p className="text-stone-600 text-lg transition duration-300">No properties found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
}
