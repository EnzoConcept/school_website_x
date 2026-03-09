import React from 'react';
import { motion } from 'motion/react';
import { Camera, Microscope, Trophy, School, Filter } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = React.useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: <Camera size={18} /> },
    { id: 'facilities', name: 'Facilities', icon: <School size={18} /> },
    { id: 'labs', name: 'Science Labs', icon: <Microscope size={18} /> },
    { id: 'sports', name: 'Sports', icon: <Trophy size={18} /> },
    { id: 'events', name: 'Events', icon: <Filter size={18} /> },
  ];

  const images = [
    { url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800", category: 'facilities', title: 'Main Campus' },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", category: 'facilities', title: 'Modern Classrooms' },
    { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800", category: 'labs', title: 'Chemistry Lab' },
    { url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", category: 'labs', title: 'Biology Session' },
    { url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800", category: 'sports', title: 'Inter-house Sports' },
    { url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", category: 'sports', title: 'Football Team' },
    { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", category: 'events', title: 'Graduation Day' },
    { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", category: 'events', title: 'Music Concert' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="bg-white">
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Professional Gallery</h1>
          <p className="text-gold text-xl">Showcasing Our Facilities & Excellence</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center px-6 py-3 rounded-full font-bold transition-all ${
                  filter === cat.id 
                    ? 'bg-gold text-navy shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative h-72 overflow-hidden rounded-2xl shadow-md"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{img.title}</h3>
                    <p className="text-gold text-xs uppercase tracking-widest">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
