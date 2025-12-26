// ===== Тема (светлая/темная) =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
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

// ===== Новости =====
const news = [
    { title: 'Интервью с семьями', text: 'Проект «Память поколений» ищет семью, с которой мы запишем новое интервью — о корнях, традициях, памяти и любви.', link: '#' },
    { title: 'Презентация проекта', text: 'В стенах Казанской православной духовной семинарии состоялась презентация нашего проекта.', link: '#' },
    { title: 'День рождения проекта', text: 'Набираем команду волонтёров для проведения мероприятий.', link: '#' }
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

// ===== Интро =====
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    setTimeout(() => {
        intro.style.opacity = '0';
        intro.style.pointerEvents = 'none';
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000);
    }, 3000);
});
