import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Truck, Smile, ArrowLeft, Star, Heart } from 'lucide-react';
import { RiTiktokFill } from 'react-icons/ri';
import LogoQueseriaBlanco from '../LogoQueseria/LogoQueseriaBlanco';

const faqs = [
  {
    icon: <Truck size={24} />,
    question: "¿Hacen entregas a domicilio?",
    answer: "Sí, entregamos en toda la ciudad y zonas rurales cercanas. Realiza tu pedido por WhatsApp y te lo llevamos.",
    color: "from-verde to-verde/80",
  },
  {
    icon: <Clock size={24} />,
    question: "¿Cuáles son sus horarios?",
    answer: "Abrimos de Lunes a Sábado de 7AM a 6:30PM. Domingos de 7AM a 6PM.",
    color: "from-rock to-rock/80",
  },
  {
    icon: <Smile size={24} />,
    question: "¿Ofrecen degustaciones?",
    answer: "¡Claro! Puedes visitarnos y probar nuestros quesos artesanales sin compromiso.",
    color: "from-chedar to-chedarlow",
  },
];

const locations = [
  {
    id: 1,
    name: "Matriz",
    address: "17 de Diciembre, Sto. Domingo - Ecuador",
    phone: "09 67 135 647",
    email: "queserianacionalsas@gmail.com",
    hours: "Lun-Sáb: 7AM - 6:30PM, Dom: 7AM - 6PM",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.1043947342434!2d-79.18521672563035!3d-0.257445050323827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d54782565df337%3A0x409e2c54c2149d31!2sLaqueseria!5e1!3m2!1ses-419!2sec!4v1747848908876!5m2!1ses-419!2sec",
    gradient: "from-chedar to-chedarlow",
  },
  {
    id: 2,
    name: "Sucursal",
    address: "Unión & Progreso - Sto. Domingo - Ecuador",
    phone: "09 67 135 647",
    email: "queserianacionalsas@gmail.com",
    hours: "Lun-Sáb: 7AM - 6:30PM, Dom: 7AM - 6PM",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.209434038807!2d-79.17425024490882!3d-0.2541310582823793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5471dd06b74e5%3A0x6566cbaf7abf5525!2sLa%20Queseria!5e1!3m2!1ses-419!2sec!4v1747849178531!5m2!1ses-419!2sec",
    gradient: "from-verde to-verde/70",
  },
];

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
];

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

const ContactItem = ({ icon, content, href, colorClass }) => (
  <div className="flex items-center gap-4 w-full group/item hover:bg-gray-50/50 rounded-xl px-3 py-2 transition-colors">
    <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform`}>
      {icon}
    </div>
    {href ? (
      <a href={href} className="text-gray-800 font-medium hover:text-chedar transition-colors text-sm md:text-base">
        {content}
      </a>
    ) : (
      <span className="text-gray-800 font-medium text-sm md:text-base">{content}</span>
    )}
  </div>
);

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-rose-50/40"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[15%] right-[8%] w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-100/10 to-purple-200/10 rounded-full blur-3xl"></div>
        
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.history.back()}
        className="fixed top-8 left-8 z-50 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-3 flex items-center justify-center group hover:bg-white transition-all duration-300"
        aria-label="Volver al inicio"
      >
        <ArrowLeft size={24} className="text-verde group-hover:text-chedar transition-colors duration-300" />
      </motion.button>

      <div className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-20 md:mb-24"
          >
            {/* Logo and Brand */}
            <div className="flex justify-center items-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-amber-500 to-chedar rounded-full px-2 flex items-center justify-center">
                  <LogoQueseriaBlanco className="relative w-16 sm:w-20 h-auto rounded-full" />
                </div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-7xl font-play text-chedar ml-4 tracking-tight"
              >
                uesería
              </motion.span>
            </div>

            {/* Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-play text-verde lg:leading-tight">
                <span className="block leading-tight">Conecta con</span>
                <span className="block bg-gradient-to-r from-chedar to-chedarlow bg-clip-text text-transparent font-medium">
                  nuestra pasión
                </span>
              </h1>

              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-avenir px-4">
                Cada queso cuenta una historia. Cada visita es una experiencia.
                <span className="block mt-2 text-chedar font-medium">Te esperamos con los brazos abiertos.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <div className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn('up', 'spring', i * 0.2, 0.75)}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-3xl blur-xl opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4 sm:mb-6">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${faq.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {faq.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-play text-verde group-hover:text-gray-900 transition-colors pt-2">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-gray-600 font-avenir leading-relaxed text-base sm:text-lg">{faq.answer}</p>
                    
                    {/* Subtle decorative element */}
                    <div className="mt-auto pt-4">
                      <div className={`h-1 w-16 bg-gradient-to-r ${faq.color} rounded-full opacity-50 group-hover:w-full transition-all duration-500 ease-in-out`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Locations Section */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 md:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative font-avenir"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-chedar/50 rounded-[2rem] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700">
                    {/* Header with gradient */}
                    <div className={`relative h-16 bg-gradient-to-r ${location.gradient} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2457284/pexels-photo-2457284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                      <h3 className="relative text-2xl font-play text-white tracking-wide z-10">{location.name}</h3>
                      <div className="absolute top-4 right-4">
                        <Star className="w-6 h-6 text-white/80" fill="currentColor" />
                      </div>
                    </div>

                    {/* Map with overlay */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <iframe
                        src={location.iframe}
                        width="100%"
                        height="280"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="group-hover:scale-105 transition-transform duration-700"
                        aria-label={`Mapa de ${location.name}`}
                      ></iframe>
                    </div>

                    {/* Information */}
                    <div className="w-full h-auto flex flex-col items-start justify-between gap-2 p-4 md:p-6">
                      <ContactItem 
                        icon={<MapPin className="w-5 h-5 text-gray-600" />} 
                        content={location.address}
                        colorClass="from-gray-100 to-gray-200"
                      />
                      
                      <ContactItem 
                        icon={<Phone className="w-5 h-5 text-green-600" />} 
                        content={location.phone}
                        href={`tel:${location.phone.replace(/\D/g, "")}`}
                        colorClass="from-green-100 to-emerald-200"
                      />
                      
                      <ContactItem 
                        icon={<Mail className="w-5 h-5 text-blue-600" />} 
                        content={location.email}
                        href={`mailto:${location.email}`}
                        colorClass="from-blue-100 to-blue-200"
                      />
                      
                      <ContactItem 
                        icon={<Clock className="w-5 h-5 text-purple-600" />} 
                        content={location.hours}
                        colorClass="from-purple-100 to-purple-200"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-chedar/20 to-chedarlow/30 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-chedar to-chedar/90 backdrop-blur-xl border border-white/40 rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay"
                     style={{
                       backgroundImage: `url("https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                     }}
                ></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Decorative header */}
                  <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" />
                      <div className="w-12 sm:w-16 h-1 bg-white rounded-full"></div>
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" />
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-play text-rock mb-4">
                    Únete a nuestra
                    <span className="block font-play text-white">
                      comunidad quesera
                    </span>
                  </h3>

                  <p className="text-lg sm:text-xl text-white/90 font-avenir mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                    Descubre recetas exclusivas, ofertas especiales y momentos únicos detrás de cada queso artesanal.
                  </p>

                  {/* Social icons with enhanced animations */}
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: i * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -4,
                          rotate: [0, -5, 0, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: true }}
                        className="group relative"
                        aria-label={`Síguenos en ${social.name}`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                        ></div>
                        <div
                          className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
                        >
                          <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                          </div>
                          <div className="relative z-10">
                            {social.icon}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Decorative footer */}
                  <div className="mt-8 pt-4 border-t border-white/20">
                    <p className="text-white/70 text-sm">Con amor, desde Santo Domingo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;