/**
 * Mengubah path foto dari CONFIG menjadi URL yang benar.
 * - http:// atau https:// → dipakai apa adanya
 * - Lainnya (mis. 'wanita.jpg', 'image/Galeri-1.jpg') → BASE_URL + path
 *   → jalan di dev dan production (GitHub Pages).
 *
 * Cukup ubah CONFIG di App.jsx; tidak perlu ubah komponen.
 */
export function toImgSrc(path) {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
