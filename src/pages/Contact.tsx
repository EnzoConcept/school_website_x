import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gold text-xl">We'd Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-navy mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                Have questions about admissions, our programs, or want to schedule a school tour? Our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600">34 Makinde Street, Mafoluku, Oshodi, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Phone Number</h4>
                    <p className="text-gray-600">0702 502 0202</p>
                    <p className="text-gray-400 text-sm">Mon - Fri, 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Email Address</h4>
                    <p className="text-gray-600">info@lollykaycollege.edu.ng</p>
                    <p className="text-gray-600">admissions@lollykaycollege.edu.ng</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://wa.me/2347025020202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
                >
                  <MessageCircle size={24} className="mr-3" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-navy mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>School Tour</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center">
                  <Send size={20} className="mr-2" /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200">
        {/* In a real app, I'd use a Google Maps iframe here */}
        <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium bg-gray-100">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 text-gold" />
            <p className="text-xl font-bold text-navy">Interactive Map Coming Soon</p>
            <p>34 Makinde Street, Mafoluku, Oshodi, Lagos</p>
          </div>
        </div>
      </section>
    </div>
  );
}
