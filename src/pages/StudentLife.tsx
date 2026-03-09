import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Music, Mic2, Laptop, Palette, Dumbbell, Globe } from 'lucide-react';

export default function StudentLife() {
  const activities = [
    { 
      category: "Sports", 
      icon: <Dumbbell />, 
      items: ["Football", "Basketball", "Athletics", "Table Tennis"],
      img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=600"
    },
    { 
      category: "Clubs & Societies", 
      icon: <Globe />, 
      items: ["Debate Club", "Press Club", "Science Club", "ICT Club"],
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
    },
    { 
      category: "Creative Arts", 
      icon: <Music />, 
      items: ["Music & Choir", "Drama & Dance", "Fine Arts", "Photography"],
      img: "https://images.unsplash.com/photo-1514525253361-bee8718a34e1?auto=format&fit=crop&q=80&w=600"
    },
    { 
      category: "Leadership", 
      icon: <Trophy />, 
      items: ["Prefect Council", "Jet Club", "Red Cross", "Scouts"],
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Student Life</h1>
          <p className="text-gold text-xl">Beyond Academics: Developing the Total Child</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-navy mb-6">A Vibrant Community</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Students at Lolly-Kay College participate in a wide range of extracurricular activities that build teamwork, creativity, and leadership. We believe that learning happens everywhere—on the field, on the stage, and in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activities.map((act, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl h-[400px]"
              >
                <img 
                  src={act.img} 
                  alt={act.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <div className="w-12 h-12 bg-gold text-navy rounded-xl flex items-center justify-center mb-6">
                    {act.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{act.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {act.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-navy rounded-[40px] overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-white mb-6">Take a Virtual Tour</h2>
                <p className="text-gray-300 mb-10 text-lg">
                  Explore our modern classrooms, science laboratories, and sports facilities from the comfort of your home.
                </p>
                <button className="btn-secondary w-fit flex items-center">
                  <Mic2 size={20} className="mr-2" /> Watch Video Tour
                </button>
              </div>
              <div className="relative h-[400px] lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" 
                  alt="School campus" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-16 h-16 bg-gold text-navy rounded-full flex items-center justify-center pl-1">
                      <Trophy size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
