import { Award, ShoppingBasket } from "lucide-react";
import { TbCurrencyDollar } from "react-icons/tb";
import { motion } from "framer-motion";

const ProductCard = ({ name, price, image, description, badge, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-chedarlow/20 to-white hover:from-chedarlow/60 hover:to-white hover:scale-105 transition duration-300 rounded-2xl lg:shadow-md overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {badge && (
          <span className="absolute top-4 right-4 bg-verde/80 drop-shadow-2xl text-white px-3 py-1 rounded-full text-sm tracking-wide font-play shadow-md">
            {badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="text-sm text-chedar font-play tracking-wide mb-2 flex items-center gap-2">
          <Award className="w-4 h-4" />
          {category}
        </div>

        <h3 className="text-xl font-play tracking-wide line-clamp-1 text-rock mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 font-avenir line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl text-rock flex items-center font-avenir">
            <TbCurrencyDollar className="text-verde w-7 h-7" />
            {price}
          </span>
          <button className="bg-gradient-to-r from-chedar to-chedarlow hover:from-verde hover:to-verde/70 hover:font-semibold cursor-pointer font-avenir text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2">
            <ShoppingBasket className="w-5 h-5" />
            Comprar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
