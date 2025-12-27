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

/* ===== INTRO ANIMATION ===== */
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    if (!intro) return;

    intro.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000);
    }, 2500);

    /* ===== STORY FORM ===== */
    const storyBtn = document.getElementById("story-btn");
    const storyForm = document.getElementById("story-form-container");

    if (storyBtn && storyForm) {
        storyForm.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
        storyForm.style.overflow = "hidden";
        storyForm.style.maxHeight = "0";
        storyForm.style.opacity = "0";

        storyBtn.addEventListener("click", () => {
            storyForm.style.display = "block";

            setTimeout(() => {
                storyForm.style.maxHeight = "1000px";
                storyForm.style.opacity = "1";
            }, 50);

            storyBtn.style.display = "none";
            storyForm.scrollIntoView({ behavior: "smooth", block: "start" });

            // Автоскрытие через 40 секунд
            setTimeout(() => {
                storyForm.style.maxHeight = "0";
                storyForm.style.opacity = "0";
                setTimeout(() => {
                    storyForm.style.display = "none";
                    storyBtn.style.display = "block";
                }, 500);
            }, 40000);
        });
    }
});
