import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const HomeButton = () => {
  return (
    <motion.a
      href="/"
      className="fixed bottom-6 right-6 bg-white text-chedar p-3 rounded-full shadow-lg flex items-center justify-center z-[999]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Home size={34} />
    </motion.a>
  );
};

export default HomeButton;