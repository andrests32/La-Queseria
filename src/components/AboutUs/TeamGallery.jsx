import { motion } from "framer-motion";
import { FaCheese, FaAward, FaQuoteLeft, FaUsers, FaHeart, FaHistory } from "react-icons/fa";
import { GiCow, GiMilkCarton, GiFarmer } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

const TeamSection = () => {
  // **Equipo Directivo**
  const leadership = [
    {
      name: "Ricardo Fernández",
      role: "Fundador & CEO",
      bio: "Tercera generación de maestros queseros. Heredó la tradición familiar y la convirtió en un legado internacional.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      years: "32 años liderando la empresa",
    },
    {
      name: "Isabel Martínez",
      role: "Directora de Producción",
      bio: "Ingeniera en alimentos con especialización en Suiza. Combina tecnología y métodos ancestrales.",
      image: "https://images.pexels.com/photos/8871884/pexels-photo-8871884.jpeg?auto=compress&cs=tinysrgb&w=600",
      years: "15 años en la compañía",
    },
    {
      name: "Carlos Rojas",
      role: "Director Comercial",
      bio: "Experto en mercados gourmet. Llevó nuestros quesos a 18 países en 5 años.",
      image: "https://images.pexels.com/photos/10041269/pexels-photo-10041269.jpeg?auto=compress&cs=tinysrgb&w=600",
      years: "Exportaciones +300%",
    },
  ];

  // **Estadísticas clave**
  const keyStats = [
    { icon: <GiCow className="text-3xl" />, value: "120", label: "Vacas felices" },
    { icon: <FaCheese className="text-3xl" />, value: "50+", label: "Tipos de queso" },
    { icon: <FaAward className="text-3xl" />, value: "12", label: "Premios internacionales" },
    { icon: <FaUsers className="text-3xl" />, value: "45", label: "Empleados" },
  ];

  // **Historia en imágenes**
  const historyImages = [
    { src: "https://images.pexels.com/photos/19992281/pexels-photo-19992281/free-photo-of-restaurante-hombre-mujer-trabajando.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", caption: "La granja original (1952)" },
    { src: "https://images.pexels.com/photos/16999510/pexels-photo-16999510/free-photo-of-hombre-trabajando-cafeteria-en-pie.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", caption: "Primera producción" },
    { src: "https://images.pexels.com/photos/11114723/pexels-photo-11114723.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", caption: "Nuestras instalaciones hoy" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* **Título principal** */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-play text-rock mb-3">El Corazón de Nuestra Quesería</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font font-avenir">
            Tres generaciones dedicadas a crear los mejores quesos con métodos tradicionales y amor por el oficio.
          </p>
        </motion.div>

        {/* **Equipo Directivo (con detalles únicos)** */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 font-avenir">
          {leadership.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-square mb-4 shadow-lg">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-left-top transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-amber-300 font-medium">{person.years}</span>
                  <h3 className="text-xl text-white font-medium">{person.name}</h3>
                  <p className="text-sm text-amber-100">{person.role}</p>
                </div>
              </div>
              <div className="px-2">
                <p className="text-gray-700 mb-3">{person.bio}</p>
                <p className="text-sm text-amber-600 flex items-center">
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* **Historia Visual (Collage de imágenes)** */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-serif text-gray-900 mb-6 text-center flex items-center justify-center">
            <FaHistory className="mr-3 text-amber-500" /> Nuestra Evolución
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {historyImages.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 rounded-lg">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* **Cita del Fundador (con imagen de fondo)** */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden mb-16 h-96 flex items-center"
        >
          <img
            src="https://images.pexels.com/photos/5086968/pexels-photo-5086968.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Ricardo Fernández trabajando"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-8 md:p-12 text-white max-w-2xl mx-auto text-center">
            <FaQuoteLeft className="text-amber-300 text-3xl mx-auto mb-6 opacity-70" />
            <p className="text-xl md:text-2xl font-avenir italic mb-6">
              "No hacemos solo quesos; creamos legado. Cada pieza lleva el nombre de nuestra familia y la pasión de tres generaciones."
            </p>
            <div>
              <p className="font-avenir text-lg">Ricardo Fernández</p>
              <p className="text-sm font-play text-amber-200">Fundador & Maestro Quesero</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;