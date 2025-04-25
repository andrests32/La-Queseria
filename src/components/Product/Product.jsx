import { motion } from "framer-motion";
import { Crown, Star, ShoppingBag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    name: "Queso Manchego Reserva",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format",
    description:
      "Añejado durante 12 meses. Sabor intenso y refinado con notas de nuez.",
    badge: "Premium",
    category: "Reserva Especial",
  },
  {
    name: "Queso Azul Artesanal",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=600&auto=format",
    description:
      "Textura cremosa con vetas azules. Perfecto para ensaladas gourmet.",
    badge: "Bestseller",
    category: "Gourmet",
  },
  {
    name: "Queso de Cabra Fresco",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1634487359989-3e90c9432133?q=80&w=600&auto=format",
    description: "Suave y cremoso. Ideal para untar o cocinar.",
    badge: "Orgánico",
    category: "Frescos",
  },
  {
    name: "Parmesano Reggiano",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=600&auto=format",
    description:
      "El rey de los quesos italianos. 24 meses de maduración.",
    badge: "Importado",
    category: "Premium",
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título elegante */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl text-rock font-avenir leading-tight">
            <span className="bg-gradient-to-r from-chedar to-chedarlow bg-clip-text text-transparent font-play">Productos Destacados</span> de la Semana
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-avenir">
            Disfruta de nuestra selección exclusiva de quesos, perfectos para cualquier ocasión. ¡Solo esta semana!
          </p>
        </motion.div>

        {/* Cards de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl font-semibold font-avenir tracking-wide text-rock mb-4">
            ¿Listo para disfrutar de lo mejor? ¡Haz tu pedido ahora!
          </p>
          {/* <a
            href="https://wa.me/1XXXXXXXXXX"
            className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Comprar por WhatsApp
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
