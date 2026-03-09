import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-navy text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone size={14} className="mr-1 text-gold" /> 0702 502 0202</span>
            <span className="flex items-center"><Mail size={14} className="mr-1 text-gold" /> info@lollykaycollege.edu.ng</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/portal" className="hover:text-gold transition-colors">Parent Portal</Link>
            <Link to="/portal" className="hover:text-gold transition-colors">Student Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold font-bold text-xl border-2 border-gold">
              LK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-navy text-xl leading-tight">LOLLY-KAY</span>
              <span className="text-xs font-medium tracking-widest text-gold uppercase">College</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "nav-link relative py-2",
                  location.pathname === link.path && "text-navy font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admissions" className="btn-primary py-2 px-4 text-sm">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium text-gray-700 hover:text-navy",
                    location.pathname === link.path && "text-navy font-bold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link to="/portal" className="text-navy font-medium">Portal Login</Link>
                <Link to="/admissions" className="btn-primary text-center">Apply Now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
