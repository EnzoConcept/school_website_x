import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const posts = [
    {
      id: 1,
      title: "Lolly-Kay College Emerges Best in Oshodi Debate Competition",
      excerpt: "Our students showcased exceptional public speaking skills and critical thinking at the regional debate finals...",
      date: "March 5, 2026",
      category: "Achievement",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "New Science Laboratory Commissioned for SSS Students",
      excerpt: "The state-of-the-art facility features modern equipment for Physics, Chemistry, and Biology practicals...",
      date: "Feb 28, 2026",
      category: "Facilities",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Why Lolly-Kay is the Best School in Mafoluku for Your Child",
      excerpt: "Discover the unique blend of academic excellence and character development that makes us stand out...",
      date: "Feb 15, 2026",
      category: "Editorial",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">News & Achievements</h1>
          <p className="text-gold text-xl">Latest Updates from Lolly-Kay College</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={14} className="mr-2" /> {post.date}
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/news/${post.id}`} className="text-navy font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8">Best Secondary School in Mafoluku, Oshodi</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Searching for the <strong>best school in Mafoluku</strong>? Lolly-Kay College has consistently been ranked as a top institution for secondary education in the Oshodi-Isolo region. Our commitment to academic excellence, combined with our state-of-the-art facilities, makes us the preferred choice for parents who want the best for their children.
              </p>
              <p className="mb-6">
                Our curriculum is designed to meet both national and international standards, ensuring that our students are well-prepared for examinations like WAEC, NECO, and JAMB. Beyond academics, we focus on producing well-rounded individuals through our diverse extracurricular programs.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium flex items-center">
                  <Tag size={14} className="mr-2 text-gold" /> Secondary School in Oshodi
                </span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium flex items-center">
                  <Tag size={14} className="mr-2 text-gold" /> Best High School Lagos
                </span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium flex items-center">
                  <Tag size={14} className="mr-2 text-gold" /> Mafoluku Education
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
