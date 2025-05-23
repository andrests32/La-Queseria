import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import QRCode from 'react-qr-code';
import { UserCheck as ShoppingBag, Download, RefreshCw, ChevronDown, ChevronUp, ShoppingCart, X } from 'lucide-react';
import LogoQueseria from '../LogoQueseria/LogoQueseria';
import HomeButton from '../ProductsFilter/HomeButton';

// Rutas para ilustraciones
const illustrationImages = [
  '/ilustracionuno.png',
  '/ilustraciondos.png',
  '/ilustraciontres.png'
];

// Estilos para el PDF
const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '1 solid #F0F0F0',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    color: '#F59E0B',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#1F2937',
    fontWeight: 'bold',
  },
  categoryName: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
    color: '#92400E',
    fontWeight: 'bold',
    backgroundColor: '#FEF3C7',
    padding: 5,
    borderRadius: 4,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingLeft: 10,
  },
  productName: {
    fontSize: 12,
    color: '#4B5563',
  },
  productDetail: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    paddingTop: 10,
    borderTop: '1 solid #F0F0F0',
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  qrSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  qrLabel: {
    fontSize: 12,
    marginBottom: 10,
    color: '#6B7280',
  },
  qrNote: {
    fontSize: 9,
    marginTop: 5,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  timestamp: {
    fontSize: 10,
    marginTop: 20,
    color: '#9CA3AF',
    textAlign: 'right',
  }
});

