import { ArrowRight, Code, Database, Zap, Globe, Shield, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Scaleable, robust solutions tailored to your unique business needs.",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      color: "bg-slate-900/50 border-slate-800"
    },
    {
      title: "Cloud Infrastructure",
      description: "Modern DevOps and cloud native architectures for 99.9% uptime.",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      color: "bg-slate-900/50 border-slate-800"
    },
    {
      title: "Rapid Prototyping",
      description: "Go from idea to MVP in record time with our specialized workflow.",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      color: "bg-slate-900/50 border-slate-800"
    }
  ];

  const teamInitials = [
    { name: "Abdul Mumin Sukairaju", initials: "AS" },
    { name: "Chamciath Alhasane", initials: "CA" },
    { name: "Denzel Amoako", initials: "DA" },
    { name: "Michelle Nhyira Amfo", initials: "MA" },
    { name: "Danquah Jephthah Kojo", initials: "DK" },
    { name: "Danquah Ernest", initials: "DE", special: true },
  ];

  return (
    <div className="bg-slate-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-0"></div>

        <div className="max-w-7xl mx-auto w-full z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                Digital Sovereignty Defined
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8 text-glow">
                Engineering <br/> 
                The New <span className="text-transparent bg-clip-text tech-gradient">Tech Era.</span>
              </h1>
              
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 border-l-2 border-indigo-500 pl-6 max-w-xl">
                Under the strategic direction of <span className="text-white font-semibold italic">Chief Okotwasuo</span>, Okissibiri Technology bridges robust infrastructure with high-performance digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="px-10 py-5 tech-gradient text-white font-black rounded-xl shadow-2xl shadow-cyan-900/30 uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-slate-900 text-white font-black rounded-xl border border-slate-800 uppercase tracking-widest text-xs flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                  Technical Roadmap
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
                 <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 tech-gradient rounded-xl flex items-center justify-center shadow-lg">
                      <Terminal className="text-white w-6 h-6" />
                    </div>
                    <div>
                       <div className="h-2 w-32 bg-cyan-400/20 rounded-full mb-2" />
                       <div className="h-1.5 w-24 bg-slate-700/50 rounded-full" />
                    </div>
                 </div>
                 <div className="space-y-8">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center shrink-0">
                           <div className="w-3 h-3 rounded-full bg-cyan-500/50" />
                         </div>
                         <div className="flex-1 space-y-3 pt-2">
                           <div className="h-1.5 w-full bg-slate-800 rounded-full" />
                           <div className="h-1.5 w-2/3 bg-slate-800/40 rounded-full" />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team & Stats Bar */}
      <section className="bg-slate-900/50 border-y border-slate-800/60 backdrop-blur-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-10 py-10 flex flex-nowrap md:flex-wrap justify-between items-center gap-12">
          <div className="flex flex-col shrink-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-4 font-mono">The Engineering Core</span>
            <div className="flex -space-x-4">
              {teamInitials.map((t, i) => (
                <div 
                  key={i}
                  className={`w-12 h-12 rounded-full border-2 border-slate-900 ${t.special ? 'tech-gradient text-white' : 'bg-slate-800 text-slate-300'} flex items-center justify-center text-[10px] font-black shadow-2xl transition-transform hover:-translate-y-2 cursor-help`}
                  title={t.name}
                >
                  {t.initials}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-12 border-l border-slate-800/60 pl-12 shrink-0">
            <div>
              <div className="text-2xl font-bold text-white font-mono tracking-tighter">02 Frontend</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Architects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono tracking-tighter">02 Backend</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Engineers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono tracking-tighter">02 Ops</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">PM & Tech</div>
            </div>
          </div>

          <div className="flex flex-col items-end shrink-0">
            <div className="text-right">
              <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest font-mono">Credibility Index</div>
              <div className="flex gap-1 mt-1.5">
                <div className="w-5 h-1 bg-cyan-400 rounded-full"></div>
                <div className="w-5 h-1 bg-cyan-400 rounded-full"></div>
                <div className="w-5 h-1 bg-cyan-400 rounded-full"></div>
                <div className="w-5 h-1 bg-cyan-400 rounded-full"></div>
                <div className="w-5 h-1 bg-slate-700 rounded-full"></div>
              </div>
            </div>
            <span className="text-[9px] text-slate-600 mt-2 font-mono tracking-widest uppercase">Stability Verified</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-cyan-400 uppercase mb-4 font-mono">System Capabilities</h2>
            <p className="text-5xl font-bold text-white tracking-tighter leading-tight">Advanced Logic for Modern Frontiers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700 transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Cpu className="w-24 h-24" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 group-hover:tech-gradient group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{s.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="py-32 bg-slate-900/20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-cyan-400 uppercase mb-4 font-mono">Project Archive</h2>
              <p className="text-5xl font-bold text-white tracking-tighter leading-tight">Proof of Engineering Excellence.</p>
            </div>
            <div className="pb-2">
               <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">v1.0.4 Release</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-cyan-500/30 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 md:p-20 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl tech-gradient flex items-center justify-center shadow-lg">
                       <Globe className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Featured Deployment</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6 tracking-tighter">Guan Web Portal</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-10 text-lg">
                    A comprehensive digital ecosystem designed for high-density information management and seamless user interaction. Built with the same precision and stability that defines Okissibiri Technology.
                  </p>
                  <div>
                    <a 
                      href="https://guan-web.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-cyan-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors group/link"
                    >
                      Access Live Environment 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="relative h-[400px] md:h-auto overflow-hidden border-l border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                    alt="Guan Web Project" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center justify-between">
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                          <div className="h-1.5 w-20 bg-slate-700 rounded-full mt-0.5"></div>
                       </div>
                       <div className="text-[8px] font-mono text-slate-500 uppercase">Latency: 24ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
