// src/components/Footer/Footer.jsx
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { RiTiktokFill } from "react-icons/ri";
import LogoQueseria from "../LogoQueseria/LogoQueseria";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-gray-800 border-t border-gray-200 z-[999]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <a href="/">
            <LogoQueseria />
          </a>
          <p className="mt-4 text-sm text-rock/80 font-avenir">
            Productos artesanales de calidad, elaborados con pasión y
            tradición. Disfruta el sabor auténtico del campo.
          </p>
        </div>
        <div>
          <h3 className="text-md font-play tracking-wide text-chedar mb-4">
            Navegación
          </h3>
          <ul className="space-y-2 text-md lg:text-md tracking-wide text-rock font-avenir">
            <li><a href="/" className="hover:text-chedar hover:font-semibold transition duration-300">Inicio</a></li>
            <li><a href="/products" className="hover:text-chedar hover:font-semibold transition duration-300">Productos</a></li>
            <li><a href="/about" className="hover:text-chedar hover:font-semibold transition duration-300">Nosotros</a></li>
            <li><a href="/contact" className="hover:text-chedar hover:font-semibold transition duration-300">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-play text-chedar mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-md text-rock">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-chedar" /> 09 80 883 299
            </li>
            <li>
              <a href="mailto:queserianacionalsas@gmail.com" className="flex items-center gap-2 hover:text-chedar">
                <Mail className="w-4 h-4 text-chedar" />
                queserianacionalsas@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-play text-chedar mb-4">Síguenos</h3>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/QuesoosymaS?..." target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-rock hover:text-chedar transition duration-300" />
            </a>
            <a href="https://www.instagram.com/laqueseria.ec" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-rock hover:text-chedar transition duration-300" />
            </a>
            <a href="https://www.tiktok.com/@laqueseria.ec" target="_blank" aria-label="TikTok">
              <RiTiktokFill className="w-5 h-5 text-rock hover:text-chedar transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-chedar font-avenir text-md tracking-wide text-white py-4 px-4">
        © {currentYear} La Quesería. Todos los derechos reservados.
        <br />
        <a
          href="https://infinity-web-six.vercel.app/"
          target="_blank"
          className="text-white font-inter hover:font-semibold transition duration-300 pt-2 inline-block"
        >
          create by Infinity
        </a>
      </div>
    </footer>
  );
};

export default Footer;
