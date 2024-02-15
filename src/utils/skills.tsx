import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiJavascript, SiRedux, SiExpress, SiSequelize } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

export default [
  { name: 'HTML', icon: <FaHtml5 color='#f44' /> },
  { name: 'CSS', icon: <FaCss3Alt color='#55d' /> },
  { name: 'JavaScript', icon: <SiJavascript color='#0f0' /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'NextJs', icon: <TbBrandNextjs /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'ReduxTollkit', icon: <SiRedux /> },
  { name: 'RtkQuery', icon: <SiRedux /> },
  { name: 'NodeJs', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'PostgreSql', icon: <BiLogoPostgresql /> },
  { name: 'Sequelize', icon: <SiSequelize /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
];
