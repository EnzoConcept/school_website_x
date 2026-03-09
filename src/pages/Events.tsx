import React from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Events() {
  const [events, setEvents] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">School Calendar</h1>
          <p className="text-gold text-xl">Stay Updated with Lolly-Kay Events</p>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-12 h-12 border-4 border-gold border-t-navy rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Calendar Widget (Mock) */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-3xl p-8 text-white shadow-xl">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">March 2026</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg"><ChevronLeft size={20} /></button>
                    <button className="p-2 hover:bg-white/10 rounded-lg"><ChevronRight size={20} /></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gold mb-4">
                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`p-2 rounded-lg cursor-pointer transition-colors ${i + 1 === 9 ? 'bg-gold text-navy font-bold' : 'hover:bg-white/10'}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <button className="w-full btn-secondary text-sm py-3">Sync with Google Calendar</button>
                </div>
              </div>
            </div>

            {/* Events List */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-navy mb-8">Upcoming Events</h2>
              {events.map((event, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="md:w-48 bg-navy text-white p-8 flex flex-col items-center justify-center text-center">
                    <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2">{event.date.split(' ')[0]}</span>
                    <span className="text-4xl font-bold">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-grow p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-gold/20 text-navy text-[10px] font-bold uppercase rounded-full mb-2">
                          {event.category}
                        </span>
                        <h3 className="text-2xl font-bold text-navy group-hover:text-gold transition-colors">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{event.desc}</p>
                    <div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium">
                      <span className="flex items-center"><Clock size={16} className="mr-2 text-gold" /> {event.time}</span>
                      <span className="flex items-center"><MapPin size={16} className="mr-2 text-gold" /> School Premises</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
