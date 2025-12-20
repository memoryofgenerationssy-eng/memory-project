// ===== ТЁМНАЯ ТЕМА =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверка сохранённой темы
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌙';
} else {
    themeToggle.textContent = '🌞';
}

// Переключение темы
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')){
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌞';
    }
});

// ===== НОВОСТИ =====
const news = [
    {
        title: "Запуск проекта",
        text: "Проект «Память Поколений» официально запущен 8 октября 2024 года.",
        link: "#"
    },
    {
        title: "Первое видео",
        text: "Первое видео-интервью уже доступно на нашем YouTube-канале.",
        link: "#"
    },
    {
        title: "Подкаст стартует",
        text: "Запуск подкаста «Память Поколений» для сохранения историй молодого поколения.",
        link: "#"
    }
];

const newsContainer = document.getElementById('news-container');

news.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('news-card');
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a href="${item.link}" class="button">Подробнее</a>
    `;
    newsContainer.appendChild(card);
});
