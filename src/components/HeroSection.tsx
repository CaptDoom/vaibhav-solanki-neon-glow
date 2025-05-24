
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, MapPin, Calendar } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Aspiring AI/ML Engineer | Innovator | Problem-Solver';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
          {/* Personal Image Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-red-500/20 border-4 border-purple-500/50 flex items-center justify-center neon-glow">
              <div className="w-72 h-72 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center">
                <span className="text-6xl text-purple-400">VS</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-left lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 glow-text">
              Vaibhav Solanki
            </h1>
            
            <div className="h-16 mb-6">
              <p className="text-xl lg:text-2xl text-purple-300 font-mono">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Second-year Computer Science Engineering student at UPES Dehradun, 
                specializing in AI & Machine Learning. Passionate about creating 
                innovative solutions that bridge technology and real-world challenges.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-purple-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dehradun, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Available for Internships</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300 group">
            <Mail className="w-6 h-6 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium">Email</p>
            <p className="text-xs text-gray-400">vaibhavx15k5@gmail.com</p>
          </div>
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300 group">
            <Phone className="w-6 h-6 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium">Phone</p>
            <p className="text-xs text-gray-400">+91 9971378282</p>
          </div>
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300 group">
            <Github className="w-6 h-6 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium">GitHub</p>
            <p className="text-xs text-gray-400">captdoom</p>
          </div>
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300 group">
            <Linkedin className="w-6 h-6 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium">LinkedIn</p>
            <p className="text-xs text-gray-400">vaibhav-solanki</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
