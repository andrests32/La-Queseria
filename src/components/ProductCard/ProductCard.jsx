"use client"

import { Star, Heart, Clock, Users, Flame } from "lucide-react"
import { motion } from "framer-motion"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaWhatsapp } from "react-icons/fa"

// Número de WhatsApp que debes cambiar por el tuyo
const WHATSAPP_NUMBER = "+593980883299"

const FoodProductCard = ({
  name,
  price,
  image,
  description,
  category,
  discount,
  originalPrice,
  rating = 4.8,
}) => {
  // Función para crear el enlace de WhatsApp con el mensaje personalizado
  const createWhatsAppLink = (productName) => {
    const message = `Hola, me gustaría ordenar: ${productName}`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  const finalOriginalPrice = originalPrice || (discount ? (price * (100 + discount)) / 100 : null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 max-w-sm mx-auto"
    >
      {/* Top section with image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <div className="flex items-center justify-center gap-2 space-y-2">
              <div className="bg-chedar text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                <Flame className="w-3 h-3" />
                <span>Popular</span>
              </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <Heart className="w-4 h-4 text-chedar fill-chedar transition-colors" />
          </motion.button>
        </div>

        {/* Product image */}
        <img
          src={image || "/placeholder.svg?height=220&width=300"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content section */}
      <div className="p-6 space-y-4">
        {/* Rating and info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-chedar" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-play text-verde line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <div className="text-rock/90 font-avenir text-sm line-clamp-2 leading-relaxed">
            {typeof description === "string" ? description : documentToReactComponents(description)}
          </div>
        )}


        {/* Price section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-200">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-play text-chedar">${price.toFixed(2)}</span>
                {finalOriginalPrice && (
                  <span className="text-lg text-gray-400 line-through">${finalOriginalPrice.toFixed(2)}</span>
                )}
              </div>
              {discount && (
                <div className="text-xs text-green-600 font-play">
                  Ahorras ${(finalOriginalPrice - price).toFixed(2)}
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-xs text-rock/50 font-avenir font-semibold">Ahora al mejor precio</div>
            </div>
          </div>
        </div>

        {/* Order button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-green-600 hover:from-red-600 hover:to-orange-600 text-white py-3.5 px-4 rounded-2xl font-avenir font-semibold tracking-wide text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/25"
          onClick={(e) => {
            e.stopPropagation()
            window.open(createWhatsAppLink(name), "_blank")
          }}
        >
          <FaWhatsapp className="w-5 h-5" />
          <span>Comprar Ahora</span>
        </motion.button>

        {/* Delivery info */}
        <div className="flex items-center justify-center space-x-6 pt-3 border-t border-gray-100 font-avenir font-semibold tracking-wide">
          <div className="text-center">
            <div className="text-xs text-gray-500">Calidad</div>
            {/* <div className="text-xs font-semibold text-green-600">30-45 min</div> */}
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Precio</div>
            {/* <div className="text-xs font-semibold text-blue-600">$2.50</div> */}
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Sabor</div>
            {/* <div className="text-xs font-semibold text-purple-600">$15.00</div> */}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FoodProductCard
