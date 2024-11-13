import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import images from '@/assets/img/images';

const PortfolioDetail = () => {
    const swiperConfig = {
        loop: true,
        speed: 600,
        autoplay: { delay: 5000 },
        slidesPerView: 'auto', // Allows slides to be dynamically sized
        centeredSlides: true, // Centers the current slide
        spaceBetween: 30, // Space between each slide in pixels
        navigation: true,
        pagination: { clickable: true, type: 'bullets' },
        breakpoints: {
            // Optional: Define breakpoints for different screen sizes
            768: {
                slidesPerView: 2, // On larger screens, you can increase the number of slides visible
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1, // On mobile, show 1 slide
                spaceBetween: 20
            }
        }
    };
    
    const projectInfo = {
        techUsed: [
            { name: 'React JS', icon: 'devicon-react-original' },
            { name: 'Spring Boot', icon: 'devicon-spring-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
            { name: 'HTML5', icon: 'devicon-html5-plain' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain' }
        ],
        projectDate: 'March 1, 2024',
        projectURL: 'https://www.example.com',
        sourceCodeURL: 'https://github.com/example/project',
        projectDescription: [
            `This module is under development.`,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis similique nihil facere voluptatem, soluta facilis sit dignissimos error repellat odio mollitia? Ab omnis natus blanditiis placeat culpa ullam mollitia.`,
            ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis similique nihil facere voluptatem, soluta facilis sit dignissimos error repellat odio mollitia? Ab omnis natus blanditiis placeat culpa ullam mollitia.`
        ]
    };

    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="container">
                    <nav className="breadcrumbs">
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li className="current">Portfolio Details</li>
                        </ol>
                    </nav>
                    <h1>Portfolio Details (UNDER DEVELOPMENT)</h1>
                </div>
            </div>

            <section id="portfolio-details" className="portfolio-details section">
                <div className="container" data-aos="fade-up">

                    <Swiper {...swiperConfig} modules={[Navigation, Pagination, Autoplay]} className="portfolio-details-slider">
                        <SwiperSlide>
                            <img src={images["gfgcard"]} alt="App 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={images["portfolio"]} alt="Product 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={images["agrocare"]} alt="Branding 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={images["portfolio"]} alt="Product 1" />
                        </SwiperSlide>
                    </Swiper>

                    <div className="row justify-content-between gy-4 mt-4">

                        <div className="col-lg-8" data-aos="fade-up">
                            <div className="portfolio-description">
                                <h2>About the Project</h2>
                                {projectInfo.projectDescription.map((item, index) => { return (<p key={index}>{item}</p>) })}
                            </div>
                        </div>

                        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="portfolio-info">
                                <h3>Project Information</h3>
                                <ul className="project-info-list">
                                    <li>
                                        <strong>Tech Used:</strong>
                                        <div className="tech-used">
                                            {projectInfo.techUsed.map((tech, index) => (
                                                <span key={index} className="tech-tag">
                                                    <i className={`${tech.icon} tech-icon`}></i>
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                    <li><strong>Project Date:</strong> {projectInfo.projectDate}</li>
                                    <li><strong>Project URL:</strong> <a href={projectInfo.projectURL} target="_blank" rel="noopener noreferrer">{projectInfo.projectURL}</a></li>
                                    <li><strong>Source Code:</strong> <a href={projectInfo.sourceCodeURL} target="_blank" rel="noopener noreferrer">{projectInfo.sourceCodeURL}</a></li>
                                    <li>
                                        <a href={projectInfo.projectURL} className="btn-visit align-self-start" target="_blank" rel="noopener noreferrer">
                                            Visit Website
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default PortfolioDetail;
