document.addEventListener('DOMContentLoaded', function() {
    // Variable to track the navbar state
    let navbarOpen = false;

    // Function to close the navbar for mobile view
    function closeNavbar() {
        const navbar = document.getElementById('navbarResponsive');
        if (navbar) {
            navbar.classList.remove('show');
        }
        navbarOpen = false;
    }

    // Toggle the navbar collapse state when burger menu is clicked
    const burgerImg = document.getElementById('burger-img');
    if (burgerImg) {
        burgerImg.addEventListener('click', function() {
            const navbar = document.getElementById('navbarResponsive');
            if (navbar) {
                if (navbarOpen) {
                    closeNavbar();
                } else {
                    navbar.classList.add('show');
                    navbarOpen = true;
                }
            }
        });
    }

    // Close the navbar when a menu item is clicked (for mobile view)
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeNavbar();
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Smooth scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });

                // Update the URL hash
                window.history.pushState(null, '', targetId);
            }
        });
    });
});



function callPhoneNumber(phoneNumber) {
    // Use the 'tel:' protocol to initiate a phone call
    window.location.href = 'tel:' + phoneNumber;
}

let button = document.getElementsByClassName('fixed-button')[0];

// function checkCarouselVisibility() {
//     var rect = carousel.getBoundingClientRect();

//     // Check if the top of the carousel is below the viewport
//     if (rect.top > window.innerHeight) {
//         button.style.display = 'block'; // Show the button
//     } else {
//         button.style.display = 'none'; // Hide the button
//     }}

window.addEventListener('hashchange', function() {
    let currentSection = window.location.hash;
    console.log('Current section:', currentSection);
});

const navBar = document.getElementById('navbarResponsive')
const burgerMenu = document.getElementById('burger-img')

const closeNavBar = (e) => {
    e.preventDefault()

    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show')
    }
}

burgerMenu.addEventListener('click', (e) => closeNavBar(e))


// gallery effects
const container = document.querySelector('.container-special');
console.log(container);
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})



function callPhoneNumber(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}


// form submit clear
    // Function to refresh the page
function refreshPage() {
    window.location.reload();
}

// Check if the page was loaded after form submission
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('submitted')) {
        refreshPage();
    }
}

