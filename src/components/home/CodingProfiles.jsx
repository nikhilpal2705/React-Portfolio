import { links } from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodeforces, SiCodechef, SiGithub } from "react-icons/si";

const profiles = [
    { link: links.leetcode, icon: <SiLeetcode size={40} />, name: "LeetCode", color: "#d16c06" },
    { link: links.gfg, icon: <SiGeeksforgeeks size={40} />, name: "GeeksforGeeks", color: "#35914c" },
    { link: links.hackerrank, icon: <SiHackerrank size={40} />, name: "HackerRank", color: "#2EC866" },
    { link: links.codeforces, icon: <SiCodeforces size={40} />, name: "Codeforces", color: "#445f9d" },
    { link: links.codechef, icon: <SiCodechef size={40} />, name: "CodeChef", color: { light: "#964B00", dark: "#B64B00" } },
    { link: links.github, icon: <SiGithub size={40} />, name: "GitHub", color: { light: "#333", dark: "#fff" } }
];

const CodingProfiles = () => {
    const { isDarkMode } = useTheme();
    return (
        <section id="codeprofile" className="codeprofile section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Coding Profiles</h2>
                <p>A showcase of my coding profile links, demonstrating my problem-solving skills and ability to write efficient, optimized solutions.</p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {profiles.map(({ link, icon, name, color }) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="col-4 col-sm-4 col-md-2 my-1 text-center"
                            key={name}>
                            <a
                                href={link}
                                title={`${name} Profile`}
                                style={{ color: isDarkMode ? color.dark || color : color.light || color }}
                                target="_blank"
                                rel="noopener noreferrer">
                                {icon}
                                <p className="mt-2">{name}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;

