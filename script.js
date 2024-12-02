//HTML FORM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestBookForm');
    const entries = document.getElementById('entries');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach((msg) => {
            msg.textContent = '';
        });

        // Get form field values
        const userName = document.getElementById('User').value.trim();
        const email = document.getElementById('email').value.trim();
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validation checks
        if (userName === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!topic) {
            document.getElementById('topicError').textContent = 'Please select a topic.';
            isValid = false;
        }

        if (message === '') {
            document.getElementById('topicError').textContent = 'Message cannot be empty.';
            isValid = false;
        }

        if (isValid) {
            // Create new entry element
            const entry = document.createElement('div');
            entry.className = 'entry-item';

            entry.innerHTML = `
                <div class="entry-profile">${userName.charAt(0).toUpperCase()}</div>
                <div class="entry-text">
                    <h3>${userName}</h3>
                    <p><strong>Topic:</strong> ${topic}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p>${message}</p>
                </div>
            `;

            // Append new entry to the list
            entries.appendChild(entry);

            // Reset the form
            form.reset();
        }
    });
});



//Nav bar
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}



// Animation Hero Section
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");


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
// ปุ่ม Prev และ Next
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1)); // ลดสไลด์
document.querySelector('.next').addEventListener('click', () => changeSlide(1));  // เพิ่มสไลด์



// ค่าปุ่มเลื่อน
let startX = 0;
slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) changeSlide(1);  // Swipe ซ้ายเพื่อเลื่อนไปขวา (Next)
    if (endX - startX > 50) changeSlide(-1); // Swipe ขวาเพื่อเลื่อนไปซ้าย (Prev)
    resetAutoSlide();
});
window.addEventListener('scroll', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(1), 3000);
});


// ฟังก์ชันที่ใช้ Fade ขึ้นหน้า journey
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

// ฟังก์ชันที่ใช้ Fade ขึ้นหน้า journey
document.addEventListener("DOMContentLoaded", () => {
    const contentItems2 = document.querySelectorAll('.content-item2');

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

    contentItems2.forEach(item2 => observer.observe(item2));
});

make-responsive
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }


//Future
main

