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
      vitamins: "El queso fresco es una excelente fuente de proteínas, calcio, fósforo, vitaminas A, D y B12, además de minerales como el zinc. También contiene vitaminas del grupo B, como B1, B2 y B6.",
      category: "Quesos"
    },
    {
      id: "spices-1",
      name: "Ajo Macho",
      price: 19.99,
      image: "public/products/ajos/ajos.webp",
      shortDescription: "El ajo un alimento versátil y popular.",
      benefits: "Ofrece una amplia gama de beneficios para la salud, incluyendo propiedades antioxidantes, antiinflamatorias, antibacterianas y antivirales.",
      vitamins: "Es rico en vitaminas C y B6, así como en minerales como el manganeso, selenio, yodo, fósforo y potasio. También contiene otros nutrientes como aminoácidos, enzimas, lípidos y antioxidantes.",
      category: "Especias"
    },
    {
      id: "spices-2",
      name: "Anìs Estrellado",
      price: 15.99,
      image: "/products/anisestrellado/anísestrellado.webp",
      shortDescription: "Especia de aroma y sabor unico.",
      benefits: "El anís estrellado, además de su sabor, ofrece varios beneficios para la salud, especialmente relacionados con el sistema digestivo y respiratorio.",
      vitamins: "Aportan vitaminas A, C y del grupo B. Contiene calcio, fósforo, zinc, magnesio y potasio, minerales que mejoran el rendimiento muscular y refuerzan los huesos.",
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
      id: "carb-1",
      name: "Azúcar Blanca",
      price: 9.99,
      image: "/products/azucar/azúcar.webp",
      shortDescription: "Azúcar de alta calidad.",
      description: "Muslos de pollo seleccionados de aves criadas con los más altos estándares de bienestar animal.",
      benefits: "El azúcar tiene beneficios en el cuerpo, como fuente rápida de energía. Proporciona combustible para el cerebro y los músculos. También ayuda a reponer depósitos de glucógeno en los músculos después del ejercicio prolongado.",
      vitamins: "El azúcar contiene vitaminas B1, B2 y A, así como sacarosa, glucosa (dextrosa), fructosa (levulosa) y antioxidante.",
      badge: "Premium",
      category: "Carbohidratos"
    },
    
    // Harinas (Flours)
    {
      id: "carb-2",
      name: "Avena",
      price: 5.99,
      image: "/products/avena/avena.webp",
      shortDescription: "Harina integral de grano completo.",
      benefits: "Alto contenido en fibra que mejora el tránsito intestinal y ayuda a controlar los niveles de colesterol.",
      vitamins: "Rica en vitaminas del grupo B, especialmente B1, B3 y B6. Aporta minerales como hierro, zinc y magnesio.",
      badge: "Premium",
      category: "Carbohidratos"
    },
    {
      id: "carb-3",
      name: "Café Grapé",
      price: 14.99,
      image: "/products/cafe/café.webp",
      shortDescription: "Café molido 100% natural.",
      benefits: "El café ofrece varios beneficios para la salud, incluyendo mayor energía, mejor concentración, protección contra ciertas enfermedades y beneficios para la salud del hígado. También contiene antioxidantes y puede ayudar a controlar el azúcar en sangre. ",
      vitamins: "Vitamina B2  Vitamina B3  Vitamina B5  Minerales:Calcio: Importante para la salud ósea y dental. Magnesio: Regula los niveles de azúcar en la sangre, el funcionamiento del sistema nervioso y muscular. Fósforo: Ayuda a la salud ósea y dental, y a la energía celular. Potasio: Ayuda a regular la presión arterial y los fluidos corporales. Antioxidantes: Polifenoles: Ayudan a proteger las células contra el daño causado por los radicales libres. ",
      badge: "Premium",
      category: "Carbohidratos"
    },
    
    // Plátanos (Bananas/Plantains)
    {
      id: "spices-3",
      name: "Canela",
      price: 3.99,
      image: "/products/canela/canela.webp",
      shortDescription: "Especia de aroma y sabor que encanta a todos.",
      benefits: "La canela ofrece diversos beneficios para la salud, como mejorar la digestión, regular el azúcar en sangre, reducir la inflamación y proteger contra enfermedades cardíacas",
      vitamins: "La canela es una especia rica en vitaminas y nutrientes, incluyendo vitaminas A y C, así como minerales como calcio, hierro y magnesio. También contiene antioxidantes, fibra y aceites esenciales.",
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
      category: "Embutidos"
    },
    {
      id: "spices-4",
      name: "Clavo de olor",
      price: 8.99,
      image: "/products/clavodeolor/clavodeolor.webp",
      shortDescription: "Clavo de olor unico para bebidas con arto sabor.",
      benefits: "El clavo de olor ofrece varios beneficios para la cocina, como la creación de sabores complejos, la mejora de la digestión y la posibilidad de usarlo en preparaciones tanto dulces como saladas.",
      vitamins: "El clavo de olor es una rica fuente de vitaminas y nutrientes, incluyendo vitaminas A, C, D, E, K, minerales como el calcio, manganeso, magnesio y potasio, y ácidos grasos omega-3.",
      category: "Especias"
    },
    {
      id: "spices-5",
      name: "Comino en grano",
      price: 8.99,
      image: "/products/cominoengrano/cominoengrano.webp",
      shortDescription: "Comino en grano, ideal para platos tipicos.",
      benefits: "El comino en grano, ofrece diversos beneficios para la salud, incluyendo la mejora de la digestión, el apoyo al sistema inmunológico y la reducción de la inflamación.",
      vitamins: "El comino es una excelente fuente de vitaminas y nutrientes, incluyendo vitaminas A, C, E, K y B6, así como minerales como potasio, fósforo, magnesio, calcio y hierro.",
      category: "Especias"
    },
    {
      id: "carb-4",
      name: "Crema de maní",
      price: 8.99,
      image: "/products/cremademani/cremademaní.webp",
      shortDescription: "Crema de maní 100% artesanal.",
      benefits: "La crema de maní, o mantequilla de maní, ofrece varios beneficios para la salud, incluyendo la regulación del colesterol, la mejora de la digestión y la prevención de enfermedades cardiovasculares.",
      vitamins: "Es rica en proteínas, fibra, grasas saludables y vitamina E, lo que contribuye a la salud general. Puede ayudar a controlar la presión arterial, fortalecer los huesos y músculos, y contribuir a una buena circulación de la sangre.",
      badge: "Orgánico",
      category: "Carbohidratos"
    },
    {
      id: "flour-1",
      name: "Harina blanca",
      price: 8.99,
      image: "/products/harina/harina.webp",
      shortDescription: "Harian fina para creación de postres deliciosos.",
      benefits: "La harina blanca, puede ser más fácil de digerir debido a que se ha eliminado el salvado y el germen, que contienen más fibra. Además, la harina blanca es versátil para repostería, ofreciendo una textura fina y ligereza en productos como panes blancos, pasteles, bizcochos y masa para pizza.",
      vitamins: "La harina blanca, a pesar de ser un alimento procesado, aún contiene vitaminas y nutrientes importantes. Principalmente, aporta vitaminas del grupo B, como la tiamina (B1), riboflavina (B2), niacina (B3) y vitamina B6. También contiene hierro, folato, magnesio y otros minerales.",
      badge: "Orgánico",
      category: "Harinas"
    },
    {
      id: "poultry-2",
      name: "Huevos frescos",
      price: 8.99,
      image: "/products/huevos/huevosfrescos.webp",
      shortDescription: "Huevos frescos usados en la elaboración de todo plato.",
      benefits: "Los huevos, ofrecen varios beneficios para la salud. También pueden ayudar a fortalecer el sistema inmunológico, mejorar la salud ocular y el metabolismo, y tener efectos antiinflamatorios. ",
      vitamins: "Aportan una mayor cantidad de proteínas, vitaminas, minerales y aminoácidos esenciales. Los huevos criollos suelen tener mayor contenido de vitamina A, vitamina E y ácidos grasos omega-3.",
      category: "Avícola"
    },
    {
      id: "poultry-3",
      name: "Huevos Crillos",
      price: 8.99,
      image: "/products/huevos/huevoscriollos.webp",
      shortDescription: "Huevos crillos fuente rica en proteínas.",
      benefits: "Los huevos criollos, ofrecen varios beneficios para la salud. También pueden ayudar a fortalecer el sistema inmunológico, mejorar la salud ocular y el metabolismo, y tener efectos antiinflamatorios.",
      vitamins: "Aportan una mayor cantidad de proteínas, vitaminas, minerales y aminoácidos esenciales. Los huevos criollos suelen tener mayor contenido de vitamina A, vitamina E y ácidos grasos omega-3.",
      badge: "Orgánico",
      category: "Avícola"
    },
    {
      id: "carb-5",
      name: "Lenteja",
      price: 8.99,
      image: "/products/lentejas/lentejas.webp",
      shortDescription: "Lentejas productos ecuatoriano de alta calidad.",
      benefits: "Las lentejas ofrecen varios beneficios para la salud, incluyendo la reducción del riesgo de enfermedades cardiovasculares, mejoría de la digestión, control de peso y aporte de nutrientes esenciales.",
      vitamins: "Además, son una buena fuente de proteínas, hierro, ácido fólico y fibra, lo que las convierte en un alimento versátil y nutritivo. Destacan por su aporte (vitamina B9), magnesio, zinc, potasio y fósforo. También contienen vitaminas del grupo B, como la tiamina (B1), la niacina (B3) y la piridoxina (B6).",
      badge: "Orgánico",
      category: "Carbohidratos"
    },
    {
      id: "carb-6",
      name: "Mani en polvo",
      price: 8.99,
      image: "/products/manienpolvo/manienpolvo.webp",
      shortDescription: "Maní secado, triturado haste tener consistencia en polvo.",
      benefits: "El maní en polvo, ya sea en forma de harina de maní o mantequilla de maní en polvo, ofrece una serie de beneficios para la salud, incluyendo ser una fuente de proteínas, fibra y minerales.",
      vitamins: "El maní en polvo, especialmente la harina de maní, es rico en proteínas, fibra, vitaminas y minerales, incluyendo zinc, magnesio, fósforo y potasio.",
      badge: "Orgánico",
      category: "Carbohidratos"
    },
    {
      id: "carb-7",
      name: "Mani granulado",
      price: 8.99,
      image: "/products/manienpolvo/manigranulado.png",
      shortDescription: "Maní granulado, como botana fuente de energia natural.",
      benefits: "El maní, ya sea en forma de harina de maní o mantequilla de maní en pol
  ];
  
  // Get unique categories from products
  export const categories = ["Todos", ...new Set(products.map(product => product.category))];