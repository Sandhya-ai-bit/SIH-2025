import { HeartIcon } from 'lucide-react';

const navItems = ['Home', 'Features', 'About', 'Contact'];

const Header = () => {
  return (
    <header className="py-4 md:py-6 sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HeartIcon className="text-purple-500 w-8 h-8" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">MedFusion.AI</h1>
            <span className="text-xs text-slate-400">Healthcare Revolution</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button className="bg-gradient-to-br from-indigo-500 to-purple-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow">
            Get Started
          </button>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
