import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaEgg, FaBreadSlice, FaCheese } from 'react-icons/fa';
import { FaBowlFood } from "react-icons/fa6";
import { GiBananaPeeled } from "react-icons/gi";
import { PiPiggyBankFill } from "react-icons/pi";
import { GiGarlic } from "react-icons/gi";



const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
    // Icons for categories using only React Icons
    const categoryIcons = {
        "Todos": <FaSearch />,
        "Avícola": <FaEgg />,
        "Harinas": <FaBreadSlice />,
        "Quesos": <FaCheese />,
        "Plátanos": <GiBananaPeeled />,
        "Carbohidratos": <FaBowlFood />,
        "Embutidos": <PiPiggyBankFill />,
        "Especias": <GiGarlic />,
    };

    return (
        <div className="mb-8">
            <div className="overflow-x-auto pb-2">
                <div className="flex space-x-2">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 cursor-pointer rounded-full flex items-center space-x-2 text-sm font-avenir font-semibold tracking-wide transition-colors ${selectedCategory === category
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
