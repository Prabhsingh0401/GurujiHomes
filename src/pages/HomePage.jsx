import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import OurServices from '../components/ourServices';
import ContactSection from '../components/contactSection';
import Gallery from '../components/Gallery';
import AboutUs from '../components/Aboutus';
import NumbersSection from '../components/ourNumbers';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs></AboutUs>
      <NumbersSection />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      </div>

      <div>
        <OurServices />
      </div>

      <div>
        <Gallery />
      </div>

      {/* Featured Property Details Section */}
      
      <ContactSection />

      <Footer />
    </div>
  );
}
