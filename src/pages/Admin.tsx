import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  Users, Mail, Briefcase, TrendingUp, Settings, LogOut, 
  Calendar, BarChart3, Activity, FolderOpen, Shield
} from 'lucide-react';
import { db } from '../services/database';
import { authService } from '../services/auth';
import toast from 'react-hot-toast';

const Admin: React.FC = () => {
  const [analytics, setAnalytics] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/admin/login');
      return;
    }
    const data = db.getAnalytics();
    setAnalytics(data);
  }, [navigate]);

  // Animation hooks
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Animations
  const headerAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? 'translateY(0px)' : 'translateY(-30px)',
    config: { tension: 300, friction: 30 }
  });

  const statsAnimation = useSpring({
    opacity: statsInView ? 1 : 0,
    transform: statsInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 280, friction: 60 }
  });

  const handleLogout = () => {
    authService.logout();
    toast.success('Logged out successfully!');
    navigate('/admin/login');
  };

  if (!analytics) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-cyan-200 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4 animate-pulse"></div>
          </div>
          <p className="text-white text-lg font-medium">Loading Admin Dashboard...</p>
          <p className="text-gray-300 text-sm mt-2">Preparing your analytics</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
    { id: 'contacts', label: 'Contacts', icon: Users, color: 'from-green-500 to-emerald-500' },
    { id: 'newsletter', label: 'Newsletter', icon: Mail, color: 'from-purple-500 to-pink-500' },
    { id: 'projects', label: 'Projects', icon: Briefcase, color: 'from-orange-500 to-red-500' }
  ];

  const adminSettings = authService.getAdminSettings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Header */}
      <animated.div ref={headerRef} style={headerAnimation} className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-300">Welcome back, {adminSettings.username}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-white p-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </animated.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Stats Cards */}
        <animated.div ref={statsRef} style={statsAnimation} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Contacts */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm font-medium mb-2">Total Contacts</p>
                <p className="text-4xl font-bold text-white">
                  {statsInView && <CountUp end={analytics.totalContacts} duration={2} />}
                </p>
                <p className="text-green-400 text-sm mt-1 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12% this month
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Newsletter Subscribers */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm font-medium mb-2">Newsletter Subscribers</p>
                <p className="text-4xl font-bold text-white">
                  {statsInView && <CountUp end={analytics.totalSubscribers} duration={2} />}
                </p>
                <p className="text-purple-400 text-sm mt-1 flex items-center">
                  <Activity className="w-4 h-4 mr-1" />
                  +8% this week
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Total Projects */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm font-medium mb-2">Total Projects</p>
                <p className="text-4xl font-bold text-white">
                  {statsInView && <CountUp end={analytics.totalProjects} duration={2} />}
                </p>
                <p className="text-green-400 text-sm mt-1 flex items-center">
                  <FolderOpen className="w-4 h-4 mr-1" />
                  +5 new projects
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* This Month */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm font-medium mb-2">This Month</p>
                <p className="text-4xl font-bold text-white">
                  {statsInView && <CountUp end={analytics.monthlyStats.contactsThisMonth} duration={2} />}
                </p>
                <p className="text-yellow-400 text-sm mt-1 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  October 2025
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </animated.div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
          <div className="border-b border-white/20">
            <nav className="flex space-x-2 p-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-blue-400" />
                  Recent Activity
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-medium text-white mb-3">Recent Contacts</h4>
                    <div className="space-y-3">
                      {analytics.recentContacts.map((contact: any, index: number) => (
                        <div key={contact.id} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-300">
                              {contact.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{contact.name}</p>
                            <p className="text-sm text-gray-300 truncate">{contact.email}</p>
                          </div>
                          <div className="text-xs text-gray-400">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-medium text-white mb-3">Recent Projects</h4>
                    <div className="space-y-3">
                      {analytics.recentProjects.map((project: any, index: number) => (
                        <div key={project.id} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                          <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-cyan-300">
                              {project.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{project.name}</p>
                            <p className="text-sm text-gray-300 truncate">{project.projectType}</p>
                          </div>
                          <div className="text-xs text-gray-400">
                            {new Date(project.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Submissions</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/20">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Budget</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/5 divide-y divide-white/10">
                      {db.getContactSubmissions().map((contact) => (
                        <tr key={contact.id} className="hover:bg-white/10">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{contact.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{contact.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{contact.phone || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{contact.service || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{contact.budget || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              contact.status === 'new' ? 'bg-yellow-100 text-yellow-800' :
                              contact.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {contact.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'newsletter' && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Newsletter Subscribers</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/20">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subscribed Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/5 divide-y divide-white/10">
                      {db.getNewsletterSubscriptions().map((subscription) => (
                        <tr key={subscription.id} className="hover:bg-white/10">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{subscription.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {new Date(subscription.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              subscription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {subscription.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Project Inquiries</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/20">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Project Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Budget</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/5 divide-y divide-white/10">
                      {db.getProjectInquiries().map((project) => (
                        <tr key={project.id} className="hover:bg-white/10">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{project.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.projectType}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.budget}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              project.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {project.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
