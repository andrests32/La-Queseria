import React from "react";
import { motion } from "framer-motion";
import { Building2, Store, Phone, ArrowRight, Compass } from "lucide-react";

const locations = [
  {
    icon: <Building2 size={26} />,
    title: "Sucursal",
    desc: "Unión y Progreso - calle Cuenca y 3 de Julio\nLunes a Sábado: 6:00 - 19:00",
  },
  {
    icon: <Store size={26} />,
    title: "Matriz",
    desc: "Mercado 17 de Diciembre, Via Bellavista, Santo Domingo 260303\nLunes a Sábado: 6:00 - 19:00",
  },
  {
    icon: <Phone size={26} />,
    title: "Contáctanos",
    desc: "+593 98 088 3299\nlaqueserianacional.ec@gmail.com",
  },
];

const CallToAction = () => {
  return (
    <motion.section
      className="relative bg-white p-10 md:p-20 rounded-2xl shadow-md overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-chedar/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Encabezado */}
      <div className="text-center mb-20 z-10 relative">
        <div className="inline-flex items-center justify-center gap-2 text-chedar mb-4 font-avenir font-semibold uppercase tracking-widest animate-pulse">
          <Compass size={18} />
          Ubícanos
        </div>
        <h2 className="text-5xl font-play text-rock leading-tight mb-4">
          Visítanos y conecta con lo artesanal
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto font-avenir">
          Estamos en puntos estratégicos para que sientas la experiencia de nuestros quesos hechos con tradición.
        </p>
      </div>

      {/* Cards con diseño asimétrico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch z-10 relative">
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            className={`relative bg-white rounded-2xl shadow-md p-8 transition-all group hover:-translate-y-2 ${i === 1 ? "md:scale-105 z-20 bg-gradient-to-br from-chedar to-chedar text-white" : "text-gray-800"
              }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            transition={{ delay: i * 0.15 }}
          >
           
            {/* Ícono */}
            <div className="mb-4 flex justify-center">
              <div className={`p-4 rounded-full ${i === 1 ? "bg-white" : "bg-chedar"} shadow-inner`}>
                {React.cloneElement(loc.icon, {
                  className: `${i === 1 ? "text-chedar" : "text-white"}`,
                })}
              </div>
            </div>

            <h4 className={`text-xl font-play text-center ${i === 1 ? "text-white" : "text-chedar"}`}>
              {loc.title}
            </h4>
            <p className={`text-sm whitespace-pre-line text-center mt-2 font-avenir ${i === 1 ? "text-white/90" : "text-gray-600"}`}>
              {loc.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Botón CTA */}
      <div className="mt-16 text-center z-10 relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-gradient-to-r from-chedar to-chedarlow p-0.5 rounded-full shadow-xl"
        >
          <motion.a
            href="https://wa.me/1XXXXXXXXXX"
            className="group relative block bg-white text-chedar font-normal tracking-wide py-4 px-8 rounded-full hover:bg-transparent hover:text-white transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="text-lg font-play">Contáctanos por WhatsApp</span>
            </span>
          </motion.a>
        </motion.div>

        <div className="mt-12 text-xl md:text-2xl tracking-wide text-rock font-play max-w-xl mx-auto">
          “Cada producto cuenta una historia hecha a mano.”
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
