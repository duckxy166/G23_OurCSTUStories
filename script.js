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

// Scroll Effect - เปลี่ยนสีพื้นหลังเมื่อเลื่อนลง
window.addEventListener("scroll", () => {
    const heroSection = document.querySelector(".hero");
    const scrolled = window.scrollY;

    if (scrolled > 50) {
        heroSection.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    } else {
        heroSection.style.backgroundColor = "transparent";
    }
});
