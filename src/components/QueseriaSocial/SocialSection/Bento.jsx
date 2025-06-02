import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { memo } from 'react';

const data = [
  {
    image: '/cafegrape.webp',
    title: 'Café Grapé',
    icon: <Instagram size={18} />,
    link: 'https://www.instagram.com/p/DJUV7qIJkY8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    span: 'col-span-2 row-span-2',
  },
  {
    image: '/laqueseria.webp',
    title: 'La Queseria',
    icon: <Instagram size={18} />,
    link: 'https://www.instagram.com/p/DJNSuA4JYPK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    span: '',
  },
  // Esta es la nueva imagen que va justo al lado de "Tradición Familiar"
  {
    image: '/cafe.webp',
    title: 'Café',
    icon: <Instagram size={18} />,
    link: 'https://www.instagram.com/reel/DHbetivuWy8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    span: '',
  },
  {
    image: '/artesanal.jpg',
    title: 'Proceso Artesanal',
    icon: <Youtube size={18} />,
    link: 'https://youtube.com',
    span: 'col-span-2',
  },
  {
    image: '/salprieta.webp',
    title: 'Sal Prieta',
    icon: <Facebook size={18} />,
    link: 'https://www.facebook.com/share/1DCmDe4v3n/',
    span: '',
  },
  {
    image: '/quesocrema.webp',
    title: 'Queso Crema',
    icon: <Facebook size={18} />,
    link: 'https://www.facebook.com/share/p/1Af2Qw83qY/',
    span: '',
  },
  {
    image: '/quesochicloso.webp',
    title: 'Queso Chicloso',
    icon: <Instagram size={18} />,
    link: 'https://www.instagram.com/p/DJJywJCOiul/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    span: 'row-span-2',
  },
  {
    image: '/tazaqueseria.webp',
    title: 'Queseria',
    icon: <Facebook size={18} />,
    link: 'https://www.facebook.com/share/p/1DZLNNZFoD/',
    span: '',
  },
  {
    image: '/huevos.webp',
    title: 'Huevos',
    icon: <Facebook size={18} />,
    link: 'https://www.facebook.com/share/p/1DbLJe9jhr/',
    span: '',
  },
  {
    image: '/queseriaproducts.webp',
    title: 'La Queseria Ec',
    icon: <Facebook size={18} />,
    link: 'https://www.facebook.com/QuesoosymaS',
    span: '',
  },
  {
    image: '/phonequeseria.webp',
    title: 'Contáctanos',
    icon: <Facebook size={18} />,
    link: 'https://api.whatsapp.com/send?phone=%2B593980883299&context=AfdfetdF08vaB0CfpW9k9gWRX1CoRI6OPGK0YjCwl4R3OKQoQAANWcZkPfdq_zAM-RSgBy5h6ZuNSyBmnfXu21NazYi2yedBBfV5lOjbWuVCqwbztUXL9idLjFF5goK-ZmeE3QkwbQIOXP6CKegsQe_9tg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawKa3ctleHRuA2FlbQIxMABicmlkETAxQ1B5Vm5INnNuc0hzeDJoAR78ZHwFJkwRN1cW6hHFlsFtRhs78QOR83xksKABHyb21mRzAdq-3AdG-VcrvA_aem_KezFNi2YSjKy33yN3OoZTw',
    span: '',
  },
];

const BentoSocialGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[90px] lg:auto-rows-[180px] gap-4 p-4 max-w-8xl mx-auto">
      {data.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden group shadow-md transition-transform duration-300 ease-in-out ${item.span}`}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-3 cursor-pointer">
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-white text-black px-3 py-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              {item.icon}
              Visitar
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(BentoSocialGrid);
