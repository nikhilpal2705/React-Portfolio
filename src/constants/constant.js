import images from "@/assets/img/images";

export const links = {
    email: "dummyEmail@gmail.com",
    phone: "+123 456 7890",
    linkedin: "https://www.linkedin.com/in/dummyName",
    github: "https://github.com/dummyName",
    telegram: "https://t.me/dummyName",
    twitter: "https://twitter.com/dummyName",
    facebook: "https://facebook.com/dummyName",
    instagram: "https://instagram.com/dummyName",
    resume: "https://drive.google.com/"
};

export const profileData = {
    bgImage: images["hero-bg"],
    name: "Full Name",
    roles: ["Designer", "Developer", "Freelancer", "Photographer"],
    city: "New York, USA",
    address: "A108 Adam Street, New York, NY 535022"
};

export const aboutData = {
    mainSummary: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    title: "UI/UX Designer & Web Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: images["profile"],
    detailsLeft: [
        { label: "Birthday", value: "1 May 1995" },
        { label: "Website", value: "www.example.com" },
        { label: "Phone", value: links.phone },
        { label: "City", value: profileData.city }
    ],
    detailsRight: [
        { label: "Age", value: "30" },
        { label: "Degree", value: "Master" },
        { label: "Email", value: links.email },
        { label: "Freelance", value: "Available" }
    ],
    additionalDescription: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque."
};

export const skillsData = {
    mainSummary: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.",
    skillsLeft: [
        { name: "HTML", level: 90, class: "devicon-html5-plain colored" },
        { name: "CSS", level: 80, class: "devicon-css3-plain" },
        { name: "JavaScript", level: 75, class: "devicon-javascript-plain" },
        { name: "jQuery", level: 85, class: "devicon-jquery-plain" },
        { name: "React", level: 75, class: "devicon-react-original" },
        { name: "Angular", level: 50, class: "devicon-angularjs-plain" },
        { name: "Java", level: 80, class: "devicon-java-plain" },
    ],
    skillsRight: [
        { name: "Node", level: 90, class: "devicon-nodejs-plain-wordmark" },
        { name: "Spring Boot", level: 70, class: "devicon-spring-original" },
        { name: "MySQL", level: 90, class: "devicon-mysql-original" },
        { name: "MongoDB", level: 80, class: "devicon-mongodb-plain" },
        { name: "AWS", level: 60, class: "devicon-amazonwebservices-plain-wordmark" },
        { name: "Docker", level: 55, class: "devicon-docker-plain" },
        { name: "GIT", level: 90, class: "devicon-git-plain" },
    ]
};

export const resumeData = {
    mainSummary: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.",
    summary: {
        name: profileData.name,
        description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
        phone: links.phone,
        email: links.email,
        city: profileData.city
    },
    education: [
        {
            title: "Master of Fine Arts & Graphic Design",
            date: "2015 - 2016",
            institution: "Rochester Institute of Technology, Rochester, NY",
            description: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti."
        },
        {
            title: "Bachelor of Fine Arts & Graphic Design",
            date: "2010 - 2014",
            institution: "Rochester Institute of Technology, Rochester, NY",
            description: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis."
        }
    ],
    experience: [
        {
            title: "Senior Graphic Design Specialist",
            date: "2019 - Present",
            company: "Experion, New York, NY",
            tasks: [
                "Lead in the design, development, and implementation of graphic, layout, and production communication materials.",
                "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
                "Supervise the assessment of all graphic materials to ensure quality and accuracy.",
                "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000."
            ]
        },
        {
            title: "Graphic Design Specialist",
            date: "2017 - 2018",
            company: "Stepping Stone Advertising, New York, NY",
            tasks: [
                "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
                "Managed up to 5 projects or tasks at a given time while under pressure.",
                "Recommended and consulted with clients on the most appropriate graphic design.",
                "Created 4+ design presentations and proposals monthly for clients and account managers."
            ]
        }
    ]
};

export const portfolioData = {
    mainSummary: "Magnam dolores commodi suscipit...",
    filters: [
        { name: "App", class: "filter-app" },
        { name: "Card", class: "filter-product" },
        { name: "Web", class: "filter-branding" }
    ],
    portfolioItems: [
        { filter: "filter-app", title: "App 1", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-app", title: "App 2", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-app", title: "App 3", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-product", title: "Product 1", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-product", title: "Product 2", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-product", title: "Product 3", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-branding", title: "Branding 1", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-branding", title: "Branding 2", description: "Lorem ipsum, dolor sit", image: images["portfolio"] },
        { filter: "filter-branding", title: "Branding 3", description: "Lorem ipsum, dolor sit", image: images["portfolio"] }
    ]
};

export const servicesData = {
    mainSummary: "Magnam dolores commodi suscipit...",
    services: [
        {
            icon: "bi bi-activity",
            title: "Nesciunt Mete",
            description: "Provident nihil minus qui consequatur non omnis maiores.",
            delay: 100,
            colorClass: "item-cyan"
        },
        {
            icon: "bi bi-broadcast",
            title: "Eosle Commodi",
            description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
            delay: 200,
            colorClass: "item-orange"
        },
        {
            icon: "bi bi-easel",
            title: "Ledo Markt",
            description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
            delay: 300,
            colorClass: "item-teal"
        },
        {
            icon: "bi bi-bounding-box-circles",
            title: "Asperiores Commodit",
            description: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
            delay: 400,
            colorClass: "item-red"
        },
        {
            icon: "bi bi-calendar4-week",
            title: "Velit Doloremque",
            description: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
            delay: 500,
            colorClass: "item-indigo"
        },
        {
            icon: "bi bi-chat-square-text",
            title: "Dolori Architecto",
            description: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
            delay: 600,
            colorClass: "item-pink"
        }
    ]
};

export const contactData = {
    mainSummary: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
    address: profileData.address,
    phone: links.phone,
    email: links.email
};
