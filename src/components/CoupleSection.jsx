const CoupleSection = ({ groom, bride }) => {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Pasangan Pengantin
          </h2>
          <div className="border-t border-gold-300 w-24 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Groom */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
                {groom.name}
              </h3>
              <p className="text-gold-600 font-sans text-sm tracking-wider mb-6">
                Putra dari
              </p>
              <p className="text-gray-700 font-sans text-lg">
                Bapak {groom.father}
              </p>
              <p className="text-gray-700 font-sans text-lg">
                & Ibu {groom.mother}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-64 bg-gold-200"></div>

          {/* Bride */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
                {bride.name}
              </h3>
              <p className="text-gold-600 font-sans text-sm tracking-wider mb-6">
                Putri dari
              </p>
              <p className="text-gray-700 font-sans text-lg">
                Bapak {bride.father}
              </p>
              <p className="text-gray-700 font-sans text-lg">
                & Ibu {bride.mother}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoupleSection
