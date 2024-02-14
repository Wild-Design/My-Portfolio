import styles from './MySkills.module.css';
import ThemeConfig from '@/interfaces/ThemeConfig';
import { FC } from 'react';
import skillsIcons from '@/utils/skills';
import Skill from './Skill';

interface Props {
  currentTheme: ThemeConfig;
}
const MySkills: FC<Props> = ({ currentTheme }) => {
  return (
    <div className={styles.container}>
      <h2 style={{ color: currentTheme.colorTitle }} className={styles.title}>
        Tecnologias
      </h2>
      <div className={styles.skillsContainer}>
        {skillsIcons.map((skill) => {
          return <Skill key={skill.name} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
};

export default MySkills;
