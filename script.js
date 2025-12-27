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

/* ===== INTRO ANIMATION ===== */
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');

    // Задержка перед скрытием интро (например, 2.5 секунды)
    setTimeout(() => {
        intro.style.opacity = '0';

        // После анимации скрываем полностью
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000); // Должно совпадать с CSS transition opacity
    }, 2500);
});
const storyBtn = document.getElementById("story-btn");
const storyForm = document.getElementById("story-form-container");

if (storyBtn && storyForm) {
    storyBtn.addEventListener("click", () => {
        storyForm.style.display = "block";
        storyBtn.style.display = "none";
    });
document.addEventListener("DOMContentLoaded", () => {

    const storyBtn = document.getElementById("story-btn");
    const storyForm = document.getElementById("story-form-container");

    if (storyBtn && storyForm) {

        // Добавляем плавную анимацию через CSS
        storyForm.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
        storyForm.style.overflow = "hidden";
        storyForm.style.maxHeight = "0";
        storyForm.style.opacity = "0";

        storyBtn.addEventListener("click", () => {
            // Показываем форму
            storyForm.style.display = "block";

            // Плавное открытие
            setTimeout(() => {
                storyForm.style.maxHeight = "1000px"; // больше, чем высота формы
                storyForm.style.opacity = "1";
            }, 50); // небольшая задержка для триггера transition

            storyBtn.style.display = "none";

            // Скроллим к форме
            storyForm.scrollIntoView({ behavior: "smooth", block: "start" });

            // Автоскрытие через 40 секунд
            setTimeout(() => {
                // Плавное закрытие
                storyForm.style.maxHeight = "0";
                storyForm.style.opacity = "0";

                // Через 0.5s полностью скрываем и возвращаем кнопку
                setTimeout(() => {
                    storyForm.style.display = "none";
                    storyBtn.style.display = "block";
                }, 500);

            }, 40000); // 40 000 мс = 40 секунд
        });
    }

});


