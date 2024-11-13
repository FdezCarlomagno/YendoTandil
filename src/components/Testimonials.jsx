import { useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Ana García",
    location: "Madrid, España",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "¡Increíble experiencia con Yendo! Organizaron nuestro viaje a Tailandia perfectamente. Cada detalle fue considerado y el precio fue mucho mejor que otras agencias.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Buenos Aires, Argentina",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "La atención personalizada de Yendo hizo toda la diferencia. Nuestro viaje a Europa fue exactamente como lo soñamos, y el presupuesto se ajustó perfectamente.",
  },
  {
    id: 3,
    name: "María José Sánchez",
    location: "Ciudad de México",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Viajé sola por primera vez y Yendo me dio toda la confianza y seguridad que necesitaba. ¡Una experiencia inolvidable en Japón!",
  },
  {
    id: 4,
    name: "Roberto Méndez",
    location: "Lima, Perú",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "La transparencia en los costos y la calidad del servicio son excepcionales. Yendo superó todas nuestras expectativas en nuestro viaje familiar.",
  },
  {
    id: 5,
    name: "Laura Torres",
    location: "Santiago, Chile",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "Gracias a Yendo pude cumplir mi sueño de conocer Nueva Zelanda. Su asesoramiento fue fundamental para aprovechar al máximo el viaje.",
  }
];

function QuoteIcon({ className }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialCard({ name, location, image, text }) {
  return (
    <motion.div 
      className="min-w-[300px] md:min-w-[400px] bg-secondary p-6 rounded-xl mx-4 flex flex-col relative border border-accent/20"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <QuoteIcon className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
      
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full border-2 border-accent"
        />
        <div className="ml-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>
      
      <p className="text-gray-300 italic">{text}</p>
      
      <div className="flex justify-center mt-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              className="w-5 h-5 text-accent" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 400;
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section id="testimonials" className="section-padding bg-primary relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Lo que dicen nuestros viajeros
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experiencias reales de personas que ya vivieron la aventura Yendo!
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent/80 hover:bg-accent p-2 rounded-full text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={containerRef}
          className="overflow-x-auto flex space-x-6 py-8 px-4 no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent/80 hover:bg-accent p-2 rounded-full text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;