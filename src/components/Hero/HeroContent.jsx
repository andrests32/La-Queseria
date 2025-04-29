import { motion } from "framer-motion";
import { ArrowDown, ListTodo } from "lucide-react";
import LogoQueseria from "../LogoQueseria/LogoQueseria";

export default function HeroContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="z-10 relative max-w-3xl mx-auto text-center px-6 sm:px-10 py-10 sm:py-16 rounded-2xl"
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur rounded-3xl"></div>

            <div className="relative">
                <h1 className="flex flex-wrap items-center justify-center text-4xl sm:text-5xl md:text-8xl gap-x-2 mb-4">
                    <span className="font-play text-rock">Bienvenido a</span>
                    <span className="text-chedar font-play ml-1">La</span>
                    <div className="flex items-center">
                        <LogoQueseria />
                        <span className="relative -left-1 text-chedar font-play">uesería</span>
                    </div>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-rock/70 mb-8 max-w-2xl mx-auto leading-relaxed font-avenir">
                    Descubre nuestros productos artesanales elaborados con ingredientes naturales
                    y técnicas tradicionales que preservan todo el sabor y calidad
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a
                        href="/products"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-chedar to-chedarlow text-white px-8 py-4 rounded-full md:text-md font-avenir font-semibold tracking-wide transition-transform hover:scale-105 active:scale-95"
                    >
                        Ver Productos
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                        >
                            {/* <ArrowDown size={20} /> */}
                        </motion.div>
                    </a>

                    <a
                        href="/checkproducts"
                        className="relative group inline-flex items-center gap-2 text-chedar border border-chedar px-8 py-4 rounded-full md:text-md font-avenir font-semibold tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95"
                    >
                        {/* Fondo animado */}
                        <span className="absolute inset-0 bg-gradient-to-r from-chedar to-chedarlow scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></span>

                        {/* Contenido del botón */}
                        <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white group-hover:border-none">
                            Arma tu lista de compras
                            <motion.div animate={{ y: [0, 5, 0] }}>
                                <ListTodo size={20} />
                            </motion.div>
                        </span>
                    </a>

                </div>


                <p className="mt-6 text-gray-500 text-sm font-avenir tracking-wide">
                    Hechos con amor desde 1987
                </p>
            </div>
        </motion.div>
    );
}
