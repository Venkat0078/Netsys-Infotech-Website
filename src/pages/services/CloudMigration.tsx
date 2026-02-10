import { Cloud, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import cloudImage from '../../public/GettyImages-1182014860.jpg';

export default function CloudMigration(): JSX.Element {
  return (
    <div>
      <SEO
        title="Cloud Migration Services - CrystalSoft"
        description="Seamless cloud migration services to modernize your infrastructure and improve scalability."
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
                <Cloud className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Cloud Migration</h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Seamlessly migrate your legacy systems to the cloud with our expert guidance, ensuring minimal downtime and maximum scalability.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <img
                src={cloudImage}
                alt="Cloud Migration"
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Modernize Your Infrastructure</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Move your business forward with our comprehensive cloud migration strategies. We help you leverage the full power of cloud computing to drive innovation and efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Seamless Transition</h3>
                      <p className="text-gray-600">Zero-downtime migration strategies for critical systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Cost Optimization</h3>
                      <p className="text-gray-600">Optimize cloud resource usage to reduce operational costs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Scalable Architecture</h3>
                      <p className="text-gray-600">Design systems that grow with your business needs</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-blue-100 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Offerings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Cloud readiness assessment, migration and modernisation services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Lift-and-shift and re-platforming services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Hybrid and multi-cloud strategy implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Identity, access and security integration</span>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Cloud Integration Services</h2>
                <p className="text-xl text-gray-600">Reliable and scalable integration solutions to unify your digital infrastructure.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Application and system integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Streamlining communication between diverse software applications and legacy systems to ensure seamless data flow and process automation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Data integration and ETL services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designing and implementing robust Extract, Transform, Load (ETL) pipelines to consolidate data into unified cloud-based warehouses for advanced analytics.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SaaS integration services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connecting your cloud infrastructure with leading SaaS platforms (e.g., Salesforce, HubSpot) to synchronize data and extend your digital ecosystem's capabilities.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud monitoring, observability and cost integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Implementing monitoring solutions for deep visibility into system performance while optimizing cloud spend through real-time cost tracking.
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
