import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

// Función mejorada para generar posiciones con espaciado adecuado
const generatePositions = (count, zone = "center", sizeType = "small") => {
  const positions = [];
  const occupiedPositions = []; // Para rastrear posiciones ocupadas
  const minDistance = 15; // Distancia mínima entre burbujas (%)
  const maxAttempts = 100; // Intentos máximos para encontrar posición válida

  // Tamaños base en porcentaje del viewport
  const sizeMap = {
    small: { width: 5, height: 5 },
    medium: { width: 8, height: 8 },
    large: { width: 12, height: 12 }
  };

  const getSize = (type) => sizeMap[type] || sizeMap.small;

  for (let i = 0; i < count; i++) {
    let top, left, validPosition;
    let attempts = 0;
    const size = getSize(sizeType);

    // Intentar encontrar una posición válida
    do {
      attempts++;
      
      // Generar posición aleatoria según la zona
      if (zone === "left") {
        left = 5 + Math.random() * 25; // 5-30%
      } else if (zone === "center") {
        left = 30 + Math.random() * 40; // 30-70%
      } else { // right
        left = 70 + Math.random() * 25; // 70-95%
      }
      
      top = 10 + Math.random() * 80; // 10-90%

      // Verificar colisión con otras burbujas
      validPosition = occupiedPositions.every(pos => {
        const dx = Math.abs(pos.left - left);
        const dy = Math.abs(pos.top - top);
        // Distancia euclidiana considerando el tamaño de ambas burbujas
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minRequired = (pos.size.width + size.width) / 2 + minDistance;
        return distance >= minRequired;
      });

    } while (!validPosition && attempts < maxAttempts);

    // Si no encontramos posición válida, saltar esta burbuja
    if (!validPosition) continue;

    // Registrar la posición ocupada
    occupiedPositions.push({
      top,
      left,
      size
    });

    const speed = Math.random() * 2 + 3;
    const delay = i * 0.2 + Math.random() * 0.5;

    positions.push({
      id: crypto.randomUUID(),
      top: `${top}%`,
      left: `${left}%`,
      size: sizeType,
      speed,
      delay,
      opacity: 0.7 + Math.random() * 0.3 // Variación de opacidad
    });
  }

  return positions;
};

export default function BubbleBackground({ images, currentImageIndex, showBubbles }) {
  const [bubbles, setBubbles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  // Memoizar la generación de burbujas con distribución mejorada
  const generateBubbles = useCallback(() => {
    const leftBubbles = generatePositions(3, "left", "small");
    const centerBubbles = generatePositions(4, "center", "medium");
    const rightBubbles = generatePositions(3, "right", "small");
    
    return [...leftBubbles, ...centerBubbles, ...rightBubbles];
  }, []);

  // Configurar IntersectionObserver
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const observer = observerRef.current;
    const container = containerRef.current;

    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
      observer.disconnect();
    };
  }, []);

  // Actualizar burbujas cuando cambia la visibilidad o la imagen
  useEffect(() => {
    if (isVisible && showBubbles) {
      setBubbles(generateBubbles());
    } else {
      setBubbles([]);
    }
  }, [currentImageIndex, isVisible, showBubbles, generateBubbles]);

  // Estilos para los diferentes tamaños
  const sizeClasses = {
    small: "w-[5vw] h-[5vw] min-w-[40px] min-h-[40px] max-w-[80px] max-h-[80px]",
    medium: "w-[8vw] h-[8vw] min-w-[60px] min-h-[60px] max-w-[120px] max-h-[120px]",
    large: "w-[12vw] h-[12vw] min-w-[80px] min-h-[80px] max-w-[160px] max-h-[160px]"
  };

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-chedar" />

      <AnimatePresence>
        {showBubbles && isVisible && (
          <>
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                initial={{ opacity: 0, y: 40, scale: 0.5 }}
                animate={{
                  opacity: [0, bubble.opacity * 0.7, bubble.opacity, bubble.opacity * 0.8],
                  y: [40, -20, -40, -60],
                  scale: [0.5, 1.1, 1],
                  rotate: Math.random() > 0.5 ? [0, 5, -5, 0] : [0, -5, 5, 0]
                }}
                exit={{ opacity: 0, scale: 0.3, y: 80 }}
                transition={{
                  duration: bubble.speed,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: bubble.delay,
                  times: [0, 0.3, 0.7, 1]
                }}
                className={`absolute ${sizeClasses[bubble.size]}`}
                style={{
                  top: bubble.top,
                  left: bubble.left,
                  filter: "drop-shadow(0 4px 8px rgba(251, 191, 36, 0.2))"
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Decorative bubble"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}