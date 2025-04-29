import React from "react";
import { motion } from "framer-motion";
import { Building2, Store, Phone, ArrowRight, Compass } from "lucide-react";

const locations = [
  {
    icon: <Building2 size={26} />,
    title: "Matriz",
    desc: "Av. Principal 123, Centro\nLunes a Sábado: 9:00 - 18:00",
  },
  {
    icon: <Store size={26} />,
    title: "Sucursal",
    desc: "Av. Norte 456, Sector Comercio\nLunes a Sábado: 9:00 - 18:00",
  },
  {
    icon: <Phone size={26} />,
    title: "Contáctanos",
    desc: "+593 98 765 4321\ninfo@quesosartesanales.com",
  },
];

const CallToAction = () => {
  return (
    <motion.section
      className="relative bg-[#fffef9] p-10 md:p-20 rounded-[3rem] shadow-2xl border border-white/30 overflow-hidden"
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
            className={`relative bg-white rounded-3xl shadow-xl p-8 transition-all group hover:-translate-y-2 ${i === 1 ? "md:scale-105 z-20 bg-gradient-to-br from-chedar to-chedarlow text-white" : "text-gray-800"
              }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            transition={{ delay: i * 0.15 }}
          >
            {/* Solapa diagonal decorativa para la tarjeta central */}
            {i === 1 && (
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-white/10 rotate-45 rounded-md shadow-inner"></div>
            )}

            {/* Ícono */}
            <div className="mb-4 flex justify-center">
              <div className={`p-4 rounded-full ${i === 1 ? "bg-white/10" : "bg-chedar/10"} shadow-inner`}>
                {React.cloneElement(loc.icon, {
                  className: `${i === 1 ? "text-white" : "text-chedardark"}`,
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
        <a
          href="https://wa.me/593987654321"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-chedar font-avenir tracking-wide font-semibold bg-chedardark hover:bg-chedar hover:text-white transition duration-300 shadow-md"
        >
          <ArrowRight size={18} />
          Contáctanos por WhatsApp
        </a>

        <div className="mt-12 text-xl tracking-wide text-rock font-play max-w-lg mx-auto">
          “Cada queso cuenta una historia hecha a mano.”
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
