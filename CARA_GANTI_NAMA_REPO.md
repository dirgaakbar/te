# 🔄 Cara Ganti Nama Repository

## File yang HARUS Diubah (WAJIB)

### 1. `vite.config.js` - **PALING PENTING!**

Edit baris **10**:

```javascript
// GANTI 'akbar' dengan nama repo baru Anda
base: process.env.NODE_ENV === 'production' ? '/NAMA-REPO-BARU/' : '/',
```

**Contoh:**
- Jika repo baru = `undangan-pernikahan` → `base: '/undangan-pernikahan/'`
- Jika repo baru = `wedding` → `base: '/wedding/'`
- Jika deploy ke root domain (`USERNAME.github.io`) → `base: '/'`

---

## File yang Bisa Diubah (OPSIONAL - Dokumentasi)

File-file ini hanya untuk dokumentasi, tidak mempengaruhi website:

### 2. `upload.sh` (baris 8)
```bash
echo "Example: ./upload.sh johndoe NAMA-REPO-BARU"
```

### 3. `DEPLOY.md` dan `UPLOAD_TO_GITHUB.md`
- Ganti semua referensi `akbar` dengan nama repo baru
- Ini hanya untuk dokumentasi, tidak wajib

---

## Langkah-langkah Lengkap

### 1. Ganti di `vite.config.js`
```javascript
// Baris 10 - GANTI INI:
base: process.env.NODE_ENV === 'production' ? '/akbar/' : '/',
// Menjadi:
base: process.env.NODE_ENV === 'production' ? '/NAMA-REPO-BARU/' : '/',
```

### 2. Build ulang (opsional, untuk test)
```bash
npm run build
```

### 3. Push ke GitHub dengan nama repo baru
```bash
git remote set-url origin https://github.com/USERNAME/NAMA-REPO-BARU.git
git push -u origin main
```

---

## Contoh Praktis

### Jika repo baru = `undangan-saya`:

**File: `vite.config.js`**
```javascript
base: process.env.NODE_ENV === 'production' ? '/undangan-saya/' : '/',
```

**URL website akan menjadi:**
```
https://USERNAME.github.io/undangan-saya/
```

---

## ⚠️ Catatan Penting

1. **Hanya `vite.config.js` yang WAJIB diubah** - file lain opsional
2. **Base path harus sesuai nama repository** di GitHub
3. **Jika salah base path**, website tidak akan muncul dengan benar
4. **Setelah ganti**, build ulang: `npm run build`
5. **Deploy ulang** ke GitHub Pages

---

## Quick Reference

| Nama Repo | Base Path di vite.config.js |
|-----------|----------------------------|
| `akbar` | `'/akbar/'` |
| `undangan-pernikahan` | `'/undangan-pernikahan/'` |
| `wedding` | `'/wedding/'` |
| `USERNAME.github.io` | `'/'` (root) |
