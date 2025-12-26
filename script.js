const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Устанавливаем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-theme' ? '🌙' : '☀️';
} else {
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
        themeToggle.textContent = '🌙';
    } else {
        localStorage.setItem('theme', '');
        themeToggle.textContent = '☀️';
    }
});

// Новости
const news = [
    { title: 'Самира', text: 'Проект «Память Поколений» начал свою работу 8 октября 2024 года.', link: '' },
    { title: 'Первое интервью', text: 'Мы провели первое интервью с участником проекта.', link: '#' },
    { title: 'Волонтёры подключаются', text: 'Набираем команду волонтёров для проведения мероприятий.', link: 'https://vk.com/wall-227763139_106' }
];

const newsContainer = document.getElementById('news-container');

news.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('news-card');

    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    card.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = item.text;
    card.appendChild(p);

    const btn = document.createElement('a');
    btn.textContent = 'Подробнее';
    btn.href = item.link;
    btn.classList.add('button');
    card.appendChild(btn);

    newsContainer.appendChild(card);
});
