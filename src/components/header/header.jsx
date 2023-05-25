import { Button } from "../button/button";

export const Header = () => {
  return(
    <header>
      <h1 className="description">Portfólio</h1>
      <ul>
        <li>
          <p href="" className="label">Sobre</p>
        </li>
        <li>
          <p href="" className="label">Stack</p>
        </li>
        <li>
          <p href="" className="label">Projetos</p>
        </li>
      </ul>
      <Button text={'Contato'}/>
    </header>
  )
}