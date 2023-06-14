
const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerNav = document.querySelector('.header-nav')

hamburgerMenu.addEventListener('click', function(){
    this.classList.toggle('active');
    headerNav.classList.toggle('header-nav--active');
});
