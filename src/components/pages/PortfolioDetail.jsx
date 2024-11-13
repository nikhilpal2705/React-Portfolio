import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projectData } from '@/constants/constant';

// Subcomponent for Project Description
const ProjectDescription = ({ description }) => (
    <div className="portfolio-description">
        <h2>About the Project</h2>
        {/* Mapping through project description array and rendering each paragraph */}
        {description.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </div>
);

// Subcomponent for Project Info
const ProjectInfo = ({ projectInfo }) => (
    <div className="portfolio-info">
        <h3>Project Information</h3>
        <ul className="project-info-list">
            {/* Displaying the technologies used in the project */}
            <li>
                <strong>Tech Used:</strong>
                <div className="tech-used">
                    {projectInfo.techUsed.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {/* Displaying each tech's icon and name */}
                            <i className={`${tech.icon} tech-icon`}></i>
                            {tech.name}
                        </span>
                    ))}
                </div>
            </li>
            {/* Displaying other project details such as date, URL, and source code */}
            <li><strong>Project Date:</strong> {projectInfo.projectDate}</li>
            {projectInfo.projectURL && <li><strong>Project URL:</strong> <a href={projectInfo.projectURL} target="_blank" rel="noopener noreferrer">{projectInfo.projectURL}</a></li>}
            <li><strong>Source Code:</strong> <a href={projectInfo.sourceCodeURL} target="_blank" rel="noopener noreferrer">{projectInfo.sourceCodeURL}</a></li>
            {projectInfo.projectURL && <li><a href={projectInfo.projectURL} className="btn-visit align-self-start" target="_blank" rel="noopener noreferrer">Visit Website</a></li>}
        </ul>
    </div>
);

// Subcomponent for the Swiper (Image Slider)
const ProjectSwiper = ({ projectImages }) => (
    <Swiper
        loop={true}  // Loop through the slides
        speed={600}  // Transition speed
        autoplay={{ delay: 5000 }}  // Automatically move to the next slide after 5 seconds
        slidesPerView="auto"  // Automatically adjust the number of visible slides
        centeredSlides={true}  // Center the active slide
        spaceBetween={30}  // Space between slides
        navigation  // Enable navigation buttons
        pagination={{ clickable: true, type: 'bullets' }}  // Enable pagination with clickable bullets
        breakpoints={{
            768: {  // For screens larger than 768px, show 2 slides
                slidesPerView: projectImages.length > 3 ? 2 : 1,
                spaceBetween: 30,
            },
            480: {  // For mobile screens, show 1 slide
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }}
        modules={[Navigation, Pagination, Autoplay]}  // Include necessary Swiper modules
        className="portfolio-details-slider"
    >
        {/* Mapping through project images and rendering each one inside a SwiperSlide */}
        {projectImages.map((image, index) => image && (
            <SwiperSlide key={index}>
                <img src={image} alt={`Project Image ${index + 1}`} />
            </SwiperSlide>
        ))}
    </Swiper>
);


// Page Title Component for consistency and reusability
const PageTitle = ({ children }) => (
    <main className="main">
        <div className="page-title" data-aos="fade">
            <div className="container">
                <nav className="breadcrumbs">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li className="current">Portfolio Details</li>
                    </ol>
                </nav>
                <h1>Portfolio Details</h1>
            </div>
        </div>
        <section id="portfolio-details" className="portfolio-details section">
            {children}
        </section>
    </main>
);

// 'Project Not Found' Component to handle missing project data
const ProjectNotFound = () => (

    <PageTitle>
        <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade">
            <h4>Project Not Found</h4>
            <Link to="/" className="btn-visit">Back to Home</Link>
        </div>
    </PageTitle>
);


const PortfolioDetail = () => {
    const [searchParams] = useSearchParams();
    const projectId = searchParams.get('id');  // Get 'id' from the search parameters

    const projectInfo = projectData[projectId];  // Get project data based on projectId

    // If project data is not found, render a 'Project Not Found' page
    if (!projectInfo) {
        return <ProjectNotFound />;
    }

    return (
        <PageTitle>
            <div className="container" data-aos="fade-up">
                {projectInfo.projectImages && <ProjectSwiper projectImages={projectInfo.projectImages} />}

                <div className="row justify-content-between gy-4 mt-4">
                    <div className="col-lg-8" data-aos="fade-up">
                        <ProjectDescription description={projectInfo.projectDescription} />
                    </div>
                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <ProjectInfo projectInfo={projectInfo} />
                    </div>
                </div>
            </div>
        </PageTitle>
    );
};


export default PortfolioDetail;
