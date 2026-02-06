const EventDetails = ({ events }) => {
  return (
    <section className="relative py-20 px-6 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Detail Acara
          </h2>
          <div className="border-t border-gold-300 w-24 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 text-center">
                {event.name}
              </h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-gold-600 font-sans text-sm tracking-wider mb-2">
                    Tanggal & Waktu
                  </p>
                  <p className="text-gray-700 font-sans text-lg">
                    {event.date}
                  </p>
                  <p className="text-gray-700 font-sans text-lg">
                    {event.time}
                  </p>
                </div>
                <div className="border-t border-gold-100 my-6"></div>
                <div>
                  <p className="text-gold-600 font-sans text-sm tracking-wider mb-2">
                    Lokasi
                  </p>
                  <p className="text-gray-700 font-sans text-lg leading-relaxed">
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventDetails
