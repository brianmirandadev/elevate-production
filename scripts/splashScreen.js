const splashScreen = document.querySelector(".splash-screen");
const splashLogo = document.querySelector(".splash-logo");
const splashLogoRectangles = document.querySelectorAll(".splash-rectangles");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    splashLogoRectangles.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 400);
    });
  });

  setTimeout(() => {
    splashLogo.classList.add("zoom");
  }, 2000);

  setTimeout(() => {
    splashScreen.style.opacity = "0";
  }, 2300);
  setTimeout(() => {
    splashScreen.style.display = "none";
  }, 3300);
});
