import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import QRCode from 'react-qr-code';
import { UserCheck as Cheese, ShoppingBag, Download, RefreshCw, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';

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
const MyDocument = ({ selectedProducts, qrValue }) => {
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
              <View key={item.id} style={pdfStyles.productRow}>
                <Text style={pdfStyles.productName}>{item.name}</Text>
                <Text style={pdfStyles.productDetail}>
                  {item.quantity} {item.unit}
                </Text>
              </View>
            ))}
          </View>
        ))}
        
        <View style={pdfStyles.qrSection}>
          <Text style={pdfStyles.qrLabel}>Comprobante de compra:</Text>
          <Text style={pdfStyles.qrNote}>
            Este QR contiene toda la información de tu lista de compras
          </Text>
        </View>
        
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

// Componente ProductItem
const ProductItem = ({ item, onChange, onQuantityChange, onUnitChange }) => {
  const units = ['kg', 'lb', 'unidad', 'docena', 'g'];
  
  return (
    <div 
      className={`flex flex-col p-3 rounded-lg border transition-all ${
        item.checked 
          ? 'bg-white border-amber-300 shadow-sm' 
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
  const [isExpanded, setIsExpanded] = useState(true);
  const hasCheckedItems = category.items.some(item => item.checked);
  
  return (
    <div className={`border rounded-lg overflow-hidden transition-all ${
      hasCheckedItems ? 'border-amber-300 bg-amber-50' : 'border-gray-200'
    }`}>
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
const SelectedSummary = ({ selectedProducts, qrValue }) => {
  return (
    <div className="bg-white border border-amber-200 rounded-lg p-5 shadow-sm">
      <div className="flex items-center mb-4">
        <ShoppingCart className="h-6 w-6 text-amber-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">Resumen de tu selección</h3>
      </div>
      
      {selectedProducts.length > 0 ? (
        <>
          <div className="mb-6 space-y-4">
            {selectedProducts.map(category => (
              <div key={category.name} className="animate-fadeIn">
                <h4 className="font-medium text-amber-700 border-b border-amber-200 pb-1 mb-2">
                  {category.name}
                </h4>
                <ul className="space-y-2 pl-2">
                  {category.items.map(item => (
                    <li key={item.id} className="flex justify-between items-center text-gray-700">
                      <span>{item.name}</span>
                      <span className="font-medium">
                        {item.quantity} {item.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center mt-6 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-3">Escanea este código para ver la lista completa:</p>
            <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
              <QRCode 
                value={qrValue}
                size={160}
                level="H"
                style={{ height: "auto", maxWidth: "100%", width: "160px" }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Este código contiene toda la información de tu lista de compras
            </p>
          </div>
        </>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <p>No has seleccionado ningún producto todavía</p>
        </div>
      )}
    </div>
  );
};

// Componente principal App
function App() {
  const [categories, setCategories] = useState(initialCategories);
  const [qrValue, setQrValue] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedData = localStorage.getItem('shoppingList');
    if (savedData) {
      setCategories(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(categories));
    updateQRValue();
  }, [categories]);

  const updateQRValue = () => {
    const selectedItems = categories.flatMap(category =>
      category.items.filter(item => item.checked && item.quantity > 0)
        .map(item => `${item.name}: ${item.quantity} ${item.unit}`)
    );
    
    setQrValue(JSON.stringify({
      type: "shopping_list",
      items: selectedItems,
      timestamp: new Date().toISOString()
    }));
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
  };

  const selectedProducts = categories
    .map(category => ({
      name: category.name,
      items: category.items.filter(item => item.checked && item.quantity > 0),
    }))
    .filter(category => category.items.length > 0);

  const hasSelectedProducts = selectedProducts.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all">
          <div className="p-6 md:p-8">
            <header className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex items-center text-amber-500">
                  <Cheese className="h-8 w-8 mr-2" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-amber-600 ml-2">Quesería</h1>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowSummary(!showSummary)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    hasSelectedProducts 
                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!hasSelectedProducts}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  <span>{`Ver selección (${selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0)})`}</span>
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
              <div className={`${showSummary ? 'lg:w-1/2' : 'w-full'} transition-all duration-300`}>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Lista de Compras</h2>
                
                <div className="space-y-6">
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
              
              {showSummary && (
                <div className="lg:w-1/2 transition-all duration-300">
                  <SelectedSummary 
                    selectedProducts={selectedProducts} 
                    qrValue={qrValue}
                  />
                  
                  {isClient && hasSelectedProducts && (
                    <div className="mt-6 flex justify-center">
                      <PDFDownloadLink
                        document={<MyDocument selectedProducts={selectedProducts} qrValue={qrValue} />}
                        fileName="lista_compras.pdf"
                        className="flex items-center px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md"
                      >
                        {({ loading }) => (
                          <>
                            <Download className="h-5 w-5 mr-2" />
                            {loading ? 'Preparando PDF...' : 'Descargar lista en PDF'}
                          </>
                        )}
                      </PDFDownloadLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;