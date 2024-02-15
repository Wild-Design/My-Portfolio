import ThemeConfig from '@/interfaces/ThemeConfig';
import { FC } from 'react';
import styles from './ContactInfo.module.css';
interface Props {
  currenntTheme: ThemeConfig;
}

const ContactInfo: FC<Props> = ({ currenntTheme }) => {
  return (
    <div className={styles.container}>
      <h3 style={{ color: currenntTheme.colorTitle }} className={styles.title}>
        Contáctame
      </h3>
      <h4
        style={{ color: currenntTheme.colorSubtitle }}
        className={styles.subtitle}
      >
        ¡Juntos podemos crear algo increíble!
      </h4>
      <p
        style={{ color: currenntTheme.colorDescription }}
        className={styles.description}
      >
        Si estás interesado en trabajar conmigo, no dudes en enviarme un
        mensaje. ¡Estoy emocionado por la posibilidad de trabajar contigo!
      </p>
    </div>
  );
};

export default ContactInfo;
