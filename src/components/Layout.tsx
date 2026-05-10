import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  
  // Decide header style based on page and scroll position
  const isHome = isActive('/');
  const useTransparentHeader = isHome && !isScrolled;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          useTransparentHeader
            ? 'bg-transparent pt-4' 
            : 'bg-white/90 backdrop-blur-md shadow-sm py-2'
        }`}
      >
        <nav className="w-full px-[10vw] h-16 flex items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-serif tracking-tight transition-colors duration-500 ${
              useTransparentHeader ? 'text-white' : 'text-brand-text'
            }`}
          >
            Corceptive Media
          </Link>
          
          <div className="flex items-center gap-10">
            <Link 
              to="/" 
              className={`nav-link transition-colors duration-500 ${
                useTransparentHeader ? 'text-white after:bg-white' : 'text-brand-text after:bg-brand-burgundy'
              } ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link transition-colors duration-500 ${
                useTransparentHeader ? 'text-white after:bg-white' : 'text-brand-text after:bg-brand-burgundy'
              } ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link transition-colors duration-500 ${
                useTransparentHeader ? 'text-white after:bg-white' : 'text-brand-text after:bg-brand-burgundy'
              } ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className={`flex-grow ${isActive('/') ? '' : 'pt-16'}`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#fdfcf9] border-t border-brand-accent/10 py-24 px-[10vw]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-8">
              <Link to="/" className="text-3xl font-serif tracking-tight text-brand-text block">
                Corceptive Media
              </Link>
              <p className="text-gray-400 font-light max-w-sm leading-relaxed text-sm italic">
                Where creativity meets clarity and vision meets action. Building experiences that resonate and endure.
              </p>
              <div className="flex items-center gap-6 pt-4">
                {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 hover:text-brand-burgundy transition-colors underline-offset-8 hover:underline"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-start-8 md:col-span-2 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900 border-b border-brand-accent/20 pb-4 inline-block mb-2">Explore</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-xs text-gray-500 hover:text-brand-burgundy transition-colors tracking-widest uppercase">Home</Link></li>
                <li><Link to="/about" className="text-xs text-gray-500 hover:text-brand-burgundy transition-colors tracking-widest uppercase">About</Link></li>
                <li><Link to="/contact" className="text-xs text-gray-500 hover:text-brand-burgundy transition-colors tracking-widest uppercase">Contact</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="md:col-span-3 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900 border-b border-brand-accent/20 pb-4 inline-block mb-2">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:teams@corceptivemedia.com" className="text-xs text-gray-500 hover:text-brand-burgundy transition-colors tracking-widest uppercase block">
                    teams@corceptivemedia.com
                  </a>
                </li>
                <li>
                  <span className="text-xs text-gray-400 font-light tracking-wide italic">
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
