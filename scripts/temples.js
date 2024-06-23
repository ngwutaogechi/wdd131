document.addEventListener('DOMContentLoaded', () => {
    // Update the footer with the current year and last modified date
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = year;
    lastModifiedElement.textContent = lastModified;

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.textContent = navMenu.classList.contains('active') ? 'X' : '☰';
    });
});
