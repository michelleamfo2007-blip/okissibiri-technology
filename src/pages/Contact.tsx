import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Terminal } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] -z-0" />

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-6 font-mono">Channel Integration</div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 text-glow leading-[0.9]">Establish <br /> Link.</h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light font-sans max-w-md">
              Synchronize with our engineering collective to deploy your
              next high-performance vision.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:tech-gradient group-hover:text-white transition-all shadow-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono mb-1">Direct Protocol</h4>
                  <p className="text-slate-300 font-medium">okkisbiritechnology@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:tech-gradient group-hover:text-white transition-all shadow-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono mb-1">Voice Uplink</h4>
                  <p className="text-slate-300 font-medium">+233 (0) 537 858 896</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:tech-gradient group-hover:text-white transition-all shadow-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono mb-1">Physical Node</h4>
                  <p className="text-slate-300 font-medium">Trasacco Valley, Accra, GH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-12 rounded-[3rem] border border-slate-800 relative z-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 tech-gradient text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-cyan-500/20">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Transmission Received</h2>
                  <p className="text-slate-500 mb-10 font-light leading-relaxed">
                    Our team is currently processing your data. Expect a
                    response within one operational cycle.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.3em] font-black hover:text-white transition-colors"
                  >
                    Reset Connection
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono mb-4">
                    <Terminal className="w-3 h-3 text-cyan-400" /> input_form_v1.sh
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 font-mono">First Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:bg-slate-900 transition-all text-sm text-white"
                        placeholder="IDENTIFIER"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 font-mono">Last Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:bg-slate-900 transition-all text-sm text-white"
                        placeholder="FAMILY_NODE"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 font-mono">System Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:bg-slate-900 transition-all text-sm text-white"
                      placeholder="node@network.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 font-mono">Mission Statement</label>
                    <textarea
                      required
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:bg-slate-900 transition-all text-sm text-white min-h-[150px]"
                      placeholder="Define project scope..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full tech-gradient text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-2xl shadow-cyan-900/40 uppercase tracking-[0.2em] text-xs"
                  >
                    {loading ? "Transmitting..." : (
                      <>Execute Send <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
