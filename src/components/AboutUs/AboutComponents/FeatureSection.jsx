import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Home, HandPlatter, Award, HeartHandshake, Leaf } from 'lucide-react';

const features = [
  {
    icon: <HandPlatter size={40} className="text-chedar" />,
    title: "Productos Selectos",
    description: "Seleccionamos cuidadosamente los mejores ingredientes locales para garantizar el sabor auténtico que distingue a todos nuestros quesos.",
  },
  {
    icon: <Handshake size={40} className="text-chedar" />,
    title: "Atención Personalizada",
    description: "Nuestros expertos queseros te guiarán en la selección de los quesos perfectos para cada ocasión, maridaje o receta que desees preparar.",
  },
  {
    icon: <Award size={40} className="text-chedar" />,
    title: "Calidad Certificada",
    description: "Cumplimos con los más altos estándares de calidad e higiene en cada etapa del proceso de elaboración, desde la leche hasta el producto final.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const FeatureSection = () => {
  return (
    <div className="mb-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-play text-rock mb-4">Nuestros Valores</h2>
        <p className="text-gray-600 font-avenir max-w-2xl mx-auto">
          Estos principios fundamentales guían cada aspecto de nuestro trabajo diario y nuestro compromiso con la excelencia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md border border-[#f6eccc] hover:shadow-lg transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-center mb-4 bg-sand/30 p-3 rounded-full w-16 h-16 mx-auto items-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-play text-rock mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 font-avenir text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;