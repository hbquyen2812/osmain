
// =======================================
// FA6.30 - LANDER LANDING PAGE
// WEBPACK ENTRY FILE
// =======================================


// 1. IMPORT CSS
import './styles.css';


// 2. IMPORT IMAGE
import productImage from './assets/products.png';


// 3. DISPLAY PRODUCT IMAGE
const imageElement = document.getElementById('productImage');

if (imageElement) {
    imageElement.src = productImage;
}


// =======================================
// 4. MOBILE NAVIGATION
// =======================================

const menuToggle = document.getElementById('menuToggle');

const navigation = document.getElementById('mainNav');

const navLinks = document.querySelectorAll('.nav-link');


// Open / close mobile menu
menuToggle.addEventListener('click', function () {

    const isOpen = navigation.classList.toggle('open');

    menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

});


// =======================================
// 5. ACTIVE NAVIGATION LINK
// =======================================

navLinks.forEach(function (link) {

    link.addEventListener('click', function () {

        // Remove active class
        navLinks.forEach(function (item) {
            item.classList.remove('active');
        });

        // Add active class to clicked link
        link.classList.add('active');

        // Close mobile navigation
        navigation.classList.remove('open');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

    });

});


// =======================================
// 6. CLOSE MENU WITH ESC KEY
// =======================================

document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {

        navigation.classList.remove('open');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

    }

});


// =======================================
// 7. CHECK APPLICATION
// =======================================

console.log('FA6.30 - Lander Webpack loaded successfully!');
