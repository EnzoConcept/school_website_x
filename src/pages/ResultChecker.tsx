import React from 'react';
import { motion } from 'motion/react';
import { Key, Search, FileText, Download, AlertCircle } from 'lucide-react';

export default function ResultChecker() {
  const [checking, setChecking] = React.useState(false);
  const [result, setResult] = React.useState<any>(null);
  const [studentId, setStudentId] = React.useState('');
  const [error, setError] = React.useState('');

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setChecking(true);
    setError('');
    try {
      const response = await fetch(`/api/results/${encodeURIComponent(studentId)}`);
      if (response.ok) {
        const data = await response.json();
        setResult({
          student: data.studentName,
          class: data.className,
          term: data.term,
          gpa: data.gpa,
          status: data.status,
          subjects: data.subjects
        });
      } else {
        setError('Result not found. Please check your Student ID.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy mb-4">Result Checker Portal</h1>
            <p className="text-gray-600">Enter your Student ID and PIN to view academic performance.</p>
          </div>

          {!result ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100"
            >
              <form onSubmit={handleCheck} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Student ID</label>
                  <input 
                    required
                    type="text" 
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="LK/2024/001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Result PIN</label>
                  <div className="relative">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      required
                      type="password" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}
                <div className="p-4 bg-gold/10 rounded-xl flex items-start">
                  <AlertCircle className="text-gold mr-3 shrink-0" size={20} />
                  <p className="text-xs text-navy/80">PINs can be obtained from the school bursary after fee clearance.</p>
                </div>
                <button 
                  disabled={checking}
                  type="submit" 
                  className="w-full btn-primary py-4 flex items-center justify-center"
                >
                  {checking ? 'Verifying PIN...' : <><Search size={20} className="mr-2" /> Check Result</>}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[40px] shadow-2xl overflow-hidden"
            >
              <div className="bg-navy p-8 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{result.student}</h2>
                  <p className="text-gold text-sm">{result.class} • {result.term}</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs uppercase text-gray-400">Status</span>
                  <span className="text-green-400 font-bold">{result.status}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 font-bold text-navy">Subject</th>
                        <th className="py-4 font-bold text-navy">Score</th>
                        <th className="py-4 font-bold text-navy">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {result.subjects.map((s: any, i: number) => (
                        <tr key={i}>
                          <td className="py-4 text-gray-700">{s.name}</td>
                          <td className="py-4 font-bold text-navy">{s.score}</td>
                          <td className="py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${s.grade === 'A' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                              {s.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-10 pt-8 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Average GPA:</span>
                    <span className="ml-2 text-2xl font-bold text-navy">{result.gpa}</span>
                  </div>
                  <button className="btn-outline flex items-center py-2 px-4 text-sm">
                    <Download size={18} className="mr-2" /> Download PDF
                  </button>
                </div>
                <button onClick={() => { setResult(null); setStudentId(''); }} className="mt-8 text-navy font-bold text-sm hover:text-gold">Check Another Result</button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
