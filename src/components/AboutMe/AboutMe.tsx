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
          Con una sólida formación como Programador Full Stack, me embarco en
          cada proyecto con humildad y determinación.
          <br />
          Mi enfoque se centra en el desarrollo de aplicaciones web, donde la
          curiosidad y el deseo de superación son mis principales impulsores.
          Reconozco que cada día es una oportunidad para aprender algo nuevo y
          mejorar mis habilidades. <br /> Mi objetivo es seguir creciendo
          profesionalmente y contribuir de manera significativa al mundo del
          desarrollo web, aprovechando mi enfoque analítico y mente creativa
          para ofrecer soluciones innovadoras en cada proyecto en el que
          participo..
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
