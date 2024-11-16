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
    description: `I am a Software Engineer with ${((new Date() - new Date("2023-02-13")) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)} years of hands-on experience in full-stack development. My expertise lies in building scalable web applications, enhancing UI/UX, and ensuring backend efficiency. Passionate about implementing secure API integrations, enhancing frontend performance, and utilizing DevOps practices to streamline deployment processes.`,
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
    additionalDescription: "Alongside my work, I am dedicated to continuous learning, with a focus on exploring cloud technologies, microservices architecture, and open-source contributions."
};


export const contactData = {
    mainSummary: "For inquiries or collaboration opportunities, feel free to reach out.",
    address: profileData.address,
    phone: links.phone,
    email: links.email
};
