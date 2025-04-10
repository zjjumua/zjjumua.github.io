// If you want to add interactivity, like auto-playing the song when the page loads
document.addEventListener("DOMContentLoaded", function() {
  const iframe = document.querySelector('iframe');
  iframe.src += "?autoplay=1"; // This will start the YouTube video automatically
});
