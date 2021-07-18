import './styles.css';

const menuMobile = document.querySelector(".burger-menu"); //burger icon
const topBar     = document.querySelector(".navbar"); //all navbar
const navMenu    = document.querySelector(".navegacion-principal"); //enlaces
const windows    = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


//Menu Mobile Click Burger
menuMobile.addEventListener('click', () =>{
    if(navMenu.classList.contains('nav-mobile')){
        navMenu.classList.add('hidden');
        navMenu.classList.remove('nav-mobile');
        topBar.classList.remove('mobile-navbar');
    } else {
        navMenu.classList.remove('hidden');
        navMenu.classList.add('nav-mobile');
        topBar.classList.add('mobile-navbar');
        };
});
