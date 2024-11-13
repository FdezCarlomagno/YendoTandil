import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import About from './components/About';
import Contact from './components/Contact';
import PaperPlane from './components/PaperPlane';
import Footer from "./components/Footer";
import WhatsAppIcon from './components/WhatsappIcon';
import Benefits from './components/Benefits';
import toast, { Toaster } from 'react-hot-toast';
import Testimonials from './components/Testimonials';
function App() {
  useEffect(() => {
    const updateScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('bg-primary/80', 'backdrop-blur-sm');
      } else {
        navbar.classList.remove('bg-primary/80', 'backdrop-blur-sm');
      }
    };
    makeToast();
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const makeToast = () => {
    toast('Bienvenido a Yendo!',
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  }

  return (
    <div className="relative">
      <Navbar />
      <PaperPlane />
      <WhatsAppIcon />
      <main>
        <Hero />
        <Benefits />
        <Experiences />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;