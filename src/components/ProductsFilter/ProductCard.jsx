import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const categoryColors = {
    "Avícola": "bg-yellow-100 text-yellow-800",
    "Harinas": "bg-amber-100 text-amber-800",
    "Quesos": "bg-blue-100 text-blue-800",
    "Plátanos": "bg-green-100 text-green-800",
    "Embutidos": "bg-amber-700 text-white",
    "Carbohidratos": "bg-amber-800 text-white",
    "Lácteos": "bg-indigo-100 text-indigo-800",
    "Especias": "bg-indigo-100 text-indigo-800",
  };

  // Lógica de fondo según el índice
 const getCardBackground = (index) => {
  return index % 2 === 0
    ? 'bg-gradient-to-r from-chedar to-chedarlow text-white md:text-white'
    : 'bg-gradient-to-r from-chedar to-chedarlow card-even md:bg-white text-white md:text-chedar';
};

  return (
    <motion.div
      className={`${getCardBackground(index)} rounded-xl shadow-md overflow-hidden flex flex-col h-full`}
      whileHover={!isExpanded ? { y: -5 } : {}}
      initial={false}
      animate={{ height: isExpanded ? 'auto' : '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 120 }}
    >
      {/* Imagen (oculta al expandir) */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 1, height: '180px' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-avenir ${
                categoryColors[product.category] || 'bg-gray-100 text-gray-800'
              }`}
            >
              {product.category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido */}
      <div className="flex-1 flex flex-col p-5">
        <AnimatePresence>
          {!isExpanded ? (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl lg:text-2xl font-play text-verde mb-3 line-clamp-3 leading-tight">
                  {product.name}
                </h3>
                <p className="text-verde text-sm line-clamp-3 mb-4 font-avenir">
                  {product.shortDescription}
                </p>
              </div>
              <button
                onClick={toggleExpand}
                className="w-full flex items-center justify-between py-3 px-4 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-lg mt-auto transition duration-300"
              >
                <span className="text-sm font-semibold tracking-wide font-avenir">Ver más detalles</span>
                <ChevronDown size={18} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              <motion.div
                className="overflow-y-auto flex-1 pr-2 -mr-2"
                initial={{ height: 0 }}
                animate={{ height: Math.min(contentHeight, 300) }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                ref={contentRef}
              >
                <div className="pb-4">
                  <h3 className="text-xl font-play text-rock mb-4">
                    {product.name}
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-play text-gray-900 mb-2">
                        Descripción completa
                      </h4>
                      <p className="text-gray-700 font-avenir">
                        {product.shortDescription}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-play text-gray-900 mb-2">
                        Beneficios
                      </h4>
                      <p className="text-gray-600 font-avenir">{product.benefits}</p>
                    </div>
                    {product.vitamins && (
                      <div>
                        <h4 className="font-play text-gray-900 mb-2">
                          Nutrientes
                        </h4>
                        <p className="text-gray-600 font-avenir">{product.vitamins}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
              <button
                onClick={toggleExpand}
                className="w-full flex items-center justify-between py-3 px-4 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-lg transition duration-700 mt-4 font-avenir"
              >
                <span className="text-sm font-medium font-avenir">Ver menos</span>
                <ChevronUp size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProductCard;
