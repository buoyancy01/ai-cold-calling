import React from 'react';
import { ArrowRight, Play, BarChart3, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Cold Calling
              <span className="gradient-text block">Dashboard</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionize your outreach with intelligent automated calling. 
              Upload contacts, deploy AI agents, and track performance in real-time 
              with our comprehensive dashboard solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all duration-300 hover-lift">
                <Play className="w-5 h-5 mr-2" />
                View Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Analytics
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600 text-sm">Calls Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Automation</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 hover-lift">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Campaign Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">127</div>
                  <div className="text-sm text-gray-600">Calls Made</div>
                </div>
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">89%</div>
                  <div className="text-sm text-gray-600">Connect Rate</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Connected</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm">+1 (555) 987-6543</span>
                  </div>
                  <span className="text-xs text-blue-600 font-medium">Calling...</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span className="text-sm">+1 (555) 456-7890</span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Queued</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;