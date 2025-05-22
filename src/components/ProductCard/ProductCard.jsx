import { Award, ShoppingBasket, ChevronDown } from "lucide-react";
import { TbCurrencyDollar } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState } from 'react';

const ProductCard = ({ name, price, image, description, badge, categoryLabel, buyLink }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white rounded-xl overflow-hidden cursor-pointer h-full flex flex-col border border-gray-100 hover:border-chedar/30 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {/* Badge animado */}
      {badge && (
        <motion.div 
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-chedar to-chedarlow text-white px-3 py-1 rounded-full text-xs font-bold font-play shadow-lg z-10"
        >
          {badge}
        </motion.div>
      )}

      {/* Imagen con efecto parallax */}
      <motion.div 
        className="relative overflow-hidden h-52"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring" }}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </motion.div>

      {/* Contenido de la card */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-chedar" />
          <span className="text-xs font-semibold text-chedarlow uppercase tracking-wider">
            {categoryLabel}
          </span>
        </div>

        <h3 className="text-xl font-play text-rock mb-2 line-clamp-1">
          {name}
        </h3>

        {/* Descripción con expand */}
        <div className="relative mb-4 flex-grow">
          <AnimatePresence>
            {expanded ? (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="text-gray-600 text-sm">
                  {documentToReactComponents(description)}
                </div>
              </motion.div>
            ) : (
              <div className="text-gray-600 text-sm line-clamp-3">
                {documentToReactComponents(description)}
              </div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-chedar text-xs font-semibold mt-1 flex items-center hover:text-chedarlow transition-colors"
          >
            {expanded ? 'Ver menos' : 'Ver más'} 
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Precio y CTA */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <TbCurrencyDollar className="text-chedarlow w-5 h-5 mr-1" />
              <span className="text-2xl font-bold text-gray-900">
                {price.toFixed(2)}
              </span>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#4CAF50', // Verde para el hover
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-chedar to-chedarlow text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-chedar/20 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                window.open(buyLink, "_blank");
              }}
            >
              <ShoppingBasket className="inline mr-2 w-4 h-4" />
              Comprar
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;