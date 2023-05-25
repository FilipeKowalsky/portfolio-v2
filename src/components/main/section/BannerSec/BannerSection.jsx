import { username } from '../../../../data/user';
import { Button } from '../../../button/button';
import styles from './section.module.css';

export const BannerSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <span className='profile'>{username}</span>
          <h1 className='title'>Bem-vindo ao meu Portfólio</h1>
          <p className='paragraph'>Uma frase interessante sobre mim</p>
          <Button text={'Saiba mais'} />
        </div>
        <div>
          <img className={styles.image} src="/src/assets/banner-img.png" alt="Imagem de um setup com algumas notificações visíveis e sem dados a mostrar" />

        </div>
      </div>
    </section>
  );
};
