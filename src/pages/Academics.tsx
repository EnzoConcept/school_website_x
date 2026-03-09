import React from 'react';
import { motion } from 'motion/react';
import { Book, FlaskConical, Palette, Briefcase, Laptop, Music, Microscope, Users, CheckCircle2 } from 'lucide-react';

export default function Academics() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-gold text-xl">Nurturing Intellectual Excellence</p>
        </div>
      </section>

      {/* Junior Secondary */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Junior Secondary School (JSS 1-3)</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Junior Secondary program focuses on building a solid foundation in core subjects while introducing students to a wide range of academic disciplines. We emphasize critical thinking and effective communication.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "English Language", "Mathematics", "Basic Science", 
                  "Social Studies", "Computer Studies", "Business Studies",
                  "Civic Education", "Physical Education"
                ].map((subject, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    {subject}
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
                alt="Junior students" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Senior Secondary */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Senior Secondary School (SSS 1-3)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Students specialize in their areas of interest, preparing for higher education and future careers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FlaskConical size={40} />, 
                title: "Science Department", 
                subjects: ["Physics", "Chemistry", "Biology", "Further Maths", "Agricultural Science"],
                color: "bg-blue-50 text-blue-600"
              },
              { 
                icon: <Palette size={40} />, 
                title: "Arts Department", 
                subjects: ["Literature-in-English", "Government", "CRS/IRS", "History", "Fine Arts"],
                color: "bg-purple-50 text-purple-600"
              },
              { 
                icon: <Briefcase size={40} />, 
                title: "Commercial Department", 
                subjects: ["Financial Accounting", "Commerce", "Economics", "Insurance", "Office Practice"],
                color: "bg-green-50 text-green-600"
              }
            ].map((dept, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-20 h-20 ${dept.color} rounded-2xl flex items-center justify-center mb-8`}>
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-6">{dept.title}</h3>
                <ul className="space-y-3">
                  {dept.subjects.map((s, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <Book size={16} className="mr-3 text-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Our Teaching Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { 
                  icon: <Users className="text-gold" />, 
                  title: "Student-Centered Learning", 
                  desc: "We focus on individual student needs, encouraging active participation and personalized growth." 
                },
                { 
                  icon: <Microscope className="text-gold" />, 
                  title: "Practical Lab Sessions", 
                  desc: "Science and technical subjects are reinforced with hands-on experiments in our modern laboratories." 
                },
                { 
                  icon: <Laptop className="text-gold" />, 
                  title: "Technology-Enhanced Lessons", 
                  desc: "We integrate digital tools and interactive media to make learning more engaging and relevant." 
                },
                { 
                  icon: <CheckCircle2 className="text-gold" />, 
                  title: "Continuous Assessment", 
                  desc: "Regular testing and feedback ensure students stay on track and master every concept." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="mr-6 shrink-0">
                    <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

