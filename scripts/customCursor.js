document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');
  const links = document.querySelectorAll('a');

  document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY - 20}px`;
    cursor.style.left = `${e.clientX - 20}px`;
  })

  document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
      cursor.classList.remove('expand');
    }, 500)
  })

})
