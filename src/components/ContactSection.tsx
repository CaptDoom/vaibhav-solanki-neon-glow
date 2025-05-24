
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 glow-text">Get In Touch</h2>
        <p className="text-center text-purple-300 mb-12 text-lg">
          Let's collaborate on something amazing together
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl neon-glow">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">vaibhavx15k5@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Github className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">GitHub</h4>
                  <p className="text-gray-300">github.com/captdoom</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                  <p className="text-gray-300">linkedin.com/in/vaibhav-solanki-250498270</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">Let's connect and build something incredible!</p>
              <div className="flex justify-center gap-4">
                <Button size="sm" variant="ghost" className="p-3 hover:bg-purple-500/20">
                  <Github className="w-5 h-5 text-purple-400" />
                </Button>
                <Button size="sm" variant="ghost" className="p-3 hover:bg-purple-500/20">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
