import styles from './Skill.module.css';
import { FC } from 'react';

interface Props {
  name: string;
  icon: React.ReactNode;
}

const Skill: FC<Props> = ({ name, icon }) => {
  return (
    <div className={styles.skillContainer}>
      <span>{name}</span>
      {icon}
    </div>
  );
};

export default Skill;
