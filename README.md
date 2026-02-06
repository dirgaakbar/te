# Undangan Pernikahan - Premium Wedding Invitation Website

Sebuah website undangan pernikahan premium yang dibuat dengan React, Vite, dan Tailwind CSS. Dirancang khusus untuk pasar Indonesia dengan desain elegan, mewah, dan klasik.

## Fitur

- ✨ Opening screen dengan tombol "Buka Undangan"
- 🎨 Desain elegan dengan palet warna emas/champagne
- 🌸 Animasi bunga jatuh yang halus di background
- 📅 Countdown timer menuju hari pernikahan
- 📸 Galeri foto
- 📍 Lokasi acara dengan link Google Maps
- 💳 Amplop digital (transfer bank)
- 🎵 Kontrol musik (opsional)
- 📱 Mobile-first, responsif untuk semua perangkat

## Teknologi

- React 18
- Vite
- Tailwind CSS
- Google Fonts (Playfair Display, Inter, Poppins)

## Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Build untuk production:
```bash
npm run build
```

4. Preview build:
```bash
npm run preview
```

## Deploy ke GitHub Pages

1. Pastikan repository sudah di-push ke GitHub
2. Install gh-pages (jika belum):
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

## Kustomisasi

Edit file `src/App.jsx` untuk mengubah:
- Nama pengantin dan orang tua
- Tanggal pernikahan
- Detail acara (Akad & Resepsi)
- Informasi rekening bank
- Link Google Maps
- Jumlah foto di galeri

## Menambahkan Musik

1. Letakkan file musik di folder `public/`
2. Update `musicSrc` di `App.jsx`:
```javascript
musicSrc: '/music/wedding-song.mp3'
```

## Menambahkan Foto Galeri

Ganti placeholder di komponen `Gallery` dengan gambar asli. Anda bisa:
1. Letakkan foto di folder `public/images/`
2. Update array `galleryImages` di `App.jsx` dengan path foto

## Lisensi

Proyek ini dibuat untuk keperluan pribadi.
