import { motion } from "framer-motion";
import {
  Crown,
  Percent,
  Gift,
  Timer,
  Trophy,
  ShoppingBag,
} from "lucide-react";
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
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header informativo */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-rock/80 font-avenir">
            <span className="flex items-center gap-2 bg-gray-50/40 border border-b-2 border-gray-200 px-5 py-2 rounded-full">
              <Crown className="w-5 h-5 lg:w-7 lg:h-7 text-rock/70" />
              Selección Premium
            </span>
            <span className="hidden md:block text-gray-400">•</span>
            <span className="flex items-center gap-2 bg-gray-50/40 border border-b-2 border-gray-200 px-3 py-2 rounded-full">
              <IoShieldCheckmarkOutline className="w-5 h-5 lg:w-7 lg:h-7 text-rock/70" />
              Entrega rápida & Segura
            </span>
            <span className="hidden md:block text-gray-400">•</span>
            <span className="flex items-center gap-2 bg-gray-50/40 border border-b-2 border-gray-200 px-3 py-2 rounded-full">
              <FaWhatsapp className="w-5 h-5 lg:w-7 lg:h-7 text-rock/70" />
              Compra por WhatsApp
            </span>
          </div>
        </motion.div>

        {/* Cards de productos */}
        <div className="overflow-x-auto md:overflow-visible lg:pb-20">
          <div className="flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 snap-x md:snap-none">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="snap-start shrink-0 w-72 md:w-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
