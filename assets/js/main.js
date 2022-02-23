function burgerMenu(selector) {
  const menu = document.querySelector(selector);
  const button = document.querySelector('.header-nav__burger');
  const links = document.querySelectorAll('.header-nav__menu-link');
  const overlay = document.querySelector('.header-nav__overlay');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  })
  links.addEventListener('click', toggleMenu());
  overlay.addEventListener('click', toggleMenu());

  function toggleMenu() {
    button.classList.toggle('header-nav__burger_active');
    if(button.classList.contains('header-nav__burger_active')) {
      menu.style.right = 0;
    } else {
      menu.style.right = '-200%';
    }
  }
}
burgerMenu('.header-nav__menu');