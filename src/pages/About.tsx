import { Users, Target, Rocket, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      title: "Technical Excellence",
      description: "We don't settle for 'good enough'. We push the boundaries of performance and scalability.",
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Integrity First",
      description: "Honest communication and transparent, audit-ready workflows are at the heart of our mission.",
      icon: <Users className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Future-Proofing",
      description: "We build with high-availability and modularity in mind, ensuring your systems scale.",
      icon: <Rocket className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Leadership",
      description: "Under Chief Okotwasuo, we lead with vision and execute with engineering precision.",
      icon: <Award className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-600/5 blur-[120px] -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-6 font-mono">Foundational Story</div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-glow text-white leading-[1.0]">Our Origins.</h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 border-l-2 border-indigo-500 pl-8">
              Founded in 2026, Okissibiri Technology was built to serve as a technical vanguard, 
              delivering high-performance architecture to modern startups.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-y border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <h2 className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4 font-mono">Guiding Constants</h2>
          <p className="text-4xl font-bold text-white tracking-tighter">The Principles of Our Infrastructure</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 glass-card rounded-3xl border border-slate-800/50 hover:border-cyan-500/30 transition-all group"
              >
                <div className="mb-8 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-[2.5rem] overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-700 aspect-video lg:aspect-square">
               <img 
                 src="https://picsum.photos/seed/tech-dark-meeting/1000/1000" 
                 alt="Operational Excellence" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-8 text-cyan-400 font-mono text-[10px] uppercase tracking-[0.3em]">
                 <ShieldCheck className="w-4 h-4" /> Stability Protocol Active
              </div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tighter">Engineering Credibility at Scale</h2>
              <p className="text-slate-400 leading-relaxed font-light mb-8 italic border-l border-slate-800 pl-6">
                "Under Chief Okotwasuo, we don't just build websites. We build the 
                infrastructure of tomorrow's digital economy."
              </p>
              <div className="space-y-6">
                <p className="text-slate-500 font-light leading-relaxed">
                  With a robust team of 6 specialist engineers and orchestration experts, 
                  we operate with absolute technical discipline. Every microservice 
                  pushed by Abdul Mumin or Chamciath, and every interaction refined by 
                  Denzel and Michelle, is a commitment to performance.
                </p>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                  Our DevOps backbone, managed by Jephthah Kojo, ensures that our 
                  infrastructure is as resilient as the businesses we support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
