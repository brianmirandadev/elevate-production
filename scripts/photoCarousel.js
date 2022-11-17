window.addEventListener('DOMContentLoaded', () => {
  const photoCards = document.querySelectorAll('.photo');

  photoCards.forEach((photoCard) => {
    photoCard.addEventListener('click', (e) => {
      photoCards.forEach((photoCard) => {
        photoCard.classList.remove('active');
      })

      e.target.classList.add('active');
    })
  })
})
