import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

export default function Staff() {
  const leadership = [
    { 
      name: "Dr. Adekunle Kayode", 
      role: "Principal", 
      bio: "Dedicated to academic excellence and character development with over 25 years in educational leadership.",
      specialization: "Educational Management",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Mrs. Funmilayo Bello", 
      role: "Vice Principal (Academic)", 
      bio: "An expert in curriculum development and innovative teaching methods.",
      specialization: "English Language",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Mr. Chukwuma Okafor", 
      role: "Vice Principal (Administration)", 
      bio: "Focuses on school operations, student discipline, and community relations.",
      specialization: "Social Sciences",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Staff</h1>
          <p className="text-gold text-xl">Experienced Educators Shaping the Future</p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">School Leadership</h2>
            <p className="text-gray-600">The visionary team leading Lolly-Kay College towards excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors"></div>
                  <div className="absolute bottom-4 right-4 flex flex-col space-y-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-10 h-10 bg-white text-navy rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                      <Mail size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white text-navy rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-gold font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                <div className="flex items-center text-xs text-gray-500 mb-4 font-medium">
                  <GraduationCap size={16} className="mr-2 text-navy" />
                  {member.specialization}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-8">Our Faculty</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our teaching staff consists of over 40 highly qualified and dedicated educators. Every teacher at Lolly-Kay College is committed to student-centered learning and continuous professional development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-bold text-navy mb-4 text-xl">Academic Excellence</h4>
                <p className="text-gray-600 text-sm">90% of our staff hold advanced degrees in their respective subject areas, ensuring deep knowledge and expertise.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-bold text-navy mb-4 text-xl">Mentorship</h4>
                <p className="text-gray-600 text-sm">Beyond teaching, our staff serve as mentors, guiding students in character development and career choices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
