import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoQueseria from '../LogoQueseria/LogoQueseria';
import LogoQueseriaBlanco from '../LogoQueseria/LogoQueseriaBlanco';

const HelpButton = () => {
  const phoneNumber = "+593980883299";
  const defaultMessage = "Hola, tengo una consulta sobre sus productos";
  
  // Estados
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentTooltip, setCurrentTooltip] = useState(0);
  const [lastTooltipTime, setLastTooltipTime] = useState(0);
  const [isTouched, setIsTouched] = useState(false);

  // Refs
  const timeoutRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastScrollTime = useRef(0);
  const buttonRef = useRef(null);

  // Mensajes para tooltips
  const tooltipMessages = [
    "¿Necesitas ayuda?",
    "Consulta sobre productos",
    "Horario: 9am - 6pm",
  ];

  // Mostrar tooltip con temporizador
  const displayTooltip = (index, fromScroll = false) => {
    const now = Date.now();
    const timeSinceLastTooltip = now - lastTooltipTime;
    
    if (timeSinceLastTooltip > 4000 || !lastTooltipTime) {
      clearTimeout(timeoutRef.current);
      setCurrentTooltip(index);
      setShowTooltip(true);
      setLastTooltipTime(now);
      
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
        
        if (!fromScroll) {
          timeoutRef.current = setTimeout(() => {
            const nextIndex = (index + 1) % tooltipMessages.length;
            displayTooltip(nextIndex);
          }, 7000);
        }
      }, 3000);
    }
  };

  // Detectar dispositivo y manejar clicks fuera
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowTooltip(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Mostrar primer tooltip
    timeoutRef.current = setTimeout(() => {
      displayTooltip(0);
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // Efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const scrolled = window.scrollY > 100;
      setHasScrolled(scrolled);
      
      if (now - lastScrollTime.current > 1000 && scrolled) {
        lastScrollTime.current = now;
        
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          const nextIndex = (currentTooltip + 1) % tooltipMessages.length;
          displayTooltip(nextIndex, true);
        }, 500);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentTooltip]);

  const handleClick = () => {
    if (isMobile) {
      // En móvil, alternar el menú en lugar de abrir WhatsApp directamente
      setIsOpen(!isOpen);
      setShowTooltip(false);
      clearTimeout(timeoutRef.current);
    } else {
      setIsOpen(!isOpen);
      setShowTooltip(false);
      clearTimeout(timeoutRef.current);
    }
  };

  const handleTouchStart = () => {
    setIsTouched(true);
    if (isMobile) {
      setShowTooltip(true);
    }
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
    if (isMobile) {
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  const handleTooltipHover = (show) => {
    if (!isMobile) {
      setShowTooltip(show);
      if (!show) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  return (
    <div 
      ref={buttonRef}
      className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6"
      onMouseEnter={() => handleTooltipHover(true)}
      onMouseLeave={() => handleTooltipHover(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {(!isOpen && showTooltip) && (
          <motion.div
            key={`tooltip-${currentTooltip}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-full right-0 mb-3 w-48 bg-white rounded-lg shadow-md p-3 text-center text-sm text-gray-700 border border-gray-100 font-avenir"
          >
            {tooltipMessages[currentTooltip]}
            <div className="absolute -bottom-1 right-4 w-3 h-3 transform rotate-45 bg-white border-r border-b border-gray-100"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menú de opciones (ahora funciona en móvil también) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-3 w-56 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
          >
            <p className="text-sm text-rock mb-3">¿Cómo podemos ayudarte?</p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Consulta sobre productos")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-50 hover:bg-green-100 text-verde text-sm py-2 px-3 rounded transition-colors"
              >
                Preguntar por productos
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Consulta sobre mi pedido")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-amber-100 hover:bg-amber-100 text-chedar text-sm py-2 px-3 rounded transition-colors"
              >
                Seguimiento de pedido
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-chedar hover:bg-chedar-dark text-white text-sm py-2 px-3 rounded transition-colors"
              >
                Otras consultas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        ref={buttonRef}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        whileHover={{ scale: isMobile ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`rounded-full px-1 shadow-md focus:outline-none flex items-center justify-center ${
          hasScrolled ? 'bg-chedar' : 'bg-white'
        }`}
        aria-label="Botón de ayuda"
      >
        {hasScrolled ? (
          <LogoQueseriaBlanco className="relative top-0.5 w-13 h-15" />
        ) : (
          <LogoQueseria className="relative top-0.5 w-13 h-15" />
        )}
      </motion.button>
    </div>
  );
};

export default HelpButton;