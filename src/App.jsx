import { useState } from 'react'
import OpeningScreen from './components/OpeningScreen'
import HeroSection from './components/HeroSection'
import FallingFlowers from './components/FallingFlowers'
import CoupleSection from './components/CoupleSection'
import EventDetails from './components/EventDetails'
import CountdownTimer from './components/CountdownTimer'
import Gallery from './components/Gallery'
import LocationSection from './components/LocationSection'
import WeddingGift from './components/WeddingGift'
import MusicControl from './components/MusicControl'
import ClosingSection from './components/ClosingSection'

function App() {
  const [isOpened, setIsOpened] = useState(false)

  // Wedding data - customize these values
  const weddingData = {
    groom: {
      name: 'Ahmad Rizki Pratama',
      father: 'Budi Santoso',
      mother: 'Siti Nurhaliza',
    },
    bride: {
      name: 'Sari Indah Lestari',
      father: 'Dedi Kurniawan',
      mother: 'Ratna Dewi',
    },
    weddingDate: 'Sabtu, 15 Maret 2026',
    targetDate: '2026-03-15T10:00:00', // ISO format for countdown
    events: [
      {
        name: 'Akad Nikah',
        date: 'Sabtu, 15 Maret 2026',
        time: '09:00 WIB',
        location: 'Masjid Al-Ikhlas, Jl. Merdeka No. 123, Jakarta Pusat',
        mapsUrl: 'https://maps.google.com/?q=Masjid+Al-Ikhlas+Jakarta',
      },
      {
        name: 'Resepsi',
        date: 'Sabtu, 15 Maret 2026',
        time: '11:00 - 14:00 WIB',
        location: 'Grand Ballroom Hotel Majestic, Jl. Sudirman No. 456, Jakarta Selatan',
        mapsUrl: 'https://maps.google.com/?q=Hotel+Majestic+Jakarta',
      },
    ],
    galleryImages: Array(9).fill(null), // 9 placeholder images
    bankAccounts: [
      {
        bankName: 'BCA',
        accountNumber: '1234567890',
        accountName: 'Ahmad Rizki Pratama',
      },
      {
        bankName: 'Mandiri',
        accountNumber: '0987654321',
        accountName: 'Sari Indah Lestari',
      },
    ],
    // Optional: Add your music file to public folder and reference it here
    musicSrc: null, // e.g., '/music/wedding-song.mp3'
  }

  if (!isOpened) {
    return (
      <OpeningScreen
        onOpen={() => setIsOpened(true)}
        brideName={weddingData.bride.name}
        groomName={weddingData.groom.name}
      />
    )
  }

  return (
    <div className="relative min-h-screen">
      <FallingFlowers />
      
      <div className="relative z-10">
        <HeroSection
          brideName={weddingData.bride.name}
          groomName={weddingData.groom.name}
          weddingDate={weddingData.weddingDate}
        />

        <CoupleSection
          groom={weddingData.groom}
          bride={weddingData.bride}
        />

        <CountdownTimer targetDate={weddingData.targetDate} />

        <EventDetails events={weddingData.events} />

        <Gallery images={weddingData.galleryImages} />

        <LocationSection events={weddingData.events} />

        <WeddingGift bankAccounts={weddingData.bankAccounts} />

        <ClosingSection
          brideName={weddingData.bride.name}
          groomName={weddingData.groom.name}
        />
      </div>

      {weddingData.musicSrc && (
        <MusicControl audioSrc={weddingData.musicSrc} />
      )}
    </div>
  )
}

export default App
