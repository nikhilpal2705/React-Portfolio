import images from "@/assets/img/images";

export const portfolioData = {
    mainSummary: "A selection of projects that highlight full-stack development, clean engineering, thoughtful UI, and a growing interest in AI-enabled product experiences.",
    filters: [
        { name: "React", class: "filter-react" },
        { name: "Node", class: "filter-node" },
        { name: "Java", class: "filter-java" }
    ],
    portfolioItems: [
        { filter: "filter-react filter-java", title: "AgroCare", description: "A full-stack agriculture management platform for tracking crops, product inventory, and farmer-facing operations with a clean React and Spring Boot workflow.", image: images["agrocare"], id: "agrocare" },
        { filter: "filter-node", title: "GFG Stats Card", description: "A developer utility that generates embeddable GeeksforGeeks stat cards and raw profile data for GitHub READMEs and personal websites.", image: images["gfgcard"], id: "gfgcard" },
        { filter: "filter-react", title: "Portfolio Website", description: "A responsive personal portfolio built to present projects, technical strengths, professional experience, and room for future AI-focused showcases in a clean, modern format.", image: images["portfolio"], id: "portfolio" }
    ]
};


export const portfolioDetailData = {
    agrocare: {
        techUsed: [
            { name: 'React JS', icon: 'devicon-react-original' },
            { name: 'Spring Boot', icon: 'devicon-spring-plain' },
            { name: 'MySQL', icon: 'devicon-mysql-plain' },
            { name: 'Hibernate', icon: 'devicon-hibernate-plain' },
            { name: 'Ant Design', icon: 'devicon-antdesign-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
        ],
        projectDate: 'November 2023 - Present',
        projectURL: 'https://agrocare-m8hl.onrender.com',
        sourceCodeURL: 'https://github.com/nikhilpal2705/AgroCare',
        projectDescription: [
            'AgroCare is a full-stack web application built to simplify agriculture-focused operations such as crop tracking, product management, and day-to-day data handling.',
            'The frontend uses React to provide a responsive dashboard experience, while Spring Boot powers backend APIs for authentication, business logic, and data management.',
            'The platform is structured to support secure access, scalable CRUD workflows, and clear visibility into agricultural records for different users.',
            'The project reflects practical full-stack engineering with attention to usability, maintainability, and deployment readiness.',
        ],
        keyFeatures: {
            "Secure Authentication": "Supports protected access flows with role-based authorization for different user types.",
            "Crop And Product Management": "Enables users to create, update, and manage agriculture-related records from a unified interface.",
            "Operational Dashboard": "Provides a central view for monitoring data and handling routine management tasks efficiently."
        },
        setup: "The repository includes frontend and backend setup instructions. Running the project requires configuring the Spring Boot API, connecting a MySQL database, and starting the React client. Docker support can be used to simplify local setup and deployment.",
        projectImages: [images["agrocare"], images["agrocare1"], images["agrocare2"], images["agrocare3"], images["agrocare4"]]
    },
    gfgcard: {
        techUsed: [
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
            { name: 'Express.js', icon: 'devicon-express-original' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
        ],
        projectDate: 'September 2023 - Present',
        projectURL: 'https://gfgstatscard.vercel.app/',
        sourceCodeURL: 'https://github.com/nikhilpal2705/GeeksForGeeks-Stats-Card',
        projectDescription: [
            'GFG Stats Card is a utility project that helps developers showcase their GeeksforGeeks activity through a lightweight, embeddable profile card.',
            'It uses Node.js and Express.js to fetch, process, and serve profile statistics in a format that can be easily added to GitHub profiles, markdown files, or personal sites.',
            'The project focuses on simplicity, quick integration, and flexible output options for developers who want to display coding progress publicly.',
        ],
        keyFeatures: {
            "Dynamic Stats Generation": "Fetches public GeeksforGeeks profile information and renders it as a shareable stats card.",
            "Demo Playground": "Includes a live demo page for quickly testing usernames and visual output.",
            "Markdown And HTML Support": "Makes it easy to embed the card in README files, portfolios, or other websites.",
            "Theme Customization": "Allows users to switch presentation styles to match different profile themes.",
            "Raw JSON Access": "Provides direct access to processed profile data for custom integrations."
        },
        projectImages: [images["gfgcard"], images["gfgcard1"], images["gfgcard2"], images["gfgcard3"],images["gfgcard4"],images["gfgcard5"]]
    },
    portfolio: {
        techUsed: [
            { name: 'React JS', icon: 'devicon-react-original' },
            { name: 'npm', icon: 'devicon-npm-original-wordmark' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
        ],
        projectDate: 'October 2024 - Present',
        projectURL: 'https://suryavanshi.vercel.app',
        sourceCodeURL: 'https://github.com/nikhilpal2705/React-Portfolio',
        projectDescription: [
            "This portfolio is a personal branding project built to present professional experience, technical skills, and selected projects in a focused and accessible format.",
            "The application uses React-based components and structured constant data to keep content easy to maintain while supporting a polished, responsive UI.",
            "It is also designed to grow with future case studies, experiments, and AI-related showcases as the portfolio evolves over time.",
        ],
        keyFeatures: {
            "Project Showcase": "Highlights selected work with supporting descriptions, visuals, and detail pages.",
            "Resume And Profile Sections": "Presents experience, education, technical skills, and contact details in a structured layout.",
            "Responsive Experience": "Adapts cleanly across desktop and mobile devices for a smooth browsing experience.",
            "Extensible Content Structure": "Makes it easy to expand the portfolio with new projects, services, and AI-focused experiments."
        },
        projectImages: [images["portfolio"], images["portfolio1"], images["portfolio2"], images["portfolio3"], images["portfolio4"], images["portfolio5"], images["portfolio6"], images["portfolio7"]]
    }
};
