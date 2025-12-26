// ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-theme' ? '🌙' : '☀️';
}else{
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')){
        localStorage.setItem('theme','dark-theme');
        themeToggle.textContent = '🌙';
    }else{
        localStorage.setItem('theme','');
        themeToggle.textContent = '☀️';
    }
});

// ===== АНИМАЦИЯ ПРИ ЗАГРУЗКЕ =====
window.addEventListener('load', () => {
    body.classList.add('loaded');

    const sections = document.querySelectorAll('section');
    sections.forEach((sec, i) => {
        setTimeout(()=>sec.classList.add('visible'), i*150);
    });

    const buttons = document.querySelectorAll('.button');
    buttons.forEach((btn, i) => {
        setTimeout(()=>{
            btn.style.opacity='1';
            btn.style.transform='translateY(0)';
        }, 500 + i*100);
    });
});

// ===== ГЕНЕРАЦИЯ НОВОСТЕЙ =====
const news = [
    {title:'Интервью с семьями', text:'Проект «Память поколений» ищет семью, с которой мы запишем новое интервью — о корнях, традициях, памяти и любви.', link:'https://vk.com/wall-227763139_120'},
    {title:'Презентация проекта', text:'В стенах Казанской православной духовной семинарии, в рамках XXIV Всероссийской научно-богословской конференции, состоялась презентация нашего проекта.', link:'https://vk.com/wall-227763139_113'},
    {title:'День рождения проекта', text:'Набираем команду волонтёров для проведения мероприятий.', link:'https://vk.com/wall-227763139_106'}
];

const newsContainer = document.getElementById('news-container');

news.forEach(item=>{
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
