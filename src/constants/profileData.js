import images from "@/assets/img/images";

export const links = {
    email: "nsuryavanshi.dev@gmail.com",
    // phone: "",
    linkedin: "https://www.linkedin.com/in/nikhilpal2705",
    github: "https://github.com/nikhilpal2705",
    telegram: "https://t.me/nikhilpal2705",
    twitter: "https://x.com/nikhilpal2705",
    resume: "https://drive.google.com/file/d/1Dva97yfJhkyZyAKyrgmXlFnsnpqOGa_1/view?usp=sharing",
    website: "https://suryavanshi.vercel.app",
    leetcode: "https://leetcode.com/nikhilpal2705/",
    gfg: "https://www.geeksforgeeks.org/user/nikhilpal2705",
    hackerrank: "https://www.hackerrank.com/nikhilpal2705",
    codeforces: "https://codeforces.com/profile/nikhilpal2705",
    codechef: "https://www.codechef.com/users/nikhilpal2705",
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
    description: `I am a driven Software Engineer with ${((new Date() - new Date("2023-02-13")) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)} years of hands-on experience in full-stack development. My expertise lies in building scalable web applications, enhancing UI/UX, and ensuring backend efficiency. Passionate about implementing secure API integrations, enhancing frontend performance, and utilizing DevOps practices to streamline deployment processes.`,
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


export const contactData = {
    mainSummary: "For inquiries or collaboration opportunities, feel free to reach out.",
    address: profileData.address,
    phone: links.phone,
    email: links.email
};
