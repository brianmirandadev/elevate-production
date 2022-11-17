document.addEventListener('DOMContentLoaded', () => {
  const conceptionCardGradient = document.getElementsByClassName('gradient-background')[0];
  const productionCardGradient = document.getElementsByClassName('gradient-background')[1];
  const postproductionCardGradient = document.getElementsByClassName('gradient-background')[2];

  window.addEventListener('scroll', () => {
    const windowScrollY = window.scrollY / 4;

    conceptionCardGradient.setAttribute('style', `transform: translate(-50%, -50%) rotate(${windowScrollY}deg);`)
    productionCardGradient.setAttribute('style', `transform: translate(-50%, -50%) rotate(${windowScrollY + 50}deg);`)
    postproductionCardGradient.setAttribute('style', `transform: translate(-50%, -50%) rotate(${windowScrollY + 100}deg);`)
  })
})
