import { GitBranch, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import devopsImage from '../../public/DevOps-Service-Providers_-Streamline-Operations-While-Facilitating-Efficiency.jpg';

export default function DevOpsImplementation(): JSX.Element {
  return (
    <div>
      <SEO
        title="DevOps Implementation Services - CrystalSoft"
        description="Streamline your development and operations with our expert DevOps implementation services."
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
                <GitBranch className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">DevOps Implementation</h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline your development and operations with automated workflows, faster deployments, and enhanced collaboration across your teams.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <img
                src={devopsImage}
                alt="DevOps Workflow"
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Accelerate Your Development Cycle</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Modern DevOps practices enable organizations to deploy faster, more reliably, and with greater confidence. We implement industry-leading practices tailored to your environment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Faster Deployments</h3>
                      <p className="text-gray-600">Reduce time-to-market significantly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Improved Reliability</h3>
                      <p className="text-gray-600">Consistent and predictable releases</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Enhanced Collaboration</h3>
                      <p className="text-gray-600">Better communication between teams</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-blue-100 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Offerings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">CI/CD pipeline setup and automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Infrastructure as Code deployment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Containerization with Docker and Kubernetes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Monitoring and logging implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">GitOps and version control optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">Security and compliance automation</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Implement DevOps?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you build a modern, automated development pipeline.
            </p>
            <button className="px-8 py-4 bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
