import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoQueseria from '../LogoQueseria/LogoQueseria';

const mensajes = [
  "¿Necesitas ayuda con un pedido?",
  "Haz clic aquí para hablar con nosotros.",
  "¿Buscas nuestros productos?",
  "Te ayudamos a encontrar lo que necesitas.",
  "¿Dudas sobre el envío? Estamos aquí."
];

const ButtonWhatsapp = () => {
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Mostrar tooltip con mensajes rotativos cada 7 segundos
    intervalRef.current = setInterval(() => {
      setShowTooltip(true);
      setTooltipIndex((prevIndex) => (prevIndex + 1) % mensajes.length);

      const hideTimeout = setTimeout(() => {
        setShowTooltip(false);
      }, 3000); // visible por 3 segundos

      return () => clearTimeout(hideTimeout);
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    clearInterval(intervalRef.current); // Detener rotación automática
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    // Reanudar rotación automática
    intervalRef.current = setInterval(() => {
      setShowTooltip(true);
      setTooltipIndex((prevIndex) => (prevIndex + 1) % mensajes.length);

      const hideTimeout = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      return () => clearTimeout(hideTimeout);
    }, 7000);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key={mensajes[tooltipIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-700 text-sm px-4 py-2 font-avenir rounded-lg shadow-md max-w-xs"
          >
            {mensajes[tooltipIndex]}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="/"
        className="text-chedar rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <LogoQueseria className="w-14 h-14 md:w-auto px-1 md:h-18 shadow-lg rounded-full bg-white" />
      </motion.a>
    </div>
  );
};

export default ButtonWhatsapp;
