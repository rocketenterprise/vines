document.getElementById('search-button').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;

    // Implement hotel search logic and display results in .hotel-results
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar_toggler');
    const navLinks = document.querySelector('.nav-links');

    navbarToggler.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});