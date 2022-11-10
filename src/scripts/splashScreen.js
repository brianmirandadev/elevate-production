const splashScreen = document.querySelector('.splash-screen');
const splashLogo = document.querySelector('.splash-header');
const splashLogoSpan = document.querySelectorAll('.splash-logo');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    splashLogoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (index + 1) * 400)
    })
  })

  setTimeout(() => {
    splashLogoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('active');
        span.classList.add('fade');
      }, (index + 1) * 50)
    })
  }, 2000)

  setTimeout(() => {
    splashScreen.style.top = '-100vh';
  }, 2300)
})
