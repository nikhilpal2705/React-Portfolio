import { links, profileData } from '@/constants';
import { useTyped } from '@/hooks/useTyped';

const Hero = () => {
  useTyped(profileData.roles)

  return (
    <section id="hero" className="hero section main-background">
      <img src={profileData.bgImage} alt="" aria-hidden="true" />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>{profileData.name}</h2>
            <p>I&apos;m <span className="typed"></span></p>

            <div className="social-links">
              <a href={"mailto:" + links.email} aria-label="Send email" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill"></i></a>
              <a href={links.linkedin} aria-label="Open LinkedIn profile" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href={links.github} aria-label="Open GitHub profile" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              <a href={links.telegram} aria-label="Open Telegram profile" target="_blank" rel="noopener noreferrer"><i className="bi bi-telegram"></i></a>
              <a href={links.twitter} aria-label="Open X profile" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
