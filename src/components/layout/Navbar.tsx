import { useState, useEffect } from 'react';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import logo from '../../public/logo/netsys-removebg-preview.png';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;
    const linkClass = (path: string) => `transition-colors ${isActive(path) ? 'text-primary font-bold' : 'hover:text-primary'}`;

    return (
        <>
            {/* Top Bar */}
            <div className="hidden lg:flex justify-between items-center py-2 px-8 bg-secondary text-gray-300 text-sm">
                <div className="flex gap-6">
                    <span className="flex items-center gap-2 hover:text-white cursor-pointer"><Mail size={14} className="text-primary" /> info@netsysinfotech.com</span>
                    <span className="flex items-center gap-2 hover:text-white cursor-pointer"><MapPin size={14} className="text-primary" /> 380 Albert St, Melbourne</span>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="mr-2">Follow Us:</span>
                    <a href="#" className="hover:text-primary"><Facebook size={14} /></a>
                    <a href="#" className="hover:text-primary"><Twitter size={14} /></a>
                    <a href="#" className="hover:text-primary"><Linkedin size={14} /></a>
                    <a href="#" className="hover:text-primary"><Instagram size={14} /></a>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Netsys Infotech Logo" className="w-10 h-10 object-contain" />
                        <span className="text-xl font-extrabold text-secondary tracking-tight">Netsys <span className="text-primary">Infotech</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 font-semibold text-secondary">
                        <Link to="/" className={linkClass('/')}>Home</Link>
                        <Link to="/services" className={linkClass('/services')}>Services</Link>
                        <Link to="/team" className={linkClass('/team')}>Team</Link>
                        <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
                        {/* <Link to="/contact" className={linkClass('/contact')}>Contact</Link> */}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-3">
                            <div className="text-right hidden xl:block">
                                <span className="block text-xs text-gray-500">Have any questions?</span>
                                <span className="block text-secondary font-bold">Free + (678) 345-3456</span>
                            </div>
                            <Button variant="primary" icon={ChevronRight}>Get a Quote</Button>
                        </div>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-secondary">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
                        <Link to="/" className="text-secondary font-medium py-2 border-b border-gray-50 hover:text-primary">Home</Link>
                        <Link to="/services" className="text-secondary font-medium py-2 border-b border-gray-50 hover:text-primary">Services</Link>
                        <Link to="/team" className="text-secondary font-medium py-2 border-b border-gray-50 hover:text-primary">Team</Link>
                        <Link to="/blog" className="text-secondary font-medium py-2 border-b border-gray-50 hover:text-primary">Blog</Link>
                        <Button variant="primary" className="w-full mt-4">Get a Quote</Button>
                    </div>
                )}
            </nav>
        </>
    );
};
