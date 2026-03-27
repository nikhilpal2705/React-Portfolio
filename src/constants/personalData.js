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
    roles: ["Software Engineer", "Full Stack Developer", "AI Web Developer"],
    city: "Gorakhpur, Uttar Pradesh, India",
    address: "Taramandal, Gorakhpur, Uttar Pradesh, India, 273017",
    currentCity: "Noida, Uttar Pradesh, India"
};

export const aboutData = {
    mainSummary: "Software Engineer focused on building reliable full-stack products, polished user experiences, and practical AI-powered features that solve real business problems.",
    title: "Software Engineer",
    description: `I am a Software Engineer with ${((new Date() - new Date("2023-02-13")) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)} years of hands-on experience building scalable web applications. My work spans responsive frontend development, API integrations, performance optimization, and modern product workflows, with growing interest in AI-enhanced features, automation, and intelligent user experiences.`,
    profileImage: images["profile"],
    detailsLeft: [
        { label: "Home Town", value: profileData.city },
        { label: "Current City", value: profileData.currentCity },
        { label: "Email", value: links.email },
    ],
    detailsRight: [
        { label: "Degree", value: "Bachelor of Technology (B.Tech)" },
        { label: "Field", value: "Computer Science & Engineering" },
        { label: "Website", value: links.website.split("https://")[1] },
    ],
    additionalDescription: "Beyond day-to-day product delivery, I enjoy refining developer workflows, exploring cloud-native tools, experimenting with LLM APIs and automation use cases, and continuously improving how digital products are built and shipped."
};


export const contactData = {
    mainSummary: "Open to software engineering roles, freelance collaborations, and conversations around full-stack development, AI-enhanced product ideas, and product engineering.",
    address: profileData.address,
    phone: links.phone ?? "",
    email: links.email
};
