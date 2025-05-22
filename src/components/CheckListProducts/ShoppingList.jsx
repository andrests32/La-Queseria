import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import QRCode from 'react-qr-code';
import { UserCheck as ShoppingBag, Download, RefreshCw, ChevronDown, ChevronUp, ShoppingCart, X } from 'lucide-react';
import LogoQueseria from '../LogoQueseria/LogoQueseria';
import HomeButton from '../ProductsFilter/HomeButton';

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
  // ... (otros grupos de productos se mantienen igual)
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
        if (!shoppingListData || shoppingListData.length === 0) {
          throw new Error("No hay productos seleccionados para generar el PDF");
        }
        
        const blob = await pdf(<MyDocument selectedProducts={shoppingListData} />).toBlob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setError(null);
      } catch (err) {
        console.error('Error al generar PDF:', err);
        setError("Error al generar el documento. Por favor intenta nuevamente.");
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
            <h3 className="text-lg font-medium text-gray-900 mb-4">Error</h3>
            <p className="text-red-500 mb-6">{error}</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium"
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
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium"
        >
          Descargar PDF
        </a>
      </div>
    </div>
  );
};

// Función para comprimir los datos de la lista
const compressListData = (selectedProducts) => {
  if (!selectedProducts || !Array.isArray(selectedProducts)) return null;
  
  // Mapeo de nombres completos a abreviaturas
  const nameToShort = {
    // Lácteos
    'Leche': 'lec',
    'Queso': 'que',
    'Yogurt': 'yog',
    'Mantequilla': 'man',
    'Crema': 'cre',
    // Vegetales
    'Zanahoria': 'zan',
    'Tomate': 'tom',
    'Cebolla': 'ceb',
    'Pepino': 'pep',
    'Pimiento': 'pim',
    // ... agregar más según necesidad
  };

  // Mapeo de unidades a abreviaturas
  const unitToShort = {
    'kg': 'k',
    'litro': 'l',
    'g': 'g',
    'docena': 'd',
    'unidad': 'u'
  };

  return selectedProducts.map(category => ({
    n: category.name.substring(0, 3).toLowerCase(), // Nombre abreviado de categoría
    i: category.items.map(item => ({
      n: nameToShort[item.name] || item.name.substring(0, 3).toLowerCase(),
      q: item.quantity,
      u: unitToShort[item.unit] || item.unit.substring(0, 1).toLowerCase()
    }))
  }));
};

