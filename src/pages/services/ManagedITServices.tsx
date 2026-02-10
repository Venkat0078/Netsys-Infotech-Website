import { Server, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import managedImage from '../../public/unnamed (1).jpg';

export default function ManagedITServices(): JSX.Element {
  return (
    <div>
      <SEO
        title="Managed IT Services - CrystalSoft"
        description="Proactive managed IT services to keep your business running smoothly and efficiently."
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
                <Server className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Managed IT Services</h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Focus on your core business while we handle your IT operations with our proactive and reliable managed services.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <img
                src={managedImage}
                alt="Managed IT Services"
                className="w-full h-96 object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Reliable IT Operations</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our managed IT services ensure your systems are always up, secure, and performing at their best, allowing you to drive business growth without technical distractions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">24/7 Monitoring</h3>
                      <p className="text-gray-600">Round-the-clock surveillance of your IT infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Proactive Maintenance</h3>
                      <p className="text-gray-600">Prevent issues before they impact your business</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Help Desk Support</h3>
                      <p className="text-gray-600">Responsive support for your team's technical needs</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-blue-100 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Offerings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Network and server management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Data backup and disaster recovery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Endpoint security and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Vendor management and procurement</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic IT Guidance & Managed Automation</h2>
                <p className="text-xl text-gray-600">Aligning technology with your business vision through expert strategy and modern automation.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive IT consulting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Providing expert advice to anticipate future technology needs and align IT strategies with business objectives before issues arise.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">IT roadmap and budgeting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Developing a clear long-term technology vision with detailed financial planning to ensure sustainable and predictable IT investments.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">IT compliance and governance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensuring your IT systems adhere to industry standards and regulations while maintaining robust internal controls and best practices.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Managed automation and no-code platforms</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Empowering your team to streamline workflows and build internal tools using low-code/no-code solutions under expert management.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
