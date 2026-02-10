import React, { useState, useEffect } from 'react';
import {
    Monitor,
    Server,
    Shield,
    Code,
    Smartphone,
    Globe,
    Menu,
    X,
    ChevronRight,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,
    CheckCircle,
    Play
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', icon: Icon }) => {
    const baseStyle = "inline-flex items-center justify-center px-8 py-4 font-bold text-sm transition-all duration-300 rounded hover:-translate-y-1";

    const variants = {
        primary: "bg-[#086AD8] text-white hover:bg-[#0654b0] shadow-lg shadow-blue-900/20",
        secondary: "bg-[#032240] text-white hover:bg-[#02182b]",
        outline: "border-2 border-[#086AD8] text-[#032240] hover:bg-[#086AD8] hover:text-white",
        white: "bg-white text-[#032240] hover:bg-gray-100",
        orange: "bg-[#FD4A18] text-white hover:bg-[#e03e10]"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
            {Icon && <Icon className="ml-2 w-4 h-4" />}
        </button>
    );
};

const SectionTitle = ({ subtitle, title, align = 'center', dark = false }) => (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <span className="block text-[#086AD8] font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2 justify-center">
            {align === 'center' && <span className="w-8 h-[2px] bg-[#086AD8]"></span>}
            {subtitle}
            {align === 'center' && <span className="w-8 h-[2px] bg-[#086AD8]"></span>}
        </span>
        <h2 className={`text-3xl md:text-5xl font-extrabold ${dark ? 'text-white' : 'text-[#032240]'} leading-tight`}>
            {title}
        </h2>
    </div>
);

const ServiceCard = ({ icon: Icon, title, desc }) => (
    <div className="group relative bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 bg-[#f4f7fa] w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-[#086AD8] group-hover:scale-150"></div>
        <div className="relative z-10">
            <div className="w-16 h-16 bg-[#086AD8]/10 text-[#086AD8] rounded flex items-center justify-center mb-6 group-hover:bg-[#086AD8] group-hover:text-white transition-colors duration-300">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#032240] mb-3 group-hover:text-[#086AD8] transition-colors">{title}</h3>
            <p className="text-[#666666] leading-relaxed mb-6">{desc}</p>
            <a href="#" className="inline-flex items-center text-[#032240] font-bold text-sm hover:text-[#086AD8] transition-colors">
                Read More <ArrowRight size={16} className="ml-2" />
            </a>
        </div>
    </div>
);

const StatItem = ({ count, label }) => (
    <div className="text-center p-6 border-r border-gray-800 last:border-0">
        <h3 className="text-5xl font-extrabold text-[#086AD8] mb-2">{count}</h3>
        <p className="text-gray-400 font-medium">{label}</p>
    </div>
);

const TestimonialCard = ({ name, role, text }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-[#086AD8]">
        <div className="flex gap-1 text-[#FD4A18] mb-4">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
        </div>
        <p className="text-[#666666] italic mb-6 leading-relaxed">"{text}"</p>
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for avatar */}
                <div className="w-full h-full bg-[#032240] flex items-center justify-center text-white font-bold">{name[0]}</div>
            </div>
            <div>
                <h4 className="font-bold text-[#032240]">{name}</h4>
                <p className="text-xs text-[#086AD8] font-bold uppercase">{role}</p>
            </div>
        </div>
    </div>
);

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="font-sans text-[#666666] bg-white selection:bg-[#086AD8] selection:text-white">

            {/* Top Bar */}
            <div className="hidden lg:flex justify-between items-center py-2 px-8 bg-[#032240] text-gray-300 text-sm">
                <div className="flex gap-6">
                    <span className="flex items-center gap-2 hover:text-white cursor-pointer"><Mail size={14} className="text-[#086AD8]" /> info@itfirm.com</span>
                    <span className="flex items-center gap-2 hover:text-white cursor-pointer"><MapPin size={14} className="text-[#086AD8]" /> 380 Albert St, Melbourne</span>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="mr-2">Follow Us:</span>
                    <a href="#" className="hover:text-[#086AD8]"><Facebook size={14} /></a>
                    <a href="#" className="hover:text-[#086AD8]"><Twitter size={14} /></a>
                    <a href="#" className="hover:text-[#086AD8]"><Linkedin size={14} /></a>
                    <a href="#" className="hover:text-[#086AD8]"><Instagram size={14} /></a>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#086AD8] rounded-lg flex items-center justify-center text-white">
                            <Code size={24} />
                        </div>
                        <span className="text-2xl font-extrabold text-[#032240] tracking-tight">IT<span className="text-[#086AD8]">firm</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 font-semibold text-[#032240]">
                        {['Home', 'Services', 'Projects', 'Pages', 'Blog', 'Contact'].map((item) => (
                            <a key={item} href="#" className="hover:text-[#086AD8] transition-colors">{item}</a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-3">
                            <div className="text-right hidden xl:block">
                                <span className="block text-xs text-gray-500">Have any questions?</span>
                                <span className="block text-[#032240] font-bold">Free + (678) 345-3456</span>
                            </div>
                            <Button variant="primary" icon={ChevronRight}>Get a Quote</Button>
                        </div>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#032240]">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
                        {['Home', 'Services', 'Projects', 'Pages', 'Blog', 'Contact'].map((item) => (
                            <a key={item} href="#" className="text-[#032240] font-medium py-2 border-b border-gray-50 last:border-0 hover:text-[#086AD8]">{item}</a>
                        ))}
                        <Button variant="primary" className="w-full mt-4">Get a Quote</Button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <header className="relative bg-[#032240] pt-20 pb-32 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#086AD8]/10 skew-x-12 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#086AD8]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-white space-y-8">
                        <div className="inline-block px-4 py-1 bg-white/10 rounded-full border border-white/20">
                            <span className="text-[#FD4A18] font-bold mr-2">New</span>
                            <span className="text-sm font-medium">IT Solutions for 2024</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
                            IT Solutions & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#086AD8] to-[#26c6da]">Technology</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                            We provide the most responsive and functional IT design for companies and businesses worldwide. Prosper in this volatile market with our expertise.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" icon={ArrowRight}>Discover More</Button>
                            <button className="flex items-center gap-3 px-8 py-4 font-bold text-white hover:text-[#086AD8] transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-[#086AD8] transition-all">
                                    <Play size={18} fill="currentColor" />
                                </div>
                                Watch Video
                            </button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/5">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="w-full h-auto" />
                        </div>
                        {/* Floating Badges */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#FD4A18] rounded-full flex items-center justify-center text-white">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-[#032240]">25k+</p>
                                    <p className="text-sm text-gray-500">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-24 bg-[#F5F7FA]">
                <div className="container mx-auto px-6">
                    <SectionTitle subtitle="Our Awesome Services" title="We Are Dedicated To Serve You All Time." align="center" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={Monitor}
                            title="Web Development"
                            desc="We build robust web applications that are scalable, secure, and tailored to your business needs using modern technologies."
                        />
                        <ServiceCard
                            icon={Shield}
                            title="Cyber Security"
                            desc="Protect your digital assets with our advanced security protocols, ensuring your data remains safe from threats."
                        />
                        <ServiceCard
                            icon={Smartphone}
                            title="Mobile Development"
                            desc="Create seamless mobile experiences for iOS and Android that engage users and drive growth for your business."
                        />
                        <ServiceCard
                            icon={Server}
                            title="Cloud Services"
                            desc="Optimize your infrastructure with scalable cloud solutions, reducing costs and increasing operational efficiency."
                        />
                        <ServiceCard
                            icon={Code}
                            title="Software Solutions"
                            desc="Custom software development to automate processes and solve complex business challenges effectively."
                        />
                        <ServiceCard
                            icon={Globe}
                            title="Digital Marketing"
                            desc="Boost your online presence and reach your target audience with data-driven digital marketing strategies."
                        />
                    </div>
                </div>
            </section>

            {/* About / Why Choose Us */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1553877616-15280ed54729?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Office working" />
                            </div>
                            <div className="absolute top-10 -left-10 w-full h-full border-4 border-[#086AD8] rounded-lg -z-0 hidden md:block"></div>
                            <div className="absolute -bottom-10 -right-10 bg-[#032240] p-10 rounded-lg text-white z-20 max-w-xs">
                                <h4 className="text-4xl font-bold text-[#086AD8] mb-2">35+</h4>
                                <p className="font-medium">Years of experience in the IT Industry.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <SectionTitle subtitle="About Our Company" title="We Are Increasing Business Success With Technology" align="left" />
                            <p className="text-lg text-[#666666]">
                                Over the years, we have helped numerous organizations achieve their goals through effective IT strategies. We believe in building long-term partnerships based on trust and results.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Highly professional and experienced team",
                                    "100% Client Satisfaction Guarantee",
                                    "Affordable pricing with top quality service"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#086AD8]/20 flex items-center justify-center text-[#086AD8]">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="font-bold text-[#032240]">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-gray-100 flex items-center gap-8">
                                <Button variant="primary">Discover More</Button>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#FD4A18] flex items-center justify-center text-white animate-pulse">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase text-gray-500 font-bold">Call Us Now</span>
                                        <span className="block text-[#032240] font-bold text-xl">+123 456 7890</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#032240] py-20 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700">
                        <StatItem count="25K" label="Happy Clients" />
                        <StatItem count="800+" label="Projects Done" />
                        <StatItem count="120" label="Expert Members" />
                        <StatItem count="50+" label="Awards Won" />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-[#F5F7FA]">
                <div className="container mx-auto px-6">
                    <SectionTitle subtitle="Testimonials" title="What Our Clients Say" align="center" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <TestimonialCard
                            name="Sarah Johnson"
                            role="CEO, TechStart"
                            text="Itfirm transformed our business with their incredible web solutions. The team is professional, responsive, and truly skilled."
                        />
                        <TestimonialCard
                            name="Michael Chen"
                            role="Director, Innovate Inc"
                            text="We needed a complex cloud infrastructure and they delivered beyond our expectations. Highly recommended for enterprise solutions."
                        />
                        <TestimonialCard
                            name="Emily Davis"
                            role="Founder, Creative Studio"
                            text="Their digital marketing strategies helped us double our leads in just 3 months. The ROI has been fantastic."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <div className="bg-[#086AD8] py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Looking for the Best IT Business Solutions?</h2>
                    <Button variant="white" className="text-[#086AD8]">Contact Us Today</Button>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="bg-[#0b0f19] text-gray-400 py-20 border-t border-gray-800">
                <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Code size={32} className="text-[#086AD8]" />
                            <span className="text-3xl font-extrabold text-white tracking-tight">IT<span className="text-[#086AD8]">firm</span></span>
                        </div>
                        <p className="leading-relaxed">
                            We work with a passion of taking challenges and creating new ones in advertising sector.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-[#086AD8] hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">IT Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'Business Solutions', 'Cloud Computing', 'Data Analysis'].map(item => (
                                <li key={item}><a href="#" className="hover:text-[#086AD8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#086AD8] rounded-full"></span> {item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Case Studies', 'Contact Us', 'Privacy Policy'].map(item => (
                                <li key={item}><a href="#" className="hover:text-[#086AD8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#086AD8] rounded-full"></span> {item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
                        <p className="mb-6">Subscribe our newsletter to get our latest update & news.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-[#032240] border border-gray-700 rounded py-3 px-4 focus:outline-none focus:border-[#086AD8] text-white"
                            />
                            <button className="absolute right-0 top-0 h-full w-12 bg-[#086AD8] rounded-r flex items-center justify-center text-white hover:bg-[#0654b0]">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="bg-[#030405] py-6 text-center text-sm border-t border-gray-900">
                <p>© 2024 Itfirm - CaseThemes. All rights reserved.</p>
            </div>
        </div>
    );
}