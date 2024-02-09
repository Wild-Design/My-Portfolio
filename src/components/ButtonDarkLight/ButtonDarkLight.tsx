import { FC } from 'react';
import styles from './ButtonDarkLight.module.css';

interface Props {
  changeTheme: () => void;
}

const ButtonDarkLight: FC<Props> = ({ changeTheme }) => {
  return (
    <label className={styles.uiSwitch}>
      <input onClick={changeTheme} type='checkbox' />
      <div className={styles.slider}>
        <div className={styles.circle}></div>
      </div>
    </label>
  );
};

export default ButtonDarkLight;
