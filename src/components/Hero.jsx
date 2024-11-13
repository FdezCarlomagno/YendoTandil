import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import PlaneSVG from "../assets/plane.svg"; 

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba')] 
        bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      <motion.div 
        className="relative text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explorá el mundo con Yendo!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Tu viaje hacia destinos extraordinarios empieza acá
        </p>
        <motion.button 
          className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full 
          text-lg font-semibold transition-colors relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="flex items-center"
          >
            Empezá tu aventura
            <span className="ml-2 opacity-1 transition-opacity duration-300 group-hover:opacity-100">
              <img src={PlaneSVG} alt="Plane Icon" className="w-5 h-5" />
            </span>
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
