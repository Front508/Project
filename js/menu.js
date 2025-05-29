const burger = document.querySelector('.burger');
const nav__list = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
  nav__list.classList.toggle('active');
});