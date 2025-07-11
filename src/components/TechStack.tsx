import React from 'react';
import { Code, Database, Cloud, Cpu, Shield, Zap } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: 'Backend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      techs: ['FastAPI', 'Python', 'Uvicorn', 'Pandas']
    },
    {
      category: 'Communication',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      techs: ['Twilio API', 'Voice Response', 'SMS Gateway', 'WebRTC']
    },
    {
      category: 'AI & Voice',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      techs: ['Cartesia AI', 'Text-to-Speech', 'Voice Synthesis', 'NLP']
    },
    {
      category: 'Data Processing',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      techs: ['CSV Processing', 'Data Validation', 'Real-time Analytics', 'Logging']
    },
    {
      category: 'Security',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      techs: ['Environment Variables', 'API Authentication', 'CORS', 'Data Encryption']
    },
    {
      category: 'Performance',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      techs: ['Async Processing', 'HTTP Client', 'Concurrent Calls', 'Error Handling']
    }
  ];

  const frameworks = [
    { name: 'FastAPI', description: 'High-performance Python web framework', logo: '⚡' },
    { name: 'Twilio', description: 'Cloud communications platform', logo: '📞' },
    { name: 'Cartesia AI', description: 'Advanced text-to-speech AI', logo: '🤖' },
    { name: 'Pandas', description: 'Data manipulation and analysis', logo: '🐼' },
    { name: 'Uvicorn', description: 'Lightning-fast ASGI server', logo: '🦄' },
    { name: 'Jinja2', description: 'Modern templating engine', logo: '🎨' }
  ];

  return (
    <section id="tech-stack" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built with
            <span className="gradient-text block">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform leverages the latest technologies and frameworks to deliver 
            exceptional performance, reliability, and scalability.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tech.color} mb-6`}>
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {tech.category}
              </h3>
              
              <div className="space-y-2">
                {tech.techs.map((item, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Framework Showcase */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Frameworks & Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
              >
                <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                  {framework.logo}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {framework.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {framework.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Scalable Architecture
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Microservices Design</h4>
                  <p className="text-gray-600">Modular architecture for easy maintenance and scaling</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Async Processing</h4>
                  <p className="text-gray-600">Non-blocking operations for optimal performance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Real-time Updates</h4>
                  <p className="text-gray-600">Live dashboard updates with WebSocket connections</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-600 mb-6">Uptime Reliability</div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">&lt;100ms</div>
                  <div className="text-sm text-gray-600">API Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Concurrent Calls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;