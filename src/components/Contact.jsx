import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const PUBLIC_KEY = "e8O1W419SxmdXAcUr";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error('Por favor, completá todos los campos');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'yendo-service-email', // Reemplaza con tu Service ID de EmailJS
        'yendo-template1', // Reemplaza con tu Template ID de EmailJS
        {
          from_name: formData.nombre,
          from_email: formData.email,
          message: formData.mensaje,
          to_name: 'Yendo!',
        },
        PUBLIC_KEY // Reemplaza con tu Public Key de EmailJS
      );

      toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto con vos pronto.');
      
      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });
    } catch (error) {
      toast.error('Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¡Comenzá Tu Aventura!
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-gray-600 
              focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              placeholder="Tu nombre"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-gray-600 
              focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              placeholder="tucorreo@ejemplo.com"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-gray-600 
              focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              placeholder="Contanos sobre el viaje de tus sueños..."
              disabled={isSubmitting}
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 
            rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;