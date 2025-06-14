
import { Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Academic Scheduling Application",
      description: "A comprehensive full-stack web application designed for academic timetable management. Features include intuitive viewing interfaces, seamless PDF download functionality, and robust editing capabilities. The system supports multiple viewing modes including teacher-specific, classroom-based, and batch-wise scheduling, making it a complete solution for educational institutions.",
      tech: ["Express.js", "Node.js", "MongoDB", "JavaScript", "PDF Generation"],
      github: "https://github.com/captdoom/TimeTable.js",
      demo: "#",
      features: ["Dynamic timetable generation", "Multi-format download options", "Real-time editing capabilities", "Role-based access control"],
      category: "Full-Stack Development",
      matrixContent: "010011010111011100101110010111000101110110101011101101001010101110110111"
    },
    {
      title: "Property Prediction Model",
      description: "An advanced machine learning solution for real estate price prediction utilizing sophisticated feature engineering techniques. The project includes comprehensive data preprocessing, model training with multiple algorithms, and an interactive dashboard for data visualization and model performance insights. Incorporates market trends analysis and location-based pricing factors.",
      tech: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter", "Seaborn"],
      github: "https://github.com/captdoom/ML-PredictionModel",
      demo: "#",
      features: ["Advanced feature engineering", "Multiple ML algorithms", "Interactive visualization dashboard", "Market trend analysis"],
      category: "Machine Learning",
      matrixContent: "110010110101100111001011010111000101101110010110111010101101010110111"
    },
    {
      title: "Spurvo Platform",
      description: "A scalable SaaS platform engineered for comprehensive feedback management and product roadmap visualization. Built with modern web technologies to ensure optimal performance and user experience. The platform includes advanced announcement tools, user engagement features, and analytics dashboard for tracking product development progress.",
      tech: ["HTML5", "CSS3", "Bootstrap", "Node.js", "Airtable", "REST APIs"],
      github: "https://github.com/captdoom/spurvo-platform",
      demo: "#",
      features: ["Comprehensive feedback boards", "Visual roadmap management", "Advanced announcement system", "Analytics dashboard"],
      category: "SaaS Platform",
      matrixContent: "001110101010111010110101011101100111010101100110111010101011101011"
    },
    {
      title: "FashionGAN",
      description: "Cutting-edge AI project leveraging StyleGAN2 architecture for generating high-quality, realistic fashion designs. This deep learning application demonstrates advanced generative modeling techniques, incorporating state-of-the-art neural networks for creative fashion synthesis. The project showcases expertise in modern AI frameworks and GPU-accelerated computing.",
      tech: ["GANs", "PyTorch", "TensorFlow", "NumPy", "Matplotlib", "NVIDIA CUDA", "StyleGAN2"],
      github: "https://github.com/captdoom/fashion-gan",
      demo: "#",
      features: ["StyleGAN2 implementation", "High-resolution image generation", "GPU acceleration optimization", "Creative design synthesis"],
      category: "Artificial Intelligence",
      matrixContent: "101101010110101101011010101010111010101011010110101011010110111010"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 glow-text">Featured Projects</h2>
          <p className="text-xl text-purple-300 mb-2">Showcase of Innovation and Technical Expertise</p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A collection of projects demonstrating proficiency across full-stack development, 
            machine learning, and artificial intelligence. Each project represents a unique 
            challenge solved with modern technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 rounded-xl hover:neon-glow transition-all duration-300 hover:scale-[1.02] group">
              {/* Matrix-style Project Image */}
              <div className="w-full h-48 rounded-lg bg-black border border-green-500/30 flex items-center justify-center mb-6 group-hover:border-green-400/50 transition-colors relative overflow-hidden">
                {/* Matrix background effect */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-12 gap-1 h-full text-green-400 text-xs font-mono overflow-hidden">
                    {project.matrixContent.split('').map((char, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-center animate-pulse"
                        style={{
                          animationDelay: `${(i * 0.1) % 2}s`,
                          animationDuration: `${1 + (i % 3)}s`
                        }}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Project title overlay */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center">
                    <span className="text-green-400 font-bold text-2xl">{project.title.charAt(0)}</span>
                  </div>
                  <span className="text-green-300 font-bold text-lg">{project.title}</span>
                  <div className="text-xs text-green-400 mt-1 font-mono">
                    [{project.category.toUpperCase()}]
                  </div>
                </div>
                
                {/* Animated green lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"></div>
                  <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Project header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5 text-purple-400" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features & Achievements:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Explore More Projects</h3>
            <p className="text-gray-400">
              Visit my GitHub profile to discover additional projects, contributions, and experimental work.
            </p>
          </div>
          <a 
            href="https://github.com/captdoom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
