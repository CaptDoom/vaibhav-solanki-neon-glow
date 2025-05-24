
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "SanoraWear",
      role: "Fullstack Developer",
      location: "Remote/Bangalore",
      date: "2025",
      description: "Working with fullstack technologies, integrations, deployment, and marketing",
      type: "current"
    },
    {
      title: "Spurvo",
      role: "Frontend Intern",
      location: "Remote",
      date: "2025",
      description: "Frontend development intern for SaaS Startup",
      type: "current"
    },
    {
      title: "Google Open Source",
      role: "Contributor",
      location: "Remote",
      date: "2024",
      description: "Debugging and contributing to open-source projects for UnifyAI, Skandha projects",
      type: "completed"
    },
    {
      title: "Bookee",
      role: "Freelancer",
      location: "Bangalore/Remote",
      date: "2024",
      description: "Content management and data transfer across platforms",
      type: "completed"
    },
    {
      title: "ALFAA",
      role: "Intern",
      location: "Bangalore",
      date: "2024",
      description: "Responsible for creating and maintaining Websites, Journals and Reports for the NGO",
      type: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-red-500"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                  exp.type === 'current' ? 'bg-red-500 border-red-300' : 'bg-purple-500 border-purple-300'
                } group-hover:scale-125 transition-transform duration-300`}></div>
                
                {/* Content card */}
                <div className="ml-16 glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 hover:scale-105 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.role}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                  {exp.type === 'current' && (
                    <span className="inline-block mt-2 px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
