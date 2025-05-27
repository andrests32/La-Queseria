import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Store, Phone, Compass } from 'lucide-react';
import LogoQueseriaBlanco from '../../LogoQueseria/LogoQueseriaBlanco';

const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center']
  });

  const scaleBackground = useTransform(scrollYProgress, [0, 0.4], [0, 6]);
  const opacityBackground = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const locations = [
    {
      icon: <Building2 size={26} />,
      title: 'Sucursal',
      desc: 'Unión y Progreso - calle Cuenca y 3 de Julio\nLunes a Sábado: 6:00 - 19:00',
    },
    {
      icon: <Store size={26} />,
      title: 'Matriz',
      desc: 'Mercado 17 de Diciembre, Via Bellavista, Santo Domingo\nLunes a Sábado: 6:00 - 19:00',
    },
    {
      icon: <Phone size={26} />,
      title: 'Contáctanos',
      desc: '+593 98 088 3299\nlaqueserianacional.ec@gmail.com',
    },
  ];

  // Generador de múltiples logos con posiciones y tamaños aleatorios
  const renderBackgroundLogos = () => {
    const logos = Array.from({ length: 15 });
    return logos.map((_, i) => {
      const size = Math.floor(Math.random() * 100) + 100; // entre 20px y 60px
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.70 + 0.05;

      return (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
            zIndex: 0,
          }}
        >
          <LogoQueseriaBlanco />
        </div>
      );
    });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 bg-chedar">
      {/* Logos repetidos en el fondo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderBackgroundLogos()}
      </div>

      {/* Círculo animado tipo gota */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-chedar rounded-full z-0"
        style={{
          scale: scaleBackground,
          opacity: opacityBackground,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Compass size={24} className="text-verde" />
            <span className="uppercase font-avenir text-verde tracking-wider text-chedar-dark">
              Ubícanos
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-play text-white">
            Visítanos y <span className="text-verde">conecta</span> con lo artesanal
          </h2>
          <p className="mt-4 text-lg lg:text-2xl text-verde font-avenir max-w-xl mx-auto">
            Estamos en puntos estratégicos para que sientas la experiencia de nuestros quesos hechos con tradición.
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl bg-white shadow-xl border border-chedar/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-chedar text-white p-4 rounded-full">
                  {loc.icon}
                </div>
              </div>
              <h4 className="text-xl font-play text-verde mb-2">{loc.title}</h4>
              <p className="text-verde/70 font-avenir whitespace-pre-line">{loc.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Botón */}
        <motion.a
          href="https://wa.me/593980883299"
          className="mt-16 inline-flex items-center gap-2 bg-chedar-dark text-white font-avenir font-bold tracking-wide px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-md bg-transparent border-white border-4 hover:bg-verde"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Escríbenos en WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
