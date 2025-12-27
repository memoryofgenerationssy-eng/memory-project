/* ===== THEME TOGGLE ===== */
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

/* ===== NEWS ===== */
const news = [
    { title: 'Интервью с семьями', text: 'Проект «Память поколений» ищет семью, с которой мы запишем новое интервью — о корнях, традициях, памяти и любви.', link: 'https://vk.com/wall-227763139_120' },
    { title: 'Презентация проекта', text: 'В стенах Казанской православной духовной семинарии, в рамках XXIV Всероссийской научно-богословской конференции, состоялась презентация нашего проекта.', link: 'https://vk.com/wall-227763139_113' },
    { title: 'День рождения проекта', text: 'Набираем команду волонтёров для проведения мероприятий.', link: 'https://vk.com/wall-227763139_106' }
];

const newsContainer = document.getElementById('news-container');
if (newsContainer) {
    news.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('news-card');

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a href="${item.link}" target="_blank" class="button">Подробнее</a>
        `;

        newsContainer.appendChild(card);
    });
}

/* ===== INTRO ANIMATION ===== */
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    if (!intro) return;

    if (!sessionStorage.getItem('introShown')) {
        // Показ интро только один раз за сессию
        intro.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            intro.style.opacity = '0';
            setTimeout(() => {
                intro.style.display = 'none';
            }, 1000);
        }, 2500);

        sessionStorage.setItem('introShown', 'true');
    } else {
        // Если интро уже было, скрываем сразу
        intro.style.display = 'none';
    }

    /* ===== STORY FORM LOGIC ===== */
    const storyBtn = document.getElementById("story-btn");
    const storyForm = document.getElementById("story-form-container");

    if (storyBtn && storyForm) {
        storyForm.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
        storyForm.style.overflow = "hidden";
        storyForm.style.maxHeight = "0";
        storyForm.style.opacity = "0";

        // Элемент для таймера
        const timerDisplay = document.createElement('p');
        timerDisplay.style.marginTop = '10px';
        timerDisplay.style.fontWeight = 'bold';
        storyForm.appendChild(timerDisplay);

        storyBtn.addEventListener("click", () => {
            storyForm.style.display = "block";
            setTimeout(() => {
                storyForm.style.maxHeight = "1000px";
                storyForm.style.opacity = "1";
            }, 50);

            storyBtn.style.display = "none";
            storyForm.scrollIntoView({ behavior: "smooth", block: "start" });

            // Таймер обратного отсчёта
            let countdown = 60;
            timerDisplay.textContent = `Форма закроется через ${countdown} секунд`;

            const interval = setInterval(() => {
                countdown--;
                timerDisplay.textContent = `Форма закроется через ${countdown} секунд`;

                if (countdown <= 0) {
                    clearInterval(interval);

                    // Плавное закрытие формы
                    storyForm.style.maxHeight = "0";
                    storyForm.style.opacity = "0";

                    setTimeout(() => {
                        storyForm.style.display = "none";
                        storyBtn.style.display = "block";
                        timerDisplay.textContent = '';
                    }, 500);
                }
            }, 1000);
        });
    }
});