// Datos iniciales
const initialCategories = [
  {
    name: 'Lácteos',
    items: [
      { id: 'l1', name: 'Leche', detail: 'Entera pasteurizada', checked: false, quantity: 0, unit: 'litro' },
      { id: 'l2', name: 'Queso fresco', detail: 'Blanco pasteurizado', checked: false, quantity: 0, unit: 'kg' },
      { id: 'l3', name: 'Queso mozzarella', detail: 'Para pizza', checked: false, quantity: 0, unit: 'kg' },
      { id: 'l4', name: 'Yogurt natural', detail: 'Sin azúcar', checked: false, quantity: 0, unit: 'litro' },
      { id: 'l5', name: 'Mantequilla', detail: 'Sin sal', checked: false, quantity: 0, unit: 'g' },
      { id: 'l6', name: 'Crema', detail: 'Para batir', checked: false, quantity: 0, unit: 'litro' },
    ],
  },
  {
    name: 'Vegetales',
    items: [
      { id: 'v1', name: 'Zanahoria', detail: 'Orgánica', checked: false, quantity: 0, unit: 'kg' },
      { id: 'v2', name: 'Tomate', detail: 'Maduro para ensalada', checked: false, quantity: 0, unit: 'kg' },
      { id: 'v3', name: 'Cebolla', detail: 'Blanca', checked: false, quantity: 0, unit: 'kg' },
      { id: 'v4', name: 'Pepino', detail: 'Verde fresco', checked: false, quantity: 0, unit: 'kg' },
      { id: 'v5', name: 'Pimiento', detail: 'Rojo', checked: false, quantity: 0, unit: 'kg' },
      { id: 'v6', name: 'Espinaca', detail: 'Hoja fresca', checked: false, quantity: 0, unit: 'kg' },
    ],
  },
  {
    name: 'Frutas',
    items: [
      { id: 'f1', name: 'Manzana', detail: 'Roja', checked: false, quantity: 0, unit: 'kg' },
      { id: 'f2', name: 'Banana', detail: 'Fresca', checked: false, quantity: 0, unit: 'kg' },
      { id: 'f3', name: 'Naranja', detail: 'Para jugo', checked: false, quantity: 0, unit: 'kg' },
      { id: 'f4', name: 'Uva', detail: 'Sin semilla', checked: false, quantity: 0, unit: 'kg' },
      { id: 'f5', name: 'Fresa', detail: 'Fresca', checked: false, quantity: 0, unit: 'kg' },
      { id: 'f6', name: 'Piña', detail: 'Madura', checked: false, quantity: 0, unit: 'unidad' },
    ],
  },
  {
    name: 'Avícolas',
    items: [
      { id: 'a1', name: 'Pollo', detail: 'Pechuga sin piel', checked: false, quantity: 0, unit: 'kg' },
      { id: 'a2', name: 'Huevos', detail: 'Blancos grandes', checked: false, quantity: 0, unit: 'docena' },
      { id: 'a3', name: 'Pavo', detail: 'Rebanado para sandwich', checked: false, quantity: 0, unit: 'kg' },
      { id: 'a4', name: 'Pollo', detail: 'Muslo sin piel', checked: false, quantity: 0, unit: 'kg' },
      { id: 'a5', name: 'Pollo', detail: 'Entero', checked: false, quantity: 0, unit: 'kg' },
    ],
  },
  {
    name: 'Plátanos y Tubérculos',
    items: [
      { id: 'p1', name: 'Plátano verde', detail: 'Para freír', checked: false, quantity: 0, unit: 'unidad' },
      { id: 'p2', name: 'Plátano maduro', detail: 'Para cocinar', checked: false, quantity: 0, unit: 'unidad' },
      { id: 'p3', name: 'Papa', detail: 'Blanca', checked: false, quantity: 0, unit: 'kg' },
      { id: 'p4', name: 'Yuca', detail: 'Fresca', checked: false, quantity: 0, unit: 'kg' },
      { id: 'p5', name: 'Batata', detail: 'Naranja', checked: false, quantity: 0, unit: 'kg' },
    ],
  },
  {
    name: 'Harinas y Cereales',
    items: [
      { id: 'h1', name: 'Harina de trigo', detail: 'Todo propósito', checked: false, quantity: 0, unit: 'kg' },
      { id: 'h2', name: 'Harina de maíz', detail: 'Precocida', checked: false, quantity: 0, unit: 'kg' },
      { id: 'h3', name: 'Arroz', detail: 'Grano largo', checked: false, quantity: 0, unit: 'kg' },
      { id: 'h4', name: 'Pasta', detail: 'Espagueti', checked: false, quantity: 0, unit: 'kg' },
      { id: 'h5', name: 'Avena', detail: 'En hojuelas', checked: false, quantity: 0, unit: 'kg' },
      { id: 'h6', name: 'Quinoa', detail: 'Orgánica', checked: false, quantity: 0, unit: 'kg' },
    ],
  },
  {
    name: 'Carnes',
    items: [
      { id: 'c1', name: 'Carne molida', detail: 'Res magra', checked: false, quantity: 0, unit: 'kg' },
      { id: 'c2', name: 'Bistec', detail: 'De res', checked: false, quantity: 0, unit: 'kg' },
      { id: 'c3', name: 'Costilla', detail: 'De cerdo', checked: false, quantity: 0, unit: 'kg' },
      { id: 'c4', name: 'Lomo', detail: 'De cerdo', checked: false, quantity: 0, unit: 'kg' },
      { id: 'c5', name: 'Chorizo', detail: 'Para parrilla', checked: false, quantity: 0, unit: 'kg' },
    ],
  },
  {
    name: 'Pescados y Mariscos',
    items: [
      { id: 'm1', name: 'Filete de pescado', detail: 'Tilapia', checked: false, quantity: 0, unit: 'kg' },
      { id: 'm2', name: 'Camarones', detail: 'Medianos', checked: false, quantity: 0, unit: 'kg' },
      { id: 'm3', name: 'Salmón', detail: 'En filete', checked: false, quantity: 0, unit: 'kg' },
      { id: 'm4', name: 'Atún', detail: 'Fresco', checked: false, quantity: 0, unit: 'kg' },
      { id: 'm5', name: 'Pulpo', detail: 'Limpio', checked: false, quantity: 0, unit: 'kg' },
    ],
  },
];

