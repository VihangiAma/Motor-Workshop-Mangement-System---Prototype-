
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});
let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("slide");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }

        function plusSlides(n) {
            slideIndex += n - 1;
            showSlides();
        }
        document.addEventListener("DOMContentLoaded", function () {
            // Select the About Us link
            const aboutLink = document.querySelector("nav ul li a[href='about.html']");
        
            if (aboutLink) {
                aboutLink.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent default anchor behavior
                    window.location.href = "about.html"; // Redirect to about.html
                });
            }
        });
        document.addEventListener("DOMContentLoaded", function () {
            // Select the Packages link
            const aboutLink = document.querySelector("nav ul li a[href='package.html']");
        
            if (aboutLink) {
                aboutLink.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent default anchor behavior
                    window.location.href = "package.html"; // Redirect to package.html
                });
            }
        });
