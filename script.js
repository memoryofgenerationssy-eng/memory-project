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
    { title: 'Интервью с семьями', text: 'Проект «Память поколений» ищет семью, с которой мы запишем новое интервью — о корнях, традициях, памяти и любви.', link: 'https://vk.com/wall-227763139_120' },
    { title: 'Презентация проекта', text: 'В стенах Казанской православной духовной семинарии, в рамках XXIV Всероссийской научно-богословской конференции, состоялась презентация нашего проекта.', link: 'https://vk.com/wall-227763139_113' },
    { title: 'День рождения проекта', text: 'Набираем команду волонтёров для проведения мероприятий.', link: 'https://vk.com/wall-227763139_106' }
];

const newsContainer = document.getElementById('news-container');

news.forEach((item, i) => {
    const card = document.createElement('div');
    card.classList.add('news-card');
    card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p><a href="${item.link}" class="button">Подробнее</a>`;
    newsContainer.appendChild(card);
});

// =======================
// Анимация появления элементов на всех страницах
// =======================
window.addEventListener('load', () => {
    // HEADER
    const header = document.querySelector('header');
    if(header) setTimeout(()=> header.classList.add('visible'), 200);

    // NAV LINKS
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach((link, i) => setTimeout(()=> link.classList.add('visible'), 400 + i*100));

    // SECTIONS
    const sections = document.querySelectorAll('section');
    sections.forEach((sec, i) => setTimeout(()=> sec.classList.add('visible'), 600 + i*150));

    // BUTTONS
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((btn, i) => setTimeout(()=> btn.classList.add('visible'), 900 + i*100));

    // TEAM CARDS
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, i) => setTimeout(()=> card.classList.add('visible'), 1100 + i*100));
});
