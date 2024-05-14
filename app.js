const skills = {
    "data": [
        [ "Python", "assets/skills/python.svg" ],
        [ "Scala", "assets/skills/scala.svg" ],
        [ "Bash", "assets/skills/bash.svg" ],
        [ "SQL", "assets/skills/sql.svg" ],
        [ "Power BI", "assets/skills/pbi.svg" ],
        [ "Databricks", "assets/skills/databricks.svg" ],
        [ "Snowflake", "assets/skills/snowflake.svg" ],
        [ "Apache Airflow", "assets/skills/airflow.svg" ],
        [ "Docker", "assets/skills/docker.svg" ],
        [ "Spark", "assets/skills/spark.svg" ],
        [ "Azure", "assets/skills/azure.svg" ]
    ],
    "web": [
        [ "HTML", "assets/skills/html.svg" ],
        [ "CSS", "assets/skills/css.svg" ],
        [ "JavaScript", "assets/skills/javascript.svg" ],
        [ "PHP", "assets/skills/php.svg" ],
        [ "SQL", "assets/skills/sql.svg" ],
        [ "Svelte", "assets/skills/svelte.svg" ],
        [ "Firebase", "assets/skills/firebase.svg" ],
        [ "Terraform", "assets/skills/terraform.svg" ],
        [ "BootStrap", "assets/skills/bootstrap.svg" ],
        [ "Docker", "assets/skills/docker.svg" ]
    ]
};

const skillChangeBtn = document.querySelectorAll('.skill-change');
const skillTitle = document.querySelector('.skills-area h2');
const skillList = document.querySelector('.skills-list');

let skill = 'data';

skillChangeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        skill =  skill === 'data' ? 'web' : 'data';
        skillTitle.innerHTML = `My ${skill} skills`
        skillList.innerHTML = null;
        skills[skill].forEach((s) => {
            skillList.innerHTML += `<li><img src="${s[1]}" alt="skills_icon"><span>${s[0]}</span></li>`;
        })
    })
})

const observer = new IntersectionObserver((entries) => {
    let n = 0;
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // if (entry.target.classList.contains('card')) {
            //     // setTimeout(() => {
            //     //     entry.target.style.animation = `scroll-animate 1s ease-in-out forwards`;
            //     // }, 500 * n);
            //     // n += 1;
            // } else {
                entry.target.classList.add('show');
            // }
        }      
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme);
}

darkButton.onclick = () => {
    body.classList.replace('light','dark');
    localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark','light');
    localStorage.setItem('theme', 'light');
};