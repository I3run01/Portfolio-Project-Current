class projectsTypes {
    private projectImage: string
    private projectNameEng:string
    private projectNamePTBR:string
    private projectRoutes:string

    constructor(image: string, nameEng: string, namePTBR: string, route: string) {
        this.projectImage = image
        this.projectNameEng = nameEng
        this.projectNamePTBR = namePTBR
        this.projectRoutes = route
    }

    public get image() {
        return this.projectImage
    }

    public get nameEng() {
        return this.projectNameEng
    }

    public get namePTBR() {
        return this.projectNamePTBR
    }

    public get routes() {
        return this.projectRoutes
    }
}

export const ProjectsType = [
    new projectsTypes(
        'ProjectsType/landingPages.png',
        'Landing pages',
        'Landing pages',
        '/landingPages'
    ),
    new projectsTypes(
        'ProjectsType/automations.png',
        'Automations',
        'Automações',
        '/automations'
    ),
    new projectsTypes(
        'ProjectsType/challenges.png',
        'Challenges',
        'Desafios',
        '/challenges'
    ),
    new projectsTypes(
        'ProjectsType/projectsWithDatabase.png',
        'Projects with Database',
        'Projetos com banco de dados',
        '/projectsWithDataBase'
    ),
]