import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Service {
  name: string;
  path: string;
}

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesDropdown, setIsServicesDropdown] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  const services: Service[] = [
    { name: 'IT Consultancy', path: '/services/it-consultancy' },
    { name: 'DevOps Implementation', path: '/services/devops' },
    { name: 'Cloud Migration', path: '/services/cloud-migration' },
    { name: 'Security Compliance', path: '/services/security-compliance' },
    { name: 'Managed IT Services', path: '/services/managed-it' },
    { name: 'UI/UX Design', path: '/services/ui-ux' },
    { name: 'Web & App Development', path: '/services/web-app-dev' },
    { name: 'IT Management', path: '/services/it-management' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-green-100 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">CS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CrystalSoft</h1>
              <p className="text-xs text-green-600">Crystal Clear Solutions</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors font-medium`}
            >
              Home
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-2xl shadow-xl border border-green-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
                {services.map((service: Service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/blog"
              className={`${isActive('/blog') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors font-medium`}
            >
              Blog
            </Link>

            <Link
              to="/team"
              className={`${isActive('/team') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 transition-colors font-medium`}
            >
              Team
            </Link>

            <Link
              to="/#contact"
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <button
              onClick={() => setIsServicesDropdown(!isServicesDropdown)}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center justify-between"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform ${isServicesDropdown ? 'rotate-180' : ''}`} />
            </button>

            {isServicesDropdown && (
              <div className="pl-4 space-y-2 border-l-2 border-green-200">
                {services.map((service: Service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/blog"
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/team"
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>

            <Link
              to="/#contact"
              className="block w-full text-left py-2 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
