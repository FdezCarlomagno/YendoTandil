import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="section-padding bg-secondary">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre Yendo!</h2>
        <p className="text-lg text-gray-300 mb-6">
        En <strong>Yendo!</strong>, creemos que viajar no se trata solo de conocer nuevos lugares – es crear <strong>momentos inolvidables</strong> y <strong>conexiones genuinas</strong>. 
        Nuestra misión es hacer realidad tus <strong>sueños viajeros</strong>, ofreciéndote experiencias cuidadosamente armadas que combinan <strong>aventura</strong>, <strong>cultura</strong> y <strong>comodidad</strong>.
        </p>
        <p className="text-lg text-gray-300 mb-6">
        Con años de experiencia y una pasión inigualable por la exploración, diseñamos viajes que te <strong>inspiran</strong>, te <strong>enseñan</strong> y te llenan de <strong>alegría</strong>. 
        Queremos ser tu guía en los destinos más increíbles del mundo.
        </p>
        <p className="text-lg text-gray-300">
        <strong>Decinos a dónde querés ir</strong>, que nosotros nos encargamos de todo lo demás. ¡Dale, animate a viajar con nosotros y descubrí lo que te espera!
        </p>
      </motion.div>
    </section>
  );
}

export default About;