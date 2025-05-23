import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Truck, Smile } from 'lucide-react';
import { RiTiktokFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import LogoQueseria from '../LogoQueseria/LogoQueseria';
import HomeButton from '../ProductsFilter/HomeButton';

const faqs = [
  {
    icon: <Truck size={20} />,
    question: '¿Hacen entregas a domicilio?',
    answer: 'Sí, entregamos en toda la ciudad y zonas rurales cercanas. Realiza tu pedido por WhatsApp y te lo llevamos.'
  },
  {
    icon: <Clock size={20} />,
    question: '¿Cuáles son sus horarios?',
    answer: 'Abrimos de lunes a sábado de 9AM a 7PM. Domingos de 10AM a 4PM.'
  },
  {
    icon: <Smile size={20} />,
    question: '¿Ofrecen degustaciones?',
    answer: '¡Claro! Puedes visitarnos y probar nuestros quesos artesanales sin compromiso.'
  }
];

const locations = [
  {
    id: 1,
    name: 'Matriz',
    address: 'Mercado 17 de Diciembre, Via Bellavista, Santo Domingo 260303',
    phone: '+593 98 088 3299',
    email: 'laqueserianacional.ec@gmail.com',
    hours: 'Lun-Sáb: 6AM-7PM, Dom: 6AM-6PM',
    iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.1043947342434!2d-79.18521672563035!3d-0.257445050323827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d54782565df337%3A0x409e2c54c2149d31!2sLaqueseria!5e1!3m2!1ses-419!2sec!4v1747848908876!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    id: 2,
    name: 'Sucursal',
    address: 'Unión y Progreso - calle Cuenca y 3 de Julio ',
    phone: '+593 96 713 5647',
    email: 'laqueserianacional.ec@gmail.com',
    hours: 'Lun-Sáb: 6AM-7PM, Dom: 6AM-6PM',
    iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.209434038807!2d-79.17425024490882!3d-0.2541310582823793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5471dd06b74e5%3A0x6566cbaf7abf5525!2sLa%20Queseria!5e1!3m2!1ses-419!2sec!4v1747849178531!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  }
];

const socialLinks = [
  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/laqueseria.ec/' },
  { icon: <Facebook size={20} />, href: 'https://www.facebook.com/QuesoosymaS?mibextid=wwXIfr&rdid=RiiJciBSX6Khz1td#' },
  { icon: <RiTiktokFill size={20} />, href: 'https://www.tiktok.com/@laqueseria.ec' },
];

const ContactSection = () => {
  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Capa de fondo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white z-0"></div>
      
      {/* Capa de imagen con opacidad */}
      <div className="absolute inset-0 bg-[url('/queseria.webp')] bg-cover bg-center opacity-5 z-10"></div>
      
      {/* Contenido principal */}
      <div className="relative z-20">
        <HomeButton />
        
        <div className="max-w-7xl mx-auto">
          {/* Branding y título */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex justify-center items-center mb-4">
              <LogoQueseria className="h-16 md:h-22" />
              <span className="text-4xl md:text-5xl font-play text-chedar">uesería</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-play text-rock mb-4">¿Necesitas algo? Estamos para ti.</h2>
            <p className="text-base md:text-lg text-gray-600 font-avenir max-w-2xl mx-auto leading-relaxed">
              Escríbenos, visítanos o simplemente ven a degustar. Queremos que vivas la experiencia de lo artesanal, lo real y lo humano.
            </p>
          </div>

          {/* Preguntas frecuentes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 md:mb-20 px-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 text-chedar mb-3">
                  <span className="bg-amber-50 p-2 rounded-full">{faq.icon}</span>
                  <h4 className="font-play tracking-wide text-lg">{faq.question}</h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-avenir">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          {/* Ubicaciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 px-4">
            {locations.map(loc => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-lg border border-[#ebdfc9] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <iframe
                  src={loc.iframe}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-t-3xl"
                  aria-label={`Mapa de ${loc.name}`}
                ></iframe>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-play text-rock">{loc.name}</h3>
                  <div className="flex items-start text-rock font-avenir">
                    <MapPin className="mr-3 text-chedar mt-0.5" size={18} />
                    <span className="font-avenir text-sm md:text-base">{loc.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-3 text-chedar mt-0.5" size={18} />
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-rock hover:text-chedar transition-colors font-avenir text-sm md:text-base">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 text-chedar mt-0.5" size={18} />
                    <a href={`mailto:${loc.email}`} className="text-rock hover:text-chedar transition-colors font-avenir text-sm md:text-base">
                      {loc.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-3 text-chedar mt-0.5" size={18} />
                    <span className="text-rock font-avenir text-sm md:text-base">{loc.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Redes sociales */}
          <div className="mt-16 md:mt-24 text-center px-4">
            <h3 className="text-xl md:text-2xl font-play text-chedar mb-2">Síguenos en redes</h3>
            <p className="text-gray-600 font-avenir mb-6 text-sm md:text-base">
              Historias, fotos del día y descuentos únicos solo para nuestra comunidad.
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full text-chedar bg-white hover:bg-chedar hover:text-white cursor-pointer flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                  aria-label={`Enlace a ${s.href}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decoración artística (capa superior) */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-chedar/10 rounded-full blur-[80px] md:blur-[120px] z-30"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-[80px] md:blur-[120px] z-30"></div>
    </section>
  );
};

export default ContactSection;