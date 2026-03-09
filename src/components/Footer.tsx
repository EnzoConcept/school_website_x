import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy font-bold text-lg">
                LK
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-lg leading-tight">LOLLY-KAY</span>
                <span className="text-[10px] font-medium tracking-widest text-gold uppercase">College</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Building future leaders through academic excellence and character development. Located in the heart of Mafoluku, Oshodi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-gold/30 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/admissions/apply" className="hover:text-gold transition-colors">Online Admission</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">School Gallery</Link></li>
              <li><Link to="/news" className="hover:text-gold transition-colors">Latest News</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">School Calendar</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-gold/30 pb-2">Portals</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/portal" className="hover:text-gold transition-colors">Parent Portal</Link></li>
              <li><Link to="/portal/results" className="hover:text-gold transition-colors">Result Checker</Link></li>
              <li><Link to="/portal" className="hover:text-gold transition-colors">Student Portal</Link></li>
              <li><Link to="/staff-dashboard" className="hover:text-gold transition-colors">Staff Dashboard</Link></li>
              <li><Link to="/alumni" className="hover:text-gold transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-gold/30 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold shrink-0" />
                <span>34 Makinde Street, Mafoluku, Oshodi, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold shrink-0" />
                <span>0702 502 0202</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold shrink-0" />
                <span>info@lollykaycollege.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Lolly-Kay College. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
