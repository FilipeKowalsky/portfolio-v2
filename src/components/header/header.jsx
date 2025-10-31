import { Button } from "../button/button";
import { scrollToSection } from "../utils/scroll";

export const Header = () => {
  return (
    <header>
      <h1 className="description">Portfólio</h1>

      <ul>
        <li>
          <p className="label" onClick={() => scrollToSection("about")}>About</p>
        </li>
        <li>
          <p className="label" onClick={() => scrollToSection("stack")}>Stack</p>
        </li>
        <li>
          <p className="label" onClick={() => scrollToSection("projects")}>Projects</p>
        </li>
      </ul>

      <Button id="contact" text="Contato" onClick={() => scrollToSection("contact")} variant="header" />
    </header>
  )
}