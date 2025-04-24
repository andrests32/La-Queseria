import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import LogoQueseria from "../LogoQueseria/LogoQueseria";

export default function HeroContent() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 },
        },
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.3), 0 8px 10px -6px rgba(251, 191, 36, 0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 relative max-w-3xl mx-auto text-center px-6 sm:px-10 py-10 sm:py-16 rounded-2xl"
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur rounded-3xl"></div>

            <div className="relative">
                {/* Decorative cheese icons */}
                <motion.div
                    className="absolute -top-4 -left-4 text-amber-300 opacity-60"
                    animate={{
                        rotate: [0, 10, 0, -10, 0],
                        y: [0, -5, 0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                </motion.div>

                <motion.div
                    className="absolute -bottom-2 -right-2 text-amber-400 opacity-60"
                    animate={{
                        rotate: [0, -10, 0, 10, 0],
                        y: [0, 5, 0, 5, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                >
                </motion.div>
                <motion.h1
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center text-4xl sm:text-5xl md:text-6xl gap-x-2 mb-4"
                >
                    <span className="font-play text-rock">Bienvenido a</span>
                    <span className="text-chedar font-play ml-1">La</span>
                    <div className="flex items-center">
                        <LogoQueseria />
                        <span className="relative -left-1 text-chedar font-play">uesería</span>
                    </div>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl text-rock/70 mb-8 max-w-2xl mx-auto leading-relaxed font-avenir"
                >
                    Descubre nuestros productos artesanales elaborados con ingredientes naturales
                    y técnicas tradicionales que preservan todo el sabor y calidad
                </motion.p>

                <motion.div variants={itemVariants}>
                    <motion.a
                        href="#productos"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-chedar to-chedarlow text-white px-8 py-4 rounded-full text-lg font-avenir font-semibold tracking-wide"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Ver productos
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowDown size={20} />
                        </motion.div>
                    </motion.a>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="mt-6 text-gray-500 text-sm font-avenir tracking-wide"
                >
                    Hechos con amor desde 1987
                </motion.p>
            </div>
        </motion.div>
    );
}