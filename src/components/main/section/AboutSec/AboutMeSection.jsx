import styles from '../AboutSec/section.module.css'

export const AbountMeSection = () =>{
  return (
    <section id="about" className={styles.section}>
      <h2 className="subTitle">About Me</h2>
      <p className="paragraph">
        I'm a Front-End Developer passionate about building clean, intuitive, and user-focused digital experiences. 
        I enjoy transforming ideas into modern interfaces using web technologies and continuous learning.
      </p>
    </section>
  )
}