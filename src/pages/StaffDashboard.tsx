import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  Check, 
  X, 
  Clock,
  MoreVertical,
  Search,
  Filter,
  Bell
} from 'lucide-react';

interface Application {
  id: string;
  name: string;
  class: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
}

export default function StaffDashboard() {
  const [activeTab, setActiveTab] = React.useState<'applications' | 'events'>('applications');
  const [applications, setApplications] = React.useState<Application[]>([]);
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [appsRes, eventsRes] = await Promise.all([
        fetch('/api/applications'),
        fetch('/api/events')
      ]);
      const apps = await appsRes.json();
      const evs = await eventsRes.json();
      setApplications(apps);
      setEvents(evs);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const [showEventForm, setShowEventForm] = React.useState(false);
  const [newEvent, setNewEvent] = React.useState({ title: '', date: '', category: 'Academic' });

  const updateAppStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        setApplications(apps => apps.map(app => app.id === id ? { ...app, status } : app));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent)
      });
      if (response.ok) {
        const addedEvent = await response.json();
        setEvents([...events, addedEvent]);
        setShowEventForm(false);
        setNewEvent({ title: '', date: '', category: 'Academic' });
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setEvents(events.filter(e => e.id !== id));
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white hidden lg:flex flex-col">
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm">LK</div>
            <span className="font-display font-bold text-lg tracking-tight">Staff Portal</span>
          </div>
        </div>
        
        <nav className="flex-grow p-6 space-y-2">
          <button 
            onClick={() => setActiveTab('applications')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'applications' ? 'bg-gold text-navy font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <FileText size={20} />
            <span>Applications</span>
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'events' ? 'bg-gold text-navy font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <Calendar size={20} />
            <span>Manage Events</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5">
            <Users size={20} />
            <span>Students</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="p-6 border-t border-white/10">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Header */}
        <header className="bg-white border-b h-20 flex items-center justify-between px-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-navy">
              {activeTab === 'applications' ? 'Admission Applications' : 'School Events'}
            </h1>
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold">
              {activeTab === 'applications' ? `${applications.length} Total` : `${events.length} Scheduled`}
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <button className="relative text-gray-400 hover:text-navy transition-colors">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center space-x-3 border-l pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-navy">Admin Staff</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Registrar</p>
              </div>
              <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold">AS</div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-12 h-12 border-4 border-gold border-t-navy rounded-full animate-spin"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
            {activeTab === 'applications' ? (
              <motion.div 
                key="apps"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b flex justify-between items-center">
                    <h3 className="font-bold text-navy">Recent Submissions</h3>
                    <button className="text-gold text-sm font-bold flex items-center hover:underline">
                      <Filter size={16} className="mr-2" /> Filter List
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-50 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                          <th className="px-6 py-4">Application ID</th>
                          <th className="px-6 py-4">Student Name</th>
                          <th className="px-6 py-4">Class</th>
                          <th className="px-6 py-4">Date</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {applications.map((app) => (
                          <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4 font-mono text-xs text-gray-500">{app.id}</td>
                            <td className="px-6 py-4 font-bold text-navy">{app.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{app.class}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{app.date}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                app.status === 'approved' ? 'bg-green-100 text-green-600' :
                                app.status === 'rejected' ? 'bg-red-100 text-red-600' :
                                'bg-yellow-100 text-yellow-600'
                              }`}>
                                {app.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end space-x-2">
                                {app.status === 'pending' && (
                                  <>
                                    <button 
                                      onClick={() => updateAppStatus(app.id, 'approved')}
                                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                      title="Approve"
                                    >
                                      <Check size={18} />
                                    </button>
                                    <button 
                                      onClick={() => updateAppStatus(app.id, 'rejected')}
                                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                      title="Reject"
                                    >
                                      <X size={18} />
                                    </button>
                                  </>
                                )}
                                <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                                  <MoreVertical size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="events"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-navy">Manage School Calendar</h3>
                  <button 
                    onClick={() => setShowEventForm(true)}
                    className="btn-primary flex items-center py-2"
                  >
                    <Plus size={20} className="mr-2" /> Post New Event
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event) => (
                    <div key={event.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative group">
                      <button 
                        onClick={() => deleteEvent(event.id)}
                        className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <X size={18} />
                      </button>
                      <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-4">
                        <Calendar size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">{event.category}</span>
                      <h4 className="text-lg font-bold text-navy mb-4">{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-2" /> {event.date}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Event Form Modal */}
                <AnimatePresence>
                  {showEventForm && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowEventForm(false)}
                        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
                      ></motion.div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white w-full max-w-md rounded-[40px] shadow-2xl relative z-10 overflow-hidden"
                      >
                        <div className="bg-navy p-8 text-white">
                          <h3 className="text-2xl font-bold">Post New Event</h3>
                          <p className="text-gold text-sm">Fill in the details below</p>
                        </div>
                        <form onSubmit={handleAddEvent} className="p-8 space-y-6">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Event Title</label>
                            <input 
                              required
                              type="text" 
                              value={newEvent.title}
                              onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-gold"
                              placeholder="e.g. Inter-House Sports"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                              <input 
                                required
                                type="date" 
                                value={newEvent.date}
                                onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-gold"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                              <select 
                                value={newEvent.category}
                                onChange={e => setNewEvent({...newEvent, category: e.target.value})}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-gold bg-white"
                              >
                                <option>Academic</option>
                                <option>Sports</option>
                                <option>Holiday</option>
                                <option>Celebration</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-4 pt-4">
                            <button type="button" onClick={() => setShowEventForm(false)} className="btn-outline flex-1">Cancel</button>
                            <button type="submit" className="btn-primary flex-1">Post Event</button>
                          </div>
                        </form>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
          )}
        </div>
      </main>
    </div>
  );
}
