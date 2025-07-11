import React from 'react';
import { 
  Upload, 
  Phone, 
  BarChart3, 
  Mic, 
  Shield, 
  Zap,
  Users,
  Clock,
  Target
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: 'CSV Upload & Processing',
      description: 'Seamlessly upload contact lists via CSV files with automatic validation and formatting.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Automated Calling',
      description: 'Intelligent calling system powered by Twilio with real-time status tracking.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboard with live metrics, success rates, and performance insights.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mic,
      title: 'Call Recording',
      description: 'Automatic call recording with playback and download capabilities for quality assurance.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encrypted communications and secure data handling.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'AI-Powered Voice',
      description: 'Advanced text-to-speech with Cartesia AI for natural, human-like conversations.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Multi-Campaign Support',
      description: 'Manage multiple calling campaigns simultaneously with independent tracking.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Clock,
      title: '24/7 Automation',
      description: 'Round-the-clock automated calling with intelligent scheduling and retry logic.',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Advanced contact filtering and targeting based on custom criteria and preferences.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="gradient-text block">Modern Outreach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI Cold Calling Dashboard combines cutting-edge technology with intuitive design 
            to deliver exceptional results for your outreach campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Zap className="w-5 h-5 mr-2" />
            Explore All Features
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;