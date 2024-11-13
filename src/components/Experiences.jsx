import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: "París, Francia",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    description: "La Ciudad de la Luz te llama con la icónica Torre Eiffel, el arte de clase mundial en el Louvre y encantadores cafés en calles adoquinadas."
  },
  {
    title: "Dubái, EAU",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    description: "Un oasis futurista donde el Burj Khalifa toca el cielo, con compras de lujo, aventuras en el desierto y maravillas arquitectónicas."
  },
  {
    title: "Londres, Reino Unido",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    description: "Experimenta la herencia real en el Palacio de Buckingham, el histórico Puente de la Torre y la riqueza cultural de museos de renombre mundial."
  },
  {
    title: "Estambul, Turquía",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop",
    description: "Donde Oriente se encuentra con Occidente, con la magnífica Santa Sofía, el Gran Bazar y vistas impresionantes del estrecho del Bósforo."
  },
  {
    title: "Roma, Italia",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2096&auto=format&fit=crop",
    description: "La Ciudad Eterna muestra el Coliseo, el Vaticano y el Foro Romano, con increíble gastronomía y arte renacentista."
  },
  {
    title: "Tokio, Japón",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop",
    description: "Una fascinante mezcla de ultramodernidad y tradición, desde el iluminado Shibuya hasta templos serenos y sushi de clase mundial."
  },
  {
    title: "Nueva York, EE.UU.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    description: "La Gran Manzana deslumbra con Times Square, Central Park, rascacielos icónicos y diversas experiencias culturales."
  },
  {
    title: "Singapur",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2069&auto=format&fit=crop",
    description: "Una ciudad jardín con los futuristas Gardens by the Bay, Marina Bay Sands, y una mezcla perfecta de culturas y gastronomía."
  },
  {
    title: "Barcelona, España",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop",
    description: "El mundo arquitectónico de Gaudí, con la Sagrada Familia, el Parque Güell y la vibrante vida en Las Ramblas."
  },
  {
    title: "Bangkok, Tailandia",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2070&auto=format&fit=crop",
    description: "Experimenta templos ornamentados, mercados flotantes, paraíso de comida callejera y el majestuoso Palacio en esta vibrante metrópoli asiática."
  },
  {
    title: "Machu Picchu, Perú",
    image: "./src/imgs/machu-pichu.jpg",
    description: "Descubre la mística ciudadela inca ubicada en lo alto de los Andes, rodeada de naturaleza y historia."
  },
  {
    title: "Cataratas del Niágara, Canadá",
    image: "./src/imgs/cataratas-niagara.jpg",
    description: "Contempla la majestuosidad de las cataratas más famosas del mundo y siente la fuerza del agua en este impresionante destino."
  },
];


function ExperienceCard({ title, image, description, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover bg-secondary rounded-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function Experiences() {
  return (
    <section id="experiences" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Top 10 Lugares mas visitados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;

/*
const experiences = [

  {
    title: "Gran Muralla China",
    image: "./src/imgs/muralla-china.jpeg",
    description: "Explora una de las maravillas del mundo, una muralla histórica que se extiende a lo largo de miles de kilómetros."
  },
  {
    title: "Torre Eiffel, París",
    image: "./src/imgs/torre-eiffel.jpg",
    description: "Admira el símbolo de París y disfruta de vistas panorámicas desde lo alto de la icónica torre de hierro."
  },

  {
    title: "Times Square, Nueva York",
    image: "./src/imgs/times-square.jpg",
    description: "Sumérgete en el corazón de Nueva York, un lugar vibrante lleno de luces, entretenimiento y compras."
  },
  {
    title: "Coliseo, Roma",
    image: "./src/imgs/coliseo.jpg",
    description: "Viaja en el tiempo y visita el legendario anfiteatro romano, escenario de antiguas batallas de gladiadores."
  },

  {
    title: "Estatua de la Libertad, Nueva York",
    image: "./src/imgs/estatua-libertad.jpg",
    description: "Descubre el símbolo de la libertad, un regalo de Francia a los Estados Unidos, en la Isla de la Libertad."
  },
  {
    title: "Sagrada Familia, Barcelona",
    image: "./src/imgs/sagrada-familia.jpg",
    description: "Visita esta icónica basílica diseñada por Gaudí, una obra maestra de la arquitectura que aún sigue en construcción."
  },
  {
    title: "Museo del Louvre, París",
    image: "./src/imgs/museo-louvre.jpg",
    description: "Admira una de las colecciones de arte más importantes del mundo en el museo más visitado, hogar de la Mona Lisa."
  }
];

*/ 