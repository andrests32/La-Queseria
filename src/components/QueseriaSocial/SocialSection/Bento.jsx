import { Instagram, Facebook, Youtube } from "lucide-react";

const data = [
  {
    image: "/cafegrape.webp",
    title: "Café Grapé",
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/p/DJUV7qIJkY8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    span: "col-span-1 row-span-2 sm:col-span-2 md:col-span-2",
  },
  {
    image: "/laqueseria.webp",
    title: "La Queseria",
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/p/DJNSuA4JYPK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/cafe.webp",
    title: "Café",
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/reel/DHbetivuWy8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/artesanal.jpg",
    title: "Proceso Artesanal",
    icon: <Youtube size={18} />,
    link: "https://youtube.com",
    span: "col-span-1 row-span-1 sm:col-span-2 md:col-span-2",
  },
  {
    image: "/salprieta.webp",
    title: "Sal Prieta",
    icon: <Facebook size={18} />,
    link: "https://www.facebook.com/share/1DCmDe4v3n/",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/quesocrema.webp",
    title: "Queso Crema",
    icon: <Facebook size={18} />,
    link: "https://www.facebook.com/share/p/1Af2Qw83qY/",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/quesochicloso.webp",
    title: "Queso Chicloso",
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/p/DJJywJCOiul/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    span: "col-span-1 row-span-2",
  },
  {
    image: "/tazaqueseria.webp",
    title: "Queseria",
    icon: <Facebook size={18} />,
    link: "https://www.facebook.com/share/p/1DZLNNZFoD/",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/huevos.webp",
    title: "Huevos",
    icon: <Facebook size={18} />,
    link: "https://www.facebook.com/share/p/1DbLJe9jhr/",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/queseriaproducts.webp",
    title: "La Queseria Ec",
    icon: <Facebook size={18} />,
    link: "https://www.facebook.com/QuesoosymaS",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/phonequeseria.webp",
    title: "Contáctanos",
    icon: <Facebook size={18} />,
    link: "https://api.whatsapp.com/send?phone=%2B593980883299&context=AfdfetdF08vaB0CfpW9k9gWRX1CoRI6OPGK0YjCwl4R3OKQoQAANWcZkPfdq_zAM-RSgBy5h6ZuNSyBmnfXu21NazYi2yedBBfV5lOjbWuVCqwbztUXL9idLjFF5goK-ZmeE3QkwbQIOXP6CKegsQe_9tg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawKa3ctleHRuA2FlbQIxMABicmlkETAxQ1B5Vm5INnNuc0hzeDJoAR78ZHwFJkwRN1cW6hHFlsFtRhs78QOR83xksKABHyb21mRzAdq-3AdG-VcrvA_aem_KezFNi2YSjKy33yN3OoZTw",
    span: "col-span-1 row-span-1",
  },
];

const BentoSocialGrid = () => {
  // Función para manejar el tap en móvil
  const handleCardClick = (link) => {
    // Verificar si es un dispositivo móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid principal */}
      <div className="relative z-10 sm:p-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[140px] lg:auto-rows-[180px] gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto px-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300 ${item.span}`}
              onClick={() => handleCardClick(item.link)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              {/* Efecto glass para PC */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-3 cursor-pointer">
                <h3 className="text-sm sm:text-base font-play text-white mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs sm:text-sm bg-chedar text-white px-3 py-1.5 rounded-full hover:bg-white transition-colors duration-200 hover:text-chedar"
                >
                  {item.icon}
                  Visitar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default (BentoSocialGrid);