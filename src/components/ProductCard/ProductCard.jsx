"use client"

import { ShoppingCart, Star, Heart, Eye, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaWhatsapp } from "react-icons/fa"

// Número de WhatsApp que debes cambiar por el tuyo
const WHATSAPP_NUMBER = "+593980883299"

const ProductCard = ({
  name,
  price,
  image,
  description,
  badge,
  discount,
  categoryLabel,
  buyLink,
  stockLeft,
  originalPrice,
  rating = 4.8,
}) => {
  // Función para crear el enlace de WhatsApp con el mensaje personalizado
  const createWhatsAppLink = (productName) => {
    const message = `Hola, me interesa este producto: ${productName}`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  const finalOriginalPrice = originalPrice || (discount ? (price * (100 + discount)) / 100 : null)
  const savings = finalOriginalPrice ? (finalOriginalPrice - price).toFixed(2) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative bg-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-indigo-200 max-w-sm mx-auto"
    >
      {/* Gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top section with image */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Floating badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">

          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <Heart className="w-4 h-4 text-chedar stroke-3 fill-chedar hover:text-red-500 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Product image */}
        <div className="relative w-full h-full">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Category badge */}
          {categoryLabel && (
            <div className="absolute bottom-4 left-4 bg-verde/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-avenir font-semibold tracking-wide shadow-md">
              {categoryLabel}
            </div>
          )}
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 space-y-4">
        {/* Rating and title */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? "text-amber-400 fill-chedar" : "text-chedar fill-chedar"}`}
                />
              ))}
              <span className="text-sm text-verde font-avenir ml-2">({rating})</span>
            </div>
          </div>

          <h3 className="text-2xl font-play text-verde line-clamp-2 leading-tight group-hover:text-chedar transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Description */}
        <div className="text-rock/80 font-avenir text-sm leading-relaxed line-clamp-2">
          {documentToReactComponents(description)}
        </div>

        {/* Price section */}
        <div className="relative">
          <div className="bg-amber-50/30 rounded-2xl p-4 border border-chedarlow">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-play text-chedar">${price.toFixed(2)}</span>
                  {finalOriginalPrice && (
                    <span className="text-lg text-gray-400 line-through">${finalOriginalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-green-100/50 border-2 border-green-500 hover:bg-green-50 text-green-600 py-3 px-6 rounded-2xl font-semibold text-sm tracking-wide shadow-md hover:shadow-green-500/20 transition-all duration-300 flex items-center justify-center space-x-2"
            onClick={(e) => {
              e.stopPropagation()
              window.open(createWhatsAppLink(name), "_blank")
            }}
          >
            <FaWhatsapp className="w-5 h-5" />
            <span className="font-avenir">Comprar ahora</span>
          </motion.button>
        </div>

        {/* Trust indicators */}
        {/* <div className="flex items-center justify-center space-x-6 pt-3 border-t border-gray-100">
          <div className="text-center">
            <div className="text-xs text-gray-500">Envío</div>
            <div className="text-xs font-semibold text-gray-700">Gratis</div>
          </div>
        </div> */}
      </div>
    </motion.div>
  )
}

export default ProductCard
