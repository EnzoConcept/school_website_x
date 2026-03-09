import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, User, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Portal() {
  const [type, setType] = React.useState<'parent' | 'student'>('parent');

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl overflow-hidden"
      >
        <div className="bg-navy p-10 text-center text-white">
          <div className="w-20 h-20 bg-gold text-navy rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/20">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Portal Access</h1>
          <p className="text-gold text-sm font-medium uppercase tracking-widest">Lolly-Kay College</p>
        </div>

        <div className="p-10">
          <div className="flex bg-gray-100 p-1 rounded-2xl mb-8">
            <button 
              onClick={() => setType('parent')}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${type === 'parent' ? 'bg-white text-navy shadow-sm' : 'text-gray-500 hover:text-navy'}`}
            >
              Parent Portal
            </button>
            <button 
              onClick={() => setType('student')}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${type === 'student' ? 'bg-white text-navy shadow-sm' : 'text-gray-500 hover:text-navy'}`}
            >
              Student Portal
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">
                {type === 'parent' ? 'Parent ID / Email' : 'Student ID / Admission No.'}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder={type === 'parent' ? "P-123456" : "LK/2024/001"}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="password" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <label className="flex items-center text-gray-500 cursor-pointer">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-gold focus:ring-gold" />
                Remember me
              </label>
              <Link to="/portal/results" className="text-navy font-bold hover:text-gold transition-colors">Check Results with PIN</Link>
            </div>

            <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center group">
              Login to Portal <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Don't have access? <a href="#" className="text-navy font-bold hover:text-gold transition-colors">Contact School Registry</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
