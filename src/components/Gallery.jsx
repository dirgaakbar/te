const Gallery = ({ images }) => {
  return (
    <section className="relative py-20 px-6 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Galeri Foto
          </h2>
          <div className="border-t border-gold-300 w-24 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-full h-full bg-gradient-to-br from-gold-200 to-champagne-300 flex items-center justify-center">
                <span className="text-gold-600 font-serif text-sm opacity-50">
                  Foto {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
