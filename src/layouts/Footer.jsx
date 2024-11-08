import { links, profileData } from "@/constant/constant";

const Footer = () => (
  <footer id="footer" className="footer position-relative light-background">
    <div className="container">
      <h3 className="sitename">{profileData.name}</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links d-flex justify-content-center">
        <a href={links.twitter} aria-label="X"><i className="bi bi-twitter-x"></i></a>
        <a href={links.facebook} aria-label="Facebook"><i className="bi bi-facebook"></i></a>
        <a href={links.instagram} aria-label="Instagram"><i className="bi bi-instagram"></i></a>
        <a href={links.linkedin} aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="copyright">
        <span>Copyright</span> <strong className="px-1 sitename">{profileData.name}</strong> <span>All Rights Reserved</span>
      </div>
    </div>
  </footer>
);

export default Footer;
