import images from "@/assets/img/images";

export const links = {
    email: "nsuryavanshi.dev@gmail.com",
    // phone: "",
    linkedin: "https://www.linkedin.com/in/nikhilpal2705",
    github: "https://github.com/nikhilpal2705",
    telegram: "https://t.me/nikhilpal2705",
    twitter: "https://x.com/nikhilpal2705",
    resume: "https://drive.google.com/drive/folders/1YGYat6G7YPisYaq7OZqf2DdUl4a_N6kp?usp=sharing",
    website: "https://nikhilpal2705.vercel.app"
};

export const profileData = {
    bgImage: images["hero-bg"],
    name: "Nikhil Suryavanshi",
    roles: ["Software Engineer", "Full Stack Developer"],
    city: "Gorakhpur, Uttar Pradesh, India",
    address: "Taramandal, Gorakhpur, Uttar Pradesh, India, 273017",
    currentCity: "Noida, Uttar Pradesh, India"
};

export const aboutData = {
    mainSummary: "Experienced Full Stack Developer with a track record of delivering high-quality software solutions, specializing in optimizing performance and integrating complex systems.",
    title: "Software Engineer",
    description: "I am a driven Software Engineer with 1.8 years of hands-on experience in full-stack development. My expertise lies in building scalable web applications, enhancing UI/UX, and ensuring backend efficiency. Passionate about implementing secure API integrations, enhancing frontend performance, and utilizing DevOps practices to streamline deployment processes.",
    profileImage: images["profile"],
    detailsLeft: [
        { label: "Age", value: "28" },
        { label: "Email", value: links.email },
        { label: "Home Town", value: profileData.city }
    ],
    detailsRight: [
        { label: "Degree", value: "Bachelor of Technology" },
        { label: "Field", value: "Computer Science & Engineering" },
        { label: "Website", value: links.website.split("https://")[1] },
    ],
    additionalDescription: "Alongside my work, I am dedicated to continuous learning, with a focus on exploring cloud technologies, microservices architecture, and open-source contributions."
};

export const skillsData = {
    mainSummary: "Technically proficient in frontend, backend, database, and DevOps, with a focus on building maintainable, efficient, and secure code.",
    skillsLeft: [
        { name: "HTML", level: 90, class: "devicon-html5-plain colored" },
        { name: "CSS", level: 80, class: "devicon-css3-plain" },
        { name: "JavaScript", level: 75, class: "devicon-javascript-plain" },
        { name: "jQuery", level: 85, class: "devicon-jquery-plain" },
        { name: "React", level: 75, class: "devicon-react-original" },
        { name: "Angular", level: 50, class: "devicon-angularjs-plain" },
        { name: "Java", level: 80, class: "devicon-java-plain" }
    ],
    skillsRight: [
        { name: "Node", level: 90, class: "devicon-nodejs-plain-wordmark" },
        { name: "Spring Boot", level: 70, class: "devicon-spring-original" },
        { name: "MySQL", level: 90, class: "devicon-mysql-original" },
        { name: "MongoDB", level: 80, class: "devicon-mongodb-plain" },
        { name: "AWS", level: 60, class: "devicon-amazonwebservices-plain-wordmark" },
        { name: "Docker", level: 55, class: "devicon-docker-plain" },
        { name: "GIT", level: 90, class: "devicon-git-plain" },
        { name: "Linux", level: 90, class: "devicon-linux-plain" }
    ]
};

export const resumeData = {
    mainSummary: "Full Stack Developer with experience across the entire software development lifecycle, from planning and coding to testing and deployment.",
    summary: {
        title: profileData.name,
        description: "A results-oriented developer proficient in Java, JavaScript, and modern frameworks. I aim to create meaningful digital solutions that align with business goals and meet user needs.",
        phone: links.phone,
        email: links.email,
        city: profileData.currentCity
    },
    education: [
        {
            title: "Bachelor of Technology (B.Tech)",
            date: "2014 - 2018",
            institution: "Shri Ramswaroop Memorial College of Engineering and Management, Lucknow, India",
            description: "Graduated with a major in Computer Science & Engineering, where I developed foundational knowledge in data structures, algorithms, software engineering principles, and database management."
        },
        {
            title: "Intermediate",
            date: "2012 - 2014",
            institution: "S.M.T.D. Inter College, Basti, India",
            description: "Completed my education focusing on Mathematics, Physics, and Chemistry, preparing for a career in engineering."
        }
    ],
    experience: [
        {
            title: "Software Engineer",
            date: "Feb. 2023 - Present",
            company: "Agami Technologies, Noida, India",
            tasks: [
                "Developed and maintained features for mortgage, CRM, and marketing applications, achieving seamless client data management and customer engagement enhancements.",
                "Led the engineering and optimization of RESTful APIs, reducing response times by up to 3x through query optimization and efficient caching.",
                "Enhanced frontend loading performance by 40% by implementing memoization to prevent re-rendering and virtualization for large datasets, while adhering to strict coding practices.",
                "Implemented OAuth 2.0 for authorization and integrated third-party services, including Twilio for communication, AWS (S3 for storage, SES for email, and SNS for notifications), and Zapier for workflow automation.",
                "Actively contributed to code reviews and automated testing, ensuring high code quality and robustness."
            ]
        }
    ]
};

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

export const servicesData = {
    mainSummary: "Offering expertise in software development, API integration, and application optimization.",
    services: [
        {
            icon: "bi bi-code-slash",
            title: "Software Development",
            description: "Build tailored software solutions designed to meet specific business requirements, ensuring functionality and scalability.",
            delay: 100,
            colorClass: "item-cyan"
        },
        {
            icon: "bi bi-plug",
            title: "API Integration",
            description: "Effortlessly connect your applications with external services through secure and efficient API integrations.",
            delay: 200,
            colorClass: "item-orange"
        },
        {
            icon: "bi bi-speedometer2",
            title: "Performance Optimization",
            description: "Optimize your application’s performance, minimizing latency and maximizing response times.",
            delay: 300,
            colorClass: "item-teal"
        },
        {
            icon: "bi bi-palette",
            title: "Frontend Development",
            description: "Create interactive, user-friendly interfaces that engage users and enhance the user experience.",
            delay: 400,
            colorClass: "item-red"
        },
        {
            icon: "bi bi-server",
            title: "Backend Development",
            description: "Design secure and scalable backend architectures that support complex business operations.",
            delay: 500,
            colorClass: "item-indigo"
        },
        {
            icon: "bi bi-cloud-upload",
            title: "DevOps & Cloud Services",
            description: "Implement continuous integration and deployment strategies with cloud services for reliable, scalable deployment.",
            delay: 600,
            colorClass: "item-pink"
        }
    ]
};


export const contactData = {
    mainSummary: "For inquiries or collaboration opportunities, feel free to reach out.",
    address: profileData.address,
    phone: links.phone,
    email: links.email
};
