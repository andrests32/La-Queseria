import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { QRCode } from 'react-qr-code'; // Cambiamos la importación aquí
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import LogoQueseria from '../LogoQueseria/LogoQueseria';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  product: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,
  },
  qrContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
});

// Componente para el PDF
const MyDocument = ({ selectedProducts, qrValue }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Lista de Compras</Text>
        <Text style={styles.subtitle}>Productos seleccionados:</Text>
        {selectedProducts.map((category) => (
          <View key={category.name}>
            <Text style={styles.subtitle}>{category.name}:</Text>
            {category.items
              .filter((item) => item.checked)
              .map((item) => (
                <Text key={item.id} style={styles.product}>
                  - {item.name}: {item.detail}
                </Text>
              ))}
          </View>
        ))}
        <View style={styles.qrContainer}>
          <Text>Comprobante de compra:</Text>
          <QRCode 
            value={qrValue} 
            size={128} 
            level="H" 
            style={{ height: "auto", maxWidth: "100%", width: "100%" }} // Estilo adaptado para react-qr-code
          />
        </View>
      </View>
    </Page>
  </Document>
);

const ShoppingList = () => {
  // Categorías y productos iniciales
  const initialCategories = [
    {
      name: 'Lácteos',
      items: [
        { id: 'l1', name: 'Leche', detail: 'Entera 1L', checked: false },
        { id: 'l2', name: 'Queso', detail: 'Mozzarella 200g', checked: false },
        { id: 'l3', name: 'Yogur', detail: 'Natural 500g', checked: false },
      ],
    },
    {
      name: 'Vegetales',
      items: [
        { id: 'v1', name: 'Zanahoria', detail: 'Fresca 1kg', checked: false },
        { id: 'v2', name: 'Tomate', detail: 'Maduro 500g', checked: false },
        { id: 'v3', name: 'Cebolla', detail: 'Blanca 1kg', checked: false },
      ],
    },
    {
      name: 'Avícolas',
      items: [
        { id: 'a1', name: 'Pollo', detail: 'Pechuga 1kg', checked: false },
        { id: 'a2', name: 'Huevos', detail: 'Blancos 30un', checked: false },
      ],
    },
    {
      name: 'Plátanos',
      items: [
        { id: 'p1', name: 'Plátano verde', detail: '5 unidades', checked: false },
        { id: 'p2', name: 'Plátano maduro', detail: '3 unidades', checked: false },
      ],
    },
    {
      name: 'Harinas',
      items: [
        { id: 'h1', name: 'Harina de trigo', detail: '1kg', checked: false },
        { id: 'h2', name: 'Harina de maíz', detail: '500g', checked: false },
      ],
    },
  ];

  // Estado para las categorías y productos
  const [categories, setCategories] = useState(initialCategories);
  const [qrValue, setQrValue] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    setIsClient(true);
    const savedData = localStorage.getItem('shoppingList');
    if (savedData) {
      setCategories(JSON.parse(savedData));
    }
  }, []);

  // Guardar en localStorage cuando cambian los datos
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(categories));
    
    // Generar valor para QR
    const selectedItems = categories.flatMap(category => 
      category.items.filter(item => item.checked)
      .map(item => `${item.name}: ${item.detail}`)
    );
    setQrValue(JSON.stringify(selectedItems));
  }, [categories]);

  // Manejar cambio en los checkboxes
  const handleCheckboxChange = (categoryIndex, itemId) => {
    const updatedCategories = [...categories];
    const itemIndex = updatedCategories[categoryIndex].items.findIndex(
      (item) => item.id === itemId
    );
    updatedCategories[categoryIndex].items[itemIndex].checked =
      !updatedCategories[categoryIndex].items[itemIndex].checked;
    setCategories(updatedCategories);
  };

  // Limpiar selección
  const clearSelection = () => {
    setCategories(initialCategories);
  };

  // Obtener productos seleccionados
  const selectedProducts = categories.map(category => ({
    ...category,
    items: category.items.filter(item => item.checked)
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-chedarlow/20 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <div className='flex items-center font-play text-chedar text-4xl'>
          <LogoQueseria />
          <span>uesería</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-play text-rock mb-6 text-center">
            Lista de Compras
          </h1>
          
          <div className="mb-8">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="mb-6">
                <h2 className="text-xl font-semibold font-avenir text-rock mb-3 border-b pb-2">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center p-3 rounded-lg border transition-all ${item.checked ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'}`}
                    >
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(categoryIndex, item.id)}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={item.id} className="ml-3 flex-1">
                        <span className="block font-medium text-gray-800">{item.name}</span>
                        <span className="block text-sm text-gray-500">{item.detail}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t pt-6">
            <button
              onClick={clearSelection}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
            >
              Limpiar selección
            </button>
            
            {isClient && (
              <PDFDownloadLink
                document={<MyDocument selectedProducts={selectedProducts} qrValue={qrValue} />}
                fileName="lista_compras.pdf"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                {({ loading }) => (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {loading ? 'Preparando PDF...' : 'Descargar lista en PDF'}
                  </>
                )}
              </PDFDownloadLink>
            )}
          </div>
          
          {selectedProducts.length > 0 && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Resumen de tu selección:</h3>
              <ul className="space-y-2">
                {selectedProducts.map(category => (
                  <li key={category.name}>
                    <span className="font-medium">{category.name}:</span>
                    <ul className="ml-5 list-disc">
                      {category.items.map(item => (
                        <li key={item.id}>
                          {item.name} - {item.detail}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center">
                <QRCode 
                  value={qrValue} 
                  size={128} 
                  level="H"
                  style={{ height: "auto", maxWidth: "100%", width: "128px" }} // Estilo adaptado
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;