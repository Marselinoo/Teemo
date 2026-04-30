function CTASection() {
  return (
    <section className="bg-gray-50 py-24 px-6 flex justify-center">
      
      <div className="bg-linear-to-r from-purple-600 to-pink-500 text-white rounded-3xl p-10 md:p-16 text-center max-w-4xl w-full shadow-lg">
        
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold">
          Ready to Start Competing?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-white/80">
          Join thousands of professionals already on CompeteHub
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition">
            Gabung Sekarang - Gratis →
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTASection;