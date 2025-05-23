import { motion } from "framer-motion";
import { FaCheese, FaAward, FaQuoteLeft, FaUsers, FaHeart, FaHistory } from "react-icons/fa";
import { GiCow, GiMilkCarton, GiFarmer } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

const TeamSection = () => {
  // **Equipo Directivo**
  const leadership = [
    {
      name: "Jonathan Valdivieso",
      role: "Fundador & CEO",
      bio: "Hombre de negocios con raíces firmes. Con respeto por la tradición familiar, proyectó su legado al mundo sin perder la humildad del origen.",
      image: "/ceo.webp",
      years: "8 años liderando la empresa",
    },
    // {
    //   name: "Isabel Martínez",
    //   role: "Directora de Producción",
    //   bio: "Ingeniera en alimentos con especialización en Suiza. Combina tecnología y métodos ancestrales.",
    //   image: "https://images.pexels.com/photos/8871884/pexels-photo-8871884.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   years: "15 años en la compañía",
    // },
    // {
    //   name: "Carlos Rojas",
    //   role: "Director Comercial",
    //   bio: "Experto en mercados gourmet. Llevó nuestros quesos a 18 países en 5 años.",
    //   image: "https://images.pexels.com/photos/10041269/pexels-photo-10041269.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   years: "Exportaciones +300%",
    // },
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
            El deseo genuino de servir bien a cada cliente, ofreciendo productos honestos, con sabor auténtico y atención cercana. Así empezó todo.
          </p>
        </motion.div>

        {/* **Equipo Directivo (con detalles únicos)** */}
        <div className="max-w-2xl mx-auto mb-20 font-avenir space-y-12">
          {leadership.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Contenedor de imagen con tamaño controlado */}
              <div className="w-full md:w-1/3 lg:w-2/5 relative overflow-hidden rounded-lg aspect-[4/5] shadow-md">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay de texto solo visible en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs text-amber-300 font-medium mb-1">{person.years}</span>
                  <h3 className="text-lg text-white font-medium">{person.name}</h3>
                  <p className="text-sm text-amber-100/90">{person.role}</p>
                </div>
              </div>

              {/* Contenido textual */}
              <div className="flex-1">
                <div className="mb-3">
                  <span className="text-xs text-amber-600 font-medium">{person.years}</span>
                  <h3 className="text-xl text-gray-900 font-medium mt-1">{person.name}</h3>
                  <p className="text-sm text-amber-600/90">{person.role}</p>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{person.bio}</p>
                {person.quote && (
                  <div className="border-l-2 border-amber-400 pl-4 mt-4">
                    <p className="text-gray-600 italic">"{person.quote}"</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* **Historia Visual (Collage de imágenes)** */}
        {/* <motion.div
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
        </motion.div> */}

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
              "No solo creamos productos; construimos un legado. Cada artículo lleva el nombre de nuestra familia y la pasión que nos impulsó a transformar un sueño en realidad. Porque creer en lo que amas es el primer paso para dejar huella."
            </p>
            <div>
              <p className="font-avenir text-xl">Jonathan Valdivieso</p>
              <p className="text-md font-play tracking-wide text-chedar">Fundador</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;