
import { Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Academic Scheduling Application",
      description: "Full-stack web application for academic timetable management with features for viewing, downloading, and editing timetables. Supports teacher, classroom, and batch-wise scheduling.",
      tech: ["Express.js", "Node.js", "MongoDB", "JavaScript"],
      github: "TimeTable.js",
      features: ["Timetable generation", "Download functionality", "Multi-view support", "Real-time updates"]
    },
    {
      title: "Property Prediction Model",
      description: "Machine learning model for real estate price prediction using advanced feature engineering and interactive dashboard for data visualization and model insights.",
      tech: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      github: "ML-PredictionModel",
      features: ["Feature engineering", "Model training", "Interactive dashboard", "Price prediction"]
    },
    {
      title: "Spurvo Platform",
      description: "Scalable SaaS platform with comprehensive feedback management, roadmap visualization, and announcement tools. Built with modern web technologies for optimal performance.",
      tech: ["HTML", "CSS", "Bootstrap", "Node.js", "Airtable"],
      github: "spurvo-platform",
      features: ["Feedback boards", "Roadmap management", "Announcements", "Scalable interface"]
    },
    {
      title: "FashionGAN",
      description: "Advanced AI project utilizing StyleGAN2 architecture to generate high-quality, realistic fashion designs. Leverages cutting-edge deep learning for creative applications.",
      tech: ["GANs", "PyTorch", "TensorFlow", "NumPy", "Matplotlib", "NVIDIA CUDA"],
      github: "fashion-gan",
      features: ["StyleGAN2 implementation", "High-quality generation", "GPU acceleration", "Fashion design synthesis"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 glow-text">Featured Projects</h2>
        <p className="text-center text-purple-300 mb-12 text-lg">Showcase of innovation and technical expertise</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 hover:scale-105 group">
              {/* Project header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-purple-500/20">
                    <Github className="w-4 h-4 text-purple-400" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-purple-500/20">
                    <ExternalLink className="w-4 h-4 text-purple-400" />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-400">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Glow border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
