import styles from './MySkills.module.css';
import ThemeConfig from '@/interfaces/ThemeConfig';
import { FC } from 'react';
import {
  HTML,
  CSS,
  JavaScript,
  React,
  Redux,
  ReduxTollkit,
  RtkQuery,
  NextJs,
  NodeJs,
  Express,
  PostgreSql,
  Sequelize,
  Git,
  GitHub,
} from '@/utils/skills';

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
        <div>
          HTML
          <HTML />
        </div>
        <div>
          CSS
          <CSS />
        </div>
        <div>
          JavaScript
          <JavaScript />
        </div>
        <div>
          React
          <React />
        </div>
        <div>
          Redux
          <Redux />
        </div>
        <div>
          Redux Toolkit
          <ReduxTollkit />
        </div>
        <div>
          RTKQuery
          <RtkQuery />
        </div>
        <div>
          NextJs
          <NextJs />
        </div>
        <div>
          NodeJs
          <NodeJs />
        </div>
        <div>
          Express
          <Express />
        </div>
        <div>
          PostgreSQL
          <PostgreSql />
        </div>
        <div>
          Sequelize
          <Sequelize />
        </div>
        <div>
          Git
          <Git />
        </div>
        <div>
          GitHub
          <GitHub />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
