document.addEventListener('DOMContentLoaded', () => {

    // ===== ПОДГРУЗКА НОВОСТЕЙ =====
    fetch('news.json')
        .then(response => response.json())
        .then(newsData => {
            const container = document.getElementById('news-container');
            if (!container) return;

            newsData.forEach(item => {
                const card = document.createElement('div');
                card.className = 'news-card';
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                    <a href="${item.link}" target="_blank" class="button">Подробнее</a>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => console.error('Ошибка при загрузке новостей:', err));

    // ===== ПЕРЕКЛЮЧАТЕЛЬ ТЕМНОЙ/СВЕТЛОЙ ТЕМЫ =====
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    // Устанавливаем тему из localStorage при загрузке
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Обработчик кнопки
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

});
