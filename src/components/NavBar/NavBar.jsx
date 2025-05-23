import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Users, PhoneCall } from 'lucide-react';
import LogoQueseria from '../LogoQueseria/LogoQueseria';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full top-0 z-50 px-4 py-3 font-avenir font-normal">
            <div className="max-w-7xl mx-auto">
                {/* Navbar Container */}
                <div className={`relative rounded-2xl px-4 py-2 transition-all duration-300
                    ${hasScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-gradient-to-b from-white/10 to-gray-50/50'} 
                    ${hasScrolled ? 'border-b-2 border-transparent bg-white via-chedar to-transparent' : 'border-b-2 border-chedar transition duration-300'}`}>

                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2 text-rock">
                            <LogoQueseria className='h-10 lg:h-16' />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            <NavLink href="/products" icon={<ShoppingBag className="w-5.5 h-5.5" />}>
                                Productos
                            </NavLink>
                            <NavLink href="/about" icon={<Users className="w-5.5 h-5.5" />}>
                                Quiénes Somos
                            </NavLink>
                            <NavLink href="/contact" icon={<PhoneCall className="w-5.5 h-5.5" />}>
                                Contacto
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-rock" />
                            ) : (
                                <Menu className="w-6 h-6 text-rock" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`md:hidden absolute left-0 right-0 top-full mt-2 bg-white backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-84 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="p-4 flex flex-col gap-4">
                            <MobileNavLink href="/products" icon={<ShoppingBag className="w-5 h-5" />}>
                                Productos
                            </MobileNavLink>
                            <MobileNavLink href="/about" icon={<Users className="w-5 h-5" />}>
                                Quiénes Somos
                            </MobileNavLink>
                            <MobileNavLink href="/contact" icon={<PhoneCall className="w-5 h-5" />}>
                                Contacto
                            </MobileNavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// NavLink y MobileNavLink no cambian
const NavLink = ({ href, children, icon }) => (
    <a
        href={href}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-rock hover:text-white hover:font-semibold hover:bg-chedar transition-all duration-100 tracking-wide"
    >
        {icon}
        <span>{children}</span>
    </a>
);

const MobileNavLink = ({ href, children, icon }) => (
    <a
        href={href}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-rock tracking-wide hover:text-rock hover:bg-primary/5 transition-all duration-300"
    >
        {icon}
        <span className="font-medium">{children}</span>
    </a>
);

export default Navbar;
