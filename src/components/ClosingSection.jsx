const ClosingSection = ({ brideName, groomName }) => {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-700 font-sans leading-relaxed mb-8">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </p>
        <p className="text-xl md:text-2xl font-serif text-gray-800 mb-4">
          Terima kasih
        </p>
        <div className="border-t border-gold-300 w-24 mx-auto mb-8"></div>
        <p className="text-2xl md:text-3xl font-serif text-gray-800 mb-2">
          {groomName}
        </p>
        <p className="text-gold-600 font-serif text-xl mb-2">&</p>
        <p className="text-2xl md:text-3xl font-serif text-gray-800">
          {brideName}
        </p>
      </div>
    </section>
  )
}

export default ClosingSection
