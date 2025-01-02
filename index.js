document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for requesting a quote! Someone from our team will be in touch soon.');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form after submission
});

// Array of image paths
const images = [
    "images/bad-construct1.jpeg",
    "images/bad-construct2.jpg",
    "images/bad-construct3.jpg" // Add more images as needed
];

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-slides');
    const slides = Array.from(carousel.children);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    
    if (!prevBtn || !nextBtn) {
        console.error('Navigation buttons not found');
        return;
    }

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        const offset = -index * 100; // Assuming each slide takes 100% width
        carousel.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', function() {
        console.log('Previous button clicked'); // For debugging
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function() {
        console.log('Next button clicked'); // For debugging
        goToSlide(currentIndex + 1);
    });
});