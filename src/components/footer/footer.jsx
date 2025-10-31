import { user } from "../../data/user";
import WhatsAppIcon from "../../assets/whatsapp-icon.png";
import LinkedInIcon from "../../assets/linkedin-icon.png";
import GitHubIcon from "../../assets/github-icon.png";

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="line"></div>
      <div className="footer">
        <div className="footerContainer">
          <h2 className="subTitle">Contact</h2>
          <div className="imgContainer">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              title="Send me a message on WhatsApp"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" />
            </a>
            <a
              href="https://www.linkedin.com/in/filipe-kowalsky/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my LinkedIn"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/FilipeKowalsky"
              target="_blank"
              rel="noopener noreferrer"
              title="Check my GitHub"
            >
              <img src={GitHubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="textContainer">
          <p className="paragraph">
            All rights reserved - {user}
          </p>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
};
