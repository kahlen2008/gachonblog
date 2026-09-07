// Keep every photo visible, including when JavaScript is unavailable.
document.querySelectorAll('img').forEach(image => {
  image.loading = 'lazy';
  image.decoding = 'async';
});