// Componente PDF
const MyDocument = ({ selectedProducts }) => {
  const formatDate = () => {
    const now = new Date();
    return now.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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

        <Text style={pdfStyles.timestamp}>
          Generado el: {formatDate()}
        </Text>

        <Text style={pdfStyles.footer}>
          Gracias por comprar en Quesería - La mejor selección de productos lácteos y más
        </Text>
      </Page>
    </Document>
  );
};

// Componente para mostrar el PDF desde el QR
const PDFViewer = ({ shoppingListData, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generatePdf = async () => {
      try {
        console.log("Generando PDF con datos:", shoppingListData);
        if (!shoppingListData || shoppingListData.length === 0) {
          throw new Error("No hay datos para generar el PDF");
        }
        
        const blob = await pdf(<MyDocument selectedProducts={shoppingListData} />).toBlob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setError(null);
      } catch (err) {
        console.error('Error generating PDF:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    generatePdf();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [shoppingListData]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-gray-900">Generando PDF...</h3>
            <p className="mt-2 text-sm text-gray-500">Por favor espera un momento.</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">Error al generar PDF</h3>
            <p className="mt-2 text-sm text-red-500">{error}</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="bg-gray-100 p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold text-gray-800">Lista de Compras</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <iframe 
          src={pdfUrl} 
          className="w-full h-full border-0"
          title="Lista de Compras PDF"
        />
      </div>
      
      <div className="bg-gray-100 p-4 border-t flex justify-end">
        <a
          href={pdfUrl}
          download="lista_compras.pdf"
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
        >
          Descargar PDF
        </a>
      </div>
    </div>
  );
};

// Función para comprimir los datos de la lista
const compressListData = (selectedProducts) => {
  if (!selectedProducts || !Array.isArray(selectedProducts)) return [];
  
  return selectedProducts.map(category => ({
    n: category.name.substring(0, 3), // Nombre abreviado a 3 caracteres
    i: category.items.map(item => ({
      n: item.name.substring(0, 3),  // Nombre abreviado a 3 caracteres
      q: item.quantity,
      u: item.unit.substring(0, 1)   // Unidad abreviada a 1 caracter
    }))
  }));
};

// Función para descomprimir los datos
const decompressListData = (compressedData) => {
  if (!compressedData || !Array.isArray(compressedData)) return [];
  
  // Mapeo de unidades abreviadas
  const unitMap = {
    'k': 'kg',
    'l': 'litro',
    'g': 'g',
    'd': 'docena',
    'u': 'unidad'
  };

  return compressedData.map(category => ({
    name: category.n === 'Lác' ? 'Lácteos' :
           category.n === 'Veg' ? 'Vegetales' :
           category.n === 'Fru' ? 'Frutas' :
           category.n === 'Aví' ? 'Avícolas' :
           category.n === 'Plá' ? 'Plátanos y Tubérculos' :
           category.n === 'Har' ? 'Harinas y Cereales' :
           category.n === 'Car' ? 'Carnes' : category.n,
    items: category.i.map(item => ({
      name: item.n === 'Lee' ? 'Leche' :
            item.n === 'Que' ? 'Queso' :
            item.n === 'Yog' ? 'Yogurt' :
            item.n === 'Man' ? 'Mantequilla' :
            item.n === 'Cre' ? 'Crema' :
            item.n === 'Zan' ? 'Zanahoria' :
            item.n === 'Tom' ? 'Tomate' :
            item.n === 'Ceb' ? 'Cebolla' :
            item.n === 'Pep' ? 'Pepino' :
            item.n === 'Pim' ? 'Pimiento' : item.n,
      quantity: item.q || 1,
      unit: unitMap[item.u] || item.u,
      id: `${category.n}-${item.n}`,
      detail: '',
      checked: true
    }))
  }));
};

// Componente ProductItem
const ProductItem = ({ item, onChange, onQuantityChange, onUnitChange }) => {
  const units = ['kg', 'lb', 'unidad', 'docena', 'g', 'litro'];

  return (
    <div
      className={`flex flex-col p-3 rounded-lg border transition-all ${item.checked
        ? 'bg-white border-amber-200 shadow-sm'
        : 'bg-white border-gray-200 hover:border-gray-300'
        }`}
    >
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id={item.id}
          checked={item.checked}
          onChange={onChange}
          className="h-5 w-5 text-amber-500 rounded focus:ring-amber-400 cursor-pointer"
        />
        <label htmlFor={item.id} className="ml-3 flex-1 cursor-pointer">
          <span className="block font-medium text-gray-800">{item.name}</span>
          <span className="block text-sm text-gray-500">{item.detail}</span>
        </label>
      </div>

      {item.checked && (
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div>
            <label htmlFor={`qty-${item.id}`} className="block text-xs text-gray-500 mb-1">
              Cantidad
            </label>
            <input
              type="number"
              id={`qty-${item.id}`}
              min="0"
              value={item.quantity || 0}
              onChange={(e) => onQuantityChange(e.target.value)}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div>
            <label htmlFor={`unit-${item.id}`} className="block text-xs text-gray-500 mb-1">
              Unidad
            </label>
            <select
              id={`unit-${item.id}`}
              value={item.unit || units[0]}
              onChange={(e) => onUnitChange(e.target.value)}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
            >
              {units.map(unit => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente ProductCategory
const ProductCategory = ({ category, categoryIndex, onCheckboxChange, onQuantityChange, onUnitChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasCheckedItems = category.items.some(item => item.checked);

  return (
    <div className={`border rounded-lg overflow-hidden transition-all ${hasCheckedItems ? 'border-amber-300 bg-amber-50' : 'border-gray-200'
      }`}>
      <div
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${hasCheckedItems ? 'bg-amber-100' : 'hover:bg-gray-50'
          }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold flex items-center">
          {category.name}
          {hasCheckedItems && (
            <span className="ml-2 px-2 py-0.5 text-sm bg-amber-500 text-white rounded-full">
              {category.items.filter(item => item.checked).length}
            </span>
          )}
        </h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>

      {isExpanded && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
      )}
    </div>
  );
};

// Componente SelectedSummary
const SelectedSummary = ({ selectedProducts = [], qrValue = '', onClose = () => { }, onViewPDF = () => { } }) => {
  const totalItems = selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="bg-white h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
          <ShoppingCart className="h-5 w-5 text-amber-500 mr-2" />
          Tu Selección ({totalItems})
        </h3>
        <button
          onClick={onClose}
          className="md:hidden p-1 rounded-full hover:bg-gray-100 text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {selectedProducts.length > 0 ? (
          <>
            <div className="space-y-4">
              {selectedProducts.map(category => (
                <div key={category.name} className="animate-fadeIn">
                  <h4 className="font-medium text-amber-700 border-b border-amber-200 pb-1 mb-2">
                    {category.name}
                  </h4>
                  <ul className="space-y-2 pl-2">
                    {category.items.map(item => (
                      <li key={item.id} className="flex justify-between items-center text-gray-700">
                        <span className="truncate">{item.name}</span>
                        <span className="font-medium whitespace-nowrap ml-2">
                          {item.quantity} {item.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-500 mb-3">Escanea para ver la lista:</p>
                <div className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <QRCode
                    value={qrValue}
                    size={120}
                    level="H"
                    className="h-auto max-w-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center max-w-xs">
                  Escanea este código con tu cámara para ver la lista completa
                </p>
                
                <button
                  onClick={onViewPDF}
                  className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
                >
                  Ver como PDF
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-6 text-gray-500">
            <p>No has seleccionado ningún producto</p>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200">
        {selectedProducts.length > 0 && (
          <PDFDownloadLink
            document={<MyDocument selectedProducts={selectedProducts} />}
            fileName="lista_compras.pdf"
            className="flex items-center justify-center w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md"
          >
            {({ loading }) => (
              <>
                <Download className="h-5 w-5 mr-2" />
                {loading ? 'Preparando PDF...' : 'Descargar PDF'}
              </>
            )}
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
};

// Componente principal App
function App() {
  const [categories, setCategories] = useState(initialCategories);
  const [qrValue, setQrValue] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [shoppingListData, setShoppingListData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [qrError, setQrError] = useState(null);

  useEffect(() => {
    setIsClient(true);
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Verificar parámetros de URL al cargar
    const params = new URLSearchParams(window.location.search);
    const listData = params.get('data');
    
    if (listData) {
      try {
        // Decodificar y descomprimir los datos
        const decodedData = decodeURIComponent(atob(listData));
        const parsedData = JSON.parse(decodedData);
        
        if (!Array.isArray(parsedData)) {
          throw new Error("Datos del QR no tienen el formato esperado");
        }
        
        const decompressedData = decompressListData(parsedData);
        
        if (!decompressedData || decompressedData.length === 0) {
          throw new Error("No se pudieron procesar los datos del QR");
        }
        
        setShoppingListData(decompressedData);
        setShowPdfViewer(true);
        setQrError(null);
      } catch (error) {
        console.error('Error al procesar datos del QR:', error);
        setQrError(error.message);
      }
    }

    const savedData = localStorage.getItem('shoppingList');
    if (savedData) {
      try {
        setCategories(JSON.parse(savedData));
      } catch (e) {
        console.error("Error al cargar datos guardados:", e);
      }
    }

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('shoppingList', JSON.stringify(categories));
      updateQRValue();
    } catch (e) {
      console.error("Error al guardar datos:", e);
    }
  }, [categories]);

  const updateQRValue = () => {
    const selectedProducts = categories
      .map(category => ({
        name: category.name,
        items: category.items.filter(item => item.checked && item.quantity > 0)
          .map(item => ({
            name: item.name,
            quantity: item.quantity,
            unit: item.unit
          }))
      }))
      .filter(category => category.items.length > 0);

    if (selectedProducts.length > 0) {
      try {
        // Comprimir los datos para el QR
        const compressedData = compressListData(selectedProducts);
        const jsonStr = JSON.stringify(compressedData);
        const base64Data = btoa(encodeURIComponent(jsonStr));
        
        // Crear URL más corta
        const url = `${window.location.origin}${window.location.pathname}?data=${base64Data}`;
        setQrValue(url);
        setQrError(null);
      } catch (error) {
        console.error("Error al generar QR:", error);
        setQrError("Error al generar el código QR");
      }
    } else {
      setQrValue('');
    }
  };

  const handleCheckboxChange = (categoryIndex, itemId) => {
    const updatedCategories = [...categories];
    const itemIndex = updatedCategories[categoryIndex].items.findIndex(
      (item) => item.id === itemId
    );

    updatedCategories[categoryIndex].items[itemIndex].checked =
      !updatedCategories[categoryIndex].items[itemIndex].checked;

    if (updatedCategories[categoryIndex].items[itemIndex].checked &&
      !updatedCategories[categoryIndex].items[itemIndex].quantity) {
      updatedCategories[categoryIndex].items[itemIndex].quantity = 1;
    }

    setCategories(updatedCategories);
  };

  const handleQuantityChange = (categoryIndex, itemId, value) => {
    const updatedCategories = [...categories];
    const itemIndex = updatedCategories[categoryIndex].items.findIndex(
      (item) => item.id === itemId
    );

    const parsedValue = parseInt(value, 10);
    updatedCategories[categoryIndex].items[itemIndex].quantity =
      isNaN(parsedValue) ? 0 : Math.max(0, parsedValue);

    setCategories(updatedCategories);
  };

  const handleUnitChange = (categoryIndex, itemId, unit) => {
    const updatedCategories = [...categories];
    const itemIndex = updatedCategories[categoryIndex].items.findIndex(
      (item) => item.id === itemId
    );

    updatedCategories[categoryIndex].items[itemIndex].unit = unit;
    setCategories(updatedCategories);
  };

  const clearSelection = () => {
    setCategories(prevCategories =>
      prevCategories.map(category => ({
        ...category,
        items: category.items.map(item => ({
          ...item,
          checked: false,
          quantity: 0
        })),
      }))
    );
    setShowSummary(false);
  };

  const selectedProducts = categories
    .map(category => ({
      name: category.name,
      items: category.items.filter(item => item.checked && item.quantity > 0),
    }))
    .filter(category => category.items.length > 0);

  const hasSelectedProducts = selectedProducts.length > 0;
  const totalSelectedItems = selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0);

  if (showPdfViewer && shoppingListData) {
    return <PDFViewer shoppingListData={shoppingListData} onClose={() => setShowPdfViewer(false)} />;
  }

  return (
    <div className="min-h-screen relative font-avenir">
      {qrError && (
        <div className="fixed top-4 right-4 z-50 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg max-w-xs">
          <div className="flex items-center">
            <div className="py-1">
              <svg className="h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Error</p>
              <p className="text-sm">{qrError}</p>
            </div>
            <button 
              onClick={() => setQrError(null)}
              className="ml-4 text-red-700 hover:text-red-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 grid grid-cols-10 gap-4">
        {[...Array(80)].map((_, index) => (
          <img
            key={index}
            src={illustrationImages[index % illustrationImages.length]}
            alt="Decoración"
            className="w-40 h-40 object-cover opacity-10"
          />
        ))}
      </div>

      <HomeButton />
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <header className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 pb-4 border-b">
              <div className="flex items-center mb-4 md:mb-0">
                <LogoQueseria className='h-20' />
                <h1 className="text-3xl md:text-5xl font-play text-chedar">uesería</h1>
              </div>

              <div className="flex flex-col-reverse lg:flex-row gap-4 items-center space-x-3">
                <button
                  onClick={() => setShowSummary(!showSummary)}
                  className={`flex items-center px-4 py-2 rounded-lg font-avenir transition-colors ${hasSelectedProducts
                    ? 'bg-amber-100 text-chedar hover:bg-amber-100'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  disabled={!hasSelectedProducts}
                >
                  <ShoppingBag className="h-5 w-5 mr-2 text-chedar/80" />
                  <span>Ver selección</span>
                  <span className='ml-2 font-semibold bg-white/70 px-3 py-1 rounded-full'>{totalSelectedItems}</span>
                </button>

                <button
                  onClick={clearSelection}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span>Limpiar</span>
                </button>
              </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className={`${showSummary && !isMobile ? 'lg:w-1/2' : 'w-full'}`}>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Lista de Compras</h2>

                <div className="space-y-4 md:space-y-6">
                  {categories.map((category, categoryIndex) => (
                    <ProductCategory
                      key={category.name}
                      category={category}
                      categoryIndex={categoryIndex}
                      onCheckboxChange={handleCheckboxChange}
                      onQuantityChange={handleQuantityChange}
                      onUnitChange={handleUnitChange}
                    />
                  ))}
                </div>
              </div>

              {/* Panel lateral para desktop */}
              {showSummary && !isMobile && (
                <div className="lg:w-1/2">
                  <SelectedSummary
                    selectedProducts={selectedProducts}
                    qrValue={qrValue}
                    onClose={() => setShowSummary(false)}
                    onViewPDF={() => {
                      setShoppingListData(selectedProducts);
                      setShowPdfViewer(true);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Panel lateral para mobile (aparece como overlay) */}
      {(showSummary && isMobile) && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
          <div className="w-full sm:w-4/5 h-full bg-white shadow-xl transform transition-transform">
            <SelectedSummary
              selectedProducts={selectedProducts}
              qrValue={qrValue}
              onClose={() => setShowSummary(false)}
              onViewPDF={() => {
                setShoppingListData(selectedProducts);
                setShowPdfViewer(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Visor de PDF */}
      {showPdfViewer && shoppingListData && (
        <PDFViewer 
          shoppingListData={shoppingListData} 
          onClose={() => setShowPdfViewer(false)}
        />
      )}
    </div>
  );
}

export default App;