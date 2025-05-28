

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
    // const modal = document.getElementById('imageModal');
    // const modalImg = document.getElementById('modalImage');
    // const closeBtn = document.querySelector('.modal-close');

    // window.openModal = function(imgSrc) {
    //     modal.style.display = 'flex';
    //     modalImg.src = imgSrc;
    // };

    // if (closeBtn) {
    //     closeBtn.addEventListener('click', () => {
    //         modal.style.display = 'none';
    //     });
    // }

    // Закриття модального вікна при кліку поза зображенням
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Кнопка "Тест 4 лаба"
//     const testButton = document.getElementBy('testButton');
//     if (testButton) {
//         let isRed = false;
//         testButton.addEventListener('click', () => {
//             isRed = !isRed;
//             testButton.style.color = isRed ? '#FF0000' : '#000000';
//         });
//     }
});