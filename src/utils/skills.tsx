import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiSequelize,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

export default [
  { name: 'HTML', icon: <FaHtml5 color='E44D26' /> },
  { name: 'CSS', icon: <FaCss3Alt color='#264DE4' /> },
  { name: 'JavaScript', icon: <SiJavascript color='#F7DF1E' /> },
  { name: 'TypeScript', icon: <SiTypescript color='#007ACC' /> },
  {
    name: 'React',
    icon: (color: string = '#61DAFB') => <FaReact color={color} />,
  },
  { name: 'NextJs', icon: <TbBrandNextjs color='#000' /> },
  { name: 'Redux', icon: <SiRedux color='#764ABC' /> },
  { name: 'ReduxTollkit', icon: <SiRedux color='#764ABC' /> },
  { name: 'RtkQuery', icon: <SiRedux color='#1890FF' /> },
  { name: 'NodeJs', icon: <FaNodeJs color='#339933' /> },
  { name: 'Express', icon: <SiExpress color='000' /> },
  { name: 'PostgreSql', icon: <BiLogoPostgresql color='#336791' /> },
  { name: 'Sequelize', icon: <SiSequelize color='#02A7E1' /> },
  { name: 'Git', icon: <FaGitAlt color='#F05032' /> },
  { name: 'GitHub', icon: <FaGithub color=' #181717' /> },
];

/*En el array que exporto, el icono de react tiene una funcion porque da la casualidad
que el color original de react es exactamente igual que el del fondo que lo contiene, tonces 
le use esa funcion para pasarle el color que quiera cuando el tema sea claro (Es un desproposito pero bueno, ni modo XD) */
