import { user } from "../../data/user";

export const Footer = () =>{
  return (
    <footer id="contact">
      <div className="line"></div>
      <div className="footer">
        <div className="footerContainer">
          <h2 className="subTitle">Contact</h2>
          <div className="imgContainer">
            <a 
              href="https://w.app/filipe_kowalsky" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Chat with me on WhatsApp"
            >
              <img src="src/assets/whatsapp-icon.png" alt="WhatsApp" />
            </a>

            <a 
              href="https://www.linkedin.com/in/filipe-kowalsky/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Connect with me on LinkedIn"
            >
              <img src="src/assets/linkedin-icon.png" alt="LinkedIn" />
            </a>

            <a 
              href="https://github.com/FilipeKowalsky" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Check my GitHub"
            >
              <img src="src/assets/github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="textContainer">
          <p className="paragraph">All rights reserved - {user}</p>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  )
}