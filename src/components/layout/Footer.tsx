import { Link } from 'react-router-dom';
import { School, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-stone-200">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-stone-50">
                <School size={24} />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-stone-50 uppercase">
                Hiro Academy
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Cultivating the next generation of global leaders through innovative education, character development, and academic excellence since 1994.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-50 mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {['Admissions', 'Academic Calendar', 'Spirit Store', 'Parent Portal', 'Our Faculty'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-stone-400 text-sm hover:text-stone-50 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-50 mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span>123 Academic Drive, Education Heights, EH 56789</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span>admissions@hiroacademy.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-50 mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-stone-400 text-sm mb-4">Stay updated with our latest news and event highlights.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-emerald-900/50 border border-emerald-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="bg-stone-50 text-emerald-950 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-stone-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-widest">
          <p>© 2026 Hiro Academy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-200">Privacy Policy</a>
            <a href="#" className="hover:text-stone-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
