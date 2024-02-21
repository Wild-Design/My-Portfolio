import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentContainer}>
        <hr />
        <div className={styles.iconsContainer}>
          <a
            href='https://www.linkedin.com/in/joaquin-bustelo-0593a9242/'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a href='https://github.com/Wild-Design' target='_blank'>
            <FaGithub />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=2317534689'
            target='_blank'
          >
            <FaWhatsapp />
          </a>
          <a href='mailto:brenneke_ruger@hotmail.com' target='_blank'>
            <CiMail />
          </a>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
