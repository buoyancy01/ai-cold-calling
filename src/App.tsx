import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Dashboard from './components/Dashboard';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <Dashboard />
      <Architecture />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;