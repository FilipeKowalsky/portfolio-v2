import styles from '../TechSec/section.module.css'
import { technologies } from "../../../../data/technologies";

export const TechSection = () =>{
  return(
    <section className={styles.section}>
      <h1 className='subTitle'>Tecnologias</h1>
      <div className={styles.container}>
        {technologies.map((technologie) => (
          <div className={styles.card}>
            <img src={technologie.img} alt="" />
            <h2 className="description">{technologie.name}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}