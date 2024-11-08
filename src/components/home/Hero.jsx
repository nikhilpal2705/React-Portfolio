import { links, profileData } from '@/constant/constant';
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
            <p>I'm <span className="typed"></span></p>

            <div className="social-links">
              <a href={links.twitter} target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
              <a href={links.facebook} target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
