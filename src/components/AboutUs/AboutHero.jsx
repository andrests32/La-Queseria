import { motion } from 'framer-motion';
import LogoQueseria from '../LogoQueseria/LogoQueseria';

const AboutHero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-amber-50 to-white ">
      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Logo o icono decorativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <LogoQueseria className='h-52 w-auto' />
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-4xl md:text-6xl font-play text-rock mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="block font-avenir italic text-chedar mb-2 text-xl">Desde 1952</span>
          ¿Quiénes somos?
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Tres generaciones transformando leche en experiencias memorables
        </motion.p>

        {/* Línea decorativa */}
        <motion.div
          className="w-24 h-px bg-amber-400 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-1.5 h-16 rounded-full bg-gradient-to-b from-chedar to-white opacity-60"
            animate={{
              height: ["4rem", "3rem", "4rem"],
              opacity: [0.7, 0.4, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;