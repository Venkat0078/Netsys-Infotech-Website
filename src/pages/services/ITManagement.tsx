import { Briefcase, CheckCircle, BarChart, Server, Layers, Shield, Users, Target } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import managementImage from '../../public/unnamed.jpg';

export default function ITManagement(): JSX.Element {
  return (
    <div>
      <SEO
        title="IT Management - CrystalSoft"
        description="Strategic IT management services including Strategy, Infrastructure, ITSM, and Leadership."
      />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">IT Management</h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Align your IT strategy with your business goals. We provide comprehensive management solutions to optimize your technology landscape.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <img
                src={managementImage}
                alt="IT Management"
                className="w-full h-96 object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Comprehensive IT Management Solutions</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* IT Strategy and Governance */}
              <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IT Strategy and Governance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Aligning IT initiatives with business objectives to ensure technology drives growth and value.
                </p>
              </FadeIn>

              {/* IT Infrastructure and Operations */}
              <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IT Infrastructure & Operations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensuring a robust, scalable, and reliable foundation for your digital operations.
                </p>
              </FadeIn>

              {/* IT Service Management (ITSM) */}
              <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IT Service Management (ITSM)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamlining service delivery to improve efficiency and user satisfaction.
                </p>
              </FadeIn>

              {/* Security Management (Cybersecurity) */}
              <FadeIn delay={0.4} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proactive cybersecurity strategies to protect your critical assets and data.
                </p>
              </FadeIn>

              {/* Project and Portfolio Management */}
              <FadeIn delay={0.5} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project & Portfolio Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimizing resource allocation and project execution to deliver on-time, on-budget results.
                </p>
              </FadeIn>

              {/* Team Leadership and Talent Management */}
              <FadeIn delay={0.6} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership & Talent</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building and leading high-performing technical teams to drive innovation.
                </p>
              </FadeIn>
            </div>

            {/* Why IT Management is Important */}
            <FadeIn>
              <div className="bg-secondary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Why is IT Management So Important?</h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    Effective IT management is not just about keeping the lights on. It's about transforming technology into a strategic asset that drives competitive advantage.
                    Proper governance, robust security, and strategic alignment enable businesses to agility, reduce risks, and unlock new opportunities for growth.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary flex-shrink-0" /> Streamlined operations and efficiency</li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary flex-shrink-0" /> Reduced operational risks</li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary flex-shrink-0" /> Better alignment with business goals</li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-primary flex-shrink-0" /> Cost optimization and control</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
