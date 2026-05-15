import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                Okissibiri <span className="text-cyan-400">Technology</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-slate-500 font-light">
              Founded in 2026 by Chief Okotwasuo. Bridging robust infrastructure 
              with high-performance digital solutions at the edge of innovation.
            </p>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="text-slate-600 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-600 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold mb-6 uppercase tracking-[0.3em] text-slate-500">Navigation</h4>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest">
              <li><Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/works" className="text-slate-400 hover:text-cyan-400 transition-colors">Works</Link></li>
              <li><Link to="/team" className="text-slate-400 hover:text-cyan-400 transition-colors">The Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold mb-6 uppercase tracking-[0.3em] text-slate-500">Node Status</h4>
            <ul className="space-y-4 text-[10px] font-mono uppercase tracking-widest text-slate-500">
              <li className="flex items-center gap-3"><Mail className="w-3 h-3 text-cyan-400" /> okkisbiritechnology@gmail.com</li>
              <li className="flex items-center gap-3"><Phone className="w-3 h-3 text-cyan-400" /> +233 (0) 555 123 456</li>
              <li className="flex items-center gap-3"><MapPin className="w-3 h-3 text-cyan-400" /> Accra, Ghana</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold mb-6 uppercase tracking-[0.3em] text-slate-500">Infrastructure</h4>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 flex items-start gap-4">
               <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
               <p className="text-[10px] leading-relaxed text-slate-400 font-mono uppercase italic tracking-wider">
                 Operating under the strategic direction of Chief Okotwasuo. System stability verified.
               </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sleek Status Bar */}
      <div className="bg-black px-10 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 font-mono tracking-widest uppercase border-t border-slate-900">
        <span className="mb-2 md:mb-0">© 2026 OKISSIBIRI TECHNOLOGY GROUP</span>
        <span className="mb-2 md:mb-0 hidden lg:inline">OPERATING UNDER THE GUIDANCE OF CHIEF OKOTWASUO</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>SYSTEM STATUS: OPTIMAL</span>
        </div>
      </div>
    </footer>
  );
}
