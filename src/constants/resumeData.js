import { profileData } from "./personalData";

export const resumeData = {
    mainSummary: "Software Engineer with professional experience across product development, API integrations, performance optimization, production delivery, and modern AI-enabled product thinking.",
    summary: {
        title: profileData.name,
        description: `Results-driven Software Engineer experienced in JavaScript, React, Node.js, and full-stack product development. I enjoy turning business requirements into scalable features, improving application performance, and exploring AI-enabled experiences that make products more useful, efficient, and intuitive.`,
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
                "Built and maintained product features for mortgage, CRM, and marketing platforms, improving workflow efficiency and supporting day-to-day client operations.",
                "Led migration efforts from legacy jQuery-based modules to React, increasing maintainability and enabling a more scalable frontend architecture.",
                "Designed and optimized RESTful APIs for data-heavy use cases, improving response times and supporting smoother integrations across internal systems.",
                "Improved frontend performance through render optimization, code cleanup, and better handling of large datasets, resulting in a noticeably faster user experience.",
                "Integrated third-party services including Twilio, AWS services (S3, SES, SNS), and Zapier while following secure authentication and authorization practices.",
                "Contributed to code reviews, testing, and release readiness to maintain quality, reduce regressions, and support dependable production deployments.",
                "Regularly explored automation-oriented solutions and modern AI-assisted workflows to improve productivity and identify opportunities for smarter product experiences."
            ]

        }
    ]
};
