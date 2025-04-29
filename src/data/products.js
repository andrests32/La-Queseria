// Sample product data across different categories
export const products = [
    // Quesos (Cheeses)
    {
      id: "cheese-1",
      name: "Queso Manchego Reserva",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format",
      shortDescription: "Queso español añejado durante 12 meses.",
      description: "Este queso manchego de reserva especial ha sido añejado durante 12 meses para alcanzar un sabor intenso y refinado.",
      benefits: "Alto en proteínas y calcio. Ideal para una dieta equilibrada cuando se consume con moderación.",
      vitamins: "Contiene vitaminas A, D, B12 y minerales como calcio, fósforo y zinc esenciales para la salud ósea.",
      badge: "Premium",
      category: "Quesos"
    },
    {
      id: "cheese-2",
      name: "Queso Azul Artesanal",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=600&auto=format",
      shortDescription: "Queso azul con textura cremosa y vetas características.",
      description: "Elaborado con leche pasteurizada de vacas alimentadas con pasto. Su textura cremosa y sus vetas azules lo hacen perfecto para ensaladas gourmet.",
      benefits: "Su proceso de elaboración enriquece su contenido probiótico, beneficioso para la flora intestinal.",
      vitamins: "Rico en vitaminas del grupo B, especialmente B2 y B12. Aporta proteínas completas y calcio biodisponible.",
      badge: "Bestseller",
      category: "Quesos"
    },
    {
      id: "cheese-3",
      name: "Queso de Cabra Fresco",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?q=80&w=600&auto=format",
      shortDescription: "Queso suave y cremoso de leche de cabra.",
      description: "Este queso de cabra fresco tiene una textura suave y cremosa, con un sabor ligeramente ácido y notas herbáceas.",
      benefits: "Más digerible que los quesos de vaca, recomendado para personas con sensibilidad a la lactosa.",
      vitamins: "Contiene vitamina A, D, K, y minerales como calcio, potasio y magnesio. Más proteínas y menos calorías que quesos de vaca.",
      badge: "Orgánico",
      category: "Quesos"
    },
    
    // Avícola (Poultry)
    {
      id: "poultry-1",
      name: "Pechuga de Pollo Orgánica",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format",
      shortDescription: "Pechuga de pollo de granja libre de antibióticos.",
      description: "Pechuga de pollo orgánica de aves criadas en libertad, alimentadas con granos orgánicos sin antibióticos ni hormonas.",
      benefits: "Rica en proteínas magras, ideal para dietas bajas en grasas y para aumentar masa muscular.",
      vitamins: "Excelente fuente de vitaminas B3 y B6, fósforo y selenio. Bajo en grasas saturadas y alto valor proteico.",
      badge: "Orgánico",
      category: "Avícola"
    },
    {
      id: "poultry-2",
      name: "Muslos de Pollo Premium",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=600&auto=format",
      shortDescription: "Muslos de pollo jugosos y sabrosos.",
      description: "Muslos de pollo seleccionados de aves criadas con los más altos estándares de bienestar animal.",
      benefits: "Mayor contenido de hierro que la pechuga, ideal para prevenir anemias.",
      vitamins: "Contiene vitaminas B6, B12, zinc y hierro. Importante fuente de proteínas de alta calidad.",
      badge: "Premium",
      category: "Avícola"
    },
    
    // Harinas (Flours)
    {
      id: "flour-1",
      name: "Harina de Trigo Integral",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1588168254813-798d2a6c8fa4?q=80&w=600&auto=format",
      shortDescription: "Harina integral de grano completo.",
      description: "Harina molida a partir del grano de trigo completo, conservando el salvado y el germen, lo que mantiene todas sus propiedades nutricionales.",
      benefits: "Alto contenido en fibra que mejora el tránsito intestinal y ayuda a controlar los niveles de colesterol.",
      vitamins: "Rica en vitaminas del grupo B, especialmente B1, B3 y B6. Aporta minerales como hierro, zinc y magnesio.",
      badge: "Orgánico",
      category: "Harinas"
    },
    {
      id: "flour-2",
      name: "Harina de Almendras",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1621955964441-c173e01c130f?q=80&w=600&auto=format",
      shortDescription: "Harina libre de gluten elaborada 100% de almendras.",
      description: "Harina fina elaborada a partir de almendras blanqueadas y molidas, perfecta para repostería y cocina baja en carbohidratos.",
      benefits: "Ideal para dietas cetogénicas o bajas en carbohidratos. Sin gluten, perfecta para celíacos.",
      vitamins: "Alta en proteínas, fibra, vitamina E y magnesio. Contiene grasas saludables que promueven la salud cardiovascular.",
      badge: "Premium",
      category: "Harinas"
    },
    
    // Plátanos (Bananas/Plantains)
    {
      id: "banana-1",
      name: "Plátano Macho Verde",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600&auto=format",
      shortDescription: "Plátano verde ideal para cocinar.",
      description: "Plátano macho en su punto perfecto para preparar tostones, patacones o como guarnición en platos tradicionales.",
      benefits: "Bajo índice glucémico, ideal para diabéticos. Rico en almidón resistente que alimenta la microbiota intestinal.",
      vitamins: "Excelente fuente de potasio, vitamina B6 y fibra. Aporta también vitamina C y magnesio.",
      badge: "Oferta",
      category: "Plátanos"
    },
    {
      id: "banana-2",
      name: "Plátano Maduro Orgánico",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=600&auto=format",
      shortDescription: "Plátano maduro dulce de cultivo orgánico.",
      description: "Plátano maduro de cultivo orgánico, perfecto para postres, batidos o como snack energético natural.",
      benefits: "Rápida fuente de energía gracias a sus azúcares naturales. Ideal para deportistas.",
      vitamins: "Rico en potasio, magnesio y vitaminas B6 y C. Contiene triptófano que favorece la producción de serotonina.",
      badge: "Orgánico",
      category: "Plátanos"
    },
    
    // Lácteos (Dairy)
    {
      id: "dairy-1",
      name: "Yogur Griego Natural",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=600&auto=format",
      shortDescription: "Yogur griego cremoso sin azúcares añadidos.",
      description: "Yogur griego elaborado tradicionalmente, con un proceso de colado que le da su característica textura cremosa y alto contenido proteico.",
      benefits: "Excelente fuente de probióticos que mejoran la salud intestinal. Alto en proteínas y bajo en azúcares.",
      vitamins: "Rico en calcio, potasio, proteínas y vitaminas del grupo B. Contiene cultivos vivos beneficiosos para la flora intestinal.",
      badge: "Bestseller",
      category: "Lácteos"
    },
    {
      id: "dairy-2",
      name: "Mantequilla Artesanal",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1589985270958-a664e6cf0555?q=80&w=600&auto=format",
      shortDescription: "Mantequilla elaborada con leche de vacas de pastoreo.",
      description: "Mantequilla elaborada artesanalmente con crema de leche de vacas alimentadas con pasto, siguiendo métodos tradicionales de batido y maduración.",
      benefits: "Contiene grasas butirato con propiedades antiinflamatorias. Sin aditivos ni conservantes artificiales.",
      vitamins: "Rica en vitaminas liposolubles A, D, E y K2. Fuente de ácidos grasos omega-3 y CLA (ácido linoleico conjugado).",
      badge: "Premium",
      category: "Lácteos"
    }
  ];
  
  // Get unique categories from products
  export const categories = ["Todos", ...new Set(products.map(product => product.category))];