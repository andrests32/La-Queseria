import { motion } from "framer-motion";
import { FaGem, FaLeaf, FaHourglassEnd, FaHeart } from "react-icons/fa";

const values = [
  {
    title: "Tradición que Perdura",
    description:
      "Una herencia quesera transmitida de generación en generación con respeto y dedicación.",
    icon: <FaGem className="text-3xl text-chedar group-hover:text-chedarlow transition" />,
  },
  {
    title: "Respeto por la Naturaleza",
    description:
      "Creamos con lo que la tierra nos ofrece, sin alterar su pureza ni su esencia.",
    icon: <FaLeaf className="text-3xl text-green-600 group-hover:text-green-700 transition" />,
  },
  {
    title: "Tiempo como Ingrediente",
    description:
      "Cada queso es el resultado de una espera sabia y cuidadosa. Sin prisa, con arte.",
    icon: <FaHourglassEnd className="text-3xl text-stone-600 group-hover:text-stone-700 transition" />,
  },
  {
    title: "Pasión Artesanal",
    description:
      "Ponemos el alma en cada detalle, creando quesos únicos con amor verdadero.",
    icon: <FaHeart className="text-3xl text-rose-500 group-hover:text-rose-600 transition" />,
  },
];

const GalleryValues = () => {
  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Decoración artística */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100 rounded-full opacity-20 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-play text-rock mb-20"
        >
          Nuestros Principios
        <div className="w-24 h-1 bg-chedar mx-auto mb-4"></div>
        </motion.h2>


        <div className="grid md:grid-cols-2 gap-16 px-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md p-10 relative overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Ornamento decorativo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-tr from-amber-50 to-white rounded-full blur-2xl opacity-30 -z-10" />

              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-50 border border-amber-200 shadow-inner">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-play text-rock group-hover:text-chedarlow transition">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 font-avenir text-base leading-relaxed tracking-wide">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryValues;
