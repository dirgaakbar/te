const LocationSection = ({ events }) => {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Lokasi Acara
          </h2>
          <div className="border-t border-gold-300 w-24 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-warm-cream rounded-xl p-6 md:p-8 shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-serif text-gray-800 mb-4 text-center">
                {event.name}
              </h3>
              <p className="text-gray-700 font-sans text-center mb-6 leading-relaxed">
                {event.location}
              </p>
              {event.mapsUrl && (
                <div className="text-center">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gold-500 text-white font-sans text-sm tracking-wider rounded-full hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationSection
