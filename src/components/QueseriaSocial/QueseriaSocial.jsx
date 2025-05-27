import { motion } from 'framer-motion';
import { Instagram, Facebook, HeartHandshake } from 'lucide-react';
import { PiTiktokLogoLight } from "react-icons/pi";
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
      className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Fondo artesanal sutil */}
      <div className="absolute inset-0 bg-[url('/textura-papel.jpg')] bg-cover opacity-10 pointer-events-none" />

      {/* Título */}
      <div className="relative text-center mb-24 px-4">


        {/* Título artístico con subrayado dinámico */}
        <h2 className="relative inline-block text-5xl md:text-6xl font-play text-verde leading-tight tracking-tight">
          <span className="relative z-10">
            Lo nuestro no es solo producto <br />
            <span className="text-chedar font-avenir font-light">
              es arte que se comparte
            </span>
          </span>
          {/* Decoración visual suave */}
          <span className="absolute opacity-20 rounded-3xl blur-sm -z-10"></span>
        </h2>

        {/* Detalle inferior elegante en línea curva */}
        <div className="mt-10 flex justify-center">
          <svg
            className="w-40 h-6 text-chedar"
            fill="none"
            viewBox="0 0 200 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q50 0 100 10 T200 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>
      </div>


      {/* Galería tipo Bento */}
      <BentoSocialGrid />

      {/* Cita emocional */}
      <div className="relative mt-24 mb-20 text-center px-6">
        <blockquote className="italic text-xl md:text-2xl text-verde max-w-3xl mx-auto font-play border-l-4 border-chedar pl-6">
          “No se trata solo de productos, se trata de personas, historias, gestos. Todo lo que hacemos lo compartimos, con orgullo y con alma.”
        </blockquote>
      </div>

      {/* Redes sociales destacadas */}
    {/* Redes sociales destacadas con sombra bg-chedar */}
<div className="relative before:content-[''] before:absolute before:inset-0 before:rounded-[10rem] before:bg-chedar before:blur-2xl before:opacity-30 before:-z-10">
  <div className="relative bg-white/10 rounded-2xl p-10 md:p-14">
    <h3 className="text-center text-3xl font-play text-verde mb-10 tracking-tight">
      Síguenos & forme parte de nuestra historia
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <SocialCard
        icon={<Instagram strokeWidth={1.2} className="w-9 h-9" />}
        name="Instagram"
        username="@laqueseria.ec"
        link="https://www.instagram.com/laqueseria.ec/"
        description="Día a día entre hornos, campos y manos que crean con amor."
      />
      <SocialCard
        icon={<Facebook strokeWidth={1.2} className="w-9 h-9" />}
        name="Facebook"
        username="@laqueseria.ec"
        link="https://www.facebook.com/QuesoosymaS?mibextid=wwXIfr&rdid=RiiJciBSX6Khz1td#"
        description="Eventos, ferias, comunidad. Un espacio donde compartimos en familia."
      />
      <SocialCard
        icon={<PiTiktokLogoLight className="w-9 h-9" />}
        name="TikTok"
        username="@laqueseria.ec"
        link="https://www.tiktok.com/@laqueseria.ec"
        description="Historias visuales que revelan el alma de lo que hacemos."
      />
    </div>

    {/* Frase decorativa con ícono */}
    <div className="mt-14 text-center text-chedar flex justify-center items-center gap-3 font-light text-lg">
      <HeartHandshake className="w-7 h-7 text-chedar" />
      <span className='font-avenir text-verde'>Gracias por acompañarnos en este viaje artesanal</span>
    </div>
  </div>
</div>

    </motion.div>
  );
};

const SocialCard = ({ icon, name, username, link, description }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col items-center bg-chedar rounded-2xl p-6 
                 border-b-4 border-chedar transition-all duration-300 hover:shadow-lg hover:bg-chedar group"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <div className="text-white mb-2">{icon}</div>
      <h4 className="text-lg font-play text-white tracking-wide">{name}</h4>
      <p className="text-sm text-white font-avenir">{username}</p>
      <p className="mt-3 text-center text-white font-avenir text-sm transition">{description}</p>
    </motion.a>
  );
};


export default QueseriaSocial;
