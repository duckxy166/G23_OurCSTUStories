
//Nav bar
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


// เพิ่มแอนิเมชันให้ข้อความใน Hero Section
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");

 ซ่อนข้อความ
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = "translateY(-20px)";
    heroSubtitle.style.opacity = 0;
    heroSubtitle.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroTitle.style.transition = "opacity 1s, transform 1s";
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        heroSubtitle.style.transition = "opacity 1s, transform 1s";
        heroSubtitle.style.opacity = 1;
        heroSubtitle.style.transform = "translateY(0)";
    }, 1000);
});

//animation
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Auto slide function
function changeSlide(direction = 1) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    resetAutoSlide(); // Reset timer on user interaction
}

// Auto slide every 5 seconds
let autoSlideInterval = setInterval(() => changeSlide(1), 3000);

// Reset auto slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(1), 3000);
}

// Add event listeners for Prev/Next buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// Swipe support
let startX = 0;
slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) changeSlide(1); // Swipe left
    if (endX - startX > 50) changeSlide(-1); // Swipe right
    resetAutoSlide();
});

// Scroll listener to pause auto slide when scrolling
window.addEventListener('scroll', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(1),3000);
});


// ฟังก์ชันที่ใช้ Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const contentItems = document.querySelectorAll('.content-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // 
            } else {
                entry.target.classList.remove('show'); //
            }
        });
    }, {
        threshold: 0.2 // 
    });

    contentItems.forEach(item => observer.observe(item));
});



