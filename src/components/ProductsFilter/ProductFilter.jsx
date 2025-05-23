import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import HomeButton from './HomeButton';
import LogoQueseria from '../LogoQueseria/LogoQueseria';
import { products, categories } from '../../data/products';

const ProductFilterPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let result = products;
        if (selectedCategory !== 'Todos') {
            result = result.filter(product => product.category === selectedCategory);
        }
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(product =>
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term) ||
                product.category.toLowerCase().includes(term)
            );
        }
        setFilteredProducts(result);
    }, [selectedCategory, searchTerm]);

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    // Rutas correctas para ilustraciones
    const illustrationImages = [
        '/ilustracionuno.png',
        '/ilustraciondos.png',
        '/ilustraciontres.png'
    ];

    return (
        <div className="relative bg-white min-h-screen pb-16 overflow-hidden">
            {/* Fondo de ilustraciones tipo cuadrícula */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 grid grid-cols-10 gap-4">
                {[...Array(80)].map((_, index) => (
                    <img
                        key={index}
                        src={illustrationImages[index % illustrationImages.length]} // Aquí corregido
                        alt="Decoración"
                        className="w-40 h-40 object-cover opacity-10"
                    />
                ))}
            </div>

            <HomeButton />
            <div className='bg-white/10 backdrop-blur-sm max-w-7xl m-auto mt-10 px-4 rounded-2xl'>
                {/* Header */}
                <motion.div
                    className="relative bg-gradient-to-r from-primary-600 to-primary-400 text-white py-8 px-4 md:px-8 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center">
                            <LogoQueseria />
                            <span className="relative -left-1 text-chedar font-play text-6xl">uesería</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-play text-rock mb-4">
                            Catálogo de Productos
                        </h1>
                        <p className="text-primary-100 max-w-xl font-avenir text-gray-600">
                            Explore nuestra selección de productos frescos y de alta calidad. Filtre por categoría o busque productos específicos.
                        </p>
                        {/* Barra de búsqueda */}
                        <div className="mt-6 relative max-w-md">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-full border-none focus:ring-chedar text-gray-800 font-avenir"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Contenido */}
                <div className="relative max-w-7xl mx-auto px-4 py-8 z-10">
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <div className="mb-6 flex justify-between items-center">
                        <p className="text-gray-600 font-avenir">
                            Mostrando {filteredProducts.length} productos
                            {selectedCategory !== 'Todos' ? ` en ${selectedCategory}` : ''}
                            {searchTerm ? ` para "${searchTerm}"` : ''}
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <AnimatePresence>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <motion.div key={product.id} variants={item} layout>
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    className="col-span-full text-center py-16"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <h3 className="text-xl font-avenir  text-rock mb-2">No se encontraron productos</h3>
                                    <p className="text-gray-500">
                                        Intente con una búsqueda diferente o seleccione otra categoría.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default ProductFilterPage;
