import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Truck, Smile, ArrowLeft, Star, Heart } from "lucide-react"
import { RiTiktokFill } from "react-icons/ri"
import { motion } from "framer-motion"
import LogoQueseriaBlanco from "../LogoQueseria/LogoQueseriaBlanco"
import HomeButton from "../ProductsFilter/HomeButton"

const faqs = [
  {
    icon: <Truck size={24} />,
    question: "¿Hacen entregas a domicilio?",
    answer:
      "Sí, entregamos en toda la ciudad y zonas rurales cercanas. Realiza tu pedido por WhatsApp y te lo llevamos.",
    color: "from-verde to-verde/80",
  },
  {
    icon: <Clock size={24} />,
    question: "¿Cuáles son sus horarios?",
    answer: "Abrimos de lunes a sábado de 9AM a 7PM. Domingos de 10AM a 4PM.",
    color: "from-rock to-rock/80",
  },
  {
    icon: <Smile size={24} />,
    question: "¿Ofrecen degustaciones?",
    answer: "¡Claro! Puedes visitarnos y probar nuestros quesos artesanales sin compromiso.",
    color: "from-chedar to-chedarlow",
  },
]

const locations = [
  {
    id: 1,
    name: "Matriz",
    address: "Mercado 17 de Diciembre, Via Bellavista, Santo Domingo 260303",
    phone: "+593 98 088 3299",
    email: "laqueserianacional.ec@gmail.com",
    hours: "Lun-Sáb: 6AM-7PM, Dom: 6AM-6PM",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.1043947342434!2d-79.18521672563035!3d-0.257445050323827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d54782565df337%3A0x409e2c54c2149d31!2sLaqueseria!5e1!3m2!1ses-419!2sec!4v1747848908876!5m2!1ses-419!2sec",
    gradient: "from-chedar to-chedarlow",
  },
  {
    id: 2,
    name: "Sucursal",
    address: "Unión y Progreso - calle Cuenca y 3 de Julio",
    phone: "+593 96 713 5647",
    email: "laqueserianacional.ec@gmail.com",
    hours: "Lun-Sáb: 6AM-7PM, Dom: 6AM-6PM",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.209434038807!2d-79.17425024490882!3d-0.2541310582823793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5471dd06b74e5%3A0x6566cbaf7abf5525!2sLa%20Queseria!5e1!3m2!1ses-419!2sec!4v1747849178531!5m2!1ses-419!2sec",
    gradient: "from-verde to-verde/70",
  },
]

