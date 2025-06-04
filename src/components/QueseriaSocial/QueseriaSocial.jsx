"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, HeartHandshake } from "lucide-react"
import { PiTiktokLogoLight } from "react-icons/pi"
import BentoSocialGrid from "./SocialSection/Bento"
import { useRef } from "react"

const QueseriaSocial = () => {
  const containerRef = useRef(null)

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full mx-auto py-20 -mt-7 md:-mt-5.5 lg:-mt-6 overflow-hidden"
    >
      {/* Fondo con blobs decorativos color chedar */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blobs principales grandes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-bl from-orange-300/25 to-orange-400/15 rounded-full blur-2xl" />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-88 h-88 bg-gradient-to-t from-orange-400/20 to-orange-300/10 rounded-full blur-3xl" />

        {/* Blobs medianos laterales */}
        <div className="absolute top-1/3 -left-16 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-orange-300/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 -right-24 w-72 h-72 bg-gradient-to-l from-orange-300/30 to-orange-200/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-2/3 left-8 w-56 h-56 bg-gradient-to-br from-orange-400/15 to-orange-200/10 rounded-full blur-xl" />
        <div className="absolute top-1/4 right-12 w-48 h-48 bg-gradient-to-bl from-orange-300/20 to-orange-400/12 rounded-full blur-lg" />

        {/* Blobs adicionales para más densidad */}
        <div className="absolute top-10 left-1/3 w-40 h-40 bg-gradient-to-r from-orange-200/18 to-orange-300/12 rounded-full blur-2xl" />
        <div
          className="absolute bottom-20 right-1/4 w-52 h-52 bg-gradient-to-l from-orange-400/22 to-orange-200/14 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-orange-300/16 to-orange-400/10 rounded-full blur-lg" />

        {/* Blobs pequeños flotantes con más variedad */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-200/15 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-24 h-24 bg-orange-300/20 rounded-full blur-lg animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/6 right-1/4 w-20 h-20 bg-orange-400/15 rounded-full blur-md animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-28 h-28 bg-orange-200/18 rounded-full blur-lg animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-3/5 right-1/5 w-22 h-22 bg-orange-300/16 rounded-full blur-md animate-bounce"
          style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
        />

        {/* Micro blobs para textura adicional */}
        <div className="absolute top-1/8 left-2/3 w-16 h-16 bg-orange-400/12 rounded-full blur-sm" />
        <div
          className="absolute bottom-1/4 left-1/3 w-18 h-18 bg-orange-200/14 rounded-full blur-sm animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div className="absolute top-2/5 left-3/4 w-14 h-14 bg-orange-300/10 rounded-full blur-sm" />
        <div
          className="absolute bottom-1/5 right-2/3 w-20 h-20 bg-orange-400/13 rounded-full blur-md animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div className="absolute top-4/5 left-1/6 w-12 h-12 bg-orange-200/11 rounded-full blur-sm" />

        {/* Blobs elípticos para más variedad de formas */}
        <div className="absolute top-1/3 right-1/3 w-60 h-32 bg-gradient-to-r from-orange-300/14 to-orange-200/8 rounded-full blur-xl transform rotate-45" />
        <div className="absolute bottom-1/3 left-2/3 w-44 h-24 bg-gradient-to-l from-orange-400/16 to-orange-300/10 rounded-full blur-lg transform -rotate-30" />
        <div className="absolute top-2/3 right-1/6 w-38 h-20 bg-gradient-to-br from-orange-200/12 to-orange-400/8 rounded-full blur-md transform rotate-60" />

        {/* Textura sutil de fondo mejorada */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-100/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-50/15 to-transparent" />
      </div>

      {/* Título */}
      <div className="relative text-center pt-8 mb-24 px-4 z-10">
        {/* Título artístico con subrayado dinámico */}
        <h2 className="relative inline-block text-5xl md:text-6xl font-play text-verde leading-tight tracking-tight">
          <span className="relative z-10">
            Lo nuestro no es solo producto <br />
            <span className="text-chedar font-avenir font-light">es arte que se comparte</span>
          </span>
          {/* Decoración visual suave */}
          <span className="absolute opacity-20 rounded-3xl blur-sm -z-10"></span>
        </h2>

        {/* Detalle inferior elegante en línea curva */}
        <div className="mt-10 flex justify-center">
          <svg className="w-40 h-6 text-chedar" fill="none" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q50 0 100 10 T200 10" stroke="currentColor" strokeWidth="2" fill="transparent" />
          </svg>
        </div>
      </div>

      {/* Galería tipo Bento */}
      <div className="relative z-10">
        <BentoSocialGrid />
      </div>

      {/* Cita emocional */}
      <div className="relative mt-24 mb-20 text-center px-6 z-10">
        <blockquote className="italic text-xl md:text-2xl text-verde max-w-3xl mx-auto font-play border-l-4 border-chedar pl-6">
          "No se trata solo de productos, se trata de personas, historias, gestos. Todo lo que hacemos lo compartimos,
          con orgullo y con alma."
        </blockquote>
      </div>

      {/* Redes sociales destacadas con sombra bg-chedar */}
      <div className="relative max-w-7xl m-auto before:content-[''] before:absolute before:inset-0 before:rounded-[10rem] before:bg-chedar before:blur-2xl before:opacity-30 before:-z-10 z-10">
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
            <span className="font-avenir text-verde">Gracias por acompañarnos en este viaje artesanal</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

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
  )
}

export default QueseriaSocial
