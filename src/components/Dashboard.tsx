import React, { useState } from 'react';
import { Play, Pause, Upload, Download, BarChart3, Users, Phone, Mic } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'calls', label: 'Call Logs', icon: Phone },
    { id: 'recordings', label: 'Recordings', icon: Mic },
    { id: 'contacts', label: 'Contacts', icon: Users }
  ];

  const callLogs = [
    { number: '+1 (555) 123-4567', status: 'Connected', duration: '2:34', time: '10:30 AM' },
    { number: '+1 (555) 987-6543', status: 'Voicemail', duration: '0:45', time: '10:28 AM' },
    { number: '+1 (555) 456-7890', status: 'Busy', duration: '0:12', time: '10:25 AM' },
    { number: '+1 (555) 321-0987', status: 'Connected', duration: '4:12', time: '10:22 AM' },
  ];

  const recordings = [
    { number: '+1 (555) 123-4567', date: '2024-01-15', duration: '2:34', size: '1.2 MB' },
    { number: '+1 (555) 321-0987', date: '2024-01-15', duration: '4:12', size: '2.1 MB' },
    { number: '+1 (555) 654-3210', date: '2024-01-14', duration: '1:58', size: '0.9 MB' },
  ];

  return (
    <section id="dashboard" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Interactive
            <span className="gradient-text block">Dashboard Preview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our comprehensive dashboard with real-time analytics, 
            call management, and detailed reporting capabilities.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Campaign Dashboard</h3>
              <p className="text-gray-600">Monitor your calling campaigns in real-time</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                <Upload className="w-4 h-4 mr-2" />
                Upload CSV
              </button>
              <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                <Play className="w-4 h-4 mr-2" />
                Start Campaign
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-green-600 font-medium">+12%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">247</div>
              <div className="text-gray-600 text-sm">Total Calls</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-sm text-green-600 font-medium">+8%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Mic className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-sm text-green-600 font-medium">+15%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
              <div className="text-gray-600 text-sm">Recordings</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-sm text-green-600 font-medium">+5%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1,234</div>
              <div className="text-gray-600 text-sm">Contacts</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            {activeTab === 'overview' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Campaign Overview</h4>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-primary mx-auto mb-2" />
                        <p className="text-gray-600">Call Volume Chart</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700">Connected Calls</span>
                      <span className="font-semibold text-green-600">156 (63%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="text-gray-700">Voicemail</span>
                      <span className="font-semibold text-yellow-600">67 (27%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-gray-700">Failed/Busy</span>
                      <span className="font-semibold text-red-600">24 (10%)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calls' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Call Logs</h4>
                <div className="space-y-3">
                  {callLogs.map((call, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          call.status === 'Connected' ? 'bg-green-500' :
                          call.status === 'Voicemail' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <div className="font-medium text-gray-900">{call.number}</div>
                          <div className="text-sm text-gray-600">{call.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{call.status}</div>
                        <div className="text-sm text-gray-600">{call.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'recordings' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Call Recordings</h4>
                <div className="space-y-4">
                  {recordings.map((recording, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium text-gray-900">{recording.number}</div>
                          <div className="text-sm text-gray-600">{recording.date}</div>
                        </div>
                        <button className="flex items-center px-3 py-1 bg-primary text-white text-sm rounded-lg hover:bg-secondary transition-colors">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Duration: {recording.duration}</span>
                        <span>Size: {recording.size}</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Management</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center">
                    <Upload className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h5 className="font-semibold text-gray-900 mb-2">Upload Contacts</h5>
                    <p className="text-gray-600 text-sm mb-4">Import your contact list via CSV file</p>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                      Choose File
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Total Contacts</span>
                      <span className="font-semibold text-gray-900">1,234</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Called Today</span>
                      <span className="font-semibold text-primary">247</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Remaining</span>
                      <span className="font-semibold text-gray-900">987</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;