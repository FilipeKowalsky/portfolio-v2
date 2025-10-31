import styles from '../TechSec/section.module.css'
import { technologies } from "../../../../data/technologies";

export const TechSection = () =>{
  return(
    <section id="stack" className={styles.section}>
    <h1 className='subTitle'>Technologies</h1>
    <div className={styles.container}>
    {technologies.map((tech) => (
      <div key={tech.name} className={styles.card}>
        <img src={tech.img} alt={tech.name} />
        <h2 className="description">{tech.name}</h2>
      </div>
        ))}
      </div>
    </section>
  )
}