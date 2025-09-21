import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const FooterCard = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 p-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-slate-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} AstroPheonix(MSIT KOLKATA). All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCard;
