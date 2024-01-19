$(document).ready(function(){

    //globalscript
    // Function to close the navbar for mobile view
    function closeNavbar() {
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarResponsive").removeClass("show");
    }

    
    $("#burger-img").on('click', function() {
        $("#navbarResponsive").collapse('toggle');
    });

    // Close the navbar when a menu item is clicked (for mobile view)
    $(".navbar-nav").on('click', 'a', function() {
        closeNavbar();
    });

    if (document.URL.includes('index.html')) {
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
            
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    }


    

});




function callPhoneNumber(phoneNumber) {
    // Use the 'tel:' protocol to initiate a phone call
    window.location.href = 'tel:' + phoneNumber;
}

var button = document.getElementsByClassName('fixed-button')[0];

// function checkCarouselVisibility() {
//     var rect = carousel.getBoundingClientRect();

//     // Check if the top of the carousel is below the viewport
//     if (rect.top > window.innerHeight) {
//         button.style.display = 'block'; // Show the button
//     } else {
//         button.style.display = 'none'; // Hide the button
//     }}

window.addEventListener('hashchange', function() {
    var currentSection = window.location.hash;
    console.log('Current section:', currentSection);
});
