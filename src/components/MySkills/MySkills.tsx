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
          return (
            <Skill
              key={skill.name}
              currentTheme={currentTheme}
              name={skill.name}
              icon={
                //Si el name es react le ejecuto la funcion y le paso el color actual porque el color que uso de fondo en las skills es igual al color original de react :( )
                skill.name === 'React'
                  ? (skill.icon as any)(currentTheme.reactIcon)
                  : skill.icon
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
