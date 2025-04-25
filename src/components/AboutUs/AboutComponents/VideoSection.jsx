import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);  // Estado para verificar si ya se reprodujo

  useEffect(() => {
    // Usamos Intersection Observer para detectar cuando el video entra en el viewport
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasPlayed) {
          // Reproducir video solo si aún no ha sido reproducido
          videoRef.current.play();
          setHasPlayed(true);  // Marcar que el video ya se reprodujo
        } else if (!entry.isIntersecting) {
          // Pausar video cuando salga del viewport
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
  }, [hasPlayed]);  // Aseguramos que el estado 'hasPlayed' se tenga en cuenta

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-xl mb-20 lg:h-[450px]"
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
    </motion.div>
  );
};

export default VideoSection;
