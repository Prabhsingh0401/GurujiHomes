import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import PropertyGrid from '../components/PropertyGrid';
import PropertyDetailsSection from '../components/PropertyDetailsSection';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import ReviewCard from '../components/ReviewCard';
import OurServices from '../components/ourServices';
import { propertiesData, reviewsData } from '../data/mockData';

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({
    propertyType: [],
    priceMin: 0,
    priceMax: 5000,
    amenities: [],
    rating: 0,
  });
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    priceRange: '',
    guests: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryImage, setGalleryImage] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const itemsPerPage = 6;

  // Filter properties based on all filters
  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      // Property type filter
      if (
        filters.propertyType.length > 0 &&
        !filters.propertyType.includes(property.propertyType)
      ) {
        return false;
      }

      // Price filter
      if (property.price < filters.priceMin || property.price > filters.priceMax) {
        return false;
      }

      // Amenities filter
      if (
        filters.amenities.length > 0 &&
        !filters.amenities.every((amenity) => property.amenities.includes(amenity))
      ) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && property.rating < filters.rating) {
        return false;
      }

      // Search location filter
      if (
        searchFilters.location &&
        !property.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      ) {
        return false;
      }

      // Search price range filter
      if (searchFilters.priceRange) {
        const [minPrice, maxPrice] = searchFilters.priceRange
          .replace('+', '')
          .split('-')
          .map((p) => parseInt(p.trim()));
        if (
          (maxPrice && property.price < minPrice) ||
          (maxPrice && property.price > maxPrice)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [filters, searchFilters]);

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProperties, currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSearch = (searchData) => {
    setSearchFilters(searchData);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handleImageClick = (image) => {
    setGalleryImage(image);
    setIsGalleryOpen(true);
  };

  return (
    <div className="bg-gradient-to-b from-white to-white min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar onSearch={handleSearch} />

        {/* Filter Sidebar & Property Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <div className="flex-1">
            <PropertyGrid
              properties={paginatedProperties}
              onImageClick={handleImageClick}
            />
            {filteredProperties.length > itemsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>

      <div>
        <OurServices />
      </div>

      {/* Featured Property Details Section */}
      {selectedProperty === null && propertiesData.length > 0 && (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-amber-100">
          <div className="max-w-7xl mx-auto">
            <PropertyDetailsSection property={propertiesData[0]} />

            {/* Reviews Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Guest Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviewsData.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      <Modal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)}>
        <img
          src={galleryImage}
          alt="Property Gallery"
          className="w-full h-auto rounded-lg"
        />
      </Modal>

      <Footer />
    </div>
  );
}
