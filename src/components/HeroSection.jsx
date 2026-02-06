const HeroSection = ({ brideName, groomName, weddingDate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto animate-slide-up">
        <p className="text-gold-600 text-sm md:text-base font-sans tracking-[0.3em] mb-6">
          KAMI MENGUNDANG ANDA
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-800 mb-4 leading-tight">
          {groomName}
        </h1>
        <p className="text-3xl md:text-4xl text-gold-600 font-serif mb-4">&</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-800 mb-12 leading-tight">
          {brideName}
        </h1>
        <div className="border-t border-gold-300 w-24 mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-gray-600 font-sans tracking-wide">
          {weddingDate}
        </p>
      </div>
    </section>
  )
}

export default HeroSection
