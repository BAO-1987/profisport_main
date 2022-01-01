// document.addEventListener('DOMContentLoaded', () => {
//   const tabs = document.querySelector('.filter');
//   const tabsBtn = document.querySelectorAll('.filter__btn');
//   const tabsContent = document.querySelectorAll('.projects__list');

//   if (tabs) {
//     tabs.addEventListener('click', (e) => {
//       if (e.target.classList.contains('filter__btn')) {
//         const tabsPath = e.target.dataset.tabsPath;
//         tabsBtn.forEach(el => {
//           el.classList.remove('filter__btn--active')
//         });
//         document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('filter__btn--active');
//         tabsHandler(tabsPath);
//       }

//     });
//   }

//   const tabsHandler = (path) => {
//     tabsContent.forEach(el => {
//       el.classList.remove('projects__list--active')
//     });
//     document.querySelector(`[data-tabs-target="${path}"]`).classList.add('projects__list--active');
//   };
// });