import images from "@/assets/img/images";

export const portfolioData = {
    mainSummary: "A comprehensive showcase of full-stack engineering, cloud deployments, developer tools, and automation systems built for real-world impact.",
    filters: [
        { name: "React", class: "filter-react" },
        { name: "Java / Spring", class: "filter-java" },
        { name: "Node.js", class: "filter-node" },
        { name: "Python", class: "filter-python" },
        { name: "jQuery", class: "filter-jquery" },
        { name: "Automation & Cloud", class: "filter-tool" }
    ],
    portfolioItems: [
        {
            filter: "filter-react filter-java",
            title: "AgroCare",
            description: "A full-stack agriculture management platform for tracking crops, field plots, irrigation telemetry, and inventory with React, Spring Boot, and Docker.",
            image: images["agrocare"],
            id: "agrocare"
        },
        {
            filter: "filter-node",
            title: "GFG Stats Card",
            description: "A developer API service that dynamically generates embeddable GeeksforGeeks stats cards and raw JSON for GitHub profiles and personal websites.",
            image: images["gfgcard"],
            id: "gfgcard"
        },
        {
            filter: "filter-react",
            title: "React Portfolio",
            description: "A responsive developer portfolio built with React 19, Vite, and Bootstrap featuring dark/light theme persistence, interactive modals, and fast load times.",
            image: images["portfolio"],
            id: "portfolio"
        },
        {
            filter: "filter-tool",
            title: "Gmail Spam Auto-Delete",
            description: "An automated cloud email cleaner leveraging Google Apps Script and the Gmail REST API to permanently purge spam from specific senders and wildcard domains.",
            image: images["gmailspam"],
            id: "gmailspam"
        },
        {
            filter: "filter-python",
            title: "Super Mario Python Game",
            description: "A classic 2D arcade platformer developed in Python with Pygame featuring obstacle physics, collision detection, sprite animations, and lives tracking.",
            image: images["mariogame"],
            id: "mariogame"
        },
        {
            filter: "filter-jquery",
            title: "Minimalist Dev Portfolio",
            description: "A fast, interactive personal developer showcase built with jQuery, JavaScript, CSS3 animations, and Particles.js, deployed on GitHub Pages.",
            image: images["githubio"],
            id: "githubio"
        }
    ]
};


export const portfolioDetailData = {
    agrocare: {
        techUsed: [
            { name: 'React JS', icon: 'devicon-react-original' },
            { name: 'Java 25', icon: 'devicon-java-plain' },
            { name: 'Spring Boot', icon: 'devicon-spring-plain' },
            { name: 'MySQL', icon: 'devicon-mysql-plain' },
            { name: 'Hibernate', icon: 'devicon-hibernate-plain' },
            { name: 'Ant Design', icon: 'devicon-antdesign-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Nginx', icon: 'devicon-nginx-plain' },
            { name: 'Maven', icon: 'devicon-maven-plain' },
        ],
        projectDate: 'November 2023 - Present',
        projectURL: 'https://agrocare-m8hl.onrender.com',
        sourceCodeURL: 'https://github.com/nikhilpal2705/AgroCare',
        projectDescription: [
            'AgroCare is an enterprise-grade agricultural management platform designed to empower farmers and farm administrators with streamlined crop tracking, pest severity monitoring, water irrigation records, and inventory control.',
            'The frontend delivers a rich, responsive dashboard built with React and Ant Design, complete with stage progress indicators, color-coded health badges, and real-time operational alerts.',
            'The backend is engineered with Spring Boot on Java 25, utilizing Spring Security with stateless JWT authorization, Spring Data JPA with CamelCase persistence, and Flyway database migrations.',
            'Production deployment is containerized with a multi-stage Docker build running an Nginx reverse proxy alongside the Spring Boot microservice on Render.',
        ],
        keyFeatures: {
            "Crop & Stage Tracking": "Tracks growth stages (seedling, vegetative, flowering, fruiting, maturity), expected yields, and field associations.",
            "Pest Severity Monitoring": "Supports image preview, color-coded severity tags, treatment plans, and recheck scheduling.",
            "Irrigation Telemetry": "Logs water volume in liters, application methods (drip, flood, sprinkler), and pump runtimes.",
            "Inventory & Stock Thresholds": "Maintains categorized supplies (seeds, fertilizers, pesticides) with automated threshold reorder alerts.",
            "Multi-Stage Docker & Flyway": "Self-contained container orchestration with automated database schema versioning and admin provisioning."
        },
        setup: "Clone the repo and configure environment variables in .env. Run `mvn spring-boot:run` in server/ (Java 25) and `npm run dev` in client/. Alternatively, run `docker compose -f docker-compose.dev.yml up`.",
        projectImages: [images["agrocare"], images["agrocare1"], images["agrocare2"], images["agrocare3"], images["agrocare4"]]
    },
    gfgcard: {
        techUsed: [
            { name: 'Node.js 24', icon: 'devicon-nodejs-plain' },
            { name: 'Express.js 5', icon: 'devicon-express-original' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'Axios', icon: 'devicon-axios-plain' },
            { name: 'HTML5', icon: 'devicon-html5-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
            { name: 'Vercel', icon: 'devicon-vercel-plain' },
        ],
        projectDate: 'September 2023 - Present',
        projectURL: 'https://gfgstatscard.vercel.app/',
        sourceCodeURL: 'https://github.com/nikhilpal2705/GeeksForGeeks-Stats-Card',
        projectDescription: [
            'GFG Stats Card is a high-performance developer tool and API service that dynamically generates embeddable SVG cards showcasing GeeksforGeeks problem-solving statistics.',
            'Engineered with Node.js and Express, it scrapes and parses live profile metrics—including problem counts, school/basic/hard distributions, coding streaks, and global contest ranks.',
            'Cards can be seamlessly embedded into GitHub profile READMEs, personal portfolios, and blogs, with full support for dark mode, custom color themes, and raw JSON endpoints.',
        ],
        keyFeatures: {
            "Real-Time Stats Scraping": "Fetches and transforms public GeeksforGeeks data with minimal latency and smart caching.",
            "SVG & Markdown Integration": "Produces responsive, themeable SVGs ready for one-line embedding in GitHub README files.",
            "Interactive Playground": "Includes a web UI for testing usernames, previewing cards, and copying customized embed snippets.",
            "Raw JSON API": "Exposes structured JSON endpoints for custom developer integrations and portfolio widgets."
        },
        setup: "Clone the repo, install dependencies (`npm install`), and run `npm start` (or `npm run dev` with nodemon).",
        projectImages: [images["gfgcard"], images["gfgcard1"], images["gfgcard2"], images["gfgcard3"], images["gfgcard4"], images["gfgcard5"]]
    },
    portfolio: {
        techUsed: [
            { name: 'React 19', icon: 'devicon-react-original' },
            { name: 'Vite', icon: 'devicon-vite-plain' },
            { name: 'Bootstrap 5', icon: 'devicon-bootstrap-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
            { name: 'Vercel', icon: 'devicon-vercel-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
        ],
        projectDate: 'October 2024 - Present',
        projectURL: 'https://suryavanshi.vercel.app',
        sourceCodeURL: 'https://github.com/nikhilpal2705/React-Portfolio',
        projectDescription: [
            "A personal developer portfolio built with React 19 and Vite to showcase software engineering experience, standalone projects, coding profile achievements, and open-source contributions.",
            "Engineered with a lightweight component architecture, client-side routing, and persistent theme switching (dark/light) stored in localStorage.",
            "Features animated scroll reveals with AOS, lightbox image galleries via GLightbox, and optimized asset delivery via CDN.",
        ],
        keyFeatures: {
            "Theme Engine": "Seamless dark/light mode toggle with CSS custom properties and instant persistent storage.",
            "Responsive Gallery": "Filterable project showcase powered by Isotope layout and full-screen image zooms.",
            "Coding Profile Badges": "Interactive integration of competitive programming stats across LeetCode, GFG, HackerRank, and CodeChef.",
            "Production Optimized": "Sub-second load times, Node 24.x deployment, and 100% performance optimization."
        },
        setup: "Clone repo, run `npm install`, and launch local development server with `npm run dev`.",
        projectImages: [images["portfolio"], images["portfolio1"], images["portfolio2"], images["portfolio3"], images["portfolio4"], images["portfolio5"], images["portfolio6"], images["portfolio7"]]
    },
    gmailspam: {
        techUsed: [
            { name: 'Google Apps Script', icon: 'devicon-javascript-plain' },
            { name: 'Google Cloud Platform', icon: 'devicon-googlecloud-plain' },
            { name: 'Gmail REST API', icon: 'devicon-google-plain' },
            { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain' },
            { name: 'Time-Driven Triggers', icon: 'devicon-googlecloud-plain' },
        ],
        projectDate: 'July 2024 - Present',
        projectURL: 'https://github.com/nikhilpal2705/Gmail-Spam-Auto-Delete',
        sourceCodeURL: 'https://github.com/nikhilpal2705/Gmail-Spam-Auto-Delete',
        projectDescription: [
            'Gmail Spam Auto-Delete is an automated cloud email sanitation utility written in Google Apps Script that interfaces directly with the Google Cloud Gmail REST API.',
            'The script automatically inspects the Gmail Spam folder, evaluates message headers against a configurable list of blocked email addresses and wildcard domain patterns, and permanently removes matches.',
            'Bypasses the Trash bin using direct permanent deletion calls, keeping inboxes completely free of recurring spam and unwanted marketing newsletters on automated time-driven cron schedules.',
        ],
        keyFeatures: {
            "Automated Cloud Execution": "Runs autonomously on Google Cloud Platform via customizable time-driven triggers (hourly/daily).",
            "Permanent API Purge": "Uses `Gmail.Users.Messages.remove` to permanently delete spam messages without clogging Trash storage.",
            "Wildcard Domain Matching": "Supports exact email matching as well as entire root domain and subdomain pattern blocks.",
            "Non-Destructive Scanning": "Only operates on threads already classified in Spam, protecting inbox communication integrity."
        },
        setup: "Open Google Apps Script, copy Main.gs and Addresses.gs, enable Advanced Gmail Service and Gmail API in GCP, and configure a time-driven trigger.",
        projectImages: [images["gmailspam"]]
    },
    mariogame: {
        techUsed: [
            { name: 'Python 3', icon: 'devicon-python-plain' },
            { name: 'Pygame', icon: 'devicon-python-plain' },
            { name: '2D Game Physics', icon: 'devicon-python-plain' },
            { name: 'OOP Architecture', icon: 'devicon-python-plain' },
        ],
        projectDate: 'June 2021',
        projectURL: 'https://github.com/nikhilpal2705/Mario-Game-Project',
        sourceCodeURL: 'https://github.com/nikhilpal2705/Mario-Game-Project',
        projectDescription: [
            "A 2D arcade platformer developed in Python using the Pygame library, inspired by Nintendo's classic Super Mario universe.",
            "Built as an educational project exploring object-oriented programming in game development, custom 2D physics engines, and sprite management.",
            "Features a moving boss dragon throwing dynamic fireballs, requiring the player to dodge obstacles, jump over cacti, and manage three life states.",
        ],
        keyFeatures: {
            "Collision Physics": "Custom rectangular bounding box and sprite collision detection for Mario, fireballs, and obstacles.",
            "Progressive Difficulty": "Dynamic speed scaling and randomized obstacle generation as player score advances.",
            "Audio & Sprite Pipeline": "Integrated sound effects, death audio triggers, theme music, and multi-frame character animations.",
            "Player State Machine": "Clean state transitions between Start, Gameplay, Lives Lost, and Game Over screens."
        },
        setup: "Requires Python 3.8+ and pygame (`pip install pygame`). Run `python my_mario.py`.",
        projectImages: [images["mariogame"], images["mariogame1"]]
    },
    githubio: {
        techUsed: [
            { name: 'jQuery 3.7', icon: 'devicon-jquery-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'HTML5', icon: 'devicon-html5-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
            { name: 'Particles.js', icon: 'devicon-javascript-plain' },
            { name: 'GitHub Pages', icon: 'devicon-github-plain' },
            { name: 'GitHub Actions CI/CD', icon: 'devicon-githubactions-plain' },
        ],
        projectDate: '2023 - Present',
        projectURL: 'https://nikhilpal2705.github.io',
        sourceCodeURL: 'https://github.com/nikhilpal2705/nikhilpal2705.github.io',
        projectDescription: [
            'A minimalist, fast personal developer showcase built with jQuery 3.7, JavaScript, CSS3 animations, and Particles.js, hosted on GitHub Pages with automated CI/CD deployment.',
            'Features custom interactive DOM navigation, dynamic project rendering from structured JSON data, live experience counters, and keyboard navigation.',
            'Backed by automated CI/CD deployment pipelines using modern GitHub Actions (`checkout@v4`, `deploy-pages@v4`) with 100% Lighthouse performance.',
        ],
        keyFeatures: {
            "jQuery DOM Manipulation": "Interactive event-driven UI with smooth transitions and particle canvas animations.",
            "Automated CI/CD Pipeline": "Automated build and deploy workflow via GitHub Actions Pages pipeline.",
            "JSON-Driven Architecture": "Content and project details stored cleanly in data.json for rapid maintenance.",
            "Keyboard & Accessibility": "Modal keyboard traps, Escape key dismissal, and semantic accessible markup."
        },
        setup: "Static web application with no build step required. Open index.html directly or push to GitHub with GitHub Pages enabled.",
        projectImages: [images["githubio"]]
    }
};
