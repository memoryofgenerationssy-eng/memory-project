// Проверяем тему при загрузке
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-theme');
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) themeButton.textContent = '☀️';
}

// Переключение темы
document.getElementById('theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    const themeButton = document.getElementById('theme-toggle');

    if (html.classList.contains('dark-theme')) {
        html.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        themeButton.textContent = '🌙';
    } else {
        html.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = '☀️';
    }
});

// Новости
const news = [
    {
        title: "Проект запущен",
        content: "Проект «Память Поколений» официально стартовал 8 октября 2024 года."
    },
    {
        title: "Первое видео",
        content: "Опубликовано первое видео с историей молодого поколения."
    },
    {
        title: "Новый подкаст",
        content: "Запущен подкаст проекта о сохранении памятных историй молодежи."
    }
];

const newsContainer = document.getElementById('news-container');

news.forEach(item => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <a href="#" class="button">Подробнее</a>
    `;
    newsContainer.appendChild(card);
});
