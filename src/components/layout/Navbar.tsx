import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, School, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-stone-50/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center text-stone-50 transition-transform group-hover:scale-110">
            <School size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-emerald-950 uppercase leading-none">
              Hiro Academy
            </span>
            <span className="text-[10px] font-sans tracking-[0.2em] text-emerald-800/70 font-semibold uppercase leading-none mt-1">
              Excellence in Learning
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-emerald-700',
                location.pathname === link.href ? 'text-emerald-900' : 'text-emerald-950/60'
              )}
            >
              {link.name}
              {location.pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-px bg-emerald-900 mt-0.5"
                />
              )}
            </Link>
          ))}
          <button className="p-2 text-emerald-950/60 hover:text-emerald-900 transition-colors">
            <Search size={20} />
          </button>
          <button className="bg-emerald-900 text-stone-50 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-emerald-800 transition-all active:scale-95">
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-emerald-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-t border-stone-200 mt-4 overflow-hidden rounded-2xl shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-serif transition-colors',
                    location.pathname === link.href ? 'text-emerald-900 pl-2 border-l-2 border-emerald-900' : 'text-emerald-950/60'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-stone-200 my-2" />
              <button className="bg-emerald-900 text-stone-50 px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase text-center">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
