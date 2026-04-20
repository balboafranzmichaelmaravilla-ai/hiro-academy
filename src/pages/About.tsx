import { motion } from 'motion/react';
import { History, Target, Eye, Heart, Shield, Sparkles } from 'lucide-react';

const values = [
  { title: 'Intellectual Rigor', desc: 'Challenging students to think critically and solve complex problems.', icon: History },
  { title: 'Personal Integrity', desc: 'Fostering a strong moral compass and accountability for ones actions.', icon: Shield },
  { title: 'Global Perspective', desc: 'Understanding and respecting diverse cultures and viewpoints.', icon: Eye },
  { title: 'Compassionate Action', desc: 'Encouraging students to lead with empathy and contribute to the common good.', icon: Heart },
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 mb-4 block">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-emerald-950 leading-tight">
              Legacies in <span className="italic font-light">the Making.</span>
            </h1>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed pt-4">
              Founded in 1994, Hiro Academy was established on the belief that education should be more than just the accumulation of facts—it should be a journey of self-discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2071"
                alt="Our Heritage"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl font-bold text-emerald-950">A Rich Heritage</h2>
                <p className="text-stone-600 leading-relaxed font-light">
                  What started as a small experimental school with 40 students has grown into one of the region's premier academic institutions. Over three decades, Hiro Academy has remained committed to its core founding principles while continuously evolving its curriculum to meet the needs of a changing world.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="border-l-2 border-amber-500 pl-6 space-y-2">
                  <span className="font-serif text-xl font-bold text-emerald-950">1994 — The Foundation</span>
                  <p className="text-sm text-stone-500 italic">Dr. Hiro opens the first classroom in a converted art gallery.</p>
                </div>
                <div className="border-l-2 border-emerald-900 pl-6 space-y-2">
                  <span className="font-serif text-xl font-bold text-emerald-950">2010 — Global Expansion</span>
                  <p className="text-sm text-stone-500 italic">Academy receives IB certification and opens the International Wing.</p>
                </div>
                <div className="border-l-2 border-emerald-900 pl-6 space-y-2">
                  <span className="font-serif text-xl font-bold text-emerald-950">2024 — Modern Campus</span>
                  <p className="text-sm text-stone-500 italic">Opening of the $50M STEM & Creative Arts Pavilion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-emerald-950 text-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Our Pillars of Excellence</h2>
            <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Defining the character of a Hiro student</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6 text-center"
              >
                <div className="w-16 h-16 bg-emerald-900 rounded-2xl flex items-center justify-center mx-auto text-amber-400 shadow-lg border border-emerald-800">
                  <value.icon size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold">{value.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-800">Academic Leadership</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-950 leading-tight">Visionary Educators.</h2>
            </div>
            <p className="text-stone-500 max-w-sm text-sm">Our leadership team brings decades of international education experience to the Hiro community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Dr. Elena Hiro', role: 'Head of School', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976' },
              { name: 'Prof. Marcus Vane', role: 'Director of Academics', img: 'https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
              { name: 'Sarah Jenkins', role: 'Dean of Students', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070' },
            ].map((person, i) => (
              <div key={person.name} className="space-y-4 group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-200 shadow-lg transition-transform group-hover:-translate-y-2 duration-500">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-emerald-950 mb-1">{person.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-800/60">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
