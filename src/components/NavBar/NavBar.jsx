import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, Users, PhoneCall } from 'lucide-react';
import LogoQueseria from '../LogoQueseria/LogoQueseria';
import LogoQueseriaBlanco from '../LogoQueseria/LogoQueseriaBlanco';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                // Calculamos la posición del final del hero
                const heroHeight = heroRef.current.offsetHeight;
                setHasScrolled(window.scrollY > heroHeight);
            } else {
                // Fallback para cuando no se encuentra el hero
                setHasScrolled(window.scrollY > (window.innerWidth > 868 ? 890 : 700));
            }
        };

        // Agregamos un pequeño delay para asegurar que el DOM esté cargado
        const timer = setTimeout(() => {
            heroRef.current = document.getElementById('hero-section');
            window.addEventListener('scroll', handleScroll);
            // Ejecutamos una vez al inicio para el estado inicial
            handleScroll();
        }, 100);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto py-3 px-4">
                {/* Navbar Container */}
                <div className={`relative rounded-2xl px-4 py-2 transition-all duration-300
                    ${hasScrolled ? 'bg-chedar/90 backdrop-blur-sm shadow-md' : 'bg-white backdrop-blur-lg'}`}>

                    <div className="flex items-center justify-between">
                        {/* Logo - Cambia según el scroll */}
                        <a href="/" className="flex items-center gap-2">
                            {hasScrolled ? (
                                <LogoQueseriaBlanco className='h-12 lg:h-16' />
                            ) : (
                                <LogoQueseria className='h-12 lg:h-16' />
                            )}
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6 font-avenir font-normal">
                            <NavLink href="/products" icon={<ShoppingBag className="w-5 h-5" />} hasScrolled={hasScrolled}>
                                Productos
                            </NavLink>
                            <NavLink href="/about" icon={<Users className="w-5 h-5" />} hasScrolled={hasScrolled}>
                                Quiénes Somos
                            </NavLink>
                            <NavLink href="/contact" icon={<PhoneCall className="w-5 h-5" />} hasScrolled={hasScrolled}>
                                Contacto
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors ${hasScrolled ? 'text-white hover:bg-chedar-dark' : 'text-verde hover:bg-gray-100'}`}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`md:hidden absolute left-0 right-0 top-full mt-2 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out 
                        ${isOpen ? 'max-h-84 opacity-100' : 'max-h-0 opacity-0'}
                        ${hasScrolled ? 'bg-chedar/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'}`}
                    >
                        <div className="p-4 flex flex-col gap-4">
                            <MobileNavLink href="/products" icon={<ShoppingBag className="w-5 h-5" />} hasScrolled={hasScrolled}>
                                Productos
                            </MobileNavLink>
                            <MobileNavLink href="/about" icon={<Users className="w-5 h-5" />} hasScrolled={hasScrolled}>
                                Quiénes Somos
                            </MobileNavLink>
                            <MobileNavLink href="/contact" icon={<PhoneCall className="w-5 h-5" />} hasScrolled={hasScrolled}>
                                Contacto
                            </MobileNavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Componentes NavLink y MobileNavLink se mantienen igual
const NavLink = ({ href, children, icon, hasScrolled }) => (
    <a
        href={href}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all duration-300 tracking-wide
            ${hasScrolled ?
                'text-white hover:bg-white hover:text-verde' :
                'text-verde hover:bg-chedar hover:text-white'}`}
    >
        {icon}
        <span>{children}</span>
    </a>
);

const MobileNavLink = ({ href, children, icon, hasScrolled }) => (
    <a
        href={href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg tracking-wide transition-all duration-300
            ${hasScrolled ?
                'text-white hover:bg-chedar-dark/80' :
                'text-rock hover:bg-chedar/10'}`}
    >
        {icon}
        <span className="font-medium">{children}</span>
    </a>
);

export default Navbar;