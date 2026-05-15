import { Globe, Shield, Cpu, Database, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function Works() {
  const projects = [
    {
      title: "Guan Web Portal",
      category: "Digital Ecosystem",
      description: "A comprehensive digital ecosystem designed for high-density information management and seamless user interaction. Built for stability and scale.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
      link: "https://guan-web.vercel.app/",
      tags: ["React", "Cloud Infrastructure", "Real-time Data"],
      icon: <Globe className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "FoodFusion Platform",
      category: "E-Commerce & Social",
      description: "A dynamic recipe sharing and food management platform that bridges culinary enthusiasts with backend automation and smart planning.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070",
      link: "#",
      tags: ["PHP", "MySQL", "Interactive UI"],
      icon: <Layers className="w-6 h-6 text-indigo-400" />
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] -z-0" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 font-mono">
              Project Archive v2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8 text-glow">
              Engineering <br />
              <span className="text-transparent bg-clip-text tech-gradient">Benchmarks.</span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl border-l-2 border-indigo-500 pl-8">
              A curated collection of digital assets and infrastructure deployments that define the Okissibiri standard of excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-cyan-500/30 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-6 left-6">
                   <div className="w-12 h-12 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl">
                      {project.icon}
                   </div>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest font-mono mb-2 block">{project.category}</span>
                      <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                   </div>
                   <div className="text-slate-700">
                      <Cpu className="w-6 h-6" />
                   </div>
                </div>
                
                <p className="text-slate-400 font-light leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                   {project.tags.map((tag, idx) => (
                     <span key={idx} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-[9px] font-mono text-slate-500 uppercase tracking-widest">{tag}</span>
                   ))}
                </div>

                <div>
                   <a 
                     href={project.link} 
                     target={project.link.startsWith('http') ? "_blank" : "_self"}
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 text-cyan-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors group/link"
                   >
                     Inspect Payload 
                     <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 rounded-[3rem] tech-gradient-soft border border-cyan-500/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-3xl -z-10"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">Ready to Deploy Your Next Vision?</h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto mb-10 text-lg">
            Let's collaborate to build something that sets the next industry standard. 
            Our engineering core is ready for deployment.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-slate-950 font-black rounded-2xl uppercase tracking-[0.2em] text-xs shadow-2xl transition-all"
          >
            Initiate Contact <ArrowRight className="ml-2 w-4 h-4 inline" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
