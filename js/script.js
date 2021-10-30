const header = document.getElementById('header')
const logo = document.getElementById('logo')
const navLinks = document.querySelectorAll('.nav-link')

function setHeaderDark() {
  header.style.backgroundColor = '#272727'
  logo.style.color = 'white'
  navLinks.forEach(navLink => navLink.style.color = 'white')
}

function setHeaderLight() {
  header.style.backgroundColor = 'white'
  logo.style.color = '#272727'
  navLinks.forEach(navLink => navLink.style.color = '#272727')
}

window.scrollY === 0 ? setHeaderDark() : setHeaderLight()

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 200) return

    window.scrollY < 100 ? setHeaderDark() : setHeaderLight()
  },
  { passive: true }
);
