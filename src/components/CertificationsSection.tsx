
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "APEX: A-1 Learning Path",
      issuer: "Oracle",
      description: "Advanced Oracle APEX development and application building",
      type: "Development"
    },
    {
      title: "Machine Learning with TensorFlow",
      issuer: "NVIDIA",
      description: "Deep learning and neural network implementation using TensorFlow",
      type: "AI/ML"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      description: "Fundamentals of generative AI technologies and applications",
      type: "AI/ML"
    },
    {
      title: "GANs Specialization",
      issuer: "DeepLearning.AI",
      description: "Comprehensive course on Generative Adversarial Networks",
      type: "AI/ML"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI/ML': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Development': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/20 rounded-full">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors cursor-pointer" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-purple-400 font-medium mb-3">{cert.issuer}</p>
              
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
