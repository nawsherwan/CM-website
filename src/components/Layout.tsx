import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isActive('/') 
            ? 'bg-transparent border-transparent pt-4' 
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-serif tracking-tight transition-colors duration-500 ${
              isActive('/') ? 'text-white' : 'text-brand-text'
            }`}
          >
            Corceptive Media
          </Link>
          
          <div className="flex items-center gap-10">
            <Link 
              to="/" 
              className={`nav-link transition-colors duration-500 ${
                isActive('/') ? 'text-white after:bg-white' : 'text-brand-text after:bg-brand-burgundy'
              } ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link transition-colors duration-500 ${
                isActive('/') ? 'text-white after:bg-white' : 'text-brand-text after:bg-brand-burgundy'
              } ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link transition-colors duration-500 ${
                isActive('/') ? 'text-white after:bg-white' : 'text-brand-text after:bg-brand-burgundy'
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
      <footer className="bg-brand-bg px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-serif text-brand-text mb-8">
            Corceptive Media
          </div>
          
          <a 
            href="mailto:support@corceptivemedia.com" 
            className="text-base font-light text-gray-700 hover:text-black transition-colors mb-12 tracking-wide"
          >
            Email: support@corceptivemedia.com
          </a>

          <div className="w-full flex justify-end items-center gap-6 pr-4">
            {['twitter', 'facebook', 'instagram'].map((social) => (
              <a 
                key={social}
                href={`https://${social}.com`} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-900 hover:text-brand-burgundy transition-colors"
                aria-label={social}
              >
                {social === 'twitter' && <span className="text-[14px]">𝕏</span>}
                {social === 'facebook' && <span className="text-[14px]">f</span>}
                {social === 'instagram' && <span className="text-[14px]"></span>}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
