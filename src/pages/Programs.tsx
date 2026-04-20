import { motion } from 'motion/react';
import { BookMarked, GraduationCap, Microscope, Palette, Music, Trophy } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const programs = [
  {
    title: 'Literacy & Humanities',
    icon: BookMarked,
    color: 'bg-stone-100',
    desc: 'Developing powerful communicators and critical observers of the human condition.'
  },
  {
    title: 'Advanced STEM',
    icon: Microscope,
    color: 'bg-emerald-50',
    desc: 'A hands-on approach to mathematics, engineering, and the physical sciences.'
  },
  {
    title: 'Visual Arts',
    icon: Palette,
    color: 'bg-amber-50',
    desc: 'Exploring traditional media and digital storytelling through creative expression.'
  },
  {
    title: 'Performing Arts',
    icon: Music,
    color: 'bg-stone-100',
    desc: 'From orchestral performance to theatrical production and stagecraft.'
  },
  {
    title: 'Athletics program',
    icon: Trophy,
    color: 'bg-emerald-50',
    desc: 'Competitive sports teams focusing on teamwork, discipline, and healthy living.'
  },
  {
    title: 'Global Diploma',
    icon: GraduationCap,
    color: 'bg-amber-50',
    desc: 'Our flagship honors track preparing students for the world’s top universities.'
  }
];

export default function Programs() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-6 border-b border-stone-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-800">Academic Pathways</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-emerald-950 leading-tight">
              A Curriculum for <span className="italic font-light">Infinite Reach.</span>
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed pt-2">
              Our interdisciplinary approach breaks down the silos between subjects, encouraging students to see the connections that define our complex world.
            </p>
          </div>
          <div className="hidden lg:block w-px h-40 bg-stone-200 self-center" />
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-emerald-900" />
              <div className="w-4 h-1 bg-amber-500" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 max-w-[180px]">
              Recognized with the Global Excellence Award for Curricular Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Programs */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-10 rounded-[2.5rem] border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer h-full flex flex-col justify-between",
                  prog.color
                )}
              >
                <div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-900 shadow-sm mb-8 transition-transform group-hover:-rotate-6">
                    <prog.icon size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-emerald-950 mb-4">{prog.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">
                    {prog.desc}
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-stone-200/60 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">Learn More</span>
                  <div className="w-8 h-8 rounded-full border border-emerald-900 flex items-center justify-center text-emerald-900">
                    <BookMarked size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Division */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-950">Specialized Divisions</h2>
              
              {[
                { title: 'The Foundation (K-5)', desc: 'Emphasis on numeracy, literacy, and sensory exploration through bilingual immersion.' },
                { title: 'The Exploratory (6-8)', desc: 'Transition period focusing on research skills, debate, and collaborative project management.' },
                { title: 'The Mastery (9-12)', desc: 'Deep-dive into professional-grade tracks including Pre-Med, Law, and Technology Ventures.' }
              ].map((div, i) => (
                <div key={div.title} className="flex gap-8 group">
                  <span className="text-4xl font-serif text-amber-500 opacity-30 font-black group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-emerald-950">{div.title}</h4>
                    <p className="text-stone-500 leading-relaxed max-w-sm">{div.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] group">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2132"
                alt="Division"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-stone-50">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4">Admissions Outlook</p>
                <h3 className="font-serif text-3xl font-bold mb-6 italic leading-snug">"Every year we look for students who aren't afraid to ask 'Why?' and 'What if?'"</h3>
                <button className="bg-stone-50 text-emerald-950 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors">
                  Meet Admissions Counselors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
