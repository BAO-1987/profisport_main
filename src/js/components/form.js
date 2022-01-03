const search = document.querySelector('.mobile__btn');
const form = document.querySelector('.mobile__search');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.mobile-form__close');

search.addEventListener('click', (e) => {
  search.classList.toggle('mobile__btn--active');
  form.classList.toggle('mobile__search--open');
  overlay.classList.toggle('overlay--active');
});

closeBtn.addEventListener('click', (e) => {
 form.classList.remove('mobile__search--open');
 overlay.classList.remove('overlay--active')
 console.log(closeBtn);
});

