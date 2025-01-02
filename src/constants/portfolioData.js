import images from "@/assets/img/images";

export const portfolioData = {
    mainSummary: "A collection of projects demonstrating proficiency in full-stack development, showcasing skills in React, Node.js, and Java.",
    filters: [
        { name: "React", class: "filter-react" },
        { name: "Node", class: "filter-node" },
        { name: "Java", class: "filter-java" }
    ],
    portfolioItems: [
        { filter: "filter-react filter-java", title: "AgroCare", description: "An agriculture product management tool built with React.js, Spring Boot, and MySQL. This project facilitates crop monitoring and sales management for farmers.", image: images["agrocare"], id: "agrocare" },
        { filter: "filter-node", title: "GFG Stats Card", description: "A Node.js and Express.js web app that displays GeeksforGeeks user statistics for easy GitHub profile integration.", image: images["gfgcard"], id: "gfgcard" },
        { filter: "filter-react", title: "Portfolio Website", description: "A portfolio application with an intuitive interface.", image: images["portfolio"], id: "portfolio" }
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
            'Designed and implemented interactive, responsive user interfaces using React.js for intuitive product management, enabling farmers to efficiently manage and monitor agricultural data.',
            'Built RESTful APIs using Spring Boot to handle user data and authentication requests efficiently.',
            'Utilized MySQL as a database to store and manage product information and user data.',
            'Implemented authentication and authorization using Spring Security and JWT to safeguard user data.',
        ],
        keyFeatures: {
            "User Registration & Authentication": "Allows secure registration and login functionality with role-based access (Admin, User).",
            "Crop Management": "Users can add, update, and view crop-related information.",
            "Dashboard": "A central interface for users to manage crop-related data."
        },
        setup: "The repository contains detailed instructions on setting up both the backend and frontend. You will need to configure the backend Spring Boot API, connect it to a MySQL database, and deploy the frontend with React.js. Docker can be used to streamline the setup process.",
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
        projectURL: 'https://gfgstatscard.vercel.app/nikhilpal2705',
        sourceCodeURL: 'https://github.com/nikhilpal2705/GeeksForGeeks-Stats-Card',
        projectDescription: [
            'Built a dynamic web application that empowers users to showcase their GeeksforGeeks problem-solving skills on GitHub profiles and personal websites.',
            'Developed server-side logic with Node.js and Express.js, crafted stats card with JavaScript and CSS.',
            'The stats card dynamically updates based on a user’s GitHub activity and problem-solving contributions.',
        ],
        keyFeatures: {
            "Dynamic Stats Generation": " Fetches data from GeeksForGeeks and displays it as a card.",
            "Markdown & HTML Integration": "Easily integrates with GitHub profiles or other websites.",
            "Customization": "Users can adjust the theme of the card (light/dark).",
            "Raw Data Option": " Allows users to fetch raw JSON data of their stats."
        },
        projectImages: [images["gfgcard"], images["gfgcard1"], images["gfgcard"], images["gfgcard1"]]
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
        sourceCodeURL: 'https://github.com/nikhilpal2705/nikhilpal2705.github.io',
        projectDescription: [
            "This project is a personal portfolio website designed to showcase the user's skills, projects, and professional achievements.",
            "It serves as an online resume and a platform to demonstrate various projects and technologies the user has worked on.",
            'Designed and implemented interactive, responsive user interfaces using React.js for intuitive product management.',
        ],
        keyFeatures: {
            "Project Showcases": "Highlights key personal and professional projects with descriptions and links.",
            "Contact Form": "A simple interface for visitors to get in touch.",
            "Responsive Design": "Ensures the portfolio looks great on all devices, including mobile."
        },
        projectImages: [images["portfolio"], images["portfolio1"], images["portfolio2"], images["portfolio3"], images["portfolio4"], images["portfolio5"], images["portfolio6"], images["portfolio7"]]
    }
};
