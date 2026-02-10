import { Code, Layout, Database, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import webAppImage from '../../public/unnamed.jpg';

export default function WebAppDevelopment(): JSX.Element {
  return (
    <div>
      <SEO
        title="Web & App Development - CrystalSoft"
        description="Custom web and mobile application development services including Front-End, Back-End, and Full-Stack solutions."
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
                <Code className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Web & App Development</h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build robust, scalable, and high-performance web and mobile applications tailored to your unique business requirements.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <img
                src={webAppImage}
                alt="Web & App Development"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Development Expertise</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Layout size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Front-End Development</h3>
                <p className="text-gray-600 mb-6">
                  Creating engaging, responsive, and intuitive user interfaces using modern frameworks like React, Vue, and Angular.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-blue-500 mr-2" /> Responsive Design</li>
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-blue-500 mr-2" /> SPA & PWA</li>
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-blue-500 mr-2" /> Interactive UX</li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Back-End Development</h3>
                <p className="text-gray-600 mb-6">
                  Building secure, scalable, and efficient server-side logic, APIs, and database architectures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-sky-500 mr-2" /> API Development</li>
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-sky-500 mr-2" /> Database Design</li>
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-sky-500 mr-2" /> GraphicQL & REST</li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Stack Development</h3>
                <p className="text-gray-600 mb-6">
                  End-to-end development solutions covering both client-side and server-side focusing on performance and scalability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-indigo-500 mr-2" /> End-to-End Solutions</li>
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-indigo-500 mr-2" /> Rapid Prototyping</li>
                  <li className="flex items-center text-sm text-gray-500"><CheckCircle size={16} className="text-indigo-500 mr-2" /> Maintenance & Support</li>
                </ul>
              </FadeIn>
            </div>

            <div className="mt-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Development Services?</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We leverage the latest technologies and best practices to deliver software that is secure, reliable, and built to scale. From simple websites to complex enterprise applications, we have you covered.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Agile Methodology</h3>
                        <p className="text-gray-600">Iterative development for faster time-to-market</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance</h3>
                        <p className="text-gray-600">Rigorous testing to ensure bug-free deliverables</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl relative border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Our Tech Stack</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg text-center font-semibold text-gray-600">React / Next.js</div>
                      <div className="p-4 bg-gray-50 rounded-lg text-center font-semibold text-gray-600">Node.js</div>
                      <div className="p-4 bg-gray-50 rounded-lg text-center font-semibold text-gray-600">Python / Django</div>
                      <div className="p-4 bg-gray-50 rounded-lg text-center font-semibold text-gray-600">PostgreSQL</div>
                    </div>
                    <div className="mt-6 text-center">
                      <button className="text-blue-600 font-bold flex items-center justify-center mx-auto hover:text-blue-700">
                        View Full Tech Stack <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Inclusive Design & Holistic Digital Branding</h2>
                <p className="text-xl text-gray-600">Ensuring your products are accessible, beautifully branded, and continuously optimized for long-term success.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility and Responsive Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensuring your digital products are inclusive, meeting WCAG standards, and providing a fluid experience across all screen sizes and devices.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Web and App Branding</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Crafting a unique and consistent visual language that builds trust, enhances recognition, and strengthens your brand's presence in the digital marketplace.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Design Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Offering dedicated post-launch design expertise to iterate on user feedback, implement new features, and maintain a high-quality user experience.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-8">Start Your Digital Project</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to build something amazing? Our team is ready to bring your vision to life with cutting-edge technology.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all text-white">
            Start a Project <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
