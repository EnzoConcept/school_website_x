import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, Calendar, UserCheck, GraduationCap, Download } from 'lucide-react';

export default function Admissions() {
  const steps = [
    { icon: <FileText />, title: "Obtain the Admission Form", desc: "Forms can be collected at the school office or downloaded online." },
    { icon: <CheckCircle2 />, title: "Submit Required Documents", desc: "Submit the completed form along with birth certificate and passport photos." },
    { icon: <Calendar />, title: "Take the Entrance Examination", desc: "Students undergo a comprehensive assessment in core subjects." },
    { icon: <UserCheck />, title: "Receive Admission Offer", desc: "Successful candidates will be notified and given an admission letter." },
    { icon: <GraduationCap />, title: "Complete Enrollment", desc: "Pay the required fees and complete the registration process." }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-gold text-xl">Start Your Child’s Journey at Lolly-Kay College</p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Admission Process</h2>
            <p className="text-gray-600">Five simple steps to join our academic community.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gold/20 relative z-10">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-200 -z-0"></div>
                  )}
                  <h3 className="text-lg font-bold text-navy mb-2">Step {idx + 1}</h3>
                  <p className="text-sm font-bold text-gray-800 mb-2">{step.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-8">Admission Requirements</h2>
              <p className="text-gray-600 mb-8">Please ensure you have the following documents ready for submission:</p>
              <ul className="space-y-4">
                {[
                  "Birth Certificate (Original & Photocopy)",
                  "Previous School Report Cards (Last 2 Years)",
                  "4 Recent Passport Photographs",
                  "Completed Application Form",
                  "Transfer Certificate (for mid-stream admissions)",
                  "Medical Report from a recognized hospital"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-gold mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="btn-primary flex items-center">
                  <Download size={20} className="mr-2" /> Download Prospectus
                </button>
                <Link to="/admissions/apply" className="btn-outline">Apply Online Now</Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" 
                alt="Student writing" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-navy font-bold text-xl">Entrance Exam</p>
                <p className="text-navy/80 font-medium">Next Date: June 5th</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to Join Lolly-Kay College?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We are currently accepting applications for the upcoming academic session. Secure your child's future today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="btn-secondary px-12 py-4 text-lg">Apply Now</button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-navy px-12 py-4 text-lg">Schedule a Visit</button>
          </div>
        </div>
      </section>
    </div>
  );
}
