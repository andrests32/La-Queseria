import { motion } from 'framer-motion';
import { FaCheese, FaHome, FaLeaf, FaAward, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { GiMilkCarton, GiCow } from 'react-icons/gi';
import { IoMdAirplane } from 'react-icons/io';

const HistoryTimeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Fundación",
      description: "Nuestra historia comenzó con una idea sencilla: ofrecer productos de calidad a buen precio.",
      Icon: FaHome,
      image: "https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial: "El servicio que recibí la primera vez me impactó’. Esa conexión sincera con los clientes es lo que nos gusta. Juan Pérez, cliente desde 2018"
    },
    {
      year: "2022",
      title: "Segundo Establecimiento",
      description: "Nuestros productos cruzaron fronteras, algo que alguna vez solo imaginamos como un sueño lejano.",
      Icon: IoMdAirplane,
      image: "https://images.pexels.com/photos/31845770/pexels-photo-31845770/free-photo-of-barista-preparando-bebidas-en-un-cafe-vietnamita.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "El sabor auténtico que trajeron no solo conquistó paladares, revolucionó nuestro mercado."
    },
    {
      year: "2024",
      title: "Certificación",
      description: "Obtuvimos la certificación que avala nuestros procesos 100% naturales y sostenibles.",
      Icon: FaLeaf,
      image: "https://images.pexels.com/photos/8297652/pexels-photo-8297652.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Un ejemplo de producción responsable con el medio ambiente."
    },
    {
      year: "2025",
      title: "Innovación",
      description: "Ampliamos nuestra línea con nuevos productos manteniendo la esencia tradicional.",
      Icon: GiMilkCarton,
      image: "https://images.pexels.com/photos/8636604/pexels-photo-8636604.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Han sabido innovar sin perder su identidad. - Clientes"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/cheese-pattern.png')] bg-repeat bg-[size:150px_150px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20 px-4"
        >
          <h2 className="text-3xl md:text-6xl mb-3 bg-gradient-to-r from-chedar to-chedarlow bg-clip-text font-play text-transparent">Nuestra Trayectoria</h2>
          <p className="text-base md:text-lg font-avenir text-gray-600 max-w-2xl mx-auto">
            Años de pasión por lo que hacemos, impulsados por la innovación y guiados siempre por nuestro compromiso con la calidad.
          </p>
          <div className="flex justify-center mt-4 md:mt-6">
            <div className="w-12 md:w-16 h-0.5 md:h-1 bg-chedar"></div>
          </div>
        </motion.div>

        {/* Línea de tiempo */}
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-chedar to-chedarlow transform -translate-x-1/2 hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 w-full h-12 bg-chedar"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {milestones.map(({ year, title, description, Icon, image, testimonial }, index) => (
              <motion.div 
                key={year}
                className="relative flex flex-col md:flex-row items-start lg:gap-30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Contenido - siempre arriba en móvil */}
                <div className="w-full pb-6 md:pb-0 md:w-1/2 md:pr-12 md:text-right order-1">
                  <motion.div 
                    className="inline-block text-left md:text-right"
                    whileHover={{ x: index % 2 === 0 ? -5 : 0 }}
                  >
                    <div className="flex items-center justify-start md:justify-end mb-3">
                      <span className="text-3xl md:text-4xl font-avenir text-rock">{year}</span>
                      <div className="ml-3 text-chedar">
                        <Icon className="text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-play text-rock mb-2">{title}</h3>
                    <p className=" font-avenir text-gray-600 mb-4 text-sm md:text-base">{description}</p>
                    
                    {/* Testimonio - oculto en móvil para evitar saturación */}
                    <motion.div 
                      className="bg-amber-50/50 p-4 md:p-6 rounded-lg relative hidden md:block"
                      initial={{ scale: 0.95 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <FaQuoteLeft className="text-chedarlow/70 text-2xl md:text-3xl absolute -top-3 -left-3" />
                      <p className="text-gray-700 font-avenir italic text-sm md:text-base">"{testimonial}"</p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Punto central - móvil */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 md:hidden order-2">
                  <div className="w-8 h-8 rounded-full bg-white border-3 border-chedarlow flex items-center justify-center shadow-md">
                    <Icon className="text-chedar text-xs" />
                  </div>
                </div>

                {/* Punto central - desktop */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 order-2">
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-3 md:border-4 border-chedarlow flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="text-chedar text-sm md:text-base" />
                  </motion.div>
                </div>

                {/* Imagen - siempre abajo en móvil */}
                <div className="w-full md:w-1/2 mt-4 md:mt-0 order-3">
                  <motion.div 
                    className="relative rounded-lg md:rounded-xl overflow-hidden shadow-md aspect-video bg-gray-100"
                    whileHover={{ scale: 0.98 }}
                  >
                    <img 
                      src={image} 
                      alt={title} 
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-400 flex items-center justify-center mr-2 md:mr-3">
                          <Icon className="text-white text-xs md:text-sm" />
                        </div>
                        <span className="font-avenir text-sm md:text-base">{title}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Testimonio solo en móvil */}
                  <motion.div 
                    className="bg-gray-50 p-4 rounded-lg relative mt-4 md:hidden"
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaQuoteLeft className="text-chedarlow text-xl absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic text-xs">"{testimonial}"</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Elemento final decorativo */}
          <motion.div 
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4 md:translate-y-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-50 border-3 md:border-4 border-amber-200 flex items-center justify-center shadow-sm md:shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <FaAward className="text-chedar text-lg md:text-2xl" />
          </motion.div>
        </div>

        {/* Firma final */}
        <motion.div
          className="text-center mt-24 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          
          <FaStar className="text-amber-400 mx-auto mb-3" />
          <p className="text-sm text-gray-500 tracking-wider">ARTESANÍA QUE TRASCIENDE GENERACIONES</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTimeline;