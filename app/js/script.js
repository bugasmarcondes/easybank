// @1
// const header = document.querySelector('#hamburguer-btn')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

header.addEventListener('click', e => {
  const isOpen = header.classList.contains('open')
  if (!isOpen) {
    body.classList.add('noscroll')
    header.classList.add('open')
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
    fadeElems.forEach(element => {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  } else {
    body.classList.remove('noscroll')
    header.classList.remove('open')
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
    fadeElems.forEach(element => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  }
})
