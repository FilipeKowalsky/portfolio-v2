import { username } from '../../../../data/user';
import { Button } from '../../../button/button';
import styles from './section.module.css';
import BannerImg from '../../../../assets/banner-img.png'

export const BannerSection = () => {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <span className='profile'>{username}</span>
          <h1 className='title'>Welcome to my Portfolio</h1>
          <p className='paragraph'>Front-End Developer focused on clean interfaces, modern UI and real-world results.</p>
          <Button text="Learn More" onClick={() => scrollToSection("about")} />
        </div>
        <div className={styles.imageContainer}>
          <div>
            <img className={styles.image} src={BannerImg} alt="Imagem de um setup com algumas notificações visíveis e sem dados a mostrar" />
          </div>
        </div>
      </div>
    </section>
  );
};