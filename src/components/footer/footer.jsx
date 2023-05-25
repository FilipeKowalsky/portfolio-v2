import { user } from "../../data/user";

export const Footer = () =>{
  return(
    <footer>
      <div className="line"></div>
      <div className="footer">
        <div className="footerContainer">
          <h2 className="subTitle">Contato</h2>
          <div className="imgContainer">
            <img src="src\assets\whatsapp-icon.png" alt="" />
            <img src="src\assets\linkedin-icon.png" alt="" />
            <img src="src\assets\github-icon.png" alt="" />
          </div>
        </div>
        <div className="textContainer">
          <p className="paragraph">Todos os direitos reservados - {user} 
        </p>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  )
}