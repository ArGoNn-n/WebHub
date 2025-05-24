const headerHTML = `
<div class="header-container">
    <div class="logo">
        <h1>Окуляри & Зір</h1>
    </div>
    <nav class="navbar">
        <div class="burger">☰</div>
        <ul class="nav-menu">
            <li><a href="index.html">Головна</a></li>
            <li><a href="optics.html">Оптика</a></li>
            <li><a href="lenses.html">Контактні лінзи</a></li>
            <li><a href="frames.html">Оправи</a></li>
            <li><a href="sunglasses.html">Сонцезахисні окуляри</a></li>
            <li><a href="screen.html">Захист від монітора</a></li>
            <li><a href="tips-faq.html">Поради та FAQ</a></li>
            <li><a href="contacts.html">Контакти</a></li>
        </ul>
    </nav>
</div>
`;

const footerHTML = `
<div class="footer-container">
    <div class="footer-section">
        <h3>Окуляри & Зір</h3>
        <p>© 2025 Усі права захищено.</p>
    </div>
    <div class="footer-section">
        <h3>Навігація</h3>
        <ul>
            <li><a href="index.html">Головна</a></li>
            <li><a href="contacts.html">Контакти</a></li>
            <li><a href="tips-faq.html">Поради та FAQ</a></li>
        </ul>
    </div>
    <div class="footer-section">
        <h3>Контакти</h3>
        <p>Email: argonargon1010@gmail.com</p>
        <p>Телефон: +380 934 030 319</p>
    </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Хедер і футер
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');

    if (headerElement) {
        headerElement.innerHTML = headerHTML;
        const burger = headerElement.querySelector('.burger');
        const navMenu = headerElement.querySelector('.nav-menu');
        if (burger && navMenu) {
            burger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    // FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('h3');
        if (header) {
            header.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });

    // Модальне вікно для зображення
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');

    window.openModal = function(imgSrc) {
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Закриття модального вікна при кліку поза зображенням
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Кнопка "Тест 4 лаба"
    const testButton = document.getElementBy('testButton');
    if (testButton) {
        let isRed = false;
        testButton.addEventListener('click', () => {
            isRed = !isRed;
            testButton.style.color = isRed ? '#FF0000' : '#000000';
        });
    }
});