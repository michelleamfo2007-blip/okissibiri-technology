import { Shield, Zap, Layout, Server, Database, Smartphone, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const categories = [
    {
      title: "Web Platforms",
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      features: ["Next.js/React Expertise", "Headless CMS Integration", "SEO Optimization", "Web3/DApp Ready"]
    },
    {
      title: "Backend Systems",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      features: ["Microservices Architecture", "Real-time Processing", "Cloud Native (AWS/GCP)", "High Availability"]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      features: ["ETL Pipelines", "Business Intelligence", "Large Scale Analytics", "Scalable Databases"]
    },
    {
      title: "Mobile Solutions",
      icon: <Smartphone className="w-8 h-8 text-rose-400" />,
      features: ["React Native", "Native Performance", "Cross-platform Sync", "App Store Management"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-6 font-mono">Service Catalog v1.0</div>
           <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 text-glow">Technical Mastery. <br /> Business Logic.</h1>
           <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
             We specialize in the full technical spectrum—from the first pixel 
             to the deepest database query, optimized for modern enterprises.
           </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900/20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8">
              {categories.map((c, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-12 rounded-[2.5rem] border border-slate-800/50 hover:border-cyan-500/30 transition-all group"
                >
                   <div className="mb-8 p-4 bg-slate-800/50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                     {c.icon}
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">{c.title}</h3>
                   <ul className="space-y-5">
                      {c.features.map(f => (
                        <li key={f} className="flex items-center gap-4 text-slate-400 font-light text-sm font-mono tracking-wide uppercase">
                           <div className="w-2 h-2 rounded-full tech-gradient" />
                           {f}
                        </li>
                      ))}
                   </ul>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-32 tech-gradient text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 italic tracking-tighter">"Excellence is not an act, but a habit."</h2>
            <div className="flex flex-wrap justify-center gap-12 mt-12 opacity-90">
               <div className="flex items-center gap-3 font-bold uppercase tracking-[0.3em] text-[10px] font-mono">
                  <Shield className="w-5 h-5" /> Secure by Default
               </div>
               <div className="flex items-center gap-3 font-bold uppercase tracking-[0.3em] text-[10px] font-mono">
                  <Zap className="w-5 h-5" /> Speed-optimized
               </div>
               <div className="flex items-center gap-3 font-bold uppercase tracking-[0.3em] text-[10px] font-mono">
                  <Cpu className="w-5 h-5" /> Native Integrity
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
