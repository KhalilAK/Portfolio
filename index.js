const githubLink = document.querySelector('.githubLink');
const linkedinLink = document.querySelector('.linkedinLink');
const header = document.querySelector(".header");

const navContainer = document.querySelector('.nav-bar-container');
const mainContainer = document.querySelector('.main-container');

const loadWrapper = document.querySelector('.loading-wrapper');
const loader = loadWrapper.children[0];
const nav = document.querySelector('.nav')

const navLinks = document.querySelectorAll('.navbarLink');

const aboutSection = document.querySelector('.about-container');
const projectSection = document.querySelector('.project-container');


const [home, about, projects, resume] = [navLinks[0], navLinks[1], navLinks[2], navLinks[2]];



githubLink.addEventListener('click', openGitHub);
linkedinLink.addEventListener('click', openLinkedin);

let lastScrollTop = 0;
const scrollThreshold = 0;


mainContainer.addEventListener('scroll', () => {
    console.log(mainContainer.scrollTop);
    let scrollTop = mainContainer.scrollTop;
    window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
    })

    lastScrollTop = scrollTop;
})

loader.addEventListener('click', goTop);


home.addEventListener('click', goTop);

about.addEventListener('click', (e) => {
    mainContainer.scrollTo({
        top:aboutSection.offsetTop-100,
        behavior: 'smooth'
    })
})
projects.addEventListener('click', (e) => {
    mainContainer.scrollTo({
        top: projectSection.offsetTop-100,
        behavior: 'smooth',
    })
});


loader.addEventListener('animationend', (e) => {
    if(e.animationName === 'fill'){
        loader.classList.add('finished');
        loadWrapper.classList.add('finished');
    }
})


function goTop(){
    mainContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function openResume(){
    window.open('./Resume0-2.pdf');
}

function openGitHub(){
    window.open("https://github.com/KhalilAK");
}

function openLinkedin(){
    //window.open("https://www.linkedin.com/in/ameer-khalil-5b4b6525b/");
}
