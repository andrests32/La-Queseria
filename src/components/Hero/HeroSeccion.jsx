import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ListTodo } from "lucide-react";
import LogoQueseriaBlanco from '../LogoQueseria/LogoQueseriaBlanco';
import BubbleBackground from './BubbleBackground';

const images = ["/queserialogoblanco.webp"];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showBubbles, setShowBubbles] = useState(true);
    const [scrollY, setScrollY] = useState(0);

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

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-chedar">
            {/* Background layers */}
            <div
                className="absolute inset-0 w-full h-full bg-gradient-to-b from-chedar-dark to-chedar"
                style={{
                    transform: `translateY(${scrollY * 0.3}px)`,
                    backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 5%, transparent 15%), 
                            radial-gradient(circle at 70% 40%, rgba(255, 255, 255, 0.3) 8%, transparent 18%), 
                            radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.3) 6%, transparent 16%),
                            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 7%, transparent 17%)`,
                }}
            />

            {/* Bubble Background */}
            <BubbleBackground
                images={images}
                currentImageIndex={currentImageIndex}
                showBubbles={showBubbles}
            />

            {/* Overlay with subtle blur */}
            <div className="absolute inset-0 bg-chedar/10 backdrop-blur-xs"></div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                {/* Animated logo */}
                <motion.div
                    initial={{ scale: 2.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        opacity: { duration: 1.8 }
                    }}
                    className="mb-6"
                >
                    <LogoQueseriaBlanco className="w-auto h-40 md:w-48 md:h-48 lg:w-auto lg:h-70" />
                </motion.div>

                {/* Company name */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl text-white font-play"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    La Quesería
                </motion.h1>

                {/* Slogan */}
                <motion.p
                    className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 max-w-lg font-avenir font-semibold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    "Porque comer bien no tiene que costar más"
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col md:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 1 }}
                >
                    <a
                        href="/products"
                        className="inline-flex items-center gap-2 border-white border-2 text-white px-8 py-3.5 rounded-full md:text-md font-avenir font-semibold tracking-wide hover:scale-105 active:scale-95 hover:bg-white hover:text-chedar hover:border-none transition hover:py-3.7 duration-300 backdrop-blur-lg"
                    >
                        Ver Productos
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                        >
                            <ShoppingBag size={20} />
                        </motion.div>
                    </a>

                    <a
                        href="/checkproducts"
                        className="relative group inline-flex items-center gap-2 text-chedar border border-chedar px-8 py-4 rounded-full md:text-md font-avenir font-semibold tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95 bg-white"
                    >
                        {/* Fondo animado */}
                        <span className="absolute inset-0 bg-gradient-to-r from-verde to-verde/80 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></span>

                        {/* Contenido del botón */}
                        <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white group-hover:border-none">
                            Arma tu lista de compras
                            <motion.div animate={{ y: [0, 5, 0] }}>
                                <ListTodo size={20} />
                            </motion.div>
                        </span>
                    </a>

                </motion.div>

                {/* Footer text */}
                <motion.p
                    className="mt-8 text-white font-avenir font-semibold text-sm tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    Hechos con amor desde 2017
                </motion.p>
            </div>

            {/* Decorative elements scroll indicador*/}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.div
                    className="w-1.5 h-16 rounded-full bg-gradient-to-b from-white to-white/30 opacity-60"
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
        </div>
    );
};

export default HeroSection;