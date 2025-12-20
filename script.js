// script.js

// ===== Новости =====
const newsContainer = document.getElementById('news-container');

// Пример массива новостей
const newsData = [
    {
        title: "Проект стартовал!",
        text: "Проект «Память Поколений» начал свою деятельность 8 октября 2024 года. Следите за обновлениями и новыми историями молодого поколения."
    },
    {
        title: "Первое видео",
        text: "Мы опубликовали первое видео-интервью с участником проекта. Посмотрите его на нашем YouTube-канале."
    },
    {
        title: "Офлайн-мероприятие",
        text: "В ближайшее время планируется встреча с волонтёрами и участниками проекта в Казанской семинарии."
    }
];

// Функция создания карточки новости
function createNewsCard(newsItem) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <h3>${newsItem.title}</h3>
        <p>${newsItem.text}</p>
    `;
    return card;
}

// Заполняем контейнер новостями
newsData.forEach(item => {
    const card = createNewsCard(item);
    newsContainer.appendChild(card);
});

// ===== ТЁМНАЯ ТЕМА =====
const themeToggle = document.getElementById('theme-toggle');

// Изначальный смайлик на кнопке темы
let darkTheme = false;

themeToggle.addEventListener('click', () => {
    darkTheme = !darkTheme;
    document.body.classList.toggle('dark-theme', darkTheme);

    // Сменяем смайлик на кнопке
    if (darkTheme) {
        themeToggle.textContent = "🌙"; // Луна
    } else {
        themeToggle.textContent = "☀️"; // Солнце
    }
});

// ===== Инициализация кнопки темы при загрузке =====
window.addEventListener('DOMContentLoaded', () => {
    themeToggle.textContent = "☀️"; // Солнце по умолчанию
});
