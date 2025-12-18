fetch('news.json')
    .then(response => response.json())
    .then(newsData => {
        const container = document.getElementById('news-container');

        newsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <a href="${item.link}" target="_blank" class="button">Подробнее</a>
            `;
            container.appendChild(card);
        });
    })
    .catch(err => console.error('Ошибка при загрузке новостей:', err));
