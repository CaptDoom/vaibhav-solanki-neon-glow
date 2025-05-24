
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

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

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text">
          Vaibhav Solanki
        </h1>
        
        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-purple-300 font-mono">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300">
            <Mail className="w-6 h-6 mx-auto mb-2 text-purple-400" />
            <p className="text-gray-300">vaibhavx15k5@gmail.com</p>
          </div>
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300">
            <Phone className="w-6 h-6 mx-auto mb-2 text-purple-400" />
            <p className="text-gray-300">+91 9971378282</p>
          </div>
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300">
            <Github className="w-6 h-6 mx-auto mb-2 text-purple-400" />
            <p className="text-gray-300">captdoom</p>
          </div>
          <div className="glass-card p-4 rounded-lg hover:neon-glow transition-all duration-300">
            <Linkedin className="w-6 h-6 mx-auto mb-2 text-purple-400" />
            <p className="text-gray-300">vaibhav-solanki</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
