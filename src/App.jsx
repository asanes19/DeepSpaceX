
import './App.css'
import HeaderOne from './components/layout/HeaderOne';
import AboutSection from './components/sections/AboutSection';
import Hero from './components/sections/Hero';
import PaarghraphAfterHero from './components/sections/PaarghraphAfterHero';
import SmallerHeader from './components/sections/SmallerHeader';

function App() {

  return (
<>
      <HeaderOne />

    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center space-y-38">
      <Hero />
      <PaarghraphAfterHero />
      <SmallerHeader />
      <AboutSection />
    </div></>
  )
}

export default App
