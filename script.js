// Чекаємо, поки завантажиться вся сторінка
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ІНТЕРАКТИВНІСТЬ: Підсвічування активних посилань меню при кліку
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Видаляємо клас active у всіх
            navLinks.forEach(lnk => lnk.style.color = '');
            // Додаємо колір поточному посиланню
            this.style.color = '#ff5722';
        });
    });

    // 2. ДИНАМІЧНИЙ ЕФЕКТ: Поява карток при прокручуванні сайту (Scroll Animation)
    const cards = document.querySelectorAll('.card, .tour-banner, .feature-box');
    
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if(cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Початкові стилі для анімації (робимо елементи трохи зміщеними)
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    // Запускаємо перевірку при скролі та при завантаженні
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Запуск один раз відразу

    // 3. ОБРОБКА КНОПКИ: Просте спливаюче вікно при кліку на "Обрати тур"
    const actionBtn = document.querySelector('.header-actions .btn');
    if(actionBtn) {
        actionBtn.addEventListener('click', (e) => {
            e.preventDefault(); // щоб сторінка не стрибала
            alert('Дякуємо за інтерес! Форма бронювання турів по Європі буде доступна найближчим часом.');
        });
    }
});