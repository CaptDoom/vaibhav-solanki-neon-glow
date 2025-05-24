
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">About Me</h2>
        
        <div className="glass-card p-8 rounded-xl neon-glow fade-in-up">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg opacity-20 blur"></div>
            <div className="relative bg-black p-6 rounded-lg border border-red-500">
              <p className="text-lg leading-relaxed text-gray-300">
                I am a second-year Computer Science Engineering student at UPES Dehradun, 
                specializing in AI & Machine Learning. With hands-on experience in web development 
                and machine learning projects, I have an exciting appetite, user-friendly solutions, 
                passionate about continuous learning and innovation. I am eager to contribute my 
                skills to real-world challenges and drive meaningful change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
