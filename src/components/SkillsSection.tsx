
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = {
    "Languages": [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "SQL", level: 85 },
      { name: "Bash", level: 70 }
    ],
    "Frameworks & Technologies": [
      { name: "React", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 90 }
    ],
    "Tools & Platforms": [
      { name: "VSCode", level: 95 },
      { name: "Jupyter", level: 90 },
      { name: "Google Colab", level: 85 },
      { name: "Anaconda", level: 80 },
      { name: "Oracle APEX", level: 70 },
      { name: "Matplotlib", level: 85 }
    ],
    "AI/ML": [
      { name: "OpenAI Playground", level: 80 },
      { name: "GitHub Copilot", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 75 },
      { name: "GANs", level: 70 },
      { name: "Computer Vision", level: 75 }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div key={category} className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">{category}</h3>
              
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2 rounded-full">
                      <div 
                        className="skill-progress h-full rounded-full"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
