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
  if (e.target == form) {
    closeForm();
  }
});

const closeForm = () => {
  modal.classList.remove('mobile__search--open');
  disableScroll();
}