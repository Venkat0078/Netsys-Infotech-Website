import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">NI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Netsys Infotech</h3>
                <p className="text-xs text-green-400">Innovative IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering businesses with transparent, reliable IT solutions that drive growth and innovation.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">IT Consultancy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">DevOps Implementation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">Cloud Migration</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">Security Compliance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">Managed IT Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p>contact@netsysinfotech.com</p>
                  <p>support@netsysinfotech.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p>+91 9940276633</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p>T. Nagar, Chennai</p>
                  <p>Tamil Nadu 600017</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Netsys Infotech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
