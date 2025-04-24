import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Using Intersection Observer to detect when video is in viewport
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Play video when it enters viewport
          videoRef.current.play();
        } else {
          // Pause video when it leaves viewport
          videoRef.current.pause();
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden shadow-xl mb-20 lg:h-[450px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      {/* Video de fondo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full lg:object-cover"
      >
        <source
          src="/videoquesos.webm"
          type="video/webm"
        />
        Tu navegador no soporta el video.
      </video>

      {/* Elegant Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center px-6"
        >
          <h3 className="text-white text-4xl md:text-5xl font-serif text-center drop-shadow-2xl mb-4">
            Tradición y Sabor en Cada Bocado
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Desde 1982 elaborando quesos artesanales con pasión y dedicación
          </p>
        </motion.div>
      </div> */}
    </motion.div>
  );
};

export default VideoSection;