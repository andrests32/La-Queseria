import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Phone, ArrowRight, Compass } from 'lucide-react';

const locations = [
  {
    icon: <Building2 size={26} className="text-chedar" />,
    title: 'Matriz',
    desc: 'Av. Principal 123, Centro\nLunes a Sábado: 9:00 - 18:00'
  },
  {
    icon: <Store size={26} className="text-chedar" />,
    title: 'Sucursal',
    desc: 'Av. Norte 456, Sector Comercio\nLunes a Sábado: 9:00 - 18:00'
  },
  {
    icon: <Phone size={26} className="text-chedar" />,
    title: 'Contáctanos',
    desc: '+593 98 765 4321\ninfo@quesosartesanales.com'
  }
];

const CallToAction = () => {
  return (
    <motion.section
      className="relative bg-white/80 backdrop-blur-sm p-12 md:p-20 rounded-2xl overflow-hidden border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
      }}
    >
      {/* Círculos blur decorativos */}
      <div className="absolute top-0 left-10 w-52 h-52 bg-chedar/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-44 h-44 bg-chedar/20 rounded-full blur-2xl"></div>

      {/* Título con brújula */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center gap-2 text-chedar mb-2">
          <Compass className="animate-spin-slow" size={20} />
          <span className="uppercase tracking-widest font-avenir font-semibold text-sm">Ubícanos</span>
        </div>
        <h2 className="text-4xl md:text-5xl text-rock font-play">
        Encuéntranos & Conéctate con Nosotros
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto font-avenir">
          Cada espacio está diseñado para ofrecerte una experiencia auténtica y cercana.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            className="group relative p-8 bg-white rounded-2xl shadow-md border border-chedar/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {/* Reflejo vidrio */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/60 to-white/0 rounded-t-2xl"></div>

            {/* Icono */}
            <div className="p-3 mb-3 bg-amber-100 rounded-full shadow-inner w-fit mx-auto">
              {loc.icon}
            </div>
            <h4 className="text-xl font-play text-rock text-center">{loc.title}</h4>
            <p className="text-gray-600 text-sm text-center whitespace-pre-line leading-relaxed font-avenir">
              {loc.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Firma Artesanal */}
      <div className="mt-16 text-center relative z-10">
        <a
          href="https://wa.me/593xxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-chedar text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg text-sm tracking-wider font-avenir font-semibold transition-all duration-300"
        >
          <ArrowRight size={18} />
          Contáctanos por WhatsApp
        </a>

        <div className="mt-12 text-2xl text-chedar/60 italic font-play">
          “Lo artesanal se siente desde el primer bocado.”
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
