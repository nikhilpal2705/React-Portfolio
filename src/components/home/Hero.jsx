import { links, profileData } from '@/constants/constant';
import { useTyped } from '@/hooks/useTyped';

const Hero = () => {
  useTyped(profileData.roles)

  return (
    <section id="hero" className="hero section light-background">
      <img src={profileData.bgImage} alt="" />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>{profileData.name}</h2>
            <p>I&apos;m <span className="typed"></span></p>

            <div className="social-links">
              <a href={"mailto:" + links.email} target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill"></i></a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href={links.github} target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              <a href={links.telegram} target="_blank" rel="noopener noreferrer"><i className="bi bi-telegram"></i></a>
              <a href={links.twitter} target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
