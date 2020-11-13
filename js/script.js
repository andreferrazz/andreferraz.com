const btnIcon = document.getElementById('menu-mobile-icon');
const menuLinks = document.getElementById('links');

let menuIsOpen = false;

const toggleMenu = () => {

  if (menuIsOpen) {

    btnIcon.classList.remove('fa-times');
    btnIcon.classList.add('fa-bars');
    menuLinks.style.display = 'none';
    menuIsOpen = false;

  } else {

    btnIcon.classList.remove('fa-bars');
    btnIcon.classList.add('fa-times');
    menuLinks.style.display = 'flex';
    menuIsOpen = true;

  }
}
