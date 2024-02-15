import ThemeConfig from '@/interfaces/ThemeConfig';
import { FC } from 'react';
import styles from './ContactInfo.module.css';
interface Props {
  currenntTheme: ThemeConfig;
}

const ContactInfo: FC<Props> = ({ currenntTheme }) => {
  return (
    <div className={styles.container}>
      <h4
        style={{ color: currenntTheme.colorSubtitle }}
        className={styles.subtitle}
      >
        ¡Juntos podemos crear algo increíble 😁!
      </h4>
      <p
        style={{ color: currenntTheme.colorDescription }}
        className={styles.description}
      >
        Si estás interesado/a en trabajar conmigo, no dudes en enviarme un
        mensaje a través de mi formulario de contacto o a través de alguna de
        mis redes sociales que puedes encontrar en el pie de la página . ¡Estoy emocionado
        por la posibilidad de trabajar contigo! 🫡
      </p>
    </div>
  );
};

export default ContactInfo;
