import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
    "Embutido": "bg-amber-700 text-white",
    "Carbohidrato": "bg-blue-400 text-white",
    "Lácteos": "bg-indigo-100 text-indigo-800",
    "Especias": "bg-indigo-100 text-indigo-800",
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
      whileHover={!isExpanded ? { y: -5 } : {}}
      initial={false}
      animate={{
        height: isExpanded ? "auto" : "100%",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
    >
      {/* Sección de imagen (oculta al expandir) */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 1, height: "180px" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[product.category] || 'bg-gray-100 text-gray-800'}`}>
              {product.category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col p-5">
        {/* Vista normal (oculta al expandir) */}
        <AnimatePresence>
          {!isExpanded ? (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {product.shortDescription}
                </p>
              </div>
              
              <button
                onClick={toggleExpand}
                className="w-full flex items-center justify-between py-3 px-4 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors mt-auto"
              >
                <span className="text-sm font-medium">Ver más detalles</span>
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
              {/* Contenedor con scroll interno */}
              <motion.div
                className="overflow-y-auto flex-1 pr-2 -mr-2" // Padding negativo para compensar el scrollbar
                initial={{ height: 0 }}
                animate={{ 
                  height: Math.min(contentHeight, 300) // Máximo 300px de altura
                }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                ref={contentRef}
              >
                <div className="pb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Descripción completa</h4>
                      <p className="text-gray-600">{product.shortDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Beneficios</h4>
                      <p className="text-gray-600">{product.benefits}</p>
                    </div>

                    {product.vitamins && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Nutrientes</h4>
                        <p className="text-gray-600">{product.vitamins}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Botón para cerrar (siempre visible) */}
              <button
                onClick={toggleExpand}
                className="w-full flex items-center justify-between py-3 px-4 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-lg transition-colors mt-4"
              >
                <span className="text-sm font-medium">Ver menos</span>
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