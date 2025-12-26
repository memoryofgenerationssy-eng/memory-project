window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    
    // Показываем интро 2.5 секунды
    setTimeout(() => {
        intro.style.opacity = '0'; // плавно исчезает
        setTimeout(() => {
            intro.style.display = 'none'; // удаляем из потока
        }, 1000); // совпадает с transition
    }, 2500);

    // Тема сайта
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

    // Новости
    const news = [
        { title: 'Интервью с семьями', text: 'Проект «Память поколений» ищет семью, с которой мы запишем новое интервью — о корнях, традициях, памяти и любви.', link: 'https://vk.com/wall-227763139_120' }
    ];
    const newsContainer = document.getElementById('news-container');
    news.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('news-card');
        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        const p = document.createElement('p');
        p.textContent = item.text;
        const btn = document.createElement('a');
        btn.textContent = 'Подробнее';
        btn.href = item.link;
        btn.classList.add('button');
        card.append(h3, p, btn);
        newsContainer.appendChild(card);
    });
});
