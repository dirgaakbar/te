# Cara Deploy ke GitHub Pages

## Opsi 1: Menggunakan GitHub Actions (Otomatis)

1. **Buat repository baru di GitHub**
   - Buka https://github.com/new
   - Buat repository dengan nama `akbar` (atau nama lain)
   - Jangan centang "Initialize with README"

2. **Push kode ke GitHub**
   ```bash
   cd wedding-invitation
   git init
   git add .
   git commit -m "Initial commit: Premium wedding invitation website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/akbar.git
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages**
   - Buka Settings > Pages di repository GitHub Anda
   - Source: pilih "GitHub Actions"
   - Setiap kali push ke branch `main`, website akan otomatis di-deploy

4. **Update base path di vite.config.js**
   - Jika repository name adalah `akbar`, sudah benar
   - Jika berbeda, ubah `/akbar/` sesuai nama repository Anda

## Opsi 2: Menggunakan gh-pages (Manual)

1. **Install gh-pages** (sudah ada di package.json)
   ```bash
   npm install
   ```

2. **Update vite.config.js**
   - Pastikan `base: '/NAMA-REPO/'` sesuai dengan nama repository Anda

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Aktifkan GitHub Pages**
   - Buka Settings > Pages di repository GitHub Anda
   - Source: pilih branch `gh-pages`
   - Folder: `/ (root)`

## Catatan Penting

- **Base Path**: Jika repository name adalah `akbar`, URL akan menjadi:
  `https://USERNAME.github.io/akbar/`
  
- **Root Domain**: Jika ingin deploy ke root domain (`https://USERNAME.github.io/`):
  - Buat repository dengan nama `USERNAME.github.io`
  - Ubah `base: '/'` di vite.config.js
  - Deploy ke branch `main` atau `gh-pages`

- **Custom Domain**: Setelah deploy, Anda bisa menambahkan custom domain di Settings > Pages
