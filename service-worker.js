// Service worker SEDERHANA -- tujuannya cuma supaya browser menganggap halaman ini
// "layak di-install" sebagai aplikasi (PWA). SENGAJA TIDAK menyimpan cache data transaksi
// atau hasil panggilan API (supaya stok/laporan yang ditampilkan selalu data TERBARU,
// bukan data lama yang ke-cache). Cuma dipakai untuk syarat teknis instalasi.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  self.clients.claim();
});

// Selalu ambil dari internet langsung (network), tidak menyimpan/membaca dari cache sama
// sekali -- supaya data yang ditampilkan selalu real-time.
self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
