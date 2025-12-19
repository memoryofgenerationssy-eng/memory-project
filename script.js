// ===== ПОДГРУЗКА НОВОСТЕЙ =====
const newsContainer = document.getElementById('news-container');

if (newsContainer) {
    fetch('news.json')
        .then(response => response.json())
        .then(newsData => {
            newsData.forEach(item => {
                const card = document.createElement('div');
                card.className = 'news-card';
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                    <a href="${item.link}" target="_blank" class="button">Подробнее</a>
                `;
                newsContainer.appendChild(card);
            });
        })
        .catch(err => console.error('Ошибка при загрузке новостей:', err));
}

// ===== ПЕРЕКЛЮЧАТЕЛЬ ТЕМНОЙ/СВЕТЛОЙ ТЕМЫ =====
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {

    // Функция обновления смайлика
    const updateThemeIcon = () => {
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️'; // солнце для светлой темы
        } else {
            themeToggleBtn.textContent = '🌙'; // луна для темной темы
        }
    };

    // Устанавливаем тему из localStorage при загрузке
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Обновляем смайлик при загрузке
    updateThemeIcon();

    // Обработчик клика на кнопку
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Сохраняем выбор пользователя
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        // Обновляем смайлик после переключения
        updateThemeIcon();
    });
}
