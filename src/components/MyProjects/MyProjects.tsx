import { FC } from 'react';
import styles from './MyProjects.module.css';
import ThemeConfig from '@/interfaces/ThemeConfig';
import projects from '@/utils/projects';
import Project from './Project';
interface Props {
  currentTheme: ThemeConfig;
}

const MyProjects: FC<Props> = ({ currentTheme }) => {
  return (
    <div className={styles.container}>
      <h2 style={{ color: currentTheme.colorTitle }} className={styles.title}>
        Mis Proyectos
      </h2>
      <div className={styles.projectsContainer}>
        {projects?.map((project) => {
          return (
            <Project
              key={project.title}
              project={project}
              currentTheme={currentTheme}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
