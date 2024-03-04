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

  const scrollToDown = () => {
    /*Actualmente solo va hasta abjo de la página(que da la casualidad
    que el formulario se encuentra aí mismo) pero lo ideal es usar
    una referencia al formulario o una referencia a donde quiera ir*/
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
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
        <nav className='nav' style={{ padding: '20px' }}>
          <div
            style={{
              position: 'relative',
              maxWidth: '2000px',
              margin: '0 auto',
            }}
          >
            <ButtonDarkLight changeTheme={handleChangeTheme} />
            <button className='contactBtn' onClick={scrollToDown}>
              Contacto
              <svg fill='currentColor' viewBox='0 0 24 24' className='icon'>
                <path
                  clip-rule='evenodd'
                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z'
                  fill-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </nav>

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
      <Footer currenntTheme={currentTheme} />
    </main>
  );
}
