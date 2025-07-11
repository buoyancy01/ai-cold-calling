import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build
            <span className="gradient-text block">Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaborating or learning more about the AI Cold Calling Dashboard? 
            I'd love to hear from you and discuss potential opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to implement a similar solution, need technical consultation, 
                or want to discuss collaboration opportunities, I'm here to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@aicoldcalling.dev</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Project Resources</h4>
              <div className="space-y-2">
                <a href="#" className="flex items-center text-primary hover:text-secondary transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
                <a href="#" className="flex items-center text-primary hover:text-secondary transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
                <a href="#" className="flex items-center text-primary hover:text-secondary transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  API Documentation
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center hover-lift"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;