import { motion } from 'framer-motion';
import LogoQueseriaBlanco from '../LogoQueseria/LogoQueseriaBlanco';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-chedar flex items-center justify-center px-6 sm:px-10 overflow-hidden">

      {/* Blob animado */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-white opacity-20 blur-3xl rounded-full z-0"
        style={{ top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{
          borderRadius: ['40% 60% 60% 40% / 40% 40% 60% 60%', '60% 40% 40% 60% / 50% 60% 40% 50%', '40% 60% 60% 40% / 40% 40% 60% 60%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-2xl text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <LogoQueseriaBlanco className="h-50 lg:h-60 w-auto mx-auto" />
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-4xl md:text-5xl font-play text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Quiénes somos?
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-sm md:text-lg text-verde/90 leading-relaxed font-avenir"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Antes de conocernos, baja un poco… Queremos compartir contigo una historia hecha a mano.
        </motion.p>

        {/* Línea simple */}
        <motion.div
          className="w-26 h-[2px] bg-white mx-auto mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute top-[500px] lg:top-[640px] left-1/2 transform -translate-x-1/2 opacity-50"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-1.5 h-12 bg-white rounded-full" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
