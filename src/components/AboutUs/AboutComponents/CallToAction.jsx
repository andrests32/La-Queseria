import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <motion.div
      className="bg-chedar rounded-2xl p-10 text-white text-center relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      {/* Movimiento sutil de fondo */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-play mb-4">
          Descubre el Auténtico Sabor de la Tradición
        </h3>
        <p className="mb-8 font-avenir max-w-3xl mx-auto text-white/90 text-lg">
          Visítanos en nuestra tienda principal o contáctanos para conocer más sobre nuestros productos y servicios personalizados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div className="inline-flex flex-col items-center justify-center bg-sand/20 backdrop-blur-sm p-6 rounded-xl">
            <MapPin className="mx-auto mb-3 text-white" size={28} />
            <h4 className="text-xl font-play mb-2">Visítanos</h4>
            <p className="text-white/90 font-avenir">Av. Principal 123, Sector Centro<br />Lunes a Sábado: 9:00 - 18:00</p>
          </div>

          <div className="inline-flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <Phone className="mx-auto mb-3 text-white" size={28} />
            <h4 className="text-xl font-play mb-2">Contáctanos</h4>
            <p className="text-white/90 font-avenir">+593 98 765 4321<br />info@quesosartesanales.com</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
          href='/checkproducts'
           className="bg-white text-rock px-8 py-3 rounded-full font-avenir font-bold hover:text-chedar transition-colors duration-300 shadow-md flex items-center justify-center tracking-wide cursor-pointer">
            Ver Catálogo <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="https://wa.me/593xxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full font-avenir font-semibold hover:bg-white hover:text-chedar transition-colors duration-300 shadow-md tracking-wide cursor-pointer"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CallToAction;