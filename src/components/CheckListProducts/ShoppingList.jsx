"use client"

import { useState, useEffect, useMemo } from "react"
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer"
import {
  UserCheck,
  Download,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  X,
  Check,
  Plus,
  Minus,
} from "lucide-react"
import LogoQueseria from "../LogoQueseria/LogoQueseria"
import HomeButton from "../ProductsFilter/HomeButton"

// Rutas para ilustraciones
const illustrationImages = ["/ilustracionuno.png", "/ilustraciondos.png", "/ilustraciontres.png"]

// Estilos para el PDF
const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1 solid #F0F0F0",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    color: "#F59E0B",
    fontWeight: "bold",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#1F2937",
    fontWeight: "bold",
  },
  categoryName: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
    color: "#92400E",
    fontWeight: "bold",
    backgroundColor: "#FEF3C7",
    padding: 5,
    borderRadius: 4,
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingLeft: 10,
  },
  productName: {
    fontSize: 12,
    color: "#4B5563",
  },
  productDetail: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    paddingTop: 10,
    borderTop: "1 solid #F0F0F0",
    fontSize: 10,
    color: "#9CA3AF",
    textAlign: "center",
  },
  timestamp: {
    fontSize: 10,
    marginTop: 20,
    color: "#9CA3AF",
    textAlign: "right",
  },
})

// Datos iniciales
const initialCategories = [
  {
    name: "Lácteos",
    items: [
      { id: "l1", name: "Leche", detail: "Entera pasteurizada", checked: false, quantity: 0, unit: "litro" },
      { id: "l2", name: "Queso fresco", detail: "Blanco pasteurizado", checked: false, quantity: 0, unit: "kg" },
      { id: "l3", name: "Queso mozzarella", detail: "Para pizza", checked: false, quantity: 0, unit: "kg" },
      { id: "l4", name: "Yogurt natural", detail: "Sin azúcar", checked: false, quantity: 0, unit: "litro" },
      { id: "l5", name: "Mantequilla", detail: "Sin sal", checked: false, quantity: 0, unit: "g" },
      { id: "l6", name: "Crema", detail: "Para batir", checked: false, quantity: 0, unit: "litro" },
    ],
  },
  {
    name: "Vegetales",
    items: [
      { id: "v1", name: "Zanahoria", detail: "Orgánica", checked: false, quantity: 0, unit: "kg" },
      { id: "v2", name: "Tomate", detail: "Maduro para ensalada", checked: false, quantity: 0, unit: "kg" },
      { id: "v3", name: "Cebolla", detail: "Blanca", checked: false, quantity: 0, unit: "kg" },
      { id: "v4", name: "Pepino", detail: "Verde fresco", checked: false, quantity: 0, unit: "kg" },
      { id: "v5", name: "Pimiento", detail: "Rojo", checked: false, quantity: 0, unit: "kg" },
      { id: "v6", name: "Espinaca", detail: "Hoja fresca", checked: false, quantity: 0, unit: "kg" },
    ],
  },
  {
    name: "Frutas",
    items: [
      { id: "f1", name: "Manzana", detail: "Roja", checked: false, quantity: 0, unit: "kg" },
      { id: "f2", name: "Banana", detail: "Fresca", checked: false, quantity: 0, unit: "kg" },
      { id: "f3", name: "Naranja", detail: "Para jugo", checked: false, quantity: 0, unit: "kg" },
      { id: "f4", name: "Uva", detail: "Sin semilla", checked: false, quantity: 0, unit: "kg" },
      { id: "f5", name: "Fresa", detail: "Fresca", checked: false, quantity: 0, unit: "kg" },
      { id: "f6", name: "Piña", detail: "Madura", checked: false, quantity: 0, unit: "unidad" },
    ],
  },
  {
    name: "Avícolas",
    items: [
      { id: "a1", name: "Pollo", detail: "Pechuga sin piel", checked: false, quantity: 0, unit: "kg" },
      { id: "a2", name: "Huevos", detail: "Blancos grandes", checked: false, quantity: 0, unit: "docena" },
      { id: "a3", name: "Pavo", detail: "Rebanado para sandwich", checked: false, quantity: 0, unit: "kg" },
      { id: "a4", name: "Pollo", detail: "Muslo sin piel", checked: false, quantity: 0, unit: "kg" },
      { id: "a5", name: "Pollo", detail: "Entero", checked: false, quantity: 0, unit: "kg" },
    ],
  },
  {
    name: "Plátanos y Tubérculos",
    items: [
      { id: "p1", name: "Plátano verde", detail: "Para freír", checked: false, quantity: 0, unit: "unidad" },
      { id: "p2", name: "Plátano maduro", detail: "Para cocinar", checked: false, quantity: 0, unit: "unidad" },
      { id: "p3", name: "Papa", detail: "Blanca", checked: false, quantity: 0, unit: "kg" },
      { id: "p4", name: "Yuca", detail: "Fresca", checked: false, quantity: 0, unit: "kg" },
      { id: "p5", name: "Batata", detail: "Naranja", checked: false, quantity: 0, unit: "kg" },
    ],
  },
  {
    name: "Harinas y Cereales",
    items: [
      { id: "h1", name: "Harina de trigo", detail: "Todo propósito", checked: false, quantity: 0, unit: "kg" },
      { id: "h2", name: "Harina de maíz", detail: "Precocida", checked: false, quantity: 0, unit: "kg" },
      { id: "h3", name: "Arroz", detail: "Grano largo", checked: false, quantity: 0, unit: "kg" },
      { id: "h4", name: "Pasta", detail: "Espagueti", checked: false, quantity: 0, unit: "kg" },
      { id: "h5", name: "Avena", detail: "En hojuelas", checked: false, quantity: 0, unit: "kg" },
      { id: "h6", name: "Quinoa", detail: "Orgánica", checked: false, quantity: 0, unit: "kg" },
    ],
  },
  {
    name: "Carnes",
    items: [
      { id: "c1", name: "Carne molida", detail: "Res magra", checked: false, quantity: 0, unit: "kg" },
      { id: "c2", name: "Bistec", detail: "De res", checked: false, quantity: 0, unit: "kg" },
      { id: "c3", name: "Costilla", detail: "De cerdo", checked: false, quantity: 0, unit: "kg" },
      { id: "c4", name: "Lomo", detail: "De cerdo", checked: false, quantity: 0, unit: "kg" },
      { id: "c5", name: "Chorizo", detail: "Para parrilla", checked: false, quantity: 0, unit: "kg" },
    ],
  },
  {
    name: "Pescados y Mariscos",
    items: [
      { id: "m1", name: "Filete de pescado", detail: "Tilapia", checked: false, quantity: 0, unit: "kg" },
      { id: "m2", name: "Camarones", detail: "Medianos", checked: false, quantity: 0, unit: "kg" },
      { id: "m3", name: "Salmón", detail: "En filete", checked: false, quantity: 0, unit: "kg" },
      { id: "m4", name: "Atún", detail: "Fresco", checked: false, quantity: 0, unit: "kg" },
      { id: "m5", name: "Pulpo", detail: "Limpio", checked: false, quantity: 0, unit: "kg" },
    ],
  },
]

// Componente PDF
const MyDocument = ({ selectedProducts }) => {
  const formatDate = () => {
    const now = new Date()
    return now.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.header}>
          <View style={pdfStyles.logoContainer}>
            <Text style={pdfStyles.logoText}>Quesería</Text>
          </View>
        </View>

        <Text style={pdfStyles.title}>Lista de Compras</Text>

        {selectedProducts.map((category) => (
          <View key={category.name}>
            <Text style={pdfStyles.categoryName}>{category.name}</Text>
            {category.items.map((item) => (
              <View key={`${category.name}-${item.name}`} style={pdfStyles.productRow}>
                <Text style={pdfStyles.productName}>{item.name}</Text>
                <Text style={pdfStyles.productDetail}>
                  {item.quantity} {item.unit}
                </Text>
              </View>
            ))}
          </View>
        ))}

        <Text style={pdfStyles.timestamp}>Generado el: {formatDate()}</Text>

        <Text style={pdfStyles.footer}>
          Gracias por comprar en Quesería - La mejor selección de productos lácteos y más
        </Text>
      </Page>
    </Document>
  )
}

// Componente para mostrar el PDF
const PDFViewer = ({ shoppingListData, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const generatePdf = async () => {
      try {
        if (!shoppingListData || shoppingListData.length === 0) {
          throw new Error("No hay datos para generar el PDF")
        }

        const blob = await pdf(<MyDocument selectedProducts={shoppingListData} />).toBlob()
        const url = URL.createObjectURL(blob)
        setPdfUrl(url)
        setError(null)
      } catch (err) {
        console.error("Error generating PDF:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    generatePdf()

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl)
      }
    }
  }, [shoppingListData])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-amber-500 mx-auto mb-6"></div>
            <h3 className="text-xl font-medium text-gray-900">Generando PDF...</h3>
            <p className="mt-3 text-gray-500">Por favor espera un momento.</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-red-100 mb-6">
              <X className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Error al generar PDF</h3>
            <p className="mt-3 text-red-500">{error}</p>
            <button
              onClick={onClose}
              className="mt-6 w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="bg-chedar p-4 flex justify-between items-center shadow-sm">
        <h2 className="text-2xl font-play text-verde">Lista de Compras</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-amber-100 transition-colors" aria-label="Cerrar">
          <X className="h-6 w-6 text-verde" />
        </button>
      </div>

      {isMobile ? (
        <div className="flex-1 overflow-auto p-4 flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-verde rounded-full flex items-center justify-center mb-4">
              <Download className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-play text-verde tracking-wide mb-2">Lista de compras generada</h3>
            <p className="text-chedar font-avenir">Descarga el PDF para ver tu lista de compras</p>
          </div>
          <a
            href={pdfUrl}
            download="lista_compras.pdf"
            className="px-6 py-3 bg-chedar hover:bg-amber-600 text-white rounded-lg font-avenir transition-colors flex items-center shadow-md"
          >
            <Download className="h-5 w-5 mr-2" />
            Descargar PDF
          </a>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-hidden">
            <iframe src={pdfUrl} className="w-full h-full border-0" title="Lista de Compras PDF" />
          </div>

          <div className="bg-amber-50 p-4 border-t shadow-inner flex justify-end">
            <a
              href={pdfUrl}
              download="lista_compras.pdf"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors flex items-center shadow-md"
            >
              <Download className="h-5 w-5 mr-2" />
              Descargar PDF
            </a>
          </div>
        </>
      )}
    </div>
  )
}

// Componente ProductItem mejorado
const ProductItem = ({ item, onChange, onQuantityChange, onUnitChange }) => {
  const units = ["kg", "lb", "unidad", "docena", "g", "litro"]

  return (
    <div
      className={`flex flex-col p-4 rounded-xl border-2 transition-all ${
        item.checked ? "bg-amber-50 border-chedar/70 shadow-md" : "bg-white border-gray-200 hover:border-amber-200"
      }`}
    >
      <div className="flex items-center mb-2">
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer ${
            item.checked ? "bg-chedar border-amber-500" : "border-gray-300"
          }`}
          onClick={onChange}
        >
          {item.checked && <Check className="h-4 w-4 text-white" />}
        </div>
        <label onClick={onChange} className="ml-3 flex-1 cursor-pointer">
          <span className={`block font-play text-lg tracking-wide ${item.checked ? "text-verde" : "text-gray-800"}`}>{item.name}</span>
          <span className={`block text-sm ${item.checked ? "text-rock" : "text-gray-500"}`}>{item.detail}</span>
        </label>
      </div>

      {item.checked && (
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1">
            <label className="block text-xs text-rock mb-1 font-medium">Cantidad</label>
            <div className="flex items-center">
              <button
                onClick={() => onQuantityChange(Math.max(0, Number.parseInt(item.quantity || 0) - 1))}
                className="h-9 w-9 flex items-center justify-center bg-chedar text-white rounded-l-lg border border-amber-200 hover:bg-amber-200 transition-colors"
                aria-label="Disminuir cantidad"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                min="0"
                value={item.quantity || 0}
                onChange={(e) => onQuantityChange(e.target.value)}
                className="h-9 w-12 text-center border-y border-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-500 text-verde bg-white"
              />
              <button
                onClick={() => onQuantityChange(Number.parseInt(item.quantity || 0) + 1)}
                className="h-9 w-9 flex items-center justify-center bg-chedar text-white rounded-r-lg border border-amber-200 hover:bg-amber-200 transition-colors"
                aria-label="Aumentar cantidad"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-xs text-rock mb-1 font-medium">Unidad</label>
            <select
              value={item.unit || units[0]}
              onChange={(e) => onUnitChange(e.target.value)}
              className="w-full h-9 px-3 text-sm border border-amber-200 rounded-lg focus:ring-1 focus:ring-chedar focus:border-amber-500 bg-white text-verde"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

// Componente ProductCategory mejorado
const ProductCategory = ({ category, categoryIndex, onCheckboxChange, onQuantityChange, onUnitChange }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasCheckedItems = category.items.some((item) => item.checked)
  const checkedCount = category.items.filter((item) => item.checked).length

  return (
    <div
      className={`overflow-hidden transition-all rounded-xl ${
        hasCheckedItems ? "border-2 border-chedar shadow-md" : "border border-verde"
      }`}
    >
      <div
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
          hasCheckedItems ? "bg-chedar" : "bg-white hover:bg-gray-50"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-play text-verde tracking-wide flex items-center">
          {category.name}
          {hasCheckedItems && (
            <span className="ml-3 px-2.5 py-1 text-sm bg-white font-avenir text-verde rounded-full flex items-center justify-center min-w-[1.75rem]">
              {checkedCount}
            </span>
          )}
        </h3>
        <div className={`p-1.5 rounded-full ${hasCheckedItems ? "bg-white" : "bg-gray-100"}`}>
          {isExpanded ? (
            <ChevronUp className={`h-5 w-5 ${hasCheckedItems ? "text-verde" : "text-verde"}`} />
          ) : (
            <ChevronDown className={`h-5 w-5 ${hasCheckedItems ? "text-verde" : "text-verde"}`} />
          )}
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {category.items.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              onChange={() => onCheckboxChange(categoryIndex, item.id)}
              onQuantityChange={(value) => onQuantityChange(categoryIndex, item.id, value)}
              onUnitChange={(unit) => onUnitChange(categoryIndex, item.id, unit)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Componente SelectedSummary mejorado
const SelectedSummary = ({ selectedProducts = [], onClose = () => {}, onViewPDF = () => {} }) => {
  const totalItems = selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <div className="bg-white h-full flex flex-col">
      <div className="p-4 bg-chedar flex justify-between items-center shadow-sm">
        <h3 className="text-lg font-play text-white flex items-center">
          <ShoppingCart className="h-5 w-5 text-white mr-2" />
          Tu Selección
          <span className="ml-2 px-2.5 py-0.5 bg-verde text-white font-avenir rounded-full text-sm">{totalItems}</span>
        </h3>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-amber-100 text-verde transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {selectedProducts.length > 0 ? (
          <>
            <div className="space-y-4">
              {selectedProducts.map((category) => (
                <div
                  key={category.name}
                  className="animate-fadeIn bg-white p-4 rounded-xl shadow-sm border border-chedar"
                >
                  <h4 className="font-play tracking-wide text-verde border-b border-amber-200 pb-2 mb-3">{category.name}</h4>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center text-gray-700 p-2 hover:bg-amber-50 rounded-lg transition-colors"
                      >
                        <div>
                          <span className="font-avenir text-verde">{item.name}</span>
                          <span className="text-sm text-chedar block">{item.detail}</span>
                        </div>
                        <span className="font-medium whitespace-nowrap ml-2 px-3 py-1 bg-chedar rounded-lg text-white">
                          {item.quantity} {item.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 flex flex-col items-center">
              <button
                onClick={onViewPDF}
                className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center shadow-md"
              >
                <Download className="h-5 w-5 mr-2" />
                Ver como PDF
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12 px-4">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-8 w-8 text-amber-500" />
            </div>
            <h4 className="text-lg font-medium text-amber-800 mb-2">Tu lista está vacía</h4>
            <p className="text-amber-600">No has seleccionado ningún producto</p>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-amber-100 bg-amber-50 shadow-inner">
        {selectedProducts.length > 0 && (
          <PDFDownloadLink
            document={<MyDocument selectedProducts={selectedProducts} />}
            fileName="lista_compras.pdf"
            className="flex items-center justify-center w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md"
          >
            {({ loading }) => (
              <>
                <Download className="h-5 w-5 mr-2" />
                {loading ? "Preparando PDF..." : "Descargar PDF"}
              </>
            )}
          </PDFDownloadLink>
        )}
      </div>
    </div>
  )
}

// Componente principal App mejorado
function App() {
  const [categories, setCategories] = useState(initialCategories)
  const [isClient, setIsClient] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [showPdfViewer, setShowPdfViewer] = useState(false)
  const [shoppingListData, setShoppingListData] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    setIsClient(true)
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024)
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    const savedData = localStorage.getItem("shoppingList")
    if (savedData) {
      try {
        setCategories(JSON.parse(savedData))
      } catch (e) {
        console.error("Error al cargar datos guardados:", e)
      }
    }

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("shoppingList", JSON.stringify(categories))
    } catch (e) {
      console.error("Error al guardar datos:", e)
    }
  }, [categories])

  const selectedProducts = useMemo(() => {
    return categories
      .map((category) => ({
        name: category.name,
        items: category.items.filter((item) => item.checked && item.quantity > 0),
      }))
      .filter((category) => category.items.length > 0)
  }, [categories])

  const handleCheckboxChange = (categoryIndex, itemId) => {
    const updatedCategories = [...categories]
    const itemIndex = updatedCategories[categoryIndex].items.findIndex((item) => item.id === itemId)

    updatedCategories[categoryIndex].items[itemIndex].checked =
      !updatedCategories[categoryIndex].items[itemIndex].checked

    if (
      updatedCategories[categoryIndex].items[itemIndex].checked &&
      !updatedCategories[categoryIndex].items[itemIndex].quantity
    ) {
      updatedCategories[categoryIndex].items[itemIndex].quantity = 1
    }

    setCategories(updatedCategories)
  }

  const handleQuantityChange = (categoryIndex, itemId, value) => {
    const updatedCategories = [...categories]
    const itemIndex = updatedCategories[categoryIndex].items.findIndex((item) => item.id === itemId)

    const parsedValue = Number.parseInt(value, 10)
    updatedCategories[categoryIndex].items[itemIndex].quantity = isNaN(parsedValue) ? 0 : Math.max(0, parsedValue)

    setCategories(updatedCategories)
  }

  const handleUnitChange = (categoryIndex, itemId, unit) => {
    const updatedCategories = [...categories]
    const itemIndex = updatedCategories[categoryIndex].items.findIndex((item) => item.id === itemId)

    updatedCategories[categoryIndex].items[itemIndex].unit = unit
    setCategories(updatedCategories)
  }

  const clearSelection = () => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        items: category.items.map((item) => ({
          ...item,
          checked: false,
          quantity: 0,
        })),
      })),
    )
    setShowSummary(false)
  }

  const hasSelectedProducts = selectedProducts.length > 0
  const totalSelectedItems = selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0)

  if (showPdfViewer && shoppingListData) {
    return <PDFViewer shoppingListData={shoppingListData} onClose={() => setShowPdfViewer(false)} />
  }

  return (
    <div className="min-h-screen relative font-avenir bg-amber-50/30">
      {/* Fondo decorativo con opacidad reducida */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-full">
          {[...Array(24)].map((_, index) => (
            <img
              key={index}
              src={illustrationImages[index % illustrationImages.length] || "/placeholder.svg"}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      <HomeButton />

      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xs rounded-2xl overflow-hidden shadow-lg">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 pb-4 border-b-2 border-verde/10">
              <div className="flex items-center mb-4 md:mb-0">
                <LogoQueseria className="h-16 md:h-20" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-play text-chedar">uesería</h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSummary(!showSummary)}
                  className={`flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-colors w-full sm:w-auto ${
                    hasSelectedProducts
                      ? "bg-chedar text-white hover:bg-chedar shadow-md"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!hasSelectedProducts}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>Ver selección</span>
                  {hasSelectedProducts && (
                    <span className="ml-2 font-avenir bg-white text-verde px-2.5 py-0.5 rounded-full">
                      {totalSelectedItems}
                    </span>
                  )}
                </button>

                <button
                  onClick={clearSelection}
                  className="flex items-center justify-center px-4 py-3 bg-white border-2 border-chedar hover:bg-amber-50 text-chedar rounded-xl font-avenir transition-colors w-full sm:w-auto"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span className="text-verde">Limpiar lista</span>
                </button>
              </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Lista principal */}
              <div className={`${showSummary && !isMobile ? "lg:w-3/5" : "w-full"}`}>
                <h2 className="text-xl md:text-2xl font-play mb-4 md:mb-6 text-verde flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-verde" />
                  Lista de Compras
                </h2>

                {/* Categorías en mobile: selector horizontal */}
                {isMobile && (
                  <div className="mb-4 overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                      <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                          activeCategory === null
                            ? "bg-chedar text-white"
                            : "bg-white border border-amber-200 text-chedar"
                        }`}
                      >
                        Todos los productos
                      </button>
                      {categories.map((category, index) => (
                        <button
                          key={category.name}
                          onClick={() => setActiveCategory(index)}
                          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                            activeCategory === index
                              ? "bg-amber-500 text-white"
                              : "bg-white border border-verde text-verde"
                          } ${category.items.some((item) => item.checked) ? "font-medium" : ""}`}
                        >
                          {category.name}
                          {category.items.some((item) => item.checked) && (
                            <span
                              className={`ml-1.5 px-1.5 text-xs rounded-full ${
                                activeCategory === index ? "bg-white text-amber-600" : "bg-chedar text-white font-bold"
                              }`}
                            >
                              {category.items.filter((item) => item.checked).length}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lista de categorías */}
                <div className="space-y-4 md:space-y-6">
                  {categories.map((category, categoryIndex) =>
                    isMobile && activeCategory !== null && activeCategory !== categoryIndex ? null : (
                      <ProductCategory
                        key={category.name}
                        category={category}
                        categoryIndex={categoryIndex}
                        onCheckboxChange={handleCheckboxChange}
                        onQuantityChange={handleQuantityChange}
                        onUnitChange={handleUnitChange}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* Panel lateral para desktop */}
              {showSummary && !isMobile && (
                <div className="lg:w-2/5 border-l border-amber-100">
                  <SelectedSummary
                    selectedProducts={selectedProducts}
                    onClose={() => setShowSummary(false)}
                    onViewPDF={() => {
                      setShoppingListData(selectedProducts)
                      setShowPdfViewer(true)
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Panel lateral para mobile (aparece como overlay) */}
      {showSummary && isMobile && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-50">
          <div className="w-full h-full bg-white shadow-xl flex flex-col">
            <SelectedSummary
              selectedProducts={selectedProducts}
              onClose={() => setShowSummary(false)}
              onViewPDF={() => {
                setShoppingListData(selectedProducts)
                setShowPdfViewer(true)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App