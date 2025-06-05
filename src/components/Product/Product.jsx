// src/components/ProductsOfTheWeek/ProductsOfTheWeek.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from 'react';
import { Star, ArrowRight, Zap, Clock, AlertCircle } from "lucide-react";
import { usePersistentTimer } from "../../hooks/usePersistentTimer";
import ProductCard from "../ProductCard/ProductCard";
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function ProductsOfTheWeek({
  initialProducts = [],
  initialLastUpdated = null
}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [products, setProducts] = useState(initialProducts);
  const [lastUpdated, setLastUpdated] = useState(initialLastUpdated);
  const { timeLeft, resetTimer, setIsActive } = usePersistentTimer(1 * 10 * 30);
  const [isChecking, setIsChecking] = useState(false);

  // Función para obtener productos directamente de Contentful
  const fetchProducts = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'laqueseria',
        order: '-sys.updatedAt',
      });

      return {
        products: response.items.map(item => ({
          name: item.fields.title,
          description: item.fields.description,
          price: item.fields.price,
          image: item.fields.imageUrl?.fields?.file?.url
            ? `https:${item.fields.imageUrl.fields.file.url}`
            : '',
          badge: item.fields.badgeLabel,
          categoryLabel: item.fields.categoryLabel,
          buyLink: item.fields.buyLink,
          updatedAt: item.sys.updatedAt
        })),
        lastUpdated: response.items[0]?.sys.updatedAt
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return { products: [], lastUpdated: null };
    }
  };

  // Función para verificar actualizaciones
  const checkForUpdates = async () => {
    setIsChecking(true);
    try {
      const { products: newProducts, lastUpdated: newLastUpdated } = await fetchProducts();

      if (newLastUpdated !== lastUpdated) {
        setProducts(newProducts);
        setLastUpdated(newLastUpdated);

        if (newProducts.length > 0) {
          resetTimer();
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    } catch (error) {
      console.error("Error checking for updates:", error);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkForUpdates();
    const interval = setInterval(checkForUpdates, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const hasProducts = useMemo(() => products.length > 0, [products]);
  const shouldShowPromoEnded = useMemo(() => !hasProducts || timeLeft <= 0, [hasProducts, timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ];
  };

  // Renderizado condicional
  if (shouldShowPromoEnded) {
    return (
      <section className="relative py-32 bg-gradient-to-br from-white to-chedar/5 overflow-hidden">
        {/* Fondo elegante con puntos animados */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-chedar rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-chedarlow rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-chedar/10 to-chedarlow/10 border border-chedar/20 rounded-full px-8 py-4 text-chedar font-normal font-avenir text-lg flex items-center gap-3">
              <AlertCircle className="w-6 h-6 font-play" />
              {!hasProducts ? "Promoción no disponible" : "¡Oferta terminada!"}
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-normal mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-chedar to-chedarlow bg-clip-text text-transparent font-play">
              {!hasProducts ? "Productos no disponibles" : "Próximamente"}
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 font-avenir mb-10 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {!hasProducts
              ? "Actualmente no tenemos productos disponibles en promoción."
              : "Estamos preparando nuevas promociones especiales para ti."}
          </motion.p>

          <div className="inline-flex flex-col gap-6">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 }}
                className="inline-flex items-center justify-center bg-white rounded-full p-2 shadow-lg"
              >
                <div className="bg-gradient-to-r from-chedar to-chedarlow rounded-full p-1 animate-spin-slow">
                  <Clock className="w-12 h-12 text-white p-2" />
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-chedar to-chedarlow p-0.5 rounded-full shadow-xl"
            >
              <motion.a
                href="https://wa.me/+593980883299"
                className="group relative block bg-white text-chedar font-normal tracking-wide py-4 px-8 rounded-full hover:bg-transparent hover:text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-lg font-play">¿Hay nuevas promociones?</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Renderizado normal con productos
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Fondo elegante con puntos animados */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-gradient-to-r from-chedar to-chedarlow"
            style={{
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Patrón geométrico sutil */}
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI0ZGN0YwMCIgY3g9IjIwIiBjeT0iMjAiIHI9IjEuNSIvPjwvZz48L3N2Zz4=')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado con efecto "destacado" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16 relative"
        >
          {/* Badge animado */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center justify-center mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="bg-verde text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center"
            >
              <Zap className="w-4 h-4 mr-2 fill-verde" />
              <span className="tracking-wider font-avenir">OFERTA SEMANAL</span>
              <Zap className="w-4 h-4 ml-2 fill-verde" />
            </motion.div>
          </motion.div>

          {/* Título principal */}
          <motion.h2
            className="text-4xl md:text-7xl text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-chedar to-chedarlow bg-clip-text font-play text-transparent">
                Productos Destacados
              </span>
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-avenir text-verde">
              de esta Semana
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto relative"
          >
            <motion.p
              className="text-lg md:text-xl font-avenir text-verde leading-relaxed"
            >
              Descubre nuestra selecciòn elegidas cuidadosamente por nuestro equipo de expertos.
              <span className="block mt-2 font-medium font-avenir text-chedar">¡Solo disponibles por tiempo limitado!</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Contador de tiempo limitado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="bg-gradient-to-r from-chedar/40 to-chedarlow/20 border border-chedar/10 rounded-xl p-6 mb-16 max-w-4xl mx-auto text-center relative overflow-hidden font-avenir"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2NoZWRhciIgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
          <motion.h3 className="text-xl md:text-2xl font-normal antialiased text-rock mb-4 flex items-center justify-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⏳
            </motion.div>
            ¡Oferta termina en!
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              ⏳
            </motion.div>
          </motion.h3>
          <motion.div className="flex justify-center gap-4">
            {formatTime(timeLeft).map((time, index) => (
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center"
              >

                <div className="flex items-center justify-center">
                  <div className="bg-white shadow-md rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold text-chedar border border-gray-100">
                    {time}
                  </div>



                </div>
                <span className="text-xs mt-2 text-gray-500 uppercase">
                  {index === 0 ? 'Horas' : index === 1 ? 'Min' : 'Seg'}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute top-22 left-[405px]  font-play text-xl text-gray-500 text-center">:</div>
          <div className="absolute top-22 left-[485px]  font-avenir text-xl text-gray-500 text-center">:</div>

        </motion.div>

        {/* Grid de productos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative px-2 lg:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {products.slice(0, 8).map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 12
                  }
                }
              }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative z-0"
            >
              <AnimatePresence>
                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-br from-chedar/10 to-chedarlow/10 rounded-xl -z-10"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>


              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA premium */}
        <motion.div
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-chedar/10 rounded-full blur-xl"></div>



          <motion.p
            className="mt-6 text-emerald-600 flex items-center justify-center gap-2 font-avenir text-lg font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Garantía de satisfacción del 100%
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}