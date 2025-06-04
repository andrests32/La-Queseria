"use client"

import { motion } from "framer-motion"
import { FaHome, FaAward, FaQuoteLeft, FaStore, FaCertificate, FaLightbulb, FaMapMarkedAlt } from "react-icons/fa"
import { GiFactory } from "react-icons/gi"
import { useRef } from "react"
import { useInView } from "framer-motion"

const HistoryTimeline = () => {
  const milestones = [
    {
      year: "2017",
      title: "Fundación",
      description:
        "Nuestra historia comenzó en febrero del 2017, con una idea sencilla de ofrecer productos lácteos de calidad al mejor precio.",
      Icon: FaHome,
      image: "/fundation.webp",
      testimonial:
        '"El servicio que recibí la primera vez me impactó. Esa conexión sincera con los clientes es lo que nos gusta". - Juan Pérez, cliente desde 2017.',
    },
    {
      year: "2019",
      title: "Segundo Establecimiento",
      description: "Cruzar fronteras para acortar distancias permitió cumplir un nuevo sueño.",
      Icon: FaStore,
      image: "/stablishment.webp",
      testimonial: '"El sabor auténtico que trajeron no solo conquistó paladares, revolucionó nuestro mercado."',
    },
    {
      year: "2021",
      title: "Planta de Producción",
      description:
        "Fabricar nuestro propio producto, el mayor reto que se vio reflejado en la estandarización de calidad y sabor auténtico de nuestros quesos.",
      Icon: GiFactory,
      image: "/production.webp",
      testimonial: '"Un ejemplo de producción responsable con el medio ambiente."',
    },
    {
      year: "2025",
      title: "Certificación",
      description:
        "Obtuvimos la certificación BPM que avala nuestros procesos 100% confiables y sostenibles, siempre prevaleciendo la inocuidad alimentaria.",
      Icon: FaCertificate,
      image: "/certification.webp",
      testimonial: '"Nos brindan productos de buena calidad."',
    },
    {
      year: "2025",
      title: "Innovación",
      description: "Ampliamos nueva cartera de productos, manteniendo la esencia tradicional.",
      Icon: FaLightbulb,
      image: "/innovation.webp",
      testimonial: '"Han sabido innovar sin perder su identidad."',
    },
    {
      year: "2025",
      title: "Expansión",
      description:
        "Se apertura el 28 de junio la primera franquicia a nivel nacional con miras de llegar a todo el Ecuador.",
      Icon: FaMapMarkedAlt,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      testimonial: '"Cada vez más cerca de nosotros."',
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 md:py-24">
      {/* Fondo principal con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30" />

      {/* Círculos decorativos estáticos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100/20 rounded-full blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-amber-100/25 rounded-full blur-lg" />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-yellow-100/20 rounded-full blur-lg" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-green-100/15 rounded-full blur-xl" />

      {/* Formas geométricas sutiles */}
      <div className="absolute top-1/3 right-16 w-16 h-16 bg-orange-200/10 transform rotate-45 blur-sm" />
      <div className="absolute bottom-1/3 left-20 w-12 h-12 bg-amber-200/15 rounded-full blur-sm" />

      {/* Patrón de puntos muy sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-play text-verde">
              Nuestra Trayectoria
            </h2>
            {/* Decoración del título */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400/30 rounded-full" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400/20 rounded-full" />
          </div>
          <p className="mt-4 text-chedar text-base font-avenir md:text-lg max-w-2xl mx-auto">
            Años de pasión por lo que hacemos, impulsados por la innovación y guiados siempre por nuestro compromiso con
            la calidad.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Línea de tiempo */}
        <div className="relative">
          {/* Línea vertical central mejorada */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-2 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-300 transform -translate-x-1/2 rounded-full shadow-sm" />

          <div className="space-y-20">
            {milestones.map(({ year, title, description, Icon, image, testimonial }, index) => (
              <motion.div
                key={year}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Imagen */}
                <div className="w-full md:w-1/2 relative">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-xl  aspect-[1/1] bg-gray-100"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Marco decorativo */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-2xl" />

                    <img
                      src={image || "/placeholder.svg"}
                      alt={title}
                      className="relative w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />

                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

                    {/* Año en la esquina */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-play text-chedar">{year}</span>
                    </div>

                    {/* Información en la parte inferior */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="text-white text-lg" />
                        </div>
                        <div>
                          <h4 className="text-lg font-play text-chedar">{title}</h4>
                          <p className="text-sm opacity-90 font-avenir">Sto. Domingo {year}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div
                  className={`w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-10 ${index % 2 === 0 ? "text-left" : "text-left md:text-right"}`}
                >
                  {/* Fondo sutil para el contenido */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div
                      className={`flex items-center mb-4 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <span className="text-3xl font-play text-verde">{year}</span>
                          <div className="text-xs text-gray-500 font-avenir uppercase tracking-wide">Hito Importante</div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-play text-verde mb-3">{title}</h3>
                    <p className="text-chedar font-avenir text-base leading-relaxed mb-6">{description}</p>

                    {/* Testimonial mejorado */}
                    <div className="bg-gradient-to-r from-chedar to-chedarlow rounded-xl p-5 relative shadow-lg">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FaQuoteLeft className="text-orange-500 text-sm" />
                      </div>
                      <p className="italic font-inter font-semibold text-white text-sm md:text-base leading-relaxed pl-4">{testimonial}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ícono final */}
          <motion.div
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-white flex items-center justify-center shadow-2xl"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            <FaAward className="text-white text-2xl md:text-3xl" />
          </motion.div>
        </div>

        {/* Decoración final */}
        <div className="text-center mt-24 pt-8 border-t border-orange-200/50">
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full" />
            <div className="w-1 h-1 bg-amber-400 rounded-full" />
            <div className="w-2 h-2 bg-orange-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistoryTimeline
