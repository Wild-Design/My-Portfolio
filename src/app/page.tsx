'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import ButtonDarkLight from '@/components/ButtonDarkLight/ButtonDarkLight';
import AboutMe from '@/components/AboutMe/AboutMe';
import MyProjects from '@/components/MyProjects/MyProjects';
import MySkills from '@/components/MySkills/MySkills';
import FormContact from '@/components/FormContact/FormContact';
import FirstWave from '@/components/Waves/FirstWave';
import SecondWave from '@/components/Waves/SecondWave';
import { darkTheme, clearTheme } from '../utils/themes';

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
        <SecondWave themeColor={currentTheme.secondBackground} />
      </section>

      <section
        className='thirdSection'
        style={{ backgroundColor: currentTheme.thirdBackground }}
      >
        <MySkills currentTheme={currentTheme} />
      </section>
      <FormContact />
    </main>
  );
}
