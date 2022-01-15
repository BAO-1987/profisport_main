document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.catalog-filter');
  const tabsBtn = document.querySelectorAll('.catalog-filter__item');
  const tabsContent = document.querySelectorAll('.catalog__list');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('catalog-filter__item')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {
          el.classList.remove('catalog-filter__item--active')
        });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('catalog-filter__item--active');
        tabsHandler(tabsPath);
      }

    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => {
      el.classList.remove('catalog__list--active')
    });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('catalog__list--active');
  };
});