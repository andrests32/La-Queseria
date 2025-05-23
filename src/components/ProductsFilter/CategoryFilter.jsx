import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaEgg, FaBreadSlice, FaCheese, FaAppleAlt } from 'react-icons/fa';
import { TbMilkFilled } from "react-icons/tb";

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
    // Icons for categories using only React Icons
    const categoryIcons = {
        "Todos": <FaSearch />,
        "Avícola": <FaEgg />,
        "Harinas": <FaBreadSlice />,
        "Quesos": <FaCheese />,
        "Plátanos": <FaAppleAlt />,
        "Lácteos": <TbMilkFilled /> // Usando FaGlassCheers para Lácteos
    };

    return (
        <div className="mb-8">
            <div className="overflow-x-auto pb-2">
                <div className="flex space-x-2">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-avenir font-semibold tracking-wide transition-colors ${selectedCategory === category
                                ? 'bg-primary-500 text-chedar shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-lg">{categoryIcons[category]}</span>
                            <span>{category}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;
