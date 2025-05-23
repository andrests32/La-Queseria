import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const categoryColors = {
    "Avícola": "bg-yellow-100 text-yellow-800",
    "Harinas": "bg-amber-100 text-amber-800",
    "Quesos": "bg-blue-100 text-blue-800",
    "Plátanos": "bg-green-100 text-green-800",
    "Embutido": "bg-amber-700 text-white",
    "Carbohidrato": "bg-blue-400 text-white",
    "Lácteos": "bg-indigo-100 text-indigo-800",
    "Especias": "bg-indigo-100 text-indigo-800",
  };

  const badgeColors = {
    "Premium": "bg-purple-100 text-purple-800",
    "Bestseller": "bg-red-100 text-red-800",
    "Orgánico": "bg-green-100 text-green-800",
    "Importado": "bg-blue-100 text-blue-800",
    "Oferta": "bg-amber-100 text-amber-800",
  };

  return (
    <motion.div
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      layout
    >
      {/* Imagen */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />

        {/* {product.badge && (
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${badgeColors[product.badge] || 'bg-gray-100 text-gray-800'}`}>
            {product.badge}
          </div>
        )} */}

        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[product.category] || 'bg-gray-100 text-gray-800'}`}>
          {product.category}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            {/* <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span> */}
          </div>

          <p className="text-gray-600 text-sm flex-1">{product.shortDescription}</p>
        </div>

        {/* Botón de expandir */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={toggleExpand}
          >
            <span className="text-sm font-medium text-primary-600">
              {isExpanded ? 'Ver menos' : 'Ver más detalles'}
            </span>
            {isExpanded ?
              <ChevronUp size={18} className="text-primary-600" /> :
              <ChevronDown size={18} className="text-primary-600" />
            }
          </div>

          {/* Área expandible */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-100 pt-4"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Beneficios</h4>
                <p className="text-gray-600 text-sm mb-3">{product.benefits}</p>

                {product.vitamins && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-2">Vitaminas y Nutrientes</h4>
                    <p className="text-gray-600 text-sm mb-3">{product.vitamins}</p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
