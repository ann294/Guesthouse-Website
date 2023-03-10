// ==== Show Menu ========//
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//========== Menu Show =========== //
/* validate if constant exist */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
} 

// ========= Menu Hidden =========== //
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// =========== Remove Menu Mobile ==========//
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click, linkAction'))

// ============= Change background Header ================//
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       :header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)




