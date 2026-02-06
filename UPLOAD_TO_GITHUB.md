# 📤 Panduan Upload ke GitHub

## Langkah-langkah Upload ke GitHub

### 1. Buat Repository Baru di GitHub

1. Buka https://github.com/new
2. Isi nama repository: `akbar` (atau nama lain yang Anda inginkan)
3. **Jangan centang** "Initialize with README"
4. Klik "Create repository"

### 2. Upload Kode ke GitHub

Jalankan perintah berikut di terminal:

```bash
cd wedding-invitation

# Inisialisasi git (jika belum)
git init
git branch -M main

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial commit: Premium wedding invitation website"

# Tambahkan remote repository (GANTI USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/akbar.git

# Push ke GitHub
git push -u origin main
```

**Catatan:** Ganti `USERNAME` dengan username GitHub Anda.

### 3. Setup GitHub Pages

#### Opsi A: Menggunakan GitHub Actions (Recommended - Otomatis)

1. Buka repository di GitHub
2. Buka tab **Settings**
3. Scroll ke **Pages** di sidebar kiri
4. Di bagian **Source**, pilih **GitHub Actions**
5. Setiap kali Anda push ke branch `main`, website akan otomatis di-deploy

#### Opsi B: Menggunakan gh-pages (Manual)

1. Pastikan nama repository di `vite.config.js` sudah benar:
   ```javascript
   base: '/akbar/',  // Sesuaikan dengan nama repo Anda
   ```

2. Jalankan deploy:
   ```bash
   npm run deploy
   ```

3. Buka Settings > Pages
4. Source: pilih branch `gh-pages`
5. Folder: `/ (root)`

### 4. Akses Website

Setelah deploy selesai, website Anda akan tersedia di:
- **Jika repo name = akbar**: `https://USERNAME.github.io/akbar/`
- **Jika repo name = USERNAME.github.io**: `https://USERNAME.github.io/`

### 5. Update Base Path (Jika Perlu)

Jika nama repository berbeda dengan `akbar`, edit file `vite.config.js`:

```javascript
base: '/NAMA-REPO-ANDA/',
```

## Troubleshooting

### Error: "Repository not found"
- Pastikan URL repository sudah benar
- Pastikan Anda sudah login ke GitHub di terminal atau browser

### Website tidak muncul setelah deploy
- Tunggu beberapa menit (deploy butuh waktu)
- Cek tab **Actions** di GitHub untuk melihat status deploy
- Pastikan base path di `vite.config.js` sesuai dengan nama repository

### Build error
- Pastikan semua dependencies terinstall: `npm install`
- Cek console untuk error message
- Pastikan Node.js versi 18 atau lebih baru

## File yang Sudah Disiapkan

✅ `.gitignore` - File yang diabaikan Git
✅ `.github/workflows/deploy.yml` - Konfigurasi GitHub Actions
✅ `vite.config.js` - Konfigurasi untuk GitHub Pages
✅ `package.json` - Script deploy sudah tersedia
✅ Semua komponen React sudah lengkap

## Next Steps

Setelah website online:
1. Customize data di `src/App.jsx`
2. Tambahkan foto ke folder `public/images/`
3. Tambahkan musik ke folder `public/music/`
4. Update link Google Maps dengan lokasi sebenarnya
