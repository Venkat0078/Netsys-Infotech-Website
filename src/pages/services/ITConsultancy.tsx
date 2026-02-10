import { Lightbulb, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import consultancyImage from '../../public/austin-distel-wD1LRb9OeEo-unsplash.jpg';

export default function ITConsultancy(): JSX.Element {
  return (
    <div>
      <SEO
        title="IT Consultancy Services - CrystalSoft"
        description="Expert IT consultancy services to help you navigate digital transformation and achieve your business goals."
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
                <Lightbulb className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">IT Consultancy</h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Strategic technology guidance to align your IT infrastructure with business objectives and drive innovation across your organization.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <img
                src={consultancyImage}
                alt="IT Consultancy Meeting"
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Technology Strategy</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our IT consultancy services help organizations make informed decisions about their technology infrastructure, ensuring every investment delivers measurable business value.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Strategic Planning</h3>
                      <p className="text-gray-600">Develop comprehensive IT roadmaps aligned with business goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Expert Assessment</h3>
                      <p className="text-gray-600">In-depth evaluation of current systems and recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">ROI Optimization</h3>
                      <p className="text-gray-600">Maximize returns on technology investments</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-blue-100 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Offerings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Strategic technology planning and roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Digital transformation guidance and execution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Technology assessment and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Cost-benefit analysis and financial modeling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Vendor selection and management strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Change management and adoption planning</span>
                  </li>
                </ul>
              </FadeIn>
            </div>

            <div className="mt-20">
              <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Strategic IT Delivery</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Management</h3>
                    <p className="text-gray-600 text-sm">Change growth and transition IT management for large scale enterprise.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Project Execution</h3>
                    <p className="text-gray-600 text-sm">End to end Project management for complex IT initiatives.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Consultancy</h3>
                    <p className="text-gray-600 text-sm">Agile consultancy support to drive innovation and efficiency.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Agile Implementation</h3>
                    <p className="text-gray-600 text-sm">Safe agile implementation to scale agile practices across the organization.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Technology Strategy?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our expert consultants help you build a technology roadmap that drives business value.
            </p>
            <button className="px-8 py-4 bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
