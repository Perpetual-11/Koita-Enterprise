document.getElementById('btnScrollTop')
    .addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
);


// JavaScript for Image Sliders
function createImageSlider(sliderId, timeInterval) {
    let currentIndex = 0;
    const sliderContainer = document.getElementById(sliderId);
    const sliderImages = sliderContainer.querySelectorAll(".right img");

    // Hide all images initially
    sliderImages.forEach((img, index) => {
        img.style.display = index === 0 ? "block" : "none";
    });

    function slideTo(index) {
        currentIndex = index;
        const translateX = -currentIndex * 100;
        sliderContainer.style.transform = `translateX(${translateX}%)`;
    }

    function changeImage() {
        sliderImages[currentIndex].style.display = "block";
        for (let i = 0; i < sliderImages.length; i++) {
            if (i !== currentIndex) {
                sliderImages[i].style.display = "none";
            }
        }

        if (currentIndex < sliderImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        setTimeout(changeImage, timeInterval);
    }

    // Run function when page loads
    window.onload = changeImage;
}

// Call the createImageSlider function for each slider container with a unique ID
createImageSlider("slideme", 3000);
// Add more sliders with unique IDs and adjust the time interval as needed

