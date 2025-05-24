
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 border-t border-purple-500/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-gray-400">
              © 2024 Vaibhav Solanki. Built with passion and code.
            </p>
            <p className="text-sm text-purple-400 mt-1">
              Aspiring AI/ML Engineer | Innovator | Problem-Solver
            </p>
          </div>
          
          <Button
            onClick={scrollToTop}
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
