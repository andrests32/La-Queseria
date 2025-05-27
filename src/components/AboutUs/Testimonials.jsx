"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Star, Quote, ChefHat, Award, Heart, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Chef profesional",
    comment:
      "Los quesos de esta quesería son insuperables. Uso sus productos en mi restaurante y mis clientes siempre preguntan por ellos.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: ChefHat,
    color: "from-blue-50/80 via-indigo-50/80 to-purple-50/80",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    name: "Juan Pérez",
    role: "Crítico gastronómico",
    comment:
      "Una experiencia sensorial. Cada bocado transporta a la tradición y cuidado artesanal que pocas queserías mantienen hoy.",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Award,
    color: "from-emerald-50/80 via-teal-50/80 to-cyan-50/80",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "Sofía Ramírez",
    role: "Clienta habitual",
    comment:
      "Desde que descubrí sus yogures naturales, no puedo consumir otros. La diferencia en sabor y textura es abismal.",
    rating: 4,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Heart,
    color: "from-rose-50/80 via-pink-50/80 to-red-50/80",
    accent: "from-rose-500 to-pink-500",
  },
]

const FloatingDot = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white/30 rounded-full"
    animate={{
      y: [-15, -60, -15],
      opacity: [0, 0.6, 0],
    }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  />
)

const CardParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-0.5 h-0.5 bg-gradient-to-r from-gray-400/60 to-gray-300/60 rounded-full"
    animate={{
      x: [0, 20, -20, 0],
      y: [0, -15, -30, 0],
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 0.8, 0.5],
    }}
    transition={{
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  />
)

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(sectionRef, { threshold: 0.4 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [3, -3]))
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-3, 3]))

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])


  const handleMouseMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(event.clientX - rect.left - rect.width / 2)
      mouseY.set(event.clientY - rect.top - rect.height / 2)
    }
  }

  const testimonial = testimonials[index]
  const IconComponent = testimonial.icon

  return (
    <motion.section
      ref={sectionRef}
      className="relative max-w-8xl mx-auto px-4 py-20 sm:px-6 lg:px-60 overflow-hidden"
      style={{ minHeight: "50vh" }}
    >
      {/* Fondo artesanal sutil - IGUAL AL ORIGINAL */}
      <div className="absolute inset-0 bg-[url('/textura-papel.jpg')] bg-cover opacity-10 pointer-events-none" />

      {/* Elementos flotantes sutiles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            <FloatingDot delay={i * 0.8} />
          </div>
        ))}
      </div>

      {/* Forma de fondo sutil */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"
        style={{ y }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* EFECTO DIFUMINADO PRINCIPAL - EXACTAMENTE COMO EL ORIGINAL */}
      <div className="relative before:content-[''] before:absolute before:inset-0 before:rounded-[30rem] before:bg-chedar before:blur-2xl before:opacity-30 before:-z-10 mt-5">
        <div className="relative bg-white/10 rounded-4xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            {/* Título compacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-[#2D5016] backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
              >
                <Sparkles className="w-3 h-3 text-yellow-200" />
                <span className="text-xs tracking-wide text-white/90 font-semibold">Testimonios Auténticos</span>
              </motion.div>

              <motion.h2 className="text-3xl md:text-5xl mb-4 text-chedar font-play lg:flex items-center justify-center gap-4">
                Experiencias
                <motion.span
                  className="block font-normal"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Auténticas
                </motion.span>
              </motion.h2>

              <motion.div
                className="w-12 h-0.5 mx-auto bg-[#FF8F0E]"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Tarjeta de testimonio compacta */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  ref={cardRef}
                  className="relative backdrop-blur-xl bg-white border border-gray-200/50 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden group"
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  onMouseMove={handleMouseMove}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(156,163,175,0.3)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Gradiente de fondo sutil */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.color}`}
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [1, 1.01, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Efectos de luz sutiles */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Partículas dentro de la tarjeta */}
                  <div className="absolute inset-0">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          left: `${25 + Math.random() * 50}%`,
                          top: `${25 + Math.random() * 50}%`,
                        }}
                      >
                        <CardParticle delay={i * 1.5} />
                      </div>
                    ))}
                  </div>

                  {/* Borde brillante sutil */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  {/* Avatar compacto */}
                  <motion.div
                    className="relative mb-6 z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20">
                      {/* Anillo orbital */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-gray-300/30"
                        style={{
                          width: "115%",
                          height: "115%",
                          left: "-7.5%",
                          top: "-7.5%",
                        }}
                        animate={{
                          rotate: 360,
                          scale: [1, 1.03, 1],
                        }}
                        transition={{
                          rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        }}
                      />

                      {/* Resplandor del avatar */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.accent} opacity-15 blur-sm`}
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />

                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="relative w-full h-full rounded-full border-2 border-gray-200/60 object-cover shadow-lg z-10"
                      />

                      <motion.div
                        className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200/50"
                        animate={{
                          y: [0, -3, 0],
                          boxShadow: [
                            "0 2px 10px rgba(0,0,0,0.1)",
                            "0 4px 15px rgba(0,0,0,0.15)",
                            "0 2px 10px rgba(0,0,0,0.1)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <IconComponent className="w-3.5 h-3.5 text-gray-600" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Comillas */}
                  <motion.div
                    className="flex justify-center mb-4 z-10 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <motion.div
                      className="relative"
                      animate={{
                        rotate: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Quote className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  </motion.div>

                  {/* Comentario */}
                  <motion.p
                    className="text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto text-gray-700 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    "{testimonial.comment}"
                  </motion.p>

                  {/* Estrellas */}
                  <motion.div
                    className="flex justify-center gap-1 mb-4 z-10 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        animate={{
                          scale: [1, 1.15, 1],
                          filter: [
                            "drop-shadow(0 0 1px rgba(245,158,11,0.5))",
                            "drop-shadow(0 0 4px rgba(245,158,11,0.8))",
                            "drop-shadow(0 0 1px rgba(245,158,11,0.5))",
                          ],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: idx * 0.1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 4,
                        }}
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Información del usuario */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="relative z-10"
                  >
                    <motion.h4
                      className="text-lg md:text-xl font-medium mb-1 text-gray-800"
                      animate={{
                        textShadow: ["0 0 0px rgba(0,0,0,0.1)", "0 0 5px rgba(0,0,0,0.2)", "0 0 0px rgba(0,0,0,0.1)"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <p className="text-sm md:text-base text-gray-500">{testimonial.role}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navegación compacta */}
            <motion.div
              className="mt-8 flex justify-center gap-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-[#2D5016] scale-125" : "bg-[#2D5016]/40 hover:bg-[#2D5016]/60"
                      }`}
                  />

                  {i === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#2D5016]/20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Indicador de progreso compacto */}
            <motion.div
              className="mt-6 mx-auto w-32 h-px bg-[#2D5016]/20 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-[#2D5016]/60"
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Frase decorativa con ícono */}
            <div className="mt-14 text-center text-[#FF8F0E] flex justify-center items-center gap-3 font-light text-lg">
              <Heart className="w-7 h-7 text-[#FF8F0E]" />
              <span className="text-[#2D5016]">Gracias por acompañarnos en este viaje artesanal</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials
