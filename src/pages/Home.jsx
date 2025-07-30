import Aboutme from "../components/Aboutme";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/contact";
import Footer from "../components/Footer";
import Navbar from "../components/BottomNavbar";
import BottomNavbar from "../components/BottomNavbar";
import AboutMe from "../components/Aboutme";

const Home = () => {
  
  return (
    <div className="scroll-smooth">
     <section id="home"><Portfolio /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><Work /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <BottomNavbar />
    </div>
  )
}

export default Home;