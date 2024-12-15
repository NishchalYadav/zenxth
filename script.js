// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle the hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on navLinks to show/hide the menu
    navLinks.classList.toggle('active');
});

// JavaScript for Scroll Trigger
AOS.init();

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show Back to Top Button on Scroll
window.onscroll = function () {
    const backButton = document.querySelector('.back-to-top');
    if (document.documentElement.scrollTop > 300) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
};