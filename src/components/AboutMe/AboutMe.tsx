'use client';
import { FC } from 'react';
import MyPhoto from '../../../public/My.png';
import Image from 'next/image';
import styles from './AboutMe.module.css';
import ThemeConfig from '@/interfaces/ThemeConfig';

interface Props {
  currentTheme: ThemeConfig;
}

const AboutMe: FC<Props> = ({ currentTheme }) => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.textsContainer}>
        <h1
          style={{ color: currentTheme.colorTitle }}
          className={`${styles.title}`}
        >
          Hola!, <br />
          Soy <strong>Joaquín Bustelo</strong>
        </h1>
        <h3
          style={{ color: currentTheme.colorSubtitle }}
          className={styles.subtitle}
        >
          <strong>Desarrollador Web FullStack</strong>
        </h3>
        <p
          style={{
            color: currentTheme.colorDescription,
          }}
          className={styles.description}
        >
          Soy Programador Full Stack con un enfoque sólido en el desarrollo de
          aplicaciones web de alta calidad. <br /> Mi pasión por la tecnología y
          la resolución de problemas me ha llevado a adquirir habilidades
          sólidas en el desarrollo de soluciones web. A pesar de mi relativa
          juventud en este campo, mi dedicación y compromiso me han permitido
          lograr resultados notables. <br /> Mi objetivo es contribuir
          significativamente a proyectos y continuar creciendo como profesional
          en el campo del desarrollo web.
        </p>
        <a
          href='/CV Joaquín Bustelo.pdf'
          download={true}
          className={styles.btnCv}
        >
          Mi CV
        </a>
      </div>
      <div>
        <Image src={MyPhoto} alt='Joaquín' width={200} />
      </div>
    </div>
  );
};

export default AboutMe;
