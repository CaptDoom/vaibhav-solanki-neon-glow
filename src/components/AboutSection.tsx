
import { Award, Code, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies with hands-on experience in React, Node.js, and cloud platforms."
    },
    {
      icon: Lightbulb,
      title: "AI/ML Innovation",
      description: "Specialized in machine learning algorithms, deep learning frameworks, and cutting-edge AI applications."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Passionate about tackling complex challenges with innovative, efficient, and scalable solutions."
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Committed to staying current with emerging technologies and industry best practices."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl neon-glow fade-in-up">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg opacity-20 blur"></div>
                <div className="relative bg-black p-6 rounded-lg border border-red-500">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4">My Journey</h3>
                  <p className="text-lg leading-relaxed text-gray-300 mb-4">
                    I am a second-year Computer Science Engineering student at UPES Dehradun, 
                    specializing in AI & Machine Learning. With hands-on experience in web development 
                    and machine learning projects, I have an exciting appetite for creating innovative, 
                    user-friendly solutions.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    I'm passionate about continuous learning and innovation, eager to contribute my 
                    skills to real-world challenges and drive meaningful change in the technology landscape.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Current Focus</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Advancing expertise in AI/ML algorithms and applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Building scalable web applications with modern frameworks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Contributing to open-source projects and community initiatives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Seeking opportunities to apply skills in real-world projects
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-purple-500/20 to-red-500/20 border-2 border-purple-500/30 flex items-center justify-center neon-glow">
              <div className="w-80 h-80 rounded-xl bg-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center">
                <Code className="w-16 h-16 text-purple-400 mb-4" />
                <span className="text-xl text-purple-300">Professional Image</span>
                <span className="text-sm text-gray-400 mt-2">Working/Coding Environment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-purple-400">What Sets Me Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 group text-center">
                <highlight.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
