import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const HistorySection = () => {
  return (
    <motion.div 
      className="mb-20 bg-white rounded-2xl shadow-md border border-[#f6eccc] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Texto */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center mb-6">
            <Clock size={28} className="text-chedar mr-3" />
            <h3 className="font-play text-2xl md:text-3xl text-rock">Nuestra Historia</h3>
          </div>
          
          <p className="text-primary/80 font-avenir tracking-wide mb-4 leading-relaxed line-clamp-3 md:line-clamp-none">
            Fundada por la familia Mendoza en 1982, nuestra quesería nació con un sueño: mantener vivas las tradiciones queseras de nuestra región mientras ofrecíamos productos de la más alta calidad.
          </p>
          
          <p className="text-primary/80 font-avenir tracking-wide mb-4 leading-relaxed line-clamp-3 md:line-clamp-none">
            A lo largo de cuatro décadas, hemos perfeccionado nuestras recetas, seleccionando cuidadosamente los mejores ingredientes de productores locales y aplicando técnicas artesanales transmitidas de generación en generación.
          </p>
          
          <p className="text-primary/80 font-avenir tracking-wide leading-relaxed line-clamp-3 md:line-clamp-none">
            Hoy, nuestros quesos son reconocidos por su sabor excepcional y su calidad consistente, fruto de una pasión inquebrantable por la excelencia y un profundo respeto por nuestras raíces.
          </p>
        </div>

        {/* Imagen */}
        <div className="bg-[#f9f5e8] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f6eccc]/30 to-transparent"></div>
          <img 
            src="https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg" 
            alt="Proceso artesanal de elaboración de quesos" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HistorySection;
