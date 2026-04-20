import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Globe, Award, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Student Body', value: '1,200+', icon: Users },
  { label: 'Faculty Ratio', value: '12:1', icon: BookOpen },
  { label: 'Matriculation', value: '100%', icon: Award },
  { label: 'Countries', value: '35+', icon: Globe },
];

const features = [
  {
    title: 'Holistic Curriculum',
    description: 'We blend rigorous academic standards with creative exploration and emotional intelligence.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation Lab',
    description: 'Students have access to state-of-the-art technology for coding, robotics, and digital arts.',
    icon: TrendingUp,
  },
  {
    title: 'Global Outreach',
    description: 'Our exchange programs and community service initiatives foster empathy and global awareness.',
    icon: Globe,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1986"
            alt="Academy Building"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-50 leading-tight mb-6">
                Where Tradition <br />
                <span className="italic font-light text-emerald-300">Meets Innovation.</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed font-light">
                Empowering inquisitive minds to lead with wisdom, courage, and compassion in an ever-evolving world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/programs"
                  className="bg-stone-50 text-emerald-950 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-stone-200 transition-all flex items-center gap-2 group"
                >
                  Discover Programs
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border border-stone-50/30 text-stone-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-stone-50/10 transition-all"
                >
                  Our Philosophy
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-stone-50/60 to-transparent mx-auto" />
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-stone-400 mt-4 text-center">Scroll Down</p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-stone-50 py-12 md:py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="text-emerald-800 opacity-50" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-widest font-bold text-stone-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
                  alt="Students Studying"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-900/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl -z-10" />
              
              <div className="absolute bottom-10 -right-10 bg-emerald-900 text-stone-50 p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="font-serif italic text-lg leading-relaxed">
                  "At Hiro, we don't just teach subjects; we inspire a lifelong love for discovery."
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-emerald-300">
                  — Dr. Elena Hiro, Founder
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-800 mb-4 block underline decoration-amber-500 underline-offset-8 decoration-2">
                  Our Philosophy
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-950 mt-8 mb-6 leading-tight">
                  Nurturing the WHOLE child, <br />for a global tomorrow.
                </h2>
                <p className="text-stone-600 leading-relaxed max-w-lg italic">
                  Hiro Academy stands at the forefront of intentional education. We believe that academic rigor must be balanced with personal growth and community contribution.
                </p>
              </div>

              <div className="grid gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="p-2 h-fit bg-emerald-50 rounded-lg text-emerald-900">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-950 lowercase tracking-tight mb-1">{feature.title}</h3>
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Academic Divisions</h2>
            <p className="text-stone-500 font-medium uppercase tracking-widest text-xs">Pathways to excellence starting from day one</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Early Years',
                desc: 'Ages 3-5. Play-based learning in a safe, stimulating environment.',
                img: 'https://images.unsplash.com/photo-1587654761403-f39b62768565?auto=format&fit=crop&q=80&w=2000',
              },
              {
                title: 'Primary School',
                desc: 'Grades 1-5. Building foundational skills with interdisciplinary projects.',
                img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2022',
              },
              {
                title: 'Secondary Academy',
                desc: 'Grades 6-12. Advanced placement and international baccalaureate tracks.',
                img: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80&w=2070',
              },
            ].map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                  {program.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {program.desc}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-emerald-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-emerald-950">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900 translate-x-1/2 skew-x-12 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-stone-50 mb-8 max-w-4xl mx-auto leading-tight">
            Ready to give your child the <br /> <span className="italic font-light text-emerald-400">Hiro Advantage?</span>
          </h2>
          <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
            Applications for the 2026-2027 academic year are now open. Secure your invitation to our next open house event.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-stone-50 text-emerald-950 px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 active:scale-95 transition-all">
              Apply for Admission
            </button>
            <button className="bg-transparent border border-stone-50/20 text-stone-50 px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-stone-50/10 transition-all">
              Request a Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
