import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Code, ArrowRight } from 'lucide-react';

export const Footer = () => {
    return (
        <>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Looking for the Best IT Business Solutions?</h2>
                    <button className="bg-white text-secondary hover:bg-gray-100 inline-flex items-center justify-center px-8 py-4 font-bold text-sm transition-all duration-300 rounded hover:-translate-y-1">
                        Contact Us Today
                    </button>
                </div>
            </div>

            <footer className="bg-[#0b0f19] text-gray-400 py-20 border-t border-gray-800">
                <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Code size={32} className="text-primary" />
                            <span className="text-3xl font-extrabold text-white tracking-tight">IT<span className="text-primary">firm</span></span>
                        </div>
                        <p className="leading-relaxed">
                            We work with a passion of taking challenges and creating new ones in advertising sector.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">IT Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'Business Solutions', 'Cloud Computing', 'Data Analysis'].map(item => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Case Studies', 'Contact Us', 'Privacy Policy'].map(item => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
                        <p className="mb-6">Subscribe our newsletter to get our latest update & news.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-secondary border border-gray-700 rounded py-3 px-4 focus:outline-none focus:border-primary text-white"
                            />
                            <button className="absolute right-0 top-0 h-full w-12 bg-primary rounded-r flex items-center justify-center text-white hover:bg-primary-hover">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bg-[#030405] py-6 text-center text-sm border-t border-gray-900">
                <p>© 2024 Itfirm - CaseThemes. All rights reserved.</p>
            </div>
        </>
    );
};
