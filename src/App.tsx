/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from './translations';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  Building2, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Briefcase, 
  Network,
  Cpu,
  BarChart3,
  ChevronDown
} from 'lucide-react';

// --- Context ---
const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations['en'];
}>({
  lang: 'en',
  setLang: () => {},
  t: translations['en'],
});

const useTranslation = () => useContext(LanguageContext);

// --- Components ---

const GlobalDataFlow = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>
      
      {/* Animated Connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${50 + Math.random() * 300} ${50 + Math.random() * 300} Q ${200} ${200} ${50 + Math.random() * 300} ${50 + Math.random() * 300}`}
            stroke="rgba(180, 138, 1, 0.4)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating Currency Symbols */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`currency-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0], 
            scale: [0.5, 1, 0.5],
            x: [Math.random() * 400, Math.random() * 400],
            y: [Math.random() * 400, Math.random() * 400]
          }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: i * 2 }}
          className="absolute text-brand-accent font-bold text-2xl pointer-events-none"
        >
          {['$', '€', '£', '¥'][i % 4]}
        </motion.div>
      ))}

      {/* Floating Data Nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(180,138,1,0.8)]"
              animate={{
                x: [Math.cos(i * 30) * 100, Math.cos(i * 30) * 130, Math.cos(i * 30) * 100],
                y: [Math.sin(i * 30) * 100, Math.sin(i * 30) * 130, Math.sin(i * 30) * 100],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-32 h-32 bg-brand-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-brand-accent/20">
              <Building2 className="text-brand-accent w-16 h-16" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transaction Feed Overlay */}
      <div className="absolute bottom-6 left-6 right-6 space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                <Zap size={14} className="text-brand-accent" />
              </div>
              <div>
                <p className="text-[10px] text-brand-primary/60 uppercase font-bold tracking-wider">Transaction</p>
                <p className="text-xs text-brand-primary font-mono">ID: #{Math.floor(Math.random() * 10000)}</p>
              </div>
            </div>
            <p className="text-xs text-brand-accent font-bold">+$ {(Math.random() * 5000).toFixed(2)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WalletCreationAnimation = () => {
  return (
    <div className="relative w-full aspect-video bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      {/* Wallet Base */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-64 h-40 bg-brand-primary rounded-3xl shadow-2xl flex flex-col justify-between p-6 overflow-hidden"
      >
        <div className="flex justify-between items-start">
          <div className="w-12 h-8 bg-brand-accent/30 rounded-lg" />
          <Zap className="text-brand-accent" size={24} />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 bg-white/20 rounded-full" />
          <div className="h-2 w-1/2 bg-white/10 rounded-full" />
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl" />
      </motion.div>

      {/* Flying Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -200, y: -100, opacity: 0, scale: 0 }}
          animate={{ 
            x: [null, 0], 
            y: [null, 0], 
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: i * 0.6,
            ease: "circOut"
          }}
          className="absolute z-20"
        >
          <div className="p-3 bg-white rounded-xl shadow-lg border border-slate-100 text-brand-accent">
            {i % 2 === 0 ? <ShieldCheck size={20} /> : <CheckCircle2 size={20} />}
          </div>
        </motion.div>
      ))}

      {/* Floating Coins */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`coin-${i}`}
          initial={{ y: 200, opacity: 0 }}
          animate={{ 
            y: [-20, -100], 
            opacity: [0, 1, 0],
            x: Math.sin(i) * 100
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 0.4,
            ease: "easeOut"
          }}
          className="absolute bottom-0 w-4 h-4 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(180,138,1,0.5)]"
        />
      ))}
    </div>
  );
};

const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsLangOpen(false);
    if (isLangOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isLangOpen]);

  const navLinks = [
    { name: t.nav.solutions, href: '#solutions' },
    { name: t.nav.network, href: '#network' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="BAAS Logo" className="h-10 w-auto" />
          <span className="text-xl font-display font-bold tracking-tighter uppercase text-brand-primary">BAAS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen(!isLangOpen);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 text-xs font-bold text-brand-primary hover:bg-slate-200 transition-all"
            >
              <Globe size={14} className="text-brand-accent" />
              {languages.find(l => l.code === lang)?.label}
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden py-2"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 transition-colors flex items-center gap-3 ${lang === l.code ? 'text-brand-accent font-bold bg-brand-accent/5' : 'text-brand-secondary'}`}
                    >
                      <span className="text-lg">{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="px-5 py-2.5 bg-brand-primary text-white rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-md">
            {t.nav.getStarted}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="relative">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen(!isLangOpen);
              }}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200 text-[10px] font-bold text-brand-primary"
            >
              <Globe size={12} className="text-brand-accent" />
              {lang.toUpperCase()}
              <ChevronDown size={10} />
            </button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs hover:bg-slate-50 transition-colors flex items-center gap-2 ${lang === l.code ? 'text-brand-accent font-bold bg-brand-accent/5' : 'text-brand-secondary'}`}
                    >
                      <span>{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="text-brand-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-brand-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-brand-primary text-white rounded-xl font-semibold">
                {t.nav.getStarted}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-linear-to-bl from-slate-50 to-transparent opacity-60" />
      <div className="absolute top-1/4 -left-20 -z-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl opacity-30" />
      
      {/* Floating Banking Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [0, -20, 0], 
              opacity: [0, 0.2, 0],
              x: [Math.random() * 1000, Math.random() * 1000]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              delay: i * 2 
            }}
            className="absolute text-brand-accent"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          >
            {i % 2 === 0 ? <Zap size={24} /> : <ShieldCheck size={24} />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-200">
                {t.hero.badge}
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-10 text-brand-primary tracking-tighter">
              {t.hero.title.split('Global').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-brand-accent">Global</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl text-brand-secondary leading-relaxed mb-12 max-w-2xl font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-brand-primary text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-3 group">
                {t.hero.consult} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-brand-primary rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                {t.hero.network}
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/bank-partner-${i}/100/100`} 
                    alt="Partner" 
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <p className="text-sm text-slate-500 font-medium">
                {t.hero.partners.split('4 Continents').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-brand-primary font-bold">4 Continents</span>}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <GlobalDataFlow />
            
            {/* Floating Stat Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-2xl">
                  <BarChart3 size={28} />
                </div>
                <p className="text-3xl font-display font-bold text-brand-primary tracking-tighter">{t.hero.statValue}</p>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-tight">{t.hero.statLabel}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    t.stats.fintech,
    t.stats.bank,
    t.stats.customers,
    t.stats.integration,
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 font-medium max-w-[150px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <Building2 className="text-brand-accent" />,
      title: t.features.items[0].title,
      description: t.features.items[0].description
    },
    {
      icon: <ShieldCheck className="text-brand-accent" />,
      title: t.features.items[1].title,
      description: t.features.items[1].description
    },
    {
      icon: <Cpu className="text-brand-accent" />,
      title: t.features.items[2].title,
      description: t.features.items[2].description
    },
    {
      icon: <Users className="text-brand-accent" />,
      title: t.features.items[3].title,
      description: t.features.items[3].description
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary">{t.features.title}</h2>
          <p className="text-lg text-brand-secondary">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all"
            >
              <div className="w-14 h-14 bg-brand-accent/5 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">{feature.title}</h3>
              <p className="text-brand-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NetworkSection = () => {
  const { t } = useTranslation();
  return (
    <section id="network" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-primary">
            {t.network.title.split('Ecosystem').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-brand-accent">Ecosystem</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-lg text-brand-secondary mb-10">
            {t.network.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            {t.network.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 text-brand-accent">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-brand-primary font-medium">{item}</p>
              </div>
            ))}
          </div>

          <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-all">
            {t.network.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      icon: <BarChart3 size={32} />,
      image: "https://picsum.photos/seed/banking-strategy/600/400"
    },
    {
      title: t.services.items[1].title,
      description: t.services.items[1].description,
      icon: <Briefcase size={32} />,
      image: "https://picsum.photos/seed/banking-rfp/600/400"
    },
    {
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      icon: <Cpu size={32} />,
      image: "https://picsum.photos/seed/banking-api-tech/600/400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-surface border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary">{t.services.title}</h2>
            <p className="text-lg text-brand-secondary">
              {t.services.subtitle}
            </p>
          </div>
          <button className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20">
            {t.services.cta}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-pointer bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="h-48 bg-slate-50 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-brand-accent/20"
                >
                  {React.cloneElement(service.icon as React.ReactElement, { size: 120 })}
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-slate-50 to-transparent" />
              </div>
              <div className="p-8">
                <div className="mb-6 text-brand-accent">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-primary group-hover:text-brand-accent transition-colors">{service.title}</h3>
                <p className="text-brand-secondary leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="h-px w-full bg-slate-100 group-hover:bg-brand-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VirtualAccountProcess = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const steps = [
    { title: t.process.steps[0].title, icon: <Users size={24} />, description: t.process.steps[0].description },
    { title: t.process.steps[1].title, icon: <ShieldCheck size={24} />, description: t.process.steps[1].description },
    { title: t.process.steps[2].title, icon: <Cpu size={24} />, description: t.process.steps[2].description },
    { title: t.process.steps[3].title, icon: <Zap size={24} />, description: t.process.steps[3].description }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-primary leading-tight">
              {t.process.title.split('Named Account').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-brand-accent">Named Account</span>}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-lg text-brand-secondary mb-12">
              {t.process.subtitle}
            </p>

            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={i} className={`flex items-center gap-6 transition-all duration-500 ${step === i ? 'opacity-100 translate-x-4' : 'opacity-40'}`}>
                  <div className={`p-4 rounded-2xl ${step === i ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'bg-slate-100 text-slate-400'}`}>
                    {s.icon}
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold ${step === i ? 'text-brand-primary' : 'text-slate-400'}`}>{s.title}</h4>
                    <p className="text-sm text-slate-500">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-2xl relative z-10 min-h-[500px] flex flex-col items-center justify-center">
              <div className="w-full mb-8">
                <WalletCreationAnimation />
              </div>
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
                  >
                    <div className="space-y-4">
                      <div className="h-4 w-1/2 bg-slate-100 rounded-full" />
                      <div className="h-10 w-full bg-slate-50 rounded-xl border border-slate-200 px-4 flex items-center text-brand-primary text-sm font-medium">{t.process.demo.individual}</div>
                      <div className="h-10 w-full bg-slate-50 rounded-xl border border-slate-200 px-4 flex items-center text-brand-primary text-sm font-medium">{t.process.demo.business}</div>
                      <div className="h-12 w-full bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold">{t.process.demo.submit}</div>
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-brand-accent/20 border-t-brand-accent rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-brand-accent">
                        <ShieldCheck size={40} />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-brand-primary mb-2">{t.process.demo.verifying}</h4>
                    <p className="text-sm text-slate-500">{t.process.demo.crossRef}</p>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl animate-pulse" />
                      <div className="space-y-2 flex-1">
                        <div className="h-3 w-2/3 bg-slate-100 rounded-full animate-pulse" />
                        <div className="h-3 w-1/2 bg-slate-100 rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-full bg-slate-50 rounded-lg animate-pulse" />
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full max-w-sm"
                  >
                    <div className="bg-linear-to-br from-brand-accent to-brand-accent/80 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                      <div className="flex justify-between items-start mb-12">
                        <div className="text-xl font-display font-bold">BAAS.</div>
                        <div className="flex gap-1">
                          <div className="w-8 h-5 bg-white/40 rounded-sm" />
                          <Zap size={24} className="text-white" />
                        </div>
                      </div>
                      <div className="mb-8">
                        <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{t.process.demo.holder}</p>
                        <p className="text-lg font-medium">John Doe / TechFlow Inc.</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{t.process.demo.iban}</p>
                          <p className="text-sm font-mono tracking-wider">GB29 BAAS 0012 3456 7890</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="w-10 h-6 bg-white/20 rounded-md mb-1" />
                          <p className="text-[8px] uppercase tracking-tighter opacity-40">{t.process.demo.card}</p>
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 flex items-center justify-center gap-2 text-emerald-500 font-bold"
                    >
                      <CheckCircle2 size={18} /> {t.process.demo.success}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-accent/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-slate-100">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, #B48A01 1px, transparent 1px), linear-gradient(-45deg, #B48A01 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-brand-primary">{t.cta.title}</h2>
            <p className="text-xl text-brand-secondary mb-12">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-brand-primary text-white rounded-full font-bold text-lg hover:shadow-xl transition-all">
                {t.cta.book}
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-brand-primary rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
                {t.cta.contact}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.svg" alt="BAAS Logo" className="h-8 w-auto" />
              <span className="text-xl font-display font-bold text-brand-primary uppercase">BAAS</span>
            </div>
            <p className="text-brand-secondary leading-relaxed mb-8">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-secondary hover:bg-brand-accent hover:text-white transition-all cursor-pointer">
                  <Globe size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-brand-primary">{t.footer.solutions}</h4>
            <ul className="space-y-4 text-brand-secondary">
              {t.footer.solutionItems.map((item, i) => (
                <li key={i}><a href="#" className="hover:text-brand-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-brand-primary">{t.footer.company}</h4>
            <ul className="space-y-4 text-brand-secondary">
              {t.footer.companyItems.map((item, i) => (
                <li key={i}><a href="#" className="hover:text-brand-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>{t.footer.rights}</p>
          <div className="flex gap-8">
            {t.footer.links.map((link, i) => (
              <a key={i} href="#" className="hover:text-brand-primary">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen selection:bg-brand-accent/20">
        <Navbar />
        <main>
          <Hero />
          <StatsSection />
          <Features />
          <NetworkSection />
          <Services />
          <VirtualAccountProcess />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
