import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Clock, Phone, Users, Star } from 'lucide-react';
import LogoQueseria from "../../LogoQueseria/LogoQueseria";

const CallToAction = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Configuración responsive y observador de intersección
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const resizeHandler = () => checkMobile();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Datos estáticos memoizados
  const locations = useMemo(() => [
    {
      icon: <Heart size={24} />,
      title: "Nuestro Hogar Principal",
      subtitle: "Unión y Progreso",
      description: "Donde comenzó todo. Aquí nació nuestra pasión por los quesos artesanales.",
      address: "Lunes a Sábado: 7:00 AM - 6:30 PM",
      schedule: "Domingo: 7:00 AM - 6:00 PM",
      testimonial: "Aquí siempre nos reciben como familia",
      customer: "María González",
      warmth: "from-orange-50 to-amber-50",
      accent: "chedar",
    },
    {
      icon: <Users size={24} />,
      title: "Nuestra Casa Matriz",
      subtitle: "17 de Diciembre",
      description: "El corazón de nuestra tradición, donde cada queso cuenta una historia.",
      address: "Lunes a Sábado: 7:00 AM - 6:30 PM",
      schedule: "Domingo: 7:00 AM - 6:00 PM",
      testimonial: "Los mejores quesos de toda la región",
      customer: "Carlos Mendoza",
      warmth: "from-green-50 to-emerald-50",
      accent: "verde",
    },
    {
      icon: <Phone size={24} />,
      title: "Hablemos Como Amigos",
      subtitle: "Estamos aquí para ti",
      description: "Porque cada consulta es importante y cada cliente es parte de nuestra familia.",
      address: "098 088 3299",
      schedule: "queserianacionalsas@gmail.com",
      testimonial: "Siempre atentos y dispuestos a ayudar",
      customer: "Ana Rodríguez",
      warmth: "from-orange-50 to-amber-50",
      accent: "chedar",
    }
  ], []);

  // Configuración de animaciones
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 0.9,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Renderizado optimizado de logos de fondo
  const renderWarmLogos = useMemo(() => {
    const positions = [
      { top: "10%", left: "5%", size: 100 },
      { top: "20%", right: "8%", size: 100 },
      { top: "35%", left: "3%", size: 100 },
      { top: "50%", right: "5%", size: 100 },
      { top: "65%", left: "8%", size: 100, opacity: 0.7 },
      { top: "80%", right: "10%", size: 100 },
      { top: "25%", left: "50%", size: 100 },
      { top: "70%", right: "45%", size: 100 }
    ];

    return positions.map((pos, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        style={{
          top: pos.top,
          left: pos.left,
          right: pos.right,
          width: `${pos.size}px`,
          height: `${pos.size}px`,
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={logoAnimation}
        custom={i}
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <LogoQueseria />
        </motion.div>
      </motion.div>
    ));
  }, [isVisible]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-transparent to-chedar overflow-hidden font-avenir"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerAnimation}
    >
      {/* Logos de fondo optimizados */}
      <div className="absolute inset-0 z-0">{renderWarmLogos}</div>

    

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header optimizado */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={itemAnimation}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 bg-chedar backdrop-blur-sm px-6 py-3 rounded-full shadow-sm"
            variants={itemAnimation}
          >
            <Heart size={20} className="text-white fill-white" />
            <span className="text-white font-semibold font-avenir">Hechos con amor familiar</span>
            <Heart size={20} className="text-white fill-white" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-play text-chedar mb-6 leading-tight"
            variants={itemAnimation}
          >
            Ven y vive la{" "}
            <span className="text-verde relative">
              experiencia
              <motion.svg
                className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <path
                  d="M10,4 Q50,1 100,4 T190,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-verde/40"
                />
              </motion.svg>
            </span>{" "}
            de lo auténtico
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-verde/80 max-w-4xl mx-auto leading-relaxed mb-8 bg-white"
            variants={itemAnimation}
          >
            Más que una quesería, somos una familia que ha dedicado generaciones a perfeccionar el arte de crear quesos
            que despiertan sonrisas y crean recuerdos inolvidables.
          </motion.p>

          {/* Estadísticas optimizadas */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            variants={containerAnimation}
          >
            {[
              { value: "25+", label: "Años de tradición", color: "verde" },
              { value: "1000+", label: "Familias satisfechas", color: "chedar" },
              { value: "100%", label: "Artesanal", color: "verde" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="text-center bg-white shadow-sm px-4 rounded-2xl py-1"
                variants={itemAnimation}
              >
                <div className={`text-2xl md:text-3xl font-play text-${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tarjetas optimizadas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerAnimation}
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${location.warmth} rounded-3xl p-8 shadow-lg border border-white/60 transition-all duration-300 overflow-hidden`}
              variants={itemAnimation}
              whileHover={isMobile ? {} : { y: -8 }}
            >
              <div className="relative z-10">
                {/* Encabezado de tarjeta */}
                <div className="mb-6 flex items-center justify-between">
                  <motion.div
                    className="w-16 h-16 bg-chedar rounded-2xl flex items-center justify-center text-white shadow-lg"
                    whileHover={isMobile ? {} : { scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {location.icon}
                  </motion.div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className="text-chedar fill-current" 
                      />
                    ))}
                  </div>
                </div>

                {/* Contenido de tarjeta */}
                <h3 className="text-xl md:text-2xl font-play text-chedar mb-2 leading-tight">
                  {location.title}
                </h3>

                <p className="text-verde/90 font-semibold tracking-wide text-lg mb-4">
                  <div className="flex justify-start gap-2">
                    <MapPin size={18} className="text-chedar mt-1 flex-shrink-0" />
                    {location.subtitle}
                  </div>
                </p>

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {location.description}
                </p>

                {/* Información */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-chedar mt-1 flex-shrink-0" />
                    <p className="text-chedar-dark/90 text-sm leading-relaxed">{location.address}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-chedar mt-1 flex-shrink-0" />
                    <p className="text-chedar-dark/70 text-sm leading-relaxed">{location.schedule}</p>
                  </div>
                </div>

                {/* Testimonio */}
                <div className="bg-white/60 rounded-2xl p-4 border-l-4 border-chedar">
                  <p className="text-gray-700 text-sm italic mb-2">"{location.testimonial}"</p>
                  <p className="text-verde/80 text-xs font-semibold">- {location.customer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA optimizado */}
        <motion.div
          className="text-center"
          variants={itemAnimation}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/60 max-w-2xl mx-auto"
            whileHover={isMobile ? {} : { scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl md:text-3xl font-play text-chedar mb-4">
              ¿Listo para ser parte de nuestra familia?
            </h3>
            <p className="text-verde/80 mb-8 leading-relaxed">
              Escríbenos y descubre por qué miles de familias han elegido nuestros quesos para crear sus mejores
              momentos. ¡Estamos aquí para ti!
            </p>

            <motion.a
              href="https://wa.me/593980883299"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-verde to-verde/90 text-white font-play px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={isMobile ? {} : { scale: 0.95 }}
            >
              <Heart size={20} className="text-chedar fill-chedar" />
              <span>Conversemos como amigos</span>
            </motion.a>

            <p className="mt-4 text-verde/70 text-sm">Respuesta garantizada ⚡</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default React.memo(CallToAction);