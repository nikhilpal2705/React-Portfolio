import { profileData } from "./personalData";

export const resumeData = {
    mainSummary: "Full Stack Developer with experience across the entire software development lifecycle, from planning and coding to testing and deployment.",
    summary: {
        title: profileData.name,
        description: `A results-oriented developer proficient in Java, JavaScript, and modern frameworks, dedicated to creating meaningful digital solutions that align with business goals and meet user needs.
                    My expertise includes developing projects from scratch, leading teams, meticulously crafting automation test cases, formulating and reviewing strategic approaches, conducting in-depth research and development, ensuring flawless code deployment to remote servers, and maintaining strong client relationships.`,
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
                "Developed and maintained diverse features for mortgage, CRM, and marketing applications, achieving seamless client data management processes and enhanced customer engagement capabilities.",
                "Led and coordinated a team in migrating the entire project from legacy jQuery frameworks to React.js, optimizing application performance, scalability, and maintainability.",
                "Led the design, engineering, and optimization of robust RESTful APIs, reducing critical response times by up to 3x through advanced query optimization techniques and efficient caching strategies.",
                "Enhanced frontend loading performance significantly by 40% by implementing advanced memoization techniques to prevent unnecessary re-rendering and virtualization for handling large datasets, while adhering to strict coding practices.",
                "Implemented secure OAuth 2.0 protocols for authorization and successfully integrated various third-party services like Twilio for communication, AWS (S3 for storage, SES for email, and SNS for notifications), and Zapier for workflow automation.",
                "Actively contributed to detailed code reviews and rigorous automated testing, ensuring consistently high code quality, stability, and robustness."
            ]

        }
    ]
};