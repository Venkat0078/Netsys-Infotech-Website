import { SectionTitle } from '../components/ui/SectionTitle';
import { BlogCard } from '../components/cards/BlogCard';
import SEO from '../components/SEO';
import blogImage from '../public/137272_eliminate_infrastructer_blog_image_1200x628.jpg';

export default function Blog() {
  const posts = [
    {
      title: "The Future of Cloud Computing",
      excerpt: "Explore emerging trends in cloud technology and how they'll shape enterprise infrastructure in 2024 and beyond.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Cloud",
      image: blogImage
    },
    {
      title: "Implementing Zero Trust Security",
      excerpt: "A comprehensive guide to implementing zero trust architecture in your organization for enhanced cybersecurity.",
      author: "Mike Chen",
      date: "Dec 10, 2024",
      category: "Security",
      image: blogImage
    },
    {
      title: "DevOps Best Practices for Scaling",
      excerpt: "Learn how successful companies scale their DevOps practices to support rapid growth without compromising quality.",
      author: "Lisa Rodriguez",
      date: "Dec 5, 2024",
      category: "DevOps",
      image: blogImage
    },
    {
      title: "AI-Driven IT Operations",
      excerpt: "Discover how AI and machine learning are revolutionizing IT operations and automating complex tasks.",
      author: "James Wilson",
      date: "Nov 28, 2024",
      category: "AI/ML",
      image: blogImage
    },
    {
      title: "Kubernetes Migration Guide",
      excerpt: "Step-by-step guide to migrating your applications to Kubernetes with minimal downtime.",
      author: "Emma Davis",
      date: "Nov 20, 2024",
      category: "Kubernetes",
      image: blogImage
    },
    {
      title: "Securing Remote Infrastructure",
      excerpt: "Best practices for securing distributed systems and remote infrastructure in a hybrid work environment.",
      author: "Robert Taylor",
      date: "Nov 15, 2024",
      category: "Security",
      image: blogImage
    }
  ];

  return (
    <>
      <SEO
        title="Blog - CrystalSoft Insights"
        description="Stay updated with the latest trends in IT, Cloud Computing, DevOps, and Cybersecurity."
      />

      {/* Page Header */}
      <div className="bg-secondary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest News</h1>
        <p className="text-gray-400">Home / Blog</p>
      </div>

      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Our Blog" title="Latest News & Articles" align="center" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
