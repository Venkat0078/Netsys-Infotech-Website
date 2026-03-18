import { Briefcase, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import productImage from '../../public/vitaly-gariev-jlMDUC4Gf8g-unsplash.jpg';

export default function ProductManagement(): JSX.Element {
    return (
        <div>
            <SEO
                title="Product Management Services - CrystalSoft"
                description="Comprehensive product management services to align your vision with market needs and drive business growth."
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
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Product Management</h1>
                            </div>
                        </div>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Drive innovation and deliver value through expert product leadership. We help you define, build, and scale products that resonate with your target audience.
                        </p>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 mb-12">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
                            <img
                                src={productImage}
                                alt="Product Management"
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
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Product Excellence</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Transform your product vision into reality with our end-to-end product management expertise. We bridge the gap between business goals, user needs, and technical feasibility.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Market-Driven Strategy</h3>
                                            <p className="text-gray-600">Align product development with market trends and user behavior.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Agile Execution</h3>
                                            <p className="text-gray-600">Iterative development focusing on MVP and continuous improvement.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">User-Centric Design</h3>
                                            <p className="text-gray-600">Prioritizing user experience to maximize engagement and retention.</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2} className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-blue-100 shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Offerings</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                                        <div>
                                            <span className="font-semibold text-gray-900 block">Product Strategy and Planning</span>
                                            <span className="text-gray-700">Defining clear roadmaps, target markets, and long-term product visions.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                                        <div>
                                            <span className="font-semibold text-gray-900 block">Product Development and Execution</span>
                                            <span className="text-gray-700">Managing the full lifecycle, from feature prioritization to prototyping.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                                        <div>
                                            <span className="font-semibold text-gray-900 block">Market Research and Customer Insights</span>
                                            <span className="text-gray-700">Leveraging data to understand trends, competitors, and user needs.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></div>
                                        <div>
                                            <span className="font-semibold text-gray-900 block">Go-to-Market Strategy and Launch</span>
                                            <span className="text-gray-700">Executing comprehensive plans for effective product promotion and market entry.</span>
                                        </div>
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
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">End-to-End Product Lifecycle & Strategy</h2>
                                <p className="text-xl text-gray-600">From initial discovery to post-launch optimization, we provide comprehensive product management that drives market success.</p>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FadeIn delay={0.1}>
                                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Product discovery and ideation</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Uncovering market opportunities and brainstorming innovative solutions that solve real-world user problems.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Product strategy and roadmap</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Defining the long-term vision and creating a prioritized, actionable plan to achieve business objectives.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Market, user and competitive research</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Deeply understanding the landscape, user needs, and competitor strengths to inform product decisions.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Backlog management</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Maintaining a refined and prioritized list of features and tasks to ensure the team is always working on the most valuable items.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.5}>
                                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Product analytics</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Leveraging data-driven insights to measure performance, understand user behavior, and drive continuous improvement.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.6}>
                                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Proof of concept and prototypes</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Rapidly building and testing core functionalities to validate assumptions and explore design possibilities.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.7}>
                                <div className="md:col-span-2 lg:col-span-1">
                                    <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow group h-full">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                            <CheckCircle className="text-blue-600 group-hover:text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Market and ship MVP</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Strategically launching a Minimum Viable Product to gather user feedback and iterate quickly based on real-world usage.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.8}>
                                <div className="md:col-span-2 lg:col-span-2">
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col justify-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                            <CheckCircle className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">End-to-End Product Management</h3>
                                        <p className="text-blue-50 leading-relaxed text-lg">
                                            Experience full-lifecycle oversight from initial concept through development, launch, and ongoing optimization. We ensure your product evolves with the market.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
