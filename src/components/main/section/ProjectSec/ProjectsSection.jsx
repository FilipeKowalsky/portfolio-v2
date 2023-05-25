import { projects } from "../../../../data/projects";
import styles from "../ProjectSec/section.module.css"

export const Projects = () => {
  return (
    <section className={styles.section}>
      <h2 className="subTitle">Projetos</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <div className={styles.card}>
            <div className={styles.containerCard}>
              <h2 className="description">{project.name}</h2>
              <p className="label">{project.descricao}</p>
              <p className="span" href="">Saiba mais</p>
            </div>
            <img className={styles.image} src="/src/assets/git-icon.png" alt="icon Github" />
          </div>
        ))}
      </div>
    </section>
  );
};
