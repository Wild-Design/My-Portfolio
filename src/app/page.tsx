import './globals.css';
import AboutMe from '@/components/AboutMe/AboutMe';
import MySkills from '@/components/MySkills/MySkills';
import FormContact from '@/components/FormContact/FormContact';
import FirstWave from '@/components/Waves/FirstWave';
// import SecondWave from '@/components/Waves/SecondWave';

export default function Home() {
  return (
    <main>
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '450px',
          backgroundColor: '#2A3362',
        }}
      >
        <AboutMe />
        <FirstWave />
      </section>
      <section
        style={{ width: '100%', height: '450px', backgroundColor: '#161A34' }}
      >
        {/* <SecondWave /> */}
      </section>
      <MySkills />
      <FormContact />
    </main>
  );
}
