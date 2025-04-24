import { useEffect, useState } from "react";
import BubbleBackground from "./BubbleBackground";
import HeroContent from "./HeroContent";
import { motion } from "framer-motion";

const images = ["/queseria.webp"];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBubbles, setShowBubbles] = useState(true);

  useEffect(() => {
    const updateBubbles = () => {
      setShowBubbles(false);
      setTimeout(() => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
        setShowBubbles(true);
      }, 800);
    };

    // Set initial bubbles
    setShowBubbles(true);
    
    // Set up interval for rotating images
    const interval = setInterval(updateBubbles, 12000);
    
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white"></div>
      
      {/* Animated bubbles background */}
      <BubbleBackground 
        images={images} 
        currentImageIndex={currentImageIndex} 
        showBubbles={showBubbles} 
      />
      
      {/* Main hero content */}
      <HeroContent />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="w-1.5 h-16 rounded-full bg-gradient-to-b from-chedar to-white opacity-60"
          animate={{ 
            height: ["4rem", "3rem", "4rem"],
            opacity: [0.7, 0.4, 0.7]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.section>
  );
}