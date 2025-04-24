import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook, Linkedin } from 'lucide-react';
import LogoQueseria from '../LogoQueseria/LogoQueseria';

const ContactSection = () => {
    const [hoveredLocation, setHoveredLocation] = useState(null);

    const locations = [
        {
            id: 1,
            name: 'Sucursal Centro',
            address: 'Calle Principal 123, Centro Histórico, Ciudad, 10001',
            phone: '+52 (555) 123-4567',
            email: 'centro@laqueseria.com',
            hours: 'Lun-Sáb: 9AM-7PM, Dom: 10AM-4PM',
            map: 'https://maps.google.com/?q=Centro+Historico+Ciudad+10001',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 2,
            name: 'Sucursal Norte',
            address: 'Avenida Reforma 456, Zona Norte, Ciudad, 10002',
            phone: '+52 (555) 987-6543',
            email: 'norte@laqueseria.com',
            hours: 'Lun-Sáb: 10AM-8PM, Dom: 11AM-5PM',
            map: 'https://maps.google.com/?q=Zona+Norte+Ciudad+10002',
            image: 'https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.6
            }
        }
    };

    const contactInfo = [
        {
            id: 'general',
            title: 'Información General',
            icon: <Mail size={18} />,
            value: 'info@laqueseria.com',
            link: 'mailto:info@laqueseria.com'
        },
        {
            id: 'orders',
            title: 'Pedidos y Entregas',
            icon: <Phone size={18} />,
            value: '+52 (555) 789-0123',
            link: 'tel:+525557890123'
        }
    ];

    const socialLinks = [
        { id: 'instagram', icon: <Instagram size={20} />, link: 'https://instagram.com/laqueseria' },
        { id: 'facebook', icon: <Facebook size={20} />, link: 'https://facebook.com/laqueseria' },
        { id: 'linkedin', icon: <Linkedin size={20} />, link: 'https://linkedin.com/company/laqueseria' }
    ];

    return (
        <section className="py-16 bg-rock-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 flex flex-col items-center justify-center"
                >

                    <a href="/" class="flex items-center mb-6 cursor-pointer">
                        <LogoQueseria className="h-30" />
                        <span class="relative top-4 -left-1 font-play text-chedar text-4xl"
                        >uesería</span
                        >
                    </a>
                    <h2 className="text-3xl md:text-4xl text-rock-800 font-play mb-4">Contáctanos</h2>
                    <p className="text-rock-600 max-w-2xl mx-auto font-avenir">
                        Visita cualquiera de nuestras ubicaciones o ponte en contacto con nosotros. Nos encantaría atenderte y resolver todas tus dudas sobre nuestros productos.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                >
                    {locations.map((location) => (
                        <motion.div
                            key={location.id}
                            variants={item}
                            onMouseEnter={() => setHoveredLocation(location.id)}
                            onMouseLeave={() => setHoveredLocation(null)}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-chedar-600 bg-opacity-70 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: hoveredLocation === location.id ? 0.8 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a
                                        href={location.map}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white font-medium flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
                                    >
                                        Ver en Mapa <ExternalLink size={16} className="ml-2" />
                                    </a>
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl text-rock-800 font-play mb-3">{location.name}</h3>

                                <div className="space-y-3 text-rock-700 font-avenir">
                                    <div className="flex items-start">
                                        <MapPin size={18} className="text-chedar-600 mt-1 mr-3 flex-shrink-0" />
                                        <p>{location.address}</p>
                                    </div>

                                    <div className="flex items-start">
                                        <Phone size={18} className="text-chedar-600 mt-1 mr-3 flex-shrink-0" />
                                        <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:text-chedar-600 transition-colors">
                                            {location.phone}
                                        </a>
                                    </div>

                                    <div className="flex items-start">
                                        <Mail size={18} className="text-chedar-600 mt-1 mr-3 flex-shrink-0" />
                                        <a href={`mailto:${location.email}`} className="hover:text-chedar-600 transition-colors">
                                            {location.email}
                                        </a>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock size={18} className="text-chedar-600 mt-1 mr-3 flex-shrink-0" />
                                        <p>{location.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="bg-white rounded-lg shadow-sm p-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-xl text-rock-800 font-play mb-5">Información Adicional</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map(item => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ y: -4 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="flex items-start"
                                    >
                                        <div className="h-10 w-10 rounded-full bg-chedar-100 flex items-center justify-center mr-4 flex-shrink-0">
                                            <span className="text-chedar-600">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-rock-800 font-play">{item.title}</h4>
                                            <a
                                                href={item.link}
                                                className="text-rock-600 hover:text-chedar-600 transition-colors font-avenir"
                                            >
                                                {item.value}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl text-rock-800 font-play mb-5">Síguenos</h3>
                            <p className="text-rock-600 mb-5 font-avenir">
                                Síguenos en redes sociales para conocer nuestras novedades, ofertas especiales y más.
                            </p>

                            <div className="flex space-x-4">
                                {socialLinks.map(social => (
                                    <motion.a
                                        key={social.id}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-10 w-10 rounded-full bg-rock-100 flex items-center justify-center text-rock-700 hover:bg-chedar-600 hover:text-white transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;