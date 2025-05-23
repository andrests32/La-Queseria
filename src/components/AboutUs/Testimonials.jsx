import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Chef profesional",
    comment:
      "Los quesos de esta quesería son insuperables. Uso sus productos en mi restaurante y mis clientes siempre preguntan por ellos.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Juan Pérez",
    role: "Crítico gastronómico",
    comment:
      "Una experiencia sensorial. Cada bocado transporta a la tradición y cuidado artesanal que pocas queserías mantienen hoy.",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Sofía Ramírez",
    role: "Clienta habitual",
    comment:
      "Desde que descubrí sus yogures naturales, no puedo consumir otros. La diferencia en sabor y textura es abismal.",
    rating: 4,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-play text-rock mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Voces que Inspiran Confianza
          <div className="w-24 h-1 bg-chedar mx-auto mt-2"></div>

        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white px-10 py-12 rounded-3xl shadow-2xl relative"
          >
            <div className="flex justify-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-chedarlow object-cover shadow-md"
              />
            </div>
            <Quote className="w-8 h-8 mx-auto text-chedarlow mb-4" />
            <p className="italic font-avenir text-lg text-gray-600 mb-6 leading-relaxed">
              “{testimonial.comment}”
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-5 h-5 text-chedar fill-chedar"
                />
              ))}
            </div>
            <h4 className="font-play text-xl text-chedar">
              {testimonial.name}
            </h4>
            <p className="text-sm text-rock font-avenir">{testimonial.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Botones de navegación */}
        <div className="mt-10 flex justify-center gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index
                ? "bg-chedar scale-110"
                : "bg-chedarlow hover:bg-chedarlow"
                } transition-all cursor-pointer`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
