import { SectionTitle } from '../components/ui/SectionTitle';
import { TeamCard } from '../components/cards/TeamCard';
import SEO from '../components/SEO';
const teamImage1 = "https://images.unsplash.com/photo-xkcg_2YpFJM?auto=format&fit=crop&w=400&q=80";
const teamImage2 = "https://images.unsplash.com/photo-AIIC6wCqkQc?auto=format&fit=crop&w=400&q=80";
const teamImage3 = "https://images.unsplash.com/photo-4wrd0uTOwSg?auto=format&fit=crop&w=400&q=80";
const teamImage4 = "https://images.unsplash.com/photo-7PHq2BCa7dM?auto=format&fit=crop&w=400&q=80";

export default function Team() {
  const team = [
    {
      name: "Alexander Hart",
      role: "CEO & Founder",
      image: teamImage1
    },
    {
      name: "Victoria Chen",
      role: "CTO",
      image: teamImage2
    },
    {
      name: "Marcus Johnson",
      role: "Head of Security",
      image: teamImage3
    },
    {
      name: "Sophie Laurent",
      role: "Lead DevOps Engineer",
      image: teamImage4
    },
    {
      name: "David Patel",
      role: "Solutions Architect",
      image: teamImage1
    },
    {
      name: "Emma Williams",
      role: "UX/UI Lead",
      image: teamImage2
    }
  ];

  return (
    <>
      <SEO
        title="Our Team - CrystalSoft"
        description="Meet the experts behind CrystalSoft. Our team of certified professionals is dedicated to your success."
      />

      {/* Page Header */}
      <header className="relative bg-secondary pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-gray-300">Home / Team</p>
        </div>
      </header>

      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Meet Our Experts" title="We Are Dedicated To Your Success" align="center" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
