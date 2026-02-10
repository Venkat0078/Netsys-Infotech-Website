import { useState } from 'react';
import {
  Monitor,
  Server,
  Shield,
  CheckCircle,
  Phone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ServiceCard } from '../components/cards/ServiceCard';
import { StatItem } from '../components/cards/StatItem';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import SEO from '../components/SEO';

import heroImg1 from '../public/arlington-research-nFLmPAf9dVc-unsplash.jpg';
import heroImg2 from '../public/vitaly-gariev-PSksbOVDhWk-unsplash.jpg';
import heroImg3 from '../public/thisisengineering-t4qI2IDcL5s-unsplash.jpg';
import heroImg4 from '../public/redmind-studio-OLXBoNfb8kA-unsplash.jpg';
import heroImg5 from '../public/marcel-petzold-tcr-oyYj7qQ-unsplash.jpg';
import managedItImg from '../public/uk-black-tech-dfmsZyFVi_I-unsplash.jpg';
import itConsultingImg from '../public/vitaly-gariev-4edOy1dya1c-unsplash.jpg';
import complianceImg from '../public/firosnv-photography-1wBmbnvv4TE-unsplash.jpg';
import cloudServicesImg from '../public/vitaly-gariev-MSTL7-5avQo-unsplash.jpg';

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];
import aboutImage from '../public/campaign-creators-e6n7uoEnYbA-unsplash.jpg';

export default function HomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const nextHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <>
      <SEO
        title="Netsys Infotech - IT Services & Solutions"
        description="Transform your business with Netsys Infotech's cutting-edge IT services. From cloud migration to cybersecurity, we deliver transparent, reliable solutions."
      />

      {/* Hero Section */}
      <header className="relative bg-secondary pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white space-y-8">
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full border border-white/20">
              <span className="text-accent font-bold mr-2">New</span>
              <span className="text-sm font-medium">Professional IT Services</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
              We Provide <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#26c6da]">Netsys Infotech</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Transform your business with cutting-edge IT services. From cloud migration to cybersecurity, we deliver transparent, reliable solutions that drive growth.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/5 group">
              <img src={heroImages[currentHeroIndex]} alt="IT Services" className="w-full h-auto transition-all duration-500 ease-in-out" />

              <button
                onClick={prevHeroImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextHeroImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* Floating Badges */}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Our Awesome Services" title="We Are Dedicated To Serve You All Time." align="center" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ServiceCard
              icon={Monitor}
              title="Managed IT Services"
              desc="Ensure an up-to-date, efficient IT network for your company."
              link="/services/managed-it"
              image={managedItImg}
            />
            <ServiceCard
              icon={Shield}
              title="IT Consulting Planning"
              desc="At IT Solutions, we provide our clients with proactive."
              link="/services/it-consultancy"
              image={itConsultingImg}
            />
            <ServiceCard
              icon={CheckCircle}
              title="IT Compliance Services"
              desc="We can work with just about any setup, including our own."
              link="/services/security-compliance"
              image={complianceImg}
            />
            <ServiceCard
              icon={Server}
              title="Business Cloud Services"
              desc="We work with your staff to keep your IT functioning as smoothly."
              link="/services/cloud-migration"
              image={cloudServicesImg}
            />
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 transition-all duration-500">
            {[
              "Innotatzit",
              "Wondersoft",
              "Sutherland global service",
              "Highmoon",
              "HCL"
            ].map((client, index) => (
              <span key={index} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-secondary transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img src={aboutImage} alt="Office working" className="w-full h-auto object-cover" />
              </div>


            </div>

            <div className="space-y-8">
              <SectionTitle subtitle="About Netsys Infotech" title="Your Trusted Technology Partner" align="left" />
              <p className="text-lg text-[#666666]">
                Netsys Infotech is a leading IT services provider committed to delivering transparent, reliable, and innovative solutions. We help businesses navigate digital transformation.
              </p>

              <div className="space-y-4">
                {[
                  "Proven track record with Fortune 500 companies",
                  "Agile methodology for flexible delivery",
                  "Transparent pricing with no hidden costs",
                  "Dedicated support team available 24/7"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle size={14} />
                    </div>
                    <span className="font-bold text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-8">
                <Button variant="primary">Discover More</Button>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white animate-pulse">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold">Call Us Now</span>
                    <span className="block text-secondary font-bold text-xl">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-20 relative">
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
              name="Sarah Mitchell"
              role="CTO, TechVision Corp"
              text="Netsys Infotech transformed our entire infrastructure. Their cloud migration service was seamless, and we've seen a 40% reduction in operational costs."
            />
            <TestimonialCard
              name="James Rodriguez"
              role="IT Director, FinanceFlow"
              text="The DevOps implementation has revolutionized our development cycle. We now deploy features 3x faster with zero downtime."
            />
            <TestimonialCard
              name="Emily Chen"
              role="CEO, HealthTech Solutions"
              text="Their security compliance service helped us achieve HIPAA certification in record time. The attention to detail gave us complete confidence."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Looking for the Best IT Business Solutions?</h2>
          <Button variant="white" className="text-primary">Contact Us Today</Button>
        </div>
      </div>
    </>
  );
}