// Función para descomprimir los datos
const decompressListData = (compressedData) => {
  if (!compressedData || !Array.isArray(compressedData)) return null;
  
  // Mapeo de abreviaturas a nombres completos
  const shortToName = {
    // Lácteos
    'lec': 'Leche',
    'que': 'Queso',
    'yog': 'Yogurt',
    'man': 'Mantequilla',
    'cre': 'Crema',
    // Vegetales
    'zan': 'Zanahoria',
    'tom': 'Tomate',
    'ceb': 'Cebolla',
    'pep': 'Pepino',
    'pim': 'Pimiento',
    // ... agregar más según necesidad
  };

  // Mapeo de abreviaturas a unidades completas
  const shortToUnit = {
    'k': 'kg',
    'l': 'litro',
    'g': 'g',
    'd': 'docena',
    'u': 'unidad'
  };

  // Mapeo de categorías abreviadas a completas
  const shortToCategory = {
    'lác': 'Lácteos',
    'veg': 'Vegetales',
    'fru': 'Frutas',
    'aví': 'Avícolas',
    'plá': 'Plátanos y Tubérculos',
    'har': 'Harinas y Cereales',
    'car': 'Carnes',
    'pes': 'Pescados y Mariscos'
  };

  return compressedData.map(category => ({
    name: shortToCategory[category.n] || category.n,
    items: category.i.map(item => ({
      name: shortToName[item.n] || item.n,
      quantity: item.q || 1,
      unit: shortToUnit[item.u] || item.u,
      id: `${category.n}-${item.n}-${Math.random().toString(36).substr(2, 9)}`,
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
      className={`flex flex-col p-3 rounded-lg border transition-all ${
        item.checked
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
    <div
      className={`border rounded-lg overflow-hidden transition-all ${
        hasCheckedItems ? 'border-amber-300 bg-amber-50' : 'border-gray-200'
      }`}
    >
      <div
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
          hasCheckedItems ? 'bg-amber-100' : 'hover:bg-gray-50'
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
const SelectedSummary = ({ selectedProducts = [], qrValue = '', onClose = () => {}, onViewPDF = () => {} }) => {
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
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  {qrValue ? (
                    <QRCode
                      value={qrValue}
                      size={150}
                      level="H"
                      className="h-auto max-w-full"
                    />
                  ) : (
                    <div className="w-40 h-40 flex items-center justify-center bg-gray-100 text-gray-400">
                      No hay datos
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center max-w-xs">
                  Escanea este código con tu cámara para ver la lista completa
                </p>
                
                <button
                  onClick={onViewPDF}
                  className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium"
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
            className="flex items-center justify-center w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-md"
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
  const [showSummary, setShowSummary] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [shoppingListData, setShoppingListData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [notification, setNotification] = useState(null);

  // Mostrar notificación
  const showNotification = (message, type = 'info', duration = 5000) => {
    setNotification({ message, type });
    if (duration) setTimeout(() => setNotification(null), duration);
  };

  // Procesar datos del QR al cargar
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const processQRData = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const qrData = params.get('qr');
        
        if (qrData) {
          // Decodificar en dos pasos para mayor compatibilidad
          const decodedData = decodeURIComponent(qrData);
          const jsonData = JSON.parse(atob(decodedData));
          
          const decompressed = decompressListData(jsonData);
          
          if (decompressed) {
            setShoppingListData(decompressed);
            setShowPdfViewer(true);
            showNotification("Lista cargada desde QR", "success");
          } else {
            showNotification("El QR no contenía datos válidos", "error");
          }
        }
      } catch (error) {
        console.error("Error procesando QR:", error);
        showNotification("Error al leer el código QR", "error");
      }
    };

    // Cargar datos guardados
    const loadSavedData = () => {
      try {
        const saved = localStorage.getItem('shoppingList');
        if (saved) setCategories(JSON.parse(saved));
      } catch (e) {
        console.error("Error cargando datos guardados:", e);
      }
    };

    processQRData();
    loadSavedData();

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Generar el código QR cuando cambian los productos
  useEffect(() => {
    const generateQR = () => {
      try {
        const selected = categories
          .map(cat => ({
            name: cat.name,
            items: cat.items.filter(item => item.checked && item.quantity > 0)
          }))
          .filter(cat => cat.items.length > 0);

        if (selected.length > 0) {
          const compressed = compressListData(selected);
          if (compressed) {
            const jsonStr = JSON.stringify(compressed);
            const base64 = btoa(jsonStr);
            const encoded = encodeURIComponent(base64);
            const url = `${window.location.origin}${window.location.pathname}?qr=${encoded}`;
            setQrValue(url);
            return;
          }
        }
        setQrValue('');
      } catch (error) {
        console.error("Error generando QR:", error);
        setQrValue('');
      }
    };

    // Guardar en localStorage
    try {
      localStorage.setItem('shoppingList', JSON.stringify(categories));
      generateQR();
    } catch (e) {
      console.error("Error guardando datos:", e);
    }
  }, [categories]);

  // Manejadores de eventos
  const handleCheckboxChange = (categoryIndex, itemId) => {
    setCategories(prev => {
      const newCategories = [...prev];
      const itemIndex = newCategories[categoryIndex].items.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        newCategories[categoryIndex].items[itemIndex].checked = 
          !newCategories[categoryIndex].items[itemIndex].checked;
        
        if (newCategories[categoryIndex].items[itemIndex].checked && 
            !newCategories[categoryIndex].items[itemIndex].quantity) {
          newCategories[categoryIndex].items[itemIndex].quantity = 1;
        }
      }
      
      return newCategories;
    });
  };

  const handleQuantityChange = (categoryIndex, itemId, value) => {
    setCategories(prev => {
      const newCategories = [...prev];
      const itemIndex = newCategories[categoryIndex].items.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        const parsedValue = parseInt(value, 10);
        newCategories[categoryIndex].items[itemIndex].quantity =
          isNaN(parsedValue) ? 0 : Math.max(0, parsedValue);
      }
      
      return newCategories;
    });
  };

  const handleUnitChange = (categoryIndex, itemId, unit) => {
    setCategories(prev => {
      const newCategories = [...prev];
      const itemIndex = newCategories[categoryIndex].items.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        newCategories[categoryIndex].items[itemIndex].unit = unit;
      }
      
      return newCategories;
    });
  };

  const clearSelection = () => {
    setCategories(initialCategories);
    setShowSummary(false);
    showNotification("Lista limpiada correctamente", "success");
  };

  const selectedProducts = categories
    .map(category => ({
      name: category.name,
      items: category.items.filter(item => item.checked && item.quantity > 0)
    }))
    .filter(category => category.items.length > 0);

  const hasSelectedProducts = selectedProducts.length > 0;
  const totalSelectedItems = selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0);

  if (showPdfViewer && shoppingListData) {
    return <PDFViewer shoppingListData={shoppingListData} onClose={() => setShowPdfViewer(false)} />;
  }

  return (
    <div className="min-h-screen relative font-avenir">
      {/* Notificación */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-xs transition-all 
          ${notification.type === 'error' ? 'bg-red-100 text-red-800 border-l-4 border-red-500' : 
            notification.type === 'success' ? 'bg-green-100 text-green-800 border-l-4 border-green-500' :
            'bg-blue-100 text-blue-800 border-l-4 border-blue-500'}`}>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="font-medium">{notification.message}</p>
            </div>
            <button 
              onClick={() => setNotification(null)}
              className="ml-4"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Fondo decorativo */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 grid grid-cols-10 gap-4">
        {[...Array(80)].map((_, index) => (
          <img
            key={index}
            src={`/ilustracion${(index % 3) + 1}.png`}
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
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    hasSelectedProducts
                      ? 'bg-amber-100 text-chedar hover:bg-amber-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!hasSelectedProducts}
                >
                  <ShoppingBag className="h-5 w-5 mr-2 text-chedar/80" />
                  <span>Ver selección</span>
                  <span className='ml-2 font-semibold bg-white/70 px-3 py-1 rounded-full'>
                    {totalSelectedItems}
                  </span>
                </button>

                <button
                  onClick={clearSelection}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span>Limpiar</span>
                </button>
              </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className={`${showSummary && !isMobile ? 'lg:w-1/2' : 'w-full'}`}>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
                  Lista de Compras
                </h2>

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

      {/* Panel lateral para mobile */}
      {showSummary && isMobile && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
          <div className="w-full sm:w-4/5 h-full bg-white shadow-xl">
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
    </div>
  );
}

export default App;