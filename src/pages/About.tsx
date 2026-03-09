import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Shield, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Award size={32} />, title: "Excellence", desc: "We strive for the highest standards in everything we do." },
    { icon: <Shield size={32} />, title: "Integrity", desc: "We act with honesty and strong moral principles." },
    { icon: <Users size={32} />, title: "Discipline", desc: "We foster self-control and respect for rules and others." },
    { icon: <Target size={32} />, title: "Leadership", desc: "We empower students to take initiative and inspire others." },
    { icon: <Lightbulb size={32} />, title: "Innovation", desc: "We embrace new ideas and creative problem-solving." }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Lolly-Kay College</h1>
          <p className="text-gold text-lg font-medium tracking-widest uppercase">Excellence • Integrity • Leadership</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 rounded-3xl border-t-8 border-navy"
            >
              <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide a balanced education that develops intellectual excellence, moral integrity, leadership skills, and lifelong learning. We are committed to nurturing the total child, ensuring they are equipped for the challenges of a global society.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-12 rounded-3xl border-t-8 border-gold"
            >
              <div className="w-16 h-16 bg-gold text-white rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be one of the most respected secondary schools in Lagos, producing students who excel academically and contribute positively to society. We envision a community where every student discovers their unique potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400">The pillars that define our school culture and student development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-gold mb-6 flex justify-center">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lolly-Kay College was founded with a clear purpose: to bridge the gap between academic knowledge and character development. Located in the vibrant community of Mafoluku, Oshodi, we have grown from a small vision into a leading institution known for excellence.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our campus provides a serene and conducive environment for learning, equipped with modern facilities that support both academic and extracurricular pursuits. We take pride in our diverse student body and our team of dedicated educators who go above and beyond to ensure student success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-navy mb-2">15+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-navy mb-2">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Graduates</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-navy mb-2">40+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Expert Teachers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-navy mb-2">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Exam Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
