import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current && !hasPlayed) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setHasPlayed(true); // Marcar que el video ya empezó
            })
            .catch((error) => {
              console.error('Error al reproducir el video:', error);
            });
        }
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', playVideo);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', playVideo);
      }
    };
  }, [hasPlayed]);

  return (
    <div className='px-4'>
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-xl mb-20 lg:h-[370px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-[300px] object-cover lg:h-full lg:object-cover"
        >
          <source src="/videoquesos.webm" type="video/webm" />
          Tu navegador no soporta el video.
        </video>
      </motion.div>
    </div>
  );
};

export default VideoSection;
