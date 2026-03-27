/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  BarChart3
} from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Network', href: '#network' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
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
          <button className="px-5 py-2.5 bg-brand-primary text-white rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-md">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
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
                Global Banking-as-a-Service Advisory
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-10 text-brand-primary tracking-tighter">
              The Bridge to <span className="text-brand-accent">Global</span> Finance.
            </h1>
            <p className="text-xl text-brand-secondary leading-relaxed mb-12 max-w-2xl font-light">
              BAAS is a specialized consulting firm connecting high-growth fintechs with established banking institutions worldwide. We navigate the complexity of BaaS so you can focus on innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-brand-primary text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-3 group">
                Consult with Experts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-brand-primary rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                Our Global Network
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
                Strategic partners across <span className="text-brand-primary font-bold">4 Continents</span>
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
                <p className="text-3xl font-display font-bold text-brand-primary tracking-tighter">98%</p>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-tight">Successful Partner Integrations</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Building2 className="text-brand-accent" />,
      title: "Bank & Fintech Partnerships",
      description: "Direct access to Tier 1 and Tier 2 banks across Europe, Asia, and the Americas."
    },
    {
      icon: <ShieldCheck className="text-brand-accent" />,
      title: "Compliance & Licensing",
      description: "Navigate complex regulatory landscapes with our expert compliance advisory."
    },
    {
      icon: <Cpu className="text-brand-accent" />,
      title: "API Integration",
      description: "Seamlessly connect to core banking systems through modern, secure API layers."
    },
    {
      icon: <Users className="text-brand-accent" />,
      title: "Strategic Consulting",
      description: "Tailored roadmaps for fintechs looking to launch cards, accounts, or payments."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary">The Future of Banking is Modular.</h2>
          <p className="text-lg text-brand-secondary">
            Banking-as-a-Service allows any company to offer financial products. 
            We provide the expertise and connections to make it happen.
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
  return (
    <section id="network" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-primary">Our Global <span className="text-brand-accent">Ecosystem</span>.</h2>
          <p className="text-lg text-brand-secondary mb-10">
            We don't just consult; we connect. Our network includes over 100 banks, 
            EMIs, and technology providers worldwide, ensuring you find the perfect partner for your specific needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            {[
              "Named accounts for individuals and businesses",
              "Access to multiple banking licenses (EMI, PI, Full Banking)",
              "Support for 40+ currencies and local payment rails",
              "Pre-vetted technology stacks for rapid deployment",
              "End-to-end project management from RFP to Launch"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 text-brand-accent">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-brand-primary font-medium">{item}</p>
              </div>
            ))}
          </div>

          <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-all">
            Explore Our Network
          </button>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Market Entry Strategy",
      description: "We help you identify the best jurisdictions and banking partners based on your business model and target audience.",
      icon: <BarChart3 size={32} />,
      image: "https://picsum.photos/seed/banking-strategy/600/400"
    },
    {
      title: "BaaS RFP Management",
      description: "We manage the entire selection process, from defining requirements to negotiating commercial terms with banks.",
      icon: <Briefcase size={32} />,
      image: "https://picsum.photos/seed/banking-rfp/600/400"
    },
    {
      title: "Technical Advisory",
      description: "Expert guidance on selecting the right middleware, ledger systems, and card processing partners.",
      icon: <Cpu size={32} />,
      image: "https://picsum.photos/seed/banking-api-tech/600/400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-surface border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary">Comprehensive BaaS Consulting</h2>
            <p className="text-lg text-brand-secondary">
              From initial concept to live operations, we provide the strategic and technical support needed to build a successful financial product.
            </p>
          </div>
          <button className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20">
            All Services
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
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client Onboarding", icon: <Users size={24} />, description: "Collect individual or business details for named account issuance." },
    { title: "KYC/KYB Verification", icon: <ShieldCheck size={24} />, description: "Automated identity and compliance checks." },
    { title: "Account Generation", icon: <Cpu size={24} />, description: "Assigning dedicated IBAN and virtual ledger." },
    { title: "Account Ready", icon: <Zap size={24} />, description: "Named account is live and ready for payments." }
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
              Instant <span className="text-brand-accent">Named Account</span> Issuance.
            </h2>
            <p className="text-lg text-brand-secondary mb-12">
              Our automated workflow allows you to create fully compliant accounts in your client's name in seconds. We support account creation for both individuals and businesses, ensuring every account is issued in the end-user's name.
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
                      <div className="h-10 w-full bg-slate-50 rounded-xl border border-slate-200 px-4 flex items-center text-brand-primary text-sm font-medium">Individual: John Doe</div>
                      <div className="h-10 w-full bg-slate-50 rounded-xl border border-slate-200 px-4 flex items-center text-brand-primary text-sm font-medium">Business: TechFlow Inc.</div>
                      <div className="h-12 w-full bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold">Submit Details</div>
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
                    <h4 className="text-xl font-bold text-brand-primary mb-2">Verifying Identity</h4>
                    <p className="text-sm text-slate-500">Cross-referencing global watchlists...</p>
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
                        <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Account Holder</p>
                        <p className="text-lg font-medium">John Doe / TechFlow Inc.</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Virtual IBAN</p>
                          <p className="text-sm font-mono tracking-wider">GB29 BAAS 0012 3456 7890</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="w-10 h-6 bg-white/20 rounded-md mb-1" />
                          <p className="text-[8px] uppercase tracking-tighter opacity-40">Virtual Card</p>
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 flex items-center justify-center gap-2 text-emerald-500 font-bold"
                    >
                      <CheckCircle2 size={18} /> Account Successfully Issued
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-brand-primary">Ready to build the next generation of finance?</h2>
            <p className="text-xl text-brand-secondary mb-12">
              Schedule a discovery call with our experts and explore how our global BaaS network can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-brand-primary text-white rounded-full font-bold text-lg hover:shadow-xl transition-all">
                Book a Discovery Call
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-brand-primary rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
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
              The leading global consulting firm for Banking-as-a-Service and Fintech infrastructure.
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
            <h4 className="font-bold mb-8 text-brand-primary">Solutions</h4>
            <ul className="space-y-4 text-brand-secondary">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Digital Banking</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Card Issuing</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Crypto & Web3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-brand-primary">Company</h4>
            <ul className="space-y-4 text-brand-secondary">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Our Network</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2026 BAAS. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-primary">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary">Terms of Service</a>
            <a href="#" className="hover:text-brand-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent/20">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <NetworkSection />
        <Services />
        <VirtualAccountProcess />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
