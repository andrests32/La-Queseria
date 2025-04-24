import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { memo } from 'react';

const data = [
  {
    image: 'https://www.amazonicaep.ec/web/v2/wp-content/uploads/2024/01/como-hacer-queso-con-1-litro-de-leche.jpg',
    title: 'Quesos Frescos',
    icon: <Instagram size={18} />,
    link: 'https://instagram.com',
    span: 'col-span-2 row-span-2',
  },
  {
    image: 'https://previews.123rf.com/images/peopleimages12/peopleimages122305/peopleimages12230565590/207313937-manteniendo-viva-la-tradici%C3%B3n-familiar-del-almuerzo-dominical-una-familia-disfrutando-de-una-comida.jpg',
    title: 'Tradición Familiar',
    icon: <Facebook size={18} />,
    link: 'https://facebook.com',
    span: '',
  },
  // Esta es la nueva imagen que va justo al lado de "Tradición Familiar"
  {
    image: 'https://images.pexels.com/photos/5971874/pexels-photo-5971874.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Sabores Naturales',
    icon: <Twitter size={18} />,
    link: 'https://twitter.com',
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
    image: 'https://images.pexels.com/photos/306801/pexels-photo-306801.jpeg',
    title: 'Selección Premium',
    icon: <Twitter size={18} />,
    link: 'https://twitter.com',
    span: '',
  },
  {
    image: 'https://images.pexels.com/photos/302457/pexels-photo-302457.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Experiencia Gourmet',
    icon: <Instagram size={18} />,
    link: 'https://instagram.com',
    span: '',
  },
  {
    image: 'https://images.pexels.com/photos/1200354/pexels-photo-1200354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Catas Sensoriales',
    icon: <Facebook size={18} />,
    link: 'https://facebook.com',
    span: 'row-span-2',
  },
  {
    image: 'https://images.pexels.com/photos/3943189/pexels-photo-3943189.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Día en la Granja',
    icon: <Youtube size={18} />,
    link: 'https://youtube.com',
    span: '',
  },
  {
    image: 'https://images.pexels.com/photos/8093862/pexels-photo-8093862.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Degustaciones Locales',
    icon: <Twitter size={18} />,
    link: 'https://twitter.com',
    span: '',
  },
  {
    image: 'https://images.pexels.com/photos/7234653/pexels-photo-7234653.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Elaboración Diaria',
    icon: <Instagram size={18} />,
    link: 'https://instagram.com',
    span: '',
  },
  {
    image: 'https://images.pexels.com/photos/6659616/pexels-photo-6659616.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Cultura Quesera',
    icon: <Facebook size={18} />,
    link: 'https://facebook.com',
    span: '',
  },
];

const BentoSocialGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 p-4 max-w-8xl mx-auto">
      {data.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden group shadow-md transition-transform duration-300 ease-in-out ${item.span}`}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-3">
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
