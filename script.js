// Получаем кнопку и body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Функция переключения темы
function toggleTheme() {
    body.classList.toggle('dark-theme');
    updateEmoji();
    // Сохраняем состояние в localStorage
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Функция обновления смайлика на кнопке
function updateEmoji() {
    if(body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️'; // солнце для темной темы
    } else {
        themeToggle.textContent = '🌙'; // луна для светлой темы
    }
}

// Вешаем обработчик на кнопку
if(themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Проверяем сохранённую тему при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
    updateEmoji();
}
const newsContainer = document.getElementById('news-container');
const newsData = [
    {title: "Новость 1", text: "Текст новости 1"},
    {title: "Новость 2", text: "Текст новости 2"}
];

newsData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
    newsContainer.appendChild(card);
});

