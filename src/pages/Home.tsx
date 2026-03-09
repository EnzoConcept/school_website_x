import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Cpu, 
  ShieldCheck, 
  Calendar, 
  Star,
  Play
} from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920" 
            alt="Students learning" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-gold text-navy font-bold text-sm uppercase tracking-widest rounded-full mb-6">
              Welcome to Lolly-Kay College
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Future Leaders Through <span className="text-gold">Academic Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              At Lolly-Kay College, we nurture confident, disciplined, and academically strong students prepared for the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-secondary flex items-center">
                Apply for Admission <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                Book a School Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
                alt="School building" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Welcome to Lolly-Kay College</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lolly-Kay College is a dynamic secondary school located in Mafoluku, Oshodi, Lagos. Our mission is to provide high-quality education that develops academic excellence, strong character, leadership skills, and global awareness.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine strong academics with sports, arts, leadership programs, and modern learning methods to help every student reach their full potential.
              </p>
              <Link to="/about" className="text-navy font-bold flex items-center hover:text-gold transition-colors">
                Learn more about our history <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Parents Choose Lolly-Kay</h2>
            <p className="text-gray-600">We provide a holistic learning experience that goes beyond the classroom.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <BookOpen className="text-gold" size={32} />, 
                title: "Excellent Academic Results", 
                desc: "Our students consistently perform well in national examinations." 
              },
              { 
                icon: <Users className="text-gold" size={32} />, 
                title: "Qualified Teachers", 
                desc: "Experienced and dedicated educators guide every student." 
              },
              { 
                icon: <Cpu className="text-gold" size={32} />, 
                title: "Modern Learning Environment", 
                desc: "Technology and innovative teaching methods enhance learning." 
              },
              { 
                icon: <ShieldCheck className="text-gold" size={32} />, 
                title: "Character & Leadership", 
                desc: "We develop disciplined, confident, and responsible students." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-gold"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Preview */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Academic Programs</h2>
              <p className="text-gray-300">Tailored educational pathways for every stage of your child's development.</p>
            </div>
            <Link to="/academics" className="btn-secondary">Explore All Programs</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Junior Secondary", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600" },
              { title: "Senior Secondary", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" },
              { title: "Science & Arts", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" }
            ].map((program, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl h-80">
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <Link to="/academics" className="text-gold text-sm font-bold flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-navy">Upcoming Events</h2>
            <Link to="/events" className="text-navy font-bold flex items-center">
              View Full Calendar <Calendar size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { date: "April 12", title: "Open Day", time: "10:00 AM - 2:00 PM" },
              { date: "May 8", title: "Inter-House Sports", time: "All Day" },
              { date: "June 5", title: "Entrance Examination", time: "9:00 AM" },
              { date: "July 20", title: "Graduation Ceremony", time: "11:00 AM" }
            ].map((event, idx) => (
              <div key={idx} className="flex items-center p-6 bg-gray-50 rounded-xl border-l-4 border-gold">
                <div className="bg-navy text-white p-4 rounded-lg text-center min-w-[100px] mr-6">
                  <span className="block text-xs uppercase font-bold text-gold">{event.date.split(' ')[0]}</span>
                  <span className="block text-2xl font-bold">{event.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-1">{event.title}</h3>
                  <p className="text-gray-500 text-sm">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Parents Say</h2>
            <p className="text-gold font-medium uppercase tracking-widest text-sm">Trusted by families across Lagos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Lolly-Kay College has helped my child grow academically and morally. The teachers are dedicated and the environment is excellent.",
                author: "Mr. & Mrs. Adebayo",
                grade: "Parents of JSS3 Student",
                initials: "PA"
              },
              {
                quote: "The focus on character development alongside academics is what sets Lolly-Kay apart. My daughter is more confident and disciplined than ever.",
                author: "Mrs. Chioma Okoro",
                grade: "Parent of SSS2 Student",
                initials: "CO"
              },
              {
                quote: "We are impressed with the modern facilities and the quality of teaching. The transition to secondary school was seamless for our son.",
                author: "Mr. Ibrahim Musa",
                grade: "Parent of JSS1 Student",
                initials: "IM"
              },
              {
                quote: "Excellent results in WAEC and NECO. Lolly-Kay prepared my son perfectly for university. I highly recommend this school.",
                author: "Dr. Sarah Williams",
                grade: "Parent of SSS3 Student",
                initials: "SW"
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
              >
                <Star className="text-gold mb-6" size={24} fill="currentColor" />
                <p className="text-white text-lg italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full mr-4 flex items-center justify-center font-bold text-navy text-sm">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold">{t.author}</p>
                    <p className="text-gold text-xs">{t.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Ready to Start Your Child's Journey?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="btn-primary">Apply for Admission</Link>
            <Link to="/contact" className="btn-outline border-navy text-navy hover:bg-navy hover:text-white">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
