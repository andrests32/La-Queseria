import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const generatePositions = (count, zone = "center", sizeType = "small") => {
  const positions = [];
  const topValues = new Set();
  const verticalStep = 80 / count;

  for (let i = 0; i < count; i++) {
    let top;
    do {
      top = `${10 + i * verticalStep + Math.random() * 5}%`;
    } while (topValues.has(top));
    topValues.add(top);

    let left;
    if (zone === "left") {
      left = `${Math.random() * 15}%`;
    } else if (zone === "center") {
      left = `${35 + Math.random() * 30}%`;
    } else if (zone === "right") {
      left = `${85 - Math.random() * 15}%`;
    }

    const size = sizeType === "small" ? 1 : 2;
    const speed = Math.random() * 2 + 3;

    positions.push({
      id: crypto.randomUUID(),
      top,
      left,
      size,
      speed,
      delay: i * 0.15
    });
  }

  return positions;
};

export default function BubbleBackground({ images, currentImageIndex, showBubbles }) {
  const [bubbles, setBubbles] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const initialLeft = generatePositions(3, "left", "small");
      const initialCenter = generatePositions(3, "center", "medium");
      const initialRight = generatePositions(3, "right", "small");
      setBubbles([...initialLeft, ...initialCenter, ...initialRight]);
    } else {
      setBubbles([]); // Limpiar las burbujas si no está visible
    }
  }, [currentImageIndex, isVisible]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white" />

      <AnimatePresence>
        {showBubbles &&
          isVisible &&
          bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, y: 20, scale: 0.8, rotate: 0 }}
              animate={{
                opacity: [0, 0.4, 0.6, 0.4],
                y: [20, -10, -20, -10, 20],
                scale: [0.8, 1, 1.05, 1],
                rotate: [0, bubble.id.charCodeAt(0) % 2 === 0 ? 5 : -5]
              }}
              exit={{ opacity: 0, scale: 0.5, y: 30 }}
              transition={{
                duration: bubble.speed,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: bubble.delay
              }}
              className="absolute"
              style={{
                top: bubble.top,
                left: bubble.left
              }}
            >
              <img
                src={images[currentImageIndex]}
                alt="Decorative cheese illustration"
                className={`object-contain ${
                  bubble.size === 1
                    ? "w-12 sm:w-16 md:w-20"
                    : "w-20 sm:w-24 md:w-40"
                }`}
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(251, 191, 36, 0.1))",
                  opacity: 0.6
                }}
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}
