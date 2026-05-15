import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, Award, Terminal, Shield, Cpu, Zap } from 'lucide-react';

export default function Team() {
  const chief = {
    name: "Okotwasuo",
    role: "Chief & Founder",
    bio: "Visionary leader with a passion for disruptive technology and strategic architectural design. Orchestrating Technical Sovereignty through robust infrastructure and high-performance digital solutions.",
    img: "https://picsum.photos/seed/okot-tech/400/400",
    color: "border-cyan-500/50 shadow-cyan-900/20"
  };

  const members = [
    {
      name: "Michelle Nhyira Amfo",
      role: "Frontend Developer",
      bio: "Crafting beautiful, responsive user interfaces with a focus on high-performance visuals and accessibility.",
      img: "https://picsum.photos/seed/michelle-dev/400/400"
    },
    {
      name: "Denzel Amoako",
      role: "Frontend Developer",
      bio: "Specialist in React and fluid animations, bringing immersive digital experiences to life.",
      img: "https://picsum.photos/seed/denzel-dev/400/400"
    },
    {
      name: "Abdul Mumin Sukairaju",
      role: "Backend Developer",
      bio: "Architecting scaleable APIs and secure database structures. Master of distributed systems.",
      img: "https://picsum.photos/seed/mumin-backend/400/400"
    },
    {
      name: "Chamciath Alhasane",
      role: "Backend Developer",
      bio: "Expert in microservices architecture and high-throughput transaction processing.",
      img: "https://picsum.photos/seed/cham-backend/400/400"
    },
    {
      name: "Danquah Jephthah Kojo",
      role: "Technical Operations",
      bio: "The backbone of our DevOps, ensuring seamless CI/CD pipelines and infrastructure resilience.",
      img: "https://picsum.photos/seed/kojo-ops/400/400"
    },
    {
      name: "Danquah Ernest",
      role: "Project Manager",
      bio: "Orchestrating workflows to ensure technical credibility is delivered on every sprint.",
      img: "https://picsum.photos/seed/ernest-pm/400/400"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] -z-0" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 font-mono">
              The Engineering Core
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8 text-glow">
              Technical <br />
              <span className="text-transparent bg-clip-text tech-gradient">Collective.</span>
            </h1>
          </motion.div>
        </div>

        {/* Chief Section - Outstanding Container */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-[3rem] overflow-hidden border border-cyan-500/20 bg-slate-900/40 backdrop-blur-md shadow-2xl shadow-cyan-900/20 p-1 md:p-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="relative bg-slate-950/80 rounded-[2.8rem] overflow-hidden p-12 md:p-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative w-full aspect-square md:w-80 md:h-80 mx-auto lg:mx-0 rounded-[3rem] overflow-hidden border-2 border-slate-800 shadow-2xl group-hover:border-cyan-500/50 transition-colors duration-500">
                    <img 
                      src={chief.img} 
                      alt={chief.name} 
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center text-cyan-400 shadow-2xl">
                    <Shield className="w-8 h-8" />
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-6 h-6 text-cyan-400" />
                      <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.3em] font-mono">Visionary Originator</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">{chief.name}</h2>
                    <div className="text-xl text-slate-400 font-mono uppercase tracking-[0.2em]">{chief.role}</div>
                  </div>
                  
                  <p className="text-xl text-slate-300 font-light leading-relaxed italic border-l-2 border-cyan-500 pl-8">
                    "{chief.bio}"
                  </p>

                  <div className="flex items-center gap-8 pt-6">
                    <div className="flex space-x-6">
                      <Linkedin className="w-5 h-5 text-slate-500 hover:text-indigo-400 cursor-pointer transition-colors" />
                      <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                      <Twitter className="w-5 h-5 text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors" />
                    </div>
                    <div className="h-px flex-1 bg-slate-800"></div>
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Authority ID: 001</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-10 rounded-[3rem] border border-slate-800/50 relative overflow-hidden group hover:translate-y-[-10px] transition-all duration-500 bg-slate-900/20 hover:bg-slate-900/40"
            >
              <div className="relative mb-10 flex justify-center">
                 <div className="w-36 h-36 rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-slate-800">
                    <img 
                      src={m.img} 
                      alt={m.name} 
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                 </div>
                 <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <Terminal className="w-4 h-4" />
                 </div>
              </div>
              <div className="text-center">
                 <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{m.name}</h3>
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] font-mono">{m.role}</span>
                 <p className="text-slate-500 text-sm mt-8 leading-relaxed mb-10 font-light italic">
                   "{m.bio}"
                 </p>
                 <div className="flex justify-center space-x-6">
                    <Linkedin className="w-4 h-4 text-slate-600 hover:text-indigo-400 cursor-pointer transition-colors" />
                    <Github className="w-4 h-4 text-slate-600 hover:text-white cursor-pointer transition-colors" />
                    <Twitter className="w-4 h-4 text-slate-600 hover:text-cyan-400 cursor-pointer transition-colors" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
