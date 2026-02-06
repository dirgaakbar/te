import { useState } from 'react'

const OpeningScreen = ({ onOpen, brideName, groomName }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOpen = () => {
    setIsAnimating(true)
    setTimeout(() => {
      onOpen()
    }, 500)
  }

  return (
    <div className={`fixed inset-0 z-50 bg-warm-white flex items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center px-6 animate-fade-in">
        <p className="text-gold-600 text-lg md:text-xl font-sans tracking-widest mb-8">
          The Wedding Of
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-800 mb-4 leading-tight">
          {groomName}
        </h1>
        <p className="text-2xl md:text-3xl text-gold-600 font-serif mb-8">&</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-800 mb-12 leading-tight">
          {brideName}
        </h1>
        <button
          onClick={handleOpen}
          className="px-8 py-3 bg-gold-500 text-white font-sans text-sm tracking-wider rounded-full hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  )
}

export default OpeningScreen
