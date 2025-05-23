// Sample product data across different categories
export const products = [
    // Quesos (Cheeses)
    {
      id: "cheese-1",
      name: "Queso Maduro",
      price: 24.99,
      image: "/products/quesos/queso.webp",
      shortDescription: "El queso fresco ofrece varios beneficios para la salud",
      description: "Este queso manchego de reserva especial ha sido añejado durante 12 meses para alcanzar un sabor intenso y refinado.",
      benefits: "El queso fresco es una excelente fuente de proteínas de alta calidad, esenciales para la construcción y reparación de tejidos, la producción de enzimas y hormonas, y muchas otras funciones corporales.",
      vitamins: "El queso fresco es una excelente fuente de proteínas, calcio, fósforo, vitaminas A, D y B12, además de minerales como el zinc. También contiene vitaminas del grupo B, como B1, B2 y B9 (ácido fólico).",
      badge: "Premium",
      category: "Quesos"
    },
    {
      id: "especias-1",
      name: "Ajo Macho",
      price: 19.99,
      image: "public/products/ajos/ajos.webp",
      shortDescription: "El ajo un alimento versátil y popular.",
      description: "Elaborado con leche pasteurizada de vacas alimentadas con pasto. Su textura cremosa y sus vetas azules lo hacen perfecto para ensaladas gourmet.",
      benefits: "Ofrece una amplia gama de beneficios para la salud, incluyendo propiedades antioxidantes, antiinflamatorias, antibacterianas y antivirales.",
      vitamins: "Es rico en vitaminas C y B6, así como en minerales como el manganeso, selenio, yodo, fósforo y potasio. También contiene otros nutrientes como aminoácidos, enzimas, lípidos y sales minerales. ",
      badge: "Orgánico",
      category: "Especias"
    },
    {
      id: "especias-2",
      name: "Anìs Estrellado",
      price: 15.99,
      image: "/products/anisestrellado/anísestrellado.webp",
      shortDescription: "Especia de aroma y sabor unico.",
      description: "Este queso de cabra fresco tiene una textura suave y cremosa, con un sabor ligeramente ácido y notas herbáceas.",
      benefits: "El anís estrellado, además de su sabor, ofrece varios beneficios para la salud, especialmente relacionados con el sistema digestivo y respiratorio.",
      vitamins: "Aportan vitaminas A, C y del grupo B. Contiene calcio, fósforo, zinc, magnesio y potasio, minerales que mejoran el rendimiento muscular y refuerzan los huesos.",
      badge: "Orgánico",
      category: "Especias"
    },
    
    // Avícola (Poultry)
    {
      id: "poultry-1",
      name: "Huevos Codornis",
      price: 12.99,
      image: "/products/huevoscodorniz/huevosdecodorniz.webp",
      shortDescription: "Huevos de codorniz 100% naturales.",
      description: "Pechuga de pollo orgánica de aves criadas en libertad, alimentadas con granos orgánicos sin antibióticos ni hormonas.",
      benefits: "Son una fuente rica en hierro, vitamina B12, vitamina A, vitamina D y ácido fólico, lo que ayuda a prevenir la anemia, fortalece el sistema inmunológico y contribuye a la salud ósea. ",
      vitamins: "El alto contenido de hierro y vitamina B12 ayuda a combatir y prevenir la anemia, condiciones que pueden causar fatiga y debilidad. También contienen fósforo, calcio, ácidos grasos omega-3 y la lecitina contribuyen a la salud del corazón y ayudan a reducir el colesterol malo.",
      badge: "Orgánico",
      category: "Avícola"
    },
    {
      id: "Carbohidrate-0",
      name: "Azúcar Blanca",
      price: 9.99,
      image: "/products/azucar/azúcar.webp",
      shortDescription: "Azúcar de alta calidad.",
      description: "Muslos de pollo seleccionados de aves criadas con los más altos estándares de bienestar animal.",
      benefits: "El azúcar tiene beneficios en el cuerpo, como fuente rápida de energía. Proporciona combustible para el cerebro y los músculos. También ayuda a reponer depósitos de glucógeno.",
      vitamins: "El azúcar contiene vitaminas B1, B2 y A, así como sacarosa, glucosa (dextrosa), fructosa (levulosa) y antioxidante.",
      badge: "Premium",
      category: "Carbohidrato"
    },
    
    // Harinas (Flours)
    {
      id: "Carbohidrate-1",
      name: "Avena",
      price: 5.99,
      image: "/products/avena/avena.webp",
      shortDescription: "Harina integral de grano completo.",
      description: "Harina molida a partir del grano de trigo completo, conservando el salvado y el germen, lo que mantiene todas sus propiedades nutricionales.",
      benefits: "Alto contenido en fibra que mejora el tránsito intestinal y ayuda a controlar los niveles de colesterol.",
      vitamins: "Rica en vitaminas del grupo B, especialmente B1, B3 y B6. Aporta minerales como hierro, zinc y magnesio.",
      badge: "Premium",
      category: "Carbohidrato"
    },
    {
      id: "Carbohidrate-2",
      name: "Café Grapé",
      price: 14.99,
      image: "/products/cafe/café.webp",
      shortDescription: "Café molido 100% natural.",
      benefits: "El café ofrece varios beneficios para la salud, incluyendo mayor energía, mejor concentración, protección contra ciertas enfermedades y beneficios para la salud del hígado. También contiene antioxidantes y puede ayudar a controlar el azúcar en sangre. ",
      vitamins: "Vitamina B2  Vitamina B3  Vitamina B5  Minerales:Calcio: Importante para la salud ósea y dental. Magnesio: Regula los niveles de azúcar en la sangre, el funcionamiento del sistema nervioso y muscular. Fósforo: Ayuda a la salud ósea y dental, y a la energía celular. Potasio: Ayuda a regular la presión arterial y los fluidos corporales. Antioxidantes: Polifenoles: Ayudan a proteger las células contra el daño causado por los radicales libres. ",
      badge: "Premium",
      category: "Carbohidrato"
    },
    
    // Plátanos (Bananas/Plantains)
    {
      id: "especias-3",
      name: "Canela",
      price: 3.99,
      image: "/products/canela/canela.webp",
      shortDescription: "Especia de aroma y sabor que encanta a todos.",
      benefits: "La canela ofrece diversos beneficios para la salud, como mejorar la digestión, regular el azúcar en sangre, reducir la inflamación y proteger contra enfermedades cardíacas",
      vitamins: "La canela es una especia rica en vitaminas y nutrientes, incluyendo vitaminas A y C, así como minerales como calcio, hierro y magnesio. También contiene antioxidantes, fibra y compuestos fitoquímicos.",
      badge: "Orgánico",
      category: "Especias"
    },
    {
      id: "banana-2",
      name: "Chifles",
      price: 4.99,
      image: "/products/chifles/chifle.webp",
      shortDescription: "Chifles de platano verde naturales.",
      benefits: "La botana o chifle, pueden tener algunos beneficios dependiendo de cómo se preparan y se consumen. Además proporcionan una fuente rápida de energía gracias a sus carbohidratos.",
      vitamins: "También contiene algunas proteínas y algunos minerales como potasio y vitamina C.",
      badge: "Orgánico",
      category: "Plátanos"
    },
    
    // Lácteos (Dairy)
    {
      id: "dairy-1",
      name: "Chorizo Colombiano",
      price: 3.49,
      image: "/products/chorizocolombiano/chorizocolombiano.webp",
      shortDescription: "Chorizo colombiano apetecido de sabor autentico",
      benefits: "El chorizo cervecero, como otros embutidos, puede tener beneficios nutricionales al aportar proteínas, vitaminas del grupo B y minerales, especialmente hierro y zinc.",
      vitamins: "El chorizo cervecero, es rico en proteínas, vitaminas del grupo B (tiamina, riboflavina, niacina, B6 y B12) y minerales como hierro, fósforo y zinc. Son un componente esencial para la construcción y reparación de tejidos.",
      badge: "Bestseller",
      category: "Embutido"
    },
    {
      id: "especias-4",
      name: "Clavo de olor",
      price: 8.99,
      image: "/products/clavodeolor/clavodeolor.webp",
      shortDescription: "Clavo de olor unico para bebidas con arto sabor.",
      benefits: "El clavo de olor ofrece varios beneficios para la cocina, como la creación de sabores complejos, la mejora de la digestión y la posibilidad de usarlo en preparaciones tanto dulces como saladas.",
      vitamins: "El clavo de olor es una rica fuente de vitaminas y nutrientes, incluyendo vitaminas A, C, D, E, K, minerales como el calcio, manganeso, magnesio y potasio, y ácidos grasos omega-3.",
      badge: "Orgánico",
      category: "Especias"
    },
    {
      id: "especias-4",
      name: "Comino en grano",
      price: 8.99,
      image: "/products/cominoengrano/cominoengrano.webp",
      shortDescription: "Comino en grano, ideal para platos tipicos.",
      benefits: "El comino en grano, ofrece diversos beneficios para la salud, incluyendo la mejora de la digestión, el apoyo al sistema inmunológico y la reducción de la inflamación.",
      vitamins: "El comino es una excelente fuente de vitaminas y nutrientes, incluyendo vitaminas A, C, E, K y B6, así como minerales como potasio, fósforo, magnesio, calcio y hierro.",
      badge: "Orgánico",
      category: "Especias"
    }
  ];
  
  // Get unique categories from products
  export const categories = ["Todos", ...new Set(products.map(product => product.category))];