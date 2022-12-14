import {projectDetailsClass} from '../../../components/ProjectsDetails/ProjectDetailsClass/ProjectDetailsClass'

export const landingPages = [
    new projectDetailsClass
    (
        'Portifólio classico',
        'Classic Portfolio',
        "Realizei esse projeto em React.JS, nesse projeto eu aprendi a fazer animações com CSS, trabalhei com variáveis globais (ContextAPI) e componentes",
        " I did this project with React.JS, I used ContextAPI to work with global variables, I also worked with components and CSS animations.",
        'ProjectsDetails/landingPages/oldPortfolio/Cape.png',
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub',
                link: 'https://github.com/I3run01/Portfolio-Project-V-1.0'
            },
            {
                icons: 'Icons/Deploy.svg',
                name: 'Deploy',
                link: 'https://i3run01portfolio.netlify.app/'
            }
        ],
        [
            {
               image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/About Me.png',
               textENG: 'Page that say about me',
               textPTBR: 'Página que fala sobre mim'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/openMenus.png',
                textENG: 'Old portfolio with the menu open',
                textPTBR: 'Portfólio antigo com o menu aberto'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/Dark theme.png',
                textENG: 'Dark theme in the site',
                textPTBR: 'Tema escuro do site'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/Projects.png',
                textENG: "This part of my old portfolio shows the projects I've done",
                textPTBR: 'Essa parte do site mostra os projetos que fiz'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/Skills.png',
                textENG: "This part of my old portfolio shows the skills that I have",
                textPTBR: 'Essa parte do site mostra as habilidades que tenho'
            },
    ]
    ),
]