import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found - CrystalSoft"
        description="The page you are looking for does not exist."
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F7FA] px-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-8 animate-bounce-slow">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
            Oops! The page you are looking for seems to have wandered off. Let's get you back on track.
          </p>
          <Link to="/">
            <Button variant="primary" icon={Home}>Back to Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
