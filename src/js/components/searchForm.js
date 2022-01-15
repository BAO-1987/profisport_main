const search = document.querySelector('.mobile__btn');
const overlay = document.querySelector('.overlay');
const formClose = document.querySelector('.form__close');
const formCloseMobile = document.querySelector('.mobile-form__close');
const formSearch = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const headerPhone = document.querySelector('.header__actions-item--phone');
const formMobile = document.querySelector('.mobile__item--form');

formSearch.addEventListener('click', (e) => {
  formSearch.classList.toggle('form--active');
  formInput.classList.toggle('form__input--active');
  headerPhone.classList.toggle('header__actions-item--phone-active');
});

formClose.addEventListener('click', (e) => {
  formSearch.classList.remove('form--active');
  // formInput.classList.remove('form__input--active');
  // headerPhone.classList.remove('header__actions-item--phone-active');
  });

search.addEventListener('click', (e) => {
  formMobile.classList.toggle('mobile__item--form-open');
  overlay.classList.toggle('overlay--active');
});

formCloseMobile.addEventListener('click', (e) => {
  formMobile.classList.remove('mobile__item--form-open');
  overlay.classList.remove('overlay--active');
});