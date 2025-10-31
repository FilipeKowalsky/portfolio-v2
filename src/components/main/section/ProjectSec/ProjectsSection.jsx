import { projects } from "../../../../data/projects";
import styles from "../ProjectSec/section.module.css"
import GitIcon from '../../../../assets/git-icon.png'

export const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2 className="subTitle">Projects</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <div className={styles.containerCard}>
              <h2 className="description">{project.name}</h2>
              <p className="label">{project.description}</p>

              {project.status === "live" ? (
                <a
                  className="span"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              ) : (
                <span className="span" style={{ color: "#ccc" }}>
                  In Development
                </span>
              )}
            </div>
            <img className={styles.image} src={GitIcon} alt="Github icon" />
          </div>
        ))}
      </div>
    </section>
  );
};
