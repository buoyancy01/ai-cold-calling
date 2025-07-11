import React from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  ArrowRight, 
  Shield,
  Zap,
  BarChart3
} from 'lucide-react';

const Architecture = () => {
  const components = [
    {
      title: 'Frontend Dashboard',
      icon: BarChart3,
      description: 'Interactive web interface built with HTML, CSS, and JavaScript',
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time updates', 'Responsive design', 'Interactive charts']
    },
    {
      title: 'FastAPI Backend',
      icon: Server,
      description: 'High-performance Python web framework handling API requests',
      color: 'from-green-500 to-emerald-500',
      features: ['Async processing', 'Auto documentation', 'Type validation']
    },
    {
      title: 'Twilio Integration',
      icon: Smartphone,
      description: 'Cloud communications platform for voice calls and messaging',
      color: 'from-purple-500 to-pink-500',
      features: ['Voice calls', 'Call recording', 'Global reach']
    },
    {
      title: 'AI Voice Engine',
      icon: Zap,
      description: 'Cartesia AI for natural text-to-speech conversion',
      color: 'from-orange-500 to-red-500',
      features: ['Natural voices', 'Multiple languages', 'Real-time synthesis']
    },
    {
      title: 'Data Processing',
      icon: Database,
      description: 'Pandas-powered CSV processing and data validation',
      color: 'from-indigo-500 to-purple-500',
      features: ['CSV parsing', 'Data validation', 'Contact management']
    },
    {
      title: 'Security Layer',
      icon: Shield,
      description: 'Enterprise-grade security with encrypted communications',
      color: 'from-teal-500 to-green-500',
      features: ['API authentication', 'Data encryption', 'CORS protection']
    }
  ];

  const dataFlow = [
    { step: 1, title: 'CSV Upload', description: 'User uploads contact list' },
    { step: 2, title: 'Data Validation', description: 'System validates and processes data' },
    { step: 3, title: 'Call Initiation', description: 'Twilio API initiates calls' },
    { step: 4, title: 'AI Voice Generation', description: 'Cartesia AI generates speech' },
    { step: 5, title: 'Call Recording', description: 'Conversations are recorded' },
    { step: 6, title: 'Analytics Update', description: 'Dashboard shows real-time results' }
  ];

  return (
    <section id="architecture" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            System
            <span className="gradient-text block">Architecture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the robust architecture powering our AI Cold Calling Dashboard, 
            designed for scalability, reliability, and optimal performance.
          </p>
        </div>

        {/* Architecture Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${component.color} mb-6`}>
                <component.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {component.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {component.description}
              </p>
              
              <div className="space-y-2">
                {component.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Flow Diagram */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Data Flow & Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataFlow.map((flow, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {flow.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{flow.title}</h4>
                    <p className="text-sm text-gray-600">{flow.description}</p>
                  </div>
                </div>
                
                {index < dataFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-5 -right-3 text-gray-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Performance Metrics
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">API Response Time</span>
                <span className="font-semibold text-primary">&lt; 100ms</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Concurrent Calls</span>
                <span className="font-semibold text-secondary">1000+</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">System Uptime</span>
                <span className="font-semibold text-green-500">99.9%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Security Features
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">API Authentication</h4>
                  <p className="text-gray-600 text-sm">Secure token-based authentication for all API endpoints</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-secondary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Data Encryption</h4>
                  <p className="text-gray-600 text-sm">End-to-end encryption for all sensitive data transmission</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">CORS Protection</h4>
                  <p className="text-gray-600 text-sm">Cross-origin resource sharing protection and validation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Environment Security</h4>
                  <p className="text-gray-600 text-sm">Secure environment variable management for API keys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;