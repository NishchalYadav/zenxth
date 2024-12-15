//hamburger menu
// Get elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.createElement('div');

// Create mobile navigation dynamically
mobileNav.classList.add('mobile-nav');
mobileNav.innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="discord.html">Discord Management</a></li>
        <li><a href="instagram.html">Instagram Management</a></li>
        <li><a href="youtube.html">YouTube Management</a></li>
    </ul>
`;

// Append the mobile nav to the body (to keep it hidden initially)
document.body.appendChild(mobileNav);

// Toggle mobile menu
hamburgerIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