const socialLinks = [
  {
    icon: <Instagram size={24} />,
    href: "https://www.instagram.com/laqueseria.ec/",
    color: "from-pink-500 to-rose-500",
    name: "Instagram",
  },
  {
    icon: <Facebook size={24} />,
    href: "https://www.facebook.com/QuesoosymaS?mibextid=wwXIfr&rdid=RiiJciBSX6Khz1td#",
    color: "from-blue-600 to-blue-700",
    name: "Facebook",
  },
  {
    icon: <RiTiktokFill size={24} />,
    href: "https://www.tiktok.com/@laqueseria.ec",
    color: "from-gray-800 to-gray-900",
    name: "TikTok",
  },
]

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">

      {/* Botón de volver al inicio */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.history.back()}
        className="fixed top-8 left-8 z-50 group"
        aria-label="Volver al inicio"
      >
        <HomeButton />
      </motion.button>

      {/* Fondo artístico */}
      <div className="absolute inset-0">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-rose-50/40"></div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-100/10 to-purple-200/10 rounded-full blur-3xl"></div>

        {/* Patrón de puntos elegante */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <HomeButton />

        <div className="max-w-7xl mx-auto">
          {/* Header elegante */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-24"
          >
            {/* Logo sofisticado */}
            <div className="flex justify-center items-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-amber-500 to-chedar rounded-full px-2">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    <LogoQueseriaBlanco className="relative top-0.5 rounded-full w-20 h-auto" />
                  </span>
                </div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl font-play text-verde ml-4 tracking-tight"
              >
                uesería
              </motion.span>
            </div>

            {/* Título principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-play text-verde leading-tight">
                <span className="block">Conecta con</span>
                <span className="block bg-gradient-to-r from-chedar to-chedarlow bg-clip-text text-transparent font-medium">
                  nuestra pasión
                </span>
              </h1>

              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-avenir">
                Cada queso cuenta una historia. Cada visita es una experiencia.
                <span className="block mt-2 text-chedar font-medium">Te esperamos con los brazos abiertos.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* FAQ Cards elegantes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${faq.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {faq.icon}
                    </div>
                    <h3 className="text-xl font-play text-verde group-hover:text-gray-900 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-avenir leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ubicaciones premium */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32"
          >
            {locations.map((loc, index) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="group relative font-avenir"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-chedar/50 rounded-[2rem] blur-2xl"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700">
                  {/* Header con gradiente */}
                  <div className={`relative h-16 bg-gradient-to-r ${loc.gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <h3 className="relative text-2xl font-play text-white tracking-wide">{loc.name}</h3>
                    <div className="absolute top-4 right-4">
                      <Star className="w-6 h-6 text-white/80" fill="currentColor" />
                    </div>
                  </div>

                  {/* Mapa */}
                  <div className="relative overflow-hidden">
                    <iframe
                      src={loc.iframe}
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="group-hover:scale-105 transition-transform duration-700"
                      aria-label={`Mapa de ${loc.name}`}
                    ></iframe>
                  </div>

                  {/* Información */}
                  <div className="w-full h-auto flex flex-col items-start justify-between gap-1 p-4 md:p-8">
                    {/* Elemento de dirección */}
                    <div className="flex items-center gap-4 w-full group/item hover:bg-gray-50/50 rounded-xl px-2 py-1 transition-colors">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 md:w-5 md:h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">
                          {loc.address}
                        </p>
                      </div>
                    </div>

                    {/* Elemento de teléfono */}
                    <div className="flex items-center gap-4 w-full group/item hover:bg-gray-50/50 rounded-xl p-3 transition-colors">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <Phone className="w-5 h-5 md:w-5 md:h-5 text-green-600" />
                      </div>
                      <a
                        href={`tel:${loc.phone.replace(/\D/g, "")}`}
                        className="text-gray-800 font-medium hover:text-green-600 transition-colors text-sm md:text-base"
                      >
                        {loc.phone}
                      </a>
                    </div>

                    {/* Elemento de email */}
                    <div className="flex items-center gap-4 w-full group/item hover:bg-gray-50/50 rounded-xl p-3 transition-colors">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <Mail className="w-5 h-5 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-gray-800 font-medium hover:text-blue-600 transition-colors text-sm md:text-base"
                      >
                        {loc.email}
                      </a>
                    </div>

                    {/* Elemento de horario */}
                    <div className="flex items-center gap-4 w-full group/item hover:bg-gray-50/50 rounded-xl p-3 transition-colors">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <Clock className="w-5 h-5 md:w-5 md:h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-800 font-medium text-sm md:text-base">
                        {loc.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Redes sociales premium */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-chedar/20 to-chedarlow/30 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-chedar backdrop-blur-xl border border-white/40 rounded-[3rem] p-12 md:p-16 shadow-2xl">
                {/* Decoración superior */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center gap-2">
                    <Heart className="w-8 h-8 text-white" fill="currentColor" />
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                    <Heart className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-play text-rock mb-4">
                  Únete a nuestra
                  <span className="block font-play text-white">
                    comunidad quesera
                  </span>
                </h3>

                <p className="text-xl text-gray-600 font-avenir mb-12 max-w-2xl mx-auto leading-relaxed">
                  Descubre recetas exclusivas, ofertas especiales y momentos únicos detrás de cada queso artesanal.
                </p>

                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      viewport={{ once: true }}
                      className="group relative"
                      aria-label={`Síguenos en ${social.name}`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                      ></div>
                      <div
                        className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
                      >
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
