import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Info, Truck, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import LogoQueseria from '../LogoQueseria/LogoQueseria';

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
    name: 'Sucursal Centro',
    address: 'Calle Principal 123, Centro Histórico, Ciudad, 10001',
    phone: '+52 (555) 123-4567',
    email: 'centro@laqueseria.com',
    hours: 'Lun-Sáb: 9AM-7PM, Dom: 10AM-4PM',
    iframe: 'https://www.google.com/maps/embed?...'
  },
  {
    id: 2,
    name: 'Sucursal Norte',
    address: 'Avenida Reforma 456, Zona Norte, Ciudad, 10002',
    phone: '+52 (555) 987-6543',
    email: 'norte@laqueseria.com',
    hours: 'Lun-Sáb: 10AM-8PM, Dom: 11AM-5PM',
    iframe: 'https://www.google.com/maps/embed?...'
  }
];

const socialLinks = [
  { icon: <Instagram />, href: 'https://instagram.com/laqueseria' },
  { icon: <Facebook />, href: 'https://facebook.com/laqueseria' },
  { icon: <Linkedin />, href: 'https://linkedin.com/company/laqueseria' }
];

const ContactSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-white py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Branding y título */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center mb-4">
            <LogoQueseria className="h-22" />
            <span className="text-5xl font-play text-chedar">uesería</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-play text-rock mb-4">¿Necesitas algo? Estamos para ti.</h2>
          <p className="text-lg text-gray-600 font-avenir max-w-2xl mx-auto leading-relaxed">
            Escríbenos, visítanos o simplemente ven a degustar. Queremos que vivas la experiencia de lo artesanal, lo real y lo humano.
          </p>
        </div>

        {/* Preguntas frecuentes */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/50 rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-center gap-3 text-chedar mb-3">
                {faq.icon}
                <h4 className="font-play tracking-wide text-lg">{faq.question}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-avenir">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {/* Ubicaciones */}
        <div className="grid md:grid-cols-2 gap-14">
          {locations.map(loc => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-lg border border-[#ebdfc9] rounded-3xl overflow-hidden shadow-xl"
            >
              <iframe
                src={loc.iframe}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-t-3xl"
              ></iframe>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-play text-rock">{loc.name}</h3>
                <div className="flex items-start text-rock font-avenir">
                  <MapPin className="mr-3 text-chedar" size={18} />
                  <span className="font-avenir">{loc.address}</span>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 text-chedar" size={18} />
                  <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-rock hover:text-chedar transition-colors font-avenir">{loc.phone}</a>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 text-chedar" size={18} />
                  <a href={`mailto:${loc.email}`} className="text-rock hover:text-chedar transition-colors font-avenir">{loc.email}</a>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 text-chedar" size={18} />
                  <span className="text-rock font-avenir">{loc.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-play text-rock mb-2">Síguenos en redes</h3>
          <p className="text-gray-600 font-avenir mb-6">Historias, fotos del día y descuentos únicos solo para nuestra comunidad.</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-full text-rock hover:bg-chedar hover:text-white flex items-center justify-center shadow-sm transition"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Decoración artística */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-chedar/10 rounded-full blur-[120px]"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#d9c6b3]/10 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default ContactSection;
