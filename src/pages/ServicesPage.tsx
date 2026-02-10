import {
  Cloud,
  Palette,
  Code,
  Monitor,
  GitBranch,
  Shield,
  Settings,
  Briefcase
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ServiceCard } from '../components/cards/ServiceCard';
import SEO from '../components/SEO';

// Images
import cloudImage from '../public/AdobeStock_200146317-scaled-1.jpeg';
import uiuxImage from '../public/jonathan-borba-xkcg_2YpFJM-unsplash.jpg';
import webAppImage from '../public/vitaly-gariev-UikYLDQj9_I-unsplash.jpg';
import consultancyImage from '../public/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg';
import devopsImage from '../public/airfocus-JVdNmAFDiI4-unsplash.jpg';
import securityImage from '../public/christina-wocintechchat-com-RMweULmCYxM-unsplash.jpg';
import managedImage from '../public/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import productMgmtImage from '../public/sigmund-AQTA5E6mCNU-unsplash.jpg';

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      image: cloudImage,
      title: "Cloud Migration",
      desc: "Seamlessly migrate your legacy systems to the cloud with our expert guidance, ensuring minimal downtime and maximum scalability.",
      link: "/services/cloud-migration"
    },
    {
      icon: Palette,
      image: uiuxImage,
      title: "UI/UX Design",
      desc: "Crafting digital experiences that are not only visually stunning but also intuitive, accessible, and user-centric.",
      link: "/services/ui-ux-design"
    },
    {
      icon: Code,
      image: webAppImage,
      title: "Web & App Development",
      desc: "Build robust, scalable, and high-performance web and mobile applications tailored to your unique business requirements.",
      link: "/services/web-app-dev"
    },
    {
      icon: Monitor,
      image: consultancyImage,
      title: "IT Consultancy",
      desc: "Professional guidance to help you make informed technology decisions.",
      link: "/services/it-consultancy"
    },
    {
      icon: GitBranch,
      image: devopsImage,
      title: "DevOps Services",
      desc: "Accelerate your delivery cycle with modern DevOps practices and tools.",
      link: "/services/devops"
    },
    {
      icon: Shield,
      image: securityImage,
      title: "Security & Compliance",
      desc: "Protect your business with advanced security measures and compliance standards.",
      link: "/services/security-compliance"
    },
    {
      icon: Settings,
      image: managedImage,
      title: "Managed IT",
      desc: "Proactive management of your IT environment for peak performance.",
      link: "/services/managed-it"
    },
    {
      icon: Briefcase,
      image: productMgmtImage,
      title: "Product Management",
      desc: "Drive innovation and deliver value through expert product leadership. We help you define, build, and scale products that resonate with your target audience.",
      link: "/services/product-management"
    }
  ];

  return (
    <>
      <SEO
        title="Our Services - CrystalSoft"
        description="Explore our comprehensive IT services including IT Consultancy, DevOps Implementation, Cloud Migration, and more."
      />

      {/* Page Header */}
      <div className="bg-secondary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-gray-400">Home / Services</p>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Services"
            title="We provide the necessary services to you"
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                image={service.image}
                title={service.title}
                desc={service.desc}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
