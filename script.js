// ====== ТЁМНАЯ ТЕМА ======
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌙 Тёмная тема';
} else {
    body.classList.remove('dark-theme');
    themeToggle.textContent = '☀️ Светлая тема';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌙 Тёмная тема';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '☀️ Светлая тема';
    }
});

// ====== НОВОСТИ НА ГЛАВНОЙ ======
const newsContainer = document.getElementById('news-container');

if (newsContainer) {
    const newsItems = [
        {
            title: 'Проект запущен!',
            text: 'Мы начали работу над проектом «Память Поколений». Следите за обновлениями и участвуйте в наших мероприятиях.',
            link: '#'
        },
        {
            title: 'Первое интервью',
            text: 'Опубликовано первое интервью с участником проекта. Оно доступно на YouTube и нашем сайте.',
            link: '#'
        },
        {
            title: 'Новый волонтёрский пункт',
            text: 'Мы открываем новый пункт проекта в Уруссу. Присоединяйтесь к команде!',
            link: '#'
        }
    ];

    newsItems.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        const newsTitle = document.createElement('h3');
        newsTitle.textContent = item.title;

        const newsText = document.createElement('p');
        newsText.textContent = item.text;

        const moreButton = document.createElement('a');
        moreButton.classList.add('button');
        moreButton.textContent = 'Подробнее';
        moreButton.href = item.link;

        newsCard.appendChild(newsTitle);
        newsCard.appendChild(newsText);
        newsCard.appendChild(moreButton);
        newsContainer.appendChild(newsCard);
    });
}
