//Nav bar
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


// เพิ่มแอนิเมชันให้ข้อความใน Hero Section
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");

    // เริ่มต้นด้วยการซ่อนข้อความ
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = "translateY(-20px)";
    heroSubtitle.style.opacity = 0;
    heroSubtitle.style.transform = "translateY(20px)";

    // ใช้ setTimeout เพื่อทำแอนิเมชัน
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

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}
