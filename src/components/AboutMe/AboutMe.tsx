'use client';
import MyPhoto from '../../../public/My.jpg';
import Image from 'next/image';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.descriptionsContainer}>
        <h1>Hola Soy Joaquín Bustelo</h1>
        <h3>Desarrollador y programador web</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          exercitationem mollitia excepturi esse totam perspiciatis tenetur qui,
          consequatur ullam eveniet iusto obcaecati. Nesciunt temporibus
          provident illo cumque exercitationem? Accusantium corrupti distinctio
          doloribus sint minima inventore deserunt ratione excepturi sed, fuga
          asperiores eveniet labore, est consequuntur quae minus repellat
          quisquam dolorem illo, ab perspiciatis repudiandae provident aperiam.
        </p>
      </div>
      <div>
        <Image src={MyPhoto} alt='Joaquín' width={200} />
      </div>
    </div>
  );
};

export default AboutMe;
