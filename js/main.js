const formEmail = document.querySelector('.home__form')
const formEmailInput = document.querySelector('.home__form-input')

formEmailInput.addEventListener('focus', function () {
  formEmail.classList.add('home__form-active')
})

formEmailInput.addEventListener('blur', function () {
  formEmail.classList.remove('home__form-active')
})

// let headerBurger = document.querySelector('.header__burger')
// // let headerMenu = document.querySelector('.header__menu')
// let back = document.querySelector('body')
// let headerList = document.querySelector('.header__list')

// headerBurger.onclick = function () {
//   headerBurger.classList.toggle('active')
//   // headerMenu.classList.toggle('active')
//   headerList.classList.toggle('active')
//   back.classList.toggle('lock')
// }

// headerList.onclick = function () {
//   headerList.classList.remove('active')
//   back.classList.toggle('lock')
// }

let burgerMenu = document.querySelector('.header__burger')
let headerList = document.querySelector('.header__list')

burgerMenu.onclick = function () {
  burgerMenu.classList.toggle('open')
  headerList.classList.toggle('active')
}

headerList.onclick = function () {
  burgerMenu.classList.remove('open')
  headerList.classList.remove('active')
}
