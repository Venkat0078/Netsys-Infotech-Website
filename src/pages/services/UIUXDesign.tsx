import { Palette, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import designImage from '../../public/arlington-research-Kz8nHVg_tGI-unsplash.jpg';

export default function UIUXDesign(): JSX.Element {
  return (
    <div>
      <SEO
        title="UI/UX Design - CrystalSoft"
        description="Create intuitive and engaging user experiences with our expert UI/UX design services."
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
                <Palette className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">UI/UX Design</h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Crafting digital experiences that are not only visually stunning but also intuitive, accessible, and user-centric.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <img
                src={designImage}
                alt="UI/UX Design"
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Design That Delights</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe that great design is about solving problems. Our design process focuses on understanding your users and creating solutions that meet their needs while achieving your business goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">User-Centered Approach</h3>
                      <p className="text-gray-600">Designs based on deep user research and testing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Brand Consistency</h3>
                      <p className="text-gray-600">Maintain a cohesive brand identity across all touchpoints</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Responsive Design</h3>
                      <p className="text-gray-600">Seamless experiences across all devices and screen sizes</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-blue-100 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Offerings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">User research and persona development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Wireframing and interactive prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Visual design and design systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Usability testing and optimization</span>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized UI/UX Solutions & Strategic Design</h2>
                <p className="text-xl text-gray-600">From AI-powered interfaces to conversion-focused landing pages, we provide strategic design solutions that drive business growth.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Information architecture and UX strategy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mapping out complex data structures and defining a long-term user experience vision to ensure products are intuitive and scalable.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Design systems and ui governance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creating comprehensive style guides and reusable components that maintain visual consistency and speed up development across all platforms.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Website UX, CRO and landing pages</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Optimizing website layouts and landing pages to maximize conversion rates and provide a seamless journey for every visitor.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">UX writing and content design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Crafting clear, concise, and helpful copy that guides users through interfaces and strengthens your brand voice.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Product revamp</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Breathing new life into existing digital products by modernizing the interface and refining the user experience based on current market standards.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">UX for Ai and data products</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized design for complex data-driven systems, ensuring that AI-powered interfaces are transparent, understandable, and actionable.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group h-full flex flex-col justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Start up focused Ui/Ux designs</h3>
                    <p className="text-blue-50 leading-relaxed">
                      Rapidly developing high-impact designs for growing businesses, balancing speed-to-market with a premium look and feel.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
