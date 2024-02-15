import styles from './Skill.module.css';
import { FC } from 'react';
import CurrentTheme from '../../interfaces/ThemeConfig';

interface Props {
  name: string;
  icon: React.ReactNode;
  currentTheme: CurrentTheme;
}

const Skill: FC<Props> = ({ name, icon, currentTheme }) => {
  return (
    <div
      style={{ backgroundColor: currentTheme.thirdBackground }}
      className={styles.skillContainer}
    >
      <span style={{ color: currentTheme.colorTitle }} className={styles.name}>
        {name}
      </span>
      {icon}
    </div>
  );
};

export default Skill;
