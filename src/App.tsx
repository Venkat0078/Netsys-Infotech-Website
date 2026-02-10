import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import Blog from './pages/Blog';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import ITConsultancy from './pages/services/ITConsultancy';
import DevOpsImplementation from './pages/services/DevOpsImplementation';
import CloudMigration from './pages/services/CloudMigration';
import SecurityCompliance from './pages/services/SecurityCompliance';
import ManagedITServices from './pages/services/ManagedITServices';
import UIUXDesign from './pages/services/UIUXDesign';
import WebAppDevelopment from './pages/services/WebAppDevelopment';
import ITManagement from './pages/services/ITManagement';
import ProductManagement from './pages/services/Product Management';

// If you want to use the New Theme Landing Page content as "Home", we should have saved it.
// Assuming the user wants their ORIGINAL HomePage.tsx content to be the home page,
// wrapped in the NEW Theme Layout (Navbar/Footer).

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/it-consultancy" element={<ITConsultancy />} />
          <Route path="/services/devops" element={<DevOpsImplementation />} />
          <Route path="/services/cloud-migration" element={<CloudMigration />} />
          <Route path="/services/security-compliance" element={<SecurityCompliance />} />
          <Route path="/services/managed-it" element={<ManagedITServices />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/web-app-dev" element={<WebAppDevelopment />} />
          <Route path="/services/it-management" element={<ITManagement />} />
          <Route path="/services/product-management" element={<ProductManagement />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
