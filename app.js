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

console.log(skills["data"][0][1]);
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
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('show');
            // entry.target.classList.add('hidden');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
