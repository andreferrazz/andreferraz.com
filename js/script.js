const btnIcon = document.getElementById('menu-mobile-icon');
const menuLinks = document.getElementById('links');

let menuIsOpen = false;

let example = {
  some: 'lsdfklsadlfj',
  other: 'ssakjdh',
}

const toggleMenu = () => {
  console.log(menuLinks);
  if (menuIsOpen) {
    console.log('close');
    btnIcon.classList.remove('fa-times');
    btnIcon.classList.add('fa-bars');
    menuLinks.style.display = 'none';

    menuIsOpen = false;
  } else {
    console.log('open');
    btnIcon.classList.remove('fa-bars');
    btnIcon.classList.add('fa-times');
    menuLinks.style.display = 'flex';

    menuIsOpen = true;
  }
}