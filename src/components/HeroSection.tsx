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

  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Vaibhav_Solanki_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated background with multiple color layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-red-900/30"></div>
        
        {/* Floating particles with multiple colors */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full floating ${
              i % 4 === 0 ? 'bg-purple-500' : 
              i % 4 === 1 ? 'bg-red-500' : 
              i % 4 === 2 ? 'bg-pink-500' : 'bg-blue-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px currentColor'
            }}
          />
        ))}

        {/* Moving geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute border-2 ${
              i % 3 === 0 ? 'border-purple-500/30' : 
              i % 3 === 1 ? 'border-red-500/30' : 'border-pink-500/30'
            } rotate-45`}
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animation: `floating ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Glowing orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className={`absolute rounded-full ${
              i % 2 === 0 ? 'bg-purple-500/20' : 'bg-red-500/20'
            } blur-xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              animation: `floating ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-7xl mx-auto px-4">
        {/* Main Content - Centered Layout */}
        <div className="flex flex-col items-center mb-12">
          {/* Personal Image */}
          <div className="mb-8">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/30 to-red-500/30 border-4 border-purple-500/50 flex items-center justify-center neon-glow relative overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 animate-pulse"></div>
              <div className="w-72 h-72 rounded-full bg-gray-800/60 backdrop-blur-sm flex items-center justify-center relative z-10 border-2 border-red-500/30 overflow-hidden">
                <img 
                  src="/lovable-uploads/4d4b5ed5-1ae8-4220-bad0-37b20b4b5af1.png" 
                  alt="Vaibhav Solanki" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Name and Title - Centered */}
          <div className="text-center mb-8">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 glow-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Vaibhav Solanki
            </h1>
            
            <div className="h-20 mb-6">
              <p className="text-2xl lg:text-3xl text-purple-300 font-mono">
                {text}
                <span className="animate-pulse text-red-400">|</span>
              </p>
            </div>

            <div className="mb-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Prefinal-year Computer Science Engineering student at UPES Dehradun, 
                specializing in AI & Machine Learning. Passionate about creating 
                innovative solutions that bridge technology and real-world challenges.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-lg text-purple-300">
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>Dehradun, India</span>
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <Calendar className="w-5 h-5 text-red-400" />
                  <span>Available for Internships</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow text-lg"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm max-w-5xl mx-auto">
          <a 
            href="mailto:vaibhavx15k5@gmail.com"
            className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 group border border-purple-500/20 block"
          >
            <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium text-base mb-1">Email</p>
            <p className="text-sm text-gray-400">vaibhavx15k5@gmail.com</p>
          </a>
          <a 
            href="tel:+919971378282"
            className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 group border border-purple-500/20 block"
          >
            <Phone className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium text-base mb-1">Phone</p>
            <p className="text-sm text-gray-400">+91 9971378282</p>
          </a>
          <a 
            href="https://github.com/captdoom"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 group border border-purple-500/20 block"
          >
            <Github className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium text-base mb-1">GitHub</p>
            <p className="text-sm text-gray-400">captdoom</p>
          </a>
          <a 
            href="https://linkedin.com/in/vaibhav-solanki-250498270"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 group border border-purple-500/20 block"
          >
            <Linkedin className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 font-medium text-base mb-1">LinkedIn</p>
            <p className="text-sm text-gray-400">vaibhav-solanki</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
