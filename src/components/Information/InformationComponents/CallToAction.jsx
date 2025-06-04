"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, MapPin, Clock, Phone, Users, Star } from "lucide-react"
import LogoQueseria from "../../LogoQueseria/LogoQueseria"

const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  const locations = [
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
    },
  ]

  // Logos de fondo más orgánicos y cálidos
  const renderWarmLogos = () => {
    const positions = [
      { top: "10%", left: "5%", size: 100, opacity: 0.9, delay: 0 },
      { top: "20%", right: "8%", size: 100, opacity: 0.9, delay: 0.5 },
      { top: "35%", left: "3%", size: 100, opacity: 0.9, delay: 1 },
      { top: "50%", right: "5%", size: 100, opacity: 0.9, delay: 1.5 },
      { top: "65%", left: "8%", size: 100, opacity: 0.7, delay: 2 },
      { top: "80%", right: "10%", size: 100, opacity: 0.9, delay: 2.5 },
      { top: "25%", left: "50%", size: 100, opacity: 0.9, delay: 3 },
      { top: "70%", right: "45%", size: 100, opacity: 0.9, delay: 3.5 },
    ]

    return positions.map((pos, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        style={{
          ...pos,
          width: `${pos.size}px`,
          height: `${pos.size}px`,
          opacity: pos.opacity,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: pos.opacity }}
        transition={{
          delay: pos.delay,
          duration: 2,
          ease: "easeOut",
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <LogoQueseria />
        </motion.div>
      </motion.div>
    ))
  }

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-transparent to-chedar overflow-hidden"
      style={{ y }}
    >
      {/* Logos de fondo cálidos */}
      <div className="absolute inset-0 z-0">{renderWarmLogos()}</div>

      {/* Patrón orgánico de fondo */}
      <div className="absolute inset-0 opacity-0 lg:opacity-[0.09]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="organic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#FF8F0E" />
              <circle cx="5" cy="5" r="0.5" fill="#FF8F0E" />
              <circle cx="15" cy="15" r="0.8" fill="#FF8F0E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header emotivo y cercano */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 bg-white backdrop-blur-sm px-6 py-3 rounded-full shadow-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heart size={20} className="text-chedar fill-chedar" />
            <span className="text-verde font-avenir font-medium">Hechos con amor familiar</span>
            <Heart size={20} className="text-chedar fill-chedar" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-play text-chedar mb-6 leading-tight">
            Ven y vive la{" "}
            <span className="text-verde font-avenir relative">
              experiencia
              <motion.svg
                className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.path
                  d="M10,4 Q50,1 100,4 T190,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-verde/40"
                />
              </motion.svg>
            </span>{" "}
            de lo auténtico
          </h2>

          <p className="text-lg md:text-xl text-verde/80 font-avenir max-w-4xl mx-auto leading-relaxed mb-8 bg-white">
            Más que una quesería, somos una familia que ha dedicado generaciones a perfeccionar el arte de crear quesos
            que despiertan sonrisas y crean recuerdos inolvidables.
          </p>

          {/* Estadísticas emotivas */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center bg-white shadow-sm px-4 rounded-2xl py-1">
              <div className="text-2xl md:text-3xl font-play text-verde">25+</div>
              <div className="text-sm text-rock font-avenir">Años de tradición</div>
            </div>
            <div className="text-center bg-white shadow-sm px-4 rounded-2xl py-1">
              <div className="text-2xl md:text-3xl font-play text-chedar">1000+</div>
              <div className="text-sm text-rock font-avenir">Familias satisfechas</div>
            </div>
            <div className="text-center bg-white shadow-sm px-4 rounded-2xl py-1">
              <div className="text-2xl md:text-3xl font-play text-verde">100%</div>
              <div className="text-sm text-rock font-avenir">Artesanal</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tarjetas con historia y calidez humana */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${location.warmth} rounded-3xl p-8 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-700 overflow-hidden`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {/* Efecto de brillo cálido */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Contenido principal */}
              <div className="relative z-10">
                {/* Icono con personalidad */}
                <div className="mb-6 flex items-center justify-between">
                  <motion.div
                    className={`w-16 h-16 bg-${location.accent} rounded-2xl flex items-center justify-center text-white shadow-lg bg-chedar`}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {location.icon}
                  </motion.div>

                  {/* Estrellas de calidad */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Star size={14} className={`text-${location.accent} fill-chedar text-chedar`} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Título emotivo */}
                <motion.h3
                  className="text-xl md:text-2xl font-play text-chedar mb-2 leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {location.title}
                </motion.h3>

                <motion.p
                  className={`text-${location.accent} font-avenir font-semibold tracking-wide text-verde/90 text-lg mb-4`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-start gap-2">
                  <MapPin size={18} className={`text-${location.accent} mt-1 flex-shrink-0 text-chedar`} />

                  {location.subtitle}
                  </div>
                </motion.p>

                {/* Descripción emotiva */}
                <motion.p
                  className="text-rock/80 font-avenir text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {location.description}
                </motion.p>

                {/* Información práctica */}
                <motion.div
                  className="space-y-3 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <Clock size={16} className={`text-${location.accent} mt-1 flex-shrink-0 text-chedar`} />
                    <p className="text-chedar-dark/90 font-avenir text-sm leading-relaxed">{location.address}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={16} className={`text-${location.accent} mt-1 flex-shrink-0 text-chedar`} />
                    <p className="text-chedar-dark/70 font-avenir text-sm leading-relaxed">{location.schedule}</p>
                  </div>
                </motion.div>

                {/* Testimonio humano */}
                <motion.div
                  className={`bg-white/60 rounded-2xl p-4 border-l-4 border-chedar ${location.accent}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <p className="text-rock/80 font-avenir text-sm italic mb-2">"{location.testimonial}"</p>
                  <p className={`text-${location.accent} font-avenir text-xs font-semibold text-verde/80`}>- {location.customer}</p>
                </motion.div>
              </div>

              {/* Línea de conexión emocional */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${location.accent}/60 to-${location.accent}/20`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 + 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA emotivo y personal */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/60 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl md:text-3xl font-play text-chedar mb-4">
              ¿Listo para ser parte de nuestra familia?
            </h3>
            <p className="text-verde/80 font-avenir mb-8 leading-relaxed">
              Escríbenos y descubre por qué miles de familias han elegido nuestros quesos para crear sus mejores
              momentos. ¡Estamos aquí para ti!
            </p>

            <motion.a
              href="https://wa.me/593980883299"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-verde to-verde/90 text-white font-avenir font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} className="text-chedar fill-chedar" />
              <span>Conversemos como amigos</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                💬
              </motion.div>
            </motion.a>

            <p className="mt-4 text-verde/70 font-avenir text-sm">Respuesta garantizada ⚡</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CallToAction
