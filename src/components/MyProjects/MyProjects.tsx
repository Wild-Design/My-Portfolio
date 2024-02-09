import { FC } from 'react';
import styles from './MyProjects.module.css';
import ThemeConfig from '@/interfaces/ThemeConfig';
interface Props {
  currentTheme: ThemeConfig;
}

const MyProjects: FC<Props> = ({ currentTheme }) => {
  return (
    <div className={styles.container}>
      <h2 style={{ color: currentTheme.colorTitle }} className={styles.title}>
        Mis Proyectos
      </h2>
    </div>
  );
};

export default MyProjects;
