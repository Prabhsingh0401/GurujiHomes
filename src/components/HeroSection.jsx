export default function HeroSection() {
  return (
    <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl mx-4 md:mx-6 lg:mx-8 mt-6 shadow-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=600&fit=crop')`,
        }}
      />

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-start text-white px-6 md:px-12 lg:px-16 animate-slide-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl leading-tight opacity-100 transform transition duration-700">
          Your Home Away From Home
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl font-light text-gray-100 transition duration-700 delay-100">
          Experience luxury and comfort in our fully furnished hotel apartments, designed for short and long-term stays.
        </p>
        <div className="flex gap-4 transform transition duration-700 delay-200">
          <button className="bg-white hover:bg-stone-100 text-stone-900 font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl active:scale-95">
            Book Your Stay
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 hover:bg-white/10 active:scale-95">
            View Apartments
          </button>
        </div>
      </div>
    </section>
  );
}
