import { FC } from 'react';
import styles from './Project.module.css';
import ThemeConfig from '@/interfaces/ThemeConfig';
import { Project as ProjectType } from '../../utils/projects';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

interface Props {
  currentTheme: ThemeConfig;
  project: ProjectType;
}

const Project: FC<Props> = ({ currentTheme, project }) => {
  return (
    <div
      style={{
        background: currentTheme.firstBackground,
        border: `1px solid ${currentTheme.border}`,
      }}
      key={project.title}
      className={styles.project}
    >
      <div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <h4
          className={styles.projectSubtitle}
          style={{ color: currentTheme.colorSubtitle }}
        >
          {project.subtitle}
        </h4>
        <div className={styles.descriptionContainer}>
          <p
            className={styles.projectDesciption}
            style={{ color: currentTheme.colorDescription }}
          >
            {project.description}
          </p>
        </div>
      </div>
      <div className={styles.links}>
        {project.github ? (
          <a href={project.github} target='BLANK' title='GitHub'>
            <FaGithub fontSize={30} color={currentTheme.icon} />
          </a>
        ) : (
          <span style={{ width: '30px' }}></span>
        )}

        {project.youtube ? (
          <a href={project.youtube} target='BLANK' title='Youtube'>
            <FaYoutube fontSize={30} color={currentTheme.icon} />
          </a>
        ) : (
          <span style={{ width: '30px' }}></span>
        )}

        {project.deployment ? (
          <a href={project.deployment} title='Producción' target='BLANK'>
            <TbWorldWww fontSize={30} color={currentTheme.icon} />
          </a>
        ) : (
          <span style={{ width: '30px' }}></span>
        )}
      </div>
    </div>
  );
};

export default Project;
