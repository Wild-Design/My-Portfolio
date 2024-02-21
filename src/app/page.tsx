'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import ButtonDarkLight from '@/components/ButtonDarkLight/ButtonDarkLight';
import AboutMe from '@/components/AboutMe/AboutMe';
import MyProjects from '@/components/MyProjects/MyProjects';
import MySkills from '@/components/MySkills/MySkills';
import FormContact from '@/components/ContactMe/FormContact';
import FirstWave from '@/components/Waves/FirstWave';
import SecondWave from '@/components/Waves/SecondWave';
import { darkTheme, clearTheme } from '../utils/themes';
import ContactInfo from '../components/ContactMe/ContactInfo';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const THEMES = { DARK: 'darkTheme', CLEAR: 'clearTheme' };

  const [theme, setTheme] = useState(THEMES.DARK);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    setCurrentTheme(theme === THEMES.DARK ? darkTheme : clearTheme);
  }, [theme]);

  const handleChangeTheme = (): void => {
    setTheme(theme === THEMES.DARK ? THEMES.CLEAR : THEMES.DARK);
  };

  return (
    <main>
      <img
        src={'/Wolf.jpg'}
        alt='Lobos'
        draggable={false}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          opacity: '.1',
          zIndex: '20',
          userSelect: 'none',
        }}
      />
      <section
        className='firstSection'
        style={{
          backgroundColor: currentTheme.firstBackground,
        }}
      >
        <div
          style={{
            width: 'fit-content', //pa que no se estire hasta el maximo width
            padding: '20px',
          }}
        >
          <ButtonDarkLight changeTheme={handleChangeTheme} />
        </div>
        <AboutMe currentTheme={currentTheme} />
        <FirstWave themeColor={currentTheme.firstBackground} />
      </section>

      <section
        className='secondSection'
        style={{
          backgroundColor: currentTheme.secondBackground,
        }}
      >
        <MyProjects currentTheme={currentTheme} />
        <MySkills currentTheme={currentTheme} />
        <SecondWave themeColor={currentTheme.secondBackground} />
      </section>

      <section
        className='thirdSection'
        style={{ backgroundColor: currentTheme.thirdBackground }}
      >
        <h3
          style={{
            color: currentTheme.colorTitle,
            textAlign: 'center',
            fontSize: '35px',
          }}
        >
          Contacto
        </h3>
        <div className='contactme'>
          <ContactInfo currenntTheme={currentTheme} />
          <FormContact currentTheme={currentTheme} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
