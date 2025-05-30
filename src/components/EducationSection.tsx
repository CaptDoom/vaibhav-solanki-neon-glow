
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      year: "2023–Present",
      institution: "UPES Dehradun",
      degree: "BTech CSE (AI/ML)",
      grade: "Current CGPA: 8.2",
      status: "prefinal"
    },
    {
      year: "2021–2023",
      institution: "OTA Gaya",
      degree: "Active Military Training & Telecommunication",
      grade: "Completed",
      status: "completed"
    },
    {
      year: "2020",
      institution: "KV 3BRD Chandigarh",
      degree: "Higher Secondary Education",
      grade: "89%",
      status: "completed"
    },
    {
      year: "2018",
      institution: "Air Force School, Chandigarh",
      degree: "Secondary Education",
      grade: "80%",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className={`glass-card p-6 rounded-xl transition-all duration-300 hover:neon-glow ${
              edu.status === 'prefinal' ? 'border border-red-500' : 'hover:scale-105'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    edu.status === 'prefinal' ? 'bg-red-500/20 text-red-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                      {edu.status === 'prefinal' && (
                        <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                          Prefinal Year
                        </span>
                      )}
                    </div>
                    <p className="text-purple-400 font-medium mb-1">{edu.degree}</p>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <p className="text-yellow-400 font-medium">{edu.grade}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <span className="text-gray-400 font-mono">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
