import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import HomeButton from './HomeButton';
import LogoQueseriaBlanco from '../LogoQueseria/LogoQueseriaBlanco';
import { products, categories } from '../../data/products';

const ProductFilterPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isFiltering, setIsFiltering] = useState(false);

    // Debounce effect para la búsqueda
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);
        return () => clearTimeout(timerId);
    }, [searchTerm]);

    // Efecto para filtrar productos
    useEffect(() => {
        try {
            setIsFiltering(true);
            let result = products;

            if (selectedCategory !== 'Todos') {
                result = result.filter(
                    (product) => product.category && product.category === selectedCategory
                );
            }

            if (debouncedSearchTerm) {
                const term = debouncedSearchTerm.toLowerCase();
                result = result.filter(
                    (product) =>
                        (product.name && product.name.toLowerCase().includes(term)) ||
                        (product.description && product.description.toLowerCase().includes(term)) ||
                        (product.category && product.category.toLowerCase().includes(term))
                );
            }

            setFilteredProducts(result);
        } catch (error) {
            console.error('Error filtering products:', error);
            setFilteredProducts(products);
        } finally {
            setIsFiltering(false);
        }
    }, [selectedCategory, debouncedSearchTerm]);

    // Animaciones
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: 'beforeChildren',
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    // Fondo en cuadrícula (mosaico) de ilustraciones
    const renderIllustrationGrid = () => {
        const gridItems = [];
        // Asegúrate de que estas imágenes existan en la ruta pública
        const images = ['/ilustracionuno.png', '/ilustraciondos.png', '/ilustraciontres.png'];
        const columns = 20;
        const rows = 20;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                // Cíclico según el índice
                const imageSrc = images[(row * columns + col) % images.length];

                gridItems.push(
                    <img
                        key={`grid-${row}-${col}`}
                        src={imageSrc}
                        alt=""
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                );
            }
        }

// Para mobile la opacidad sera de 6 y para web sera de 7

        return (
            <div
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-4 grid-rows-10 z-0 pointer-events-none"
                style={{ opacity: 0.3 }} // Ajusta la opacidad según lo requieras
            >
                {gridItems}
            </div>
        );
    };

    return (
        <div className="relative  min-h-screen pb-16 overflow-hidden">
            {/* Fondo de mosaico de ilustraciones */}
            {renderIllustrationGrid()}

            <HomeButton />

            <div className=" max-w-[90rem] mx-auto mt-10 px-6 lg:px-0 rounded-2xl relative z-10 lg:bg-white/10 lg:backdrop-blur-xs">
                {/* Header */}
                <motion.div
                    className="relative bg-gradient-to-r from-chedar to-chedarlow text-white py-8 px-4 md:px-8 rounded-t-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center">
                            <LogoQueseriaBlanco />
                            <span className="relative -left-1 text-white font-play text-6xl">uesería</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-play text-verde mb-4">
                            Catálogo de Productos
                        </h1>
                        <p className="text-primary-100 max-w-xl font-avenir font-medium">
                            Explore nuestra selección de productos frescos y de alta calidad.
                        </p>

                        <div className="relative w-full max-w-md mt-4">
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={`w-full pl-10 pr-4 py-2 rounded-full border-b-2 font-avenir outline-none transition-colors duration-200
                                border-white focus:bg-white
                                ${searchTerm ? 'text-rock' : 'text-white'}`}
                            />
                            <FaSearch
                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5
                                ${searchTerm ? 'text-chedar' : 'text-white'}`}
                            />
                        </div>


                    </div>
                </motion.div>

                {/* Contenido principal */}
                <div className="px-4 py-8">
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    <div className="mb-6 flex justify-between items-center">
                        <p className="text-rock lg:text-lg font-semibold tracking-wide font-avenir">
                            {isFiltering
                                ? 'Buscando...'
                                : `Mostrando ${filteredProducts.length} productos ${selectedCategory !== 'Todos' ? ` en ${selectedCategory}` : ''
                                }${debouncedSearchTerm ? ` para "${debouncedSearchTerm}"` : ''}`}
                        </p>
                    </div>

                    {isFiltering ? (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-chedar"></div>
                        </div>
                    ) : (
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                            variants={container}
                            initial="hidden"
                            animate="show"
                            key={`${selectedCategory}-${debouncedSearchTerm}`}
                        >
                            <AnimatePresence mode="wait">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, index) => (
                                        <motion.div
                                            key={product.id}
                                            variants={item}
                                            layout
                                            exit={{ opacity: 0 }}
                                        >
                                            <ProductCard product={product} index={index} />
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        className="col-span-full text-center py-16"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h3 className="text-xl font-avenir text-rock mb-2">
                                            No se encontraron productos
                                        </h3>
                                        <p className="text-gray-500">
                                            Intente con una búsqueda diferente o seleccione otra categoría.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductFilterPage;
