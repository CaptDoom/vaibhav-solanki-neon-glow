
import AnimatedCounter from './AnimatedCounter';
import { Code, Users, Award, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Code,
      value: 20,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Full-stack and ML projects'
    },
    {
      icon: Users,
      value: 5,
      suffix: '+',
      label: 'Professional Roles',
      description: 'Internships and freelance work'
    },
    {
      icon: Award,
      value: 4,
      suffix: '+',
      label: 'Certifications',
      description: 'Industry-recognized credentials'
    },
    {
      icon: Zap,
      value: 2,
      suffix: '+',
      label: 'Years Experience',
      description: 'In software development'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text">By the Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-8 rounded-xl text-center hover:neon-glow transition-all duration-300 group">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-red-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              
              <h3 className="text-xl font-semibold text-white mt-2 mb-1">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
