const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(savedTheme);
/* ===== THEME TOGGLE ===== */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-theme') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌙';
} else {
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
        themeToggle.textContent = '🌙';
    } else {
        localStorage.removeItem('theme');
        themeToggle.textContent = '☀️';
    }
});

/* ===== NEWS ===== */
const news = [
    {
        title: 'Интервью с семьями',
        text: 'Проект «Память поколений» ищет семью, с которой мы запишем новое интервью — о корнях, традициях, памяти и любви.',
        link: 'https://vk.com/wall-227763139_120'
    },
    {
        title: 'Презентация проекта',
        text: 'В стенах Казанской православной духовной семинарии состоялась презентация нашего проекта.',
        link: 'https://vk.com/wall-227763139_113'
    },
    {
        title: 'День рождения проекта',
        text: 'Набираем команду волонтёров для проведения мероприятий.',
        link: 'https://vk.com/wall-227763139_106'
    }
];

const newsContainer = document.getElementById('news-container');

if (newsContainer) {
    news.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a href="${item.link}" class="button" target="_blank">Подробнее</a>
        `;

        newsContainer.appendChild(card);
    });
}

/* ===== INTRO ===== */
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');

    if (!intro) return;

    // Показываем интро ~2.5 сек
    setTimeout(() => {
        intro.classList.add('hidden');
    }, 2500);
});
