import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection'
import CategorySection from './components/CategorySection'
import LatestSection from './components/LatestSection'
import Footer from './components/Footer/Footer'
import TopRatedSection from './components/TopRatedSection'
import FreeSection from './components/FreeSection'
import DownloadSection from './components/DownloadSection'
import Testimonials from './components/Testimonials'
import InstructorSection from './components/InstructorSection'
import CtaSection from './components/CtaSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection/>
      <CategorySection/>
      <LatestSection/>
      <TopRatedSection/>
      <FreeSection/>
      <InstructorSection/>
      <DownloadSection/>
      <Testimonials/>
      <CtaSection/>
      <Footer/>
    </>
  )
}

export default App
