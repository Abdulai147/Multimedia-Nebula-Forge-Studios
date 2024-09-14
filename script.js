document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('imageSlider');
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        // Remove active class from the current image
        images[currentIndex].classList.remove('active');
        images[currentIndex].classList.add('hidden');

        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Add active class to the next image
        images[currentIndex].classList.remove('hidden');
        images[currentIndex].classList.add('active');
    }

    // Initial setup
    images[currentIndex].classList.add('active');

    // Set interval to switch images every 3 seconds
    setInterval(showNextImage, 3000);
});
