import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, MapPin, BookOpen, Upload, Send, CheckCircle2 } from 'lucide-react';

export default function AdmissionForm() {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    dob: '',
    gender: 'Male',
    phone: '',
    previousSchool: '',
    applyingClass: 'JSS 1'
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          class: formData.applyingClass
        })
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[40px] shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for applying to Lolly-Kay College. We will contact you shortly regarding the entrance examination.
          </p>
          <button onClick={() => window.location.href = '/'} className="btn-primary w-full">Return Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="bg-navy py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Online Admission Form</h1>
          <p className="text-gold">Complete your application in minutes</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0 -translate-y-1/2"></div>
              {[1, 2, 3].map((s) => (
                <div 
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 transition-all ${
                    step >= s ? 'bg-navy text-white' : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-navy mb-8 flex items-center">
                    <User className="mr-3 text-gold" /> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Student's Full Name</label>
                      <input 
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gold" 
                        placeholder="First Middle Last" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                      <input 
                        type="date" 
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gold" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Gender</label>
                      <select 
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gold bg-white"
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Parent/Guardian Phone</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gold" 
                        placeholder="080..." 
                      />
                    </div>
                  </div>
                  <button onClick={nextStep} className="btn-primary mt-10 w-full">Next: Academic History</button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-navy mb-8 flex items-center">
                    <BookOpen className="mr-3 text-gold" /> Academic History
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Previous School Attended</label>
                      <input 
                        type="text" 
                        value={formData.previousSchool}
                        onChange={(e) => setFormData({...formData, previousSchool: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gold" 
                        placeholder="School Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Class Applying For</label>
                      <select 
                        value={formData.applyingClass}
                        onChange={(e) => setFormData({...formData, applyingClass: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gold bg-white"
                      >
                        <option>JSS 1</option>
                        <option>JSS 2</option>
                        <option>SSS 1 (Science)</option>
                        <option>SSS 1 (Arts)</option>
                        <option>SSS 1 (Commercial)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <button onClick={prevStep} className="btn-outline flex-1">Back</button>
                    <button onClick={nextStep} className="btn-primary flex-1">Next: Documents</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-navy mb-8 flex items-center">
                    <Upload className="mr-3 text-gold" /> Document Upload
                  </h3>
                  <div className="space-y-6">
                    <div className="p-8 border-2 border-dashed border-gray-200 rounded-2xl text-center">
                      <Upload className="mx-auto text-gray-400 mb-4" size={32} />
                      <p className="text-sm text-gray-500 mb-4">Upload Birth Certificate & Passport Photo (PDF/JPG)</p>
                      <input type="file" className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="btn-outline py-2 px-4 text-sm cursor-pointer">Choose Files</label>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" id="terms" />
                      <label htmlFor="terms" className="text-sm text-gray-600">I certify that all information provided is accurate and I agree to the school's admission policies.</label>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <button onClick={prevStep} className="btn-outline flex-1">Back</button>
                    <button onClick={handleSubmit} className="btn-secondary flex-1 flex items-center justify-center">
                      <Send size={18} className="mr-2" /> Submit Application
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
