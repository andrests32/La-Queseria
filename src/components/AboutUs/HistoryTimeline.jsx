import { motion } from 'framer-motion';
import { FaHome, FaLeaf, FaAward, FaQuoteLeft } from 'react-icons/fa';
import { GiMilkCarton } from 'react-icons/gi';
import { IoMdAirplane } from 'react-icons/io';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const HistoryTimeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Fundación",
      description: "Nuestra historia comenzó con una idea sencilla: ofrecer productos de calidad a buen precio.",
      Icon: FaHome,
      image: "https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg",
      testimonial: "“El servicio que recibí la primera vez me impactó'. Esa conexión sincera con los clientes es lo que nos gusta.” — Juan Pérez, cliente desde 2018"
    },
    {
      year: "2022",
      title: "Segundo Establecimiento",
      description: "Nuestros productos cruzaron fronteras, algo que alguna vez solo imaginamos como un sueño lejano.",
      Icon: IoMdAirplane,
      image: "https://images.pexels.com/photos/31845770/pexels-photo-31845770/free-photo-of-barista-preparando-bebidas-en-un-cafe-vietnamita.jpeg",
      testimonial: "“El sabor auténtico que trajeron no solo conquistó paladares, revolucionó nuestro mercado.”"
    },
    {
      year: "2024",
      title: "Certificación",
      description: "Obtuvimos la certificación que avala nuestros procesos 100% naturales y sostenibles.",
      Icon: FaLeaf,
      image: "https://images.pexels.com/photos/8297652/pexels-photo-8297652.jpeg",
      testimonial: "“Un ejemplo de producción responsable con el medio ambiente.”"
    },
    {
      year: "2025",
      title: "Innovación",
      description: "Ampliamos nuestra línea con nuevos productos manteniendo la esencia tradicional.",
      Icon: GiMilkCarton,
      image: "https://images.pexels.com/photos/8636604/pexels-photo-8636604.jpeg",
      testimonial: "“Han sabido innovar sin perder su identidad.”"
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-16 md:py-24"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/cheese-pattern.png')] bg-repeat opacity-5 bg-[size:150px_150px] transform-gpu" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-play bg-verde bg-clip-text text-transparent">
            Nuestra Trayectoria
          </h2>
          <p className="mt-4 text-chedar text-base md:text-lg max-w-2xl mx-auto font-avenir">
            Años de pasión por lo que hacemos, impulsados por la innovación y guiados siempre por nuestro compromiso con la calidad.
          </p>
          <div className="w-16 h-1 bg-chedar mx-auto mt-6 rounded" />
        </motion.div>

        {/* Línea de tiempo */}
        <div className="relative">
          {/* Línea vertical central en desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-chedar to-chedarlow transform -translate-x-1/2" />

          <div className="space-y-20">
            {milestones.map(({ year, title, description, Icon, image, testimonial }, index) => (
              <motion.div
                key={year}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Imagen - Versión estándar para React */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="relative rounded-xl overflow-hidden shadow-md aspect-video bg-gray-100"
                    whileHover={{ scale: 0.98 }}
                  >
                    {/* Imagen estándar con optimizaciones manuales */}
                    <img
                      src={image}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover transform-gpu"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                          <Icon className="text-white text-sm" />
                        </div>
                        <span className="text-sm font-avenir">{title}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-10 text-left md:text-right">
                  <div className="flex justify-start md:justify-end items-center mb-2">
                    <span className="text-2xl font-bold text-rock">{year}</span>
                    <Icon className="ml-3 text-chedar text-xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-play text-rock mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm md:text-base font-avenir mb-4">{description}</p>
                  <div className="bg-chedar rounded-lg p-4 relative shadow-sm">
                    <FaQuoteLeft className="absolute -top-3 -left-3 text-verde text-xl" />
                    <p className="italic text-white text-sm md:text-base">{testimonial}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ícono final */}
          <motion.div
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-100 border-4 border-amber-300 flex items-center justify-center shadow-md"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <FaAward className="text-chedar text-xl md:text-2xl" />
          </motion.div>
        </div>

        {/* Firma final */}
        <div className="text-center mt-24 pt-8 border-t border-gray-200" />
      </div>
    </section>
  );
};

export default HistoryTimeline;