import { motion, useScroll } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';
import BentoSocialGrid from './SocialSection/Bento';
import { useRef } from 'react';

const QueseriaSocial = () => {
  const containerRef = useRef(null);


  

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-play text-rock md:text-5xl">
          Descubra el Arte de la Quesería
        </h2>
        <p className="mt-4 text-lg text-gray-600 font-avenir max-w-2xl mx-auto">
          Cada pieza cuenta una historia de tradición, pasión y sabor. Únase a nuestra comunidad de amantes del queso artesanal.
        </p>
      </div>

      <BentoSocialGrid />

      <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-play text-rock mb-8 text-center">Conéctese con Quesería</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SocialButton
            icon={<Instagram />}
            name="Instagram"
            username="@queseria.artesanal"
            link="https://instagram.com"
            followers="25.3K"
          />
          <SocialButton
            icon={<Facebook />}
            name="Facebook"
            username="@queseriaoficial"
            link="https://facebook.com"
            followers="18.5K"
          />
          <SocialButton
            icon={<Twitter />}
            name="Twitter"
            username="@queseria"
            link="https://twitter.com"
            followers="12.1K"
          />
          <SocialButton
            icon={<Youtube />}
            name="YouTube"
            username="Quesería TV"
            link="https://youtube.com"
            followers="8.2K"
          />
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="#subscribe"
            className="inline-flex items-center px-6 py-3 text-lg font-avenir font-semibold tracking-wide text-white bg-chedar rounded-full hover:bg-chedarlow transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Suscríbase a nuestro boletín
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
          <p className="mt-4 text-sm text-chedar font-avenir font-semibold tracking-wider">Reciba recetas exclusivas y ofertas especiales</p>
        </div>
      </div>
    </motion.div>
  );
};

const SocialButton = ({ icon, name, username, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 rounded-xl hover:bg-amber-50 transition-colors border border-amber-100"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="mb-3 text-chedar">{icon}</div>
      <h4 className="font-inter text-verde">{name}</h4>
      <p className="text-sm text-chedar">{username}</p>
      {/* <p className="mt-2 text-xs font-medium text-amber-500">{followers} seguidores</p> */}
    </motion.a>
  );
};

export default QueseriaSocial;
