import { links, profileData } from "@/constants/constant";

const Footer = () => (
  <footer id="footer" className="footer position-relative main-background">
    <div className="container">
      {/* <h3 className="sitename">{profileData.name}</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
      <div className="social-links d-flex justify-content-center">
        <a href={"mailto:" + links.email} aria-label="Email" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill"></i></a>
        <a href={links.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href={links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
        <a href={links.telegram} aria-label="Telegram" target="_blank" rel="noopener noreferrer"><i className="bi bi-telegram"></i></a>
        <a href={links.twitter} aria-label="X" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
      </div>
      <div className="copyright">
        <span>Copyright</span> <strong className="px-1 sitename">{profileData.name}</strong> <span>All Rights Reserved</span>
      </div>
    </div>
  </footer>
);

export default Footer;
