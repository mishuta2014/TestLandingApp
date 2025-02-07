
setTimeout(() => {
  let popup = document.getElementById("cookie-popup");
  popup.style.display = "flex"; // Make it visible
  setTimeout(() => {
    popup.style.opacity = "1";
    popup.style.transform = "translateY(0)"; // Animate up
  }, 50);
}, 5000);

// Hide popup when accepted
function acceptCookies() {
  let popup = document.getElementById("cookie-popup");
  popup.style.opacity = "0";
  popup.style.transform = "translateY(20px)"; // Animate down
  setTimeout(() => {
    popup.style.display = "none";
  }, 500); // Wait for animation to finish
}
