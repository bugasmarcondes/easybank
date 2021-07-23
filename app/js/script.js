// @1
// const header = document.querySelector('#hamburguer-btn')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

header.addEventListener('click', e => {
  const isOpen = header.classList.contains('open')
  if (!isOpen) {
    header.classList.add('open')
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
  } else {
    header.classList.remove('open')
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  }
})
