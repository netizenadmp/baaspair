/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
        <div className="flex items-center gap-4">
          <span className="text-xl font-display font-bold tracking-tighter uppercase text-brand-primary">BAAS INC</span>
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

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <img 
                src="https://picsum.photos/seed/baas-consulting-logo/400/150" 
                alt="BAAS INC Logo" 
                className="h-16 w-auto object-contain mb-6"
                referrerPolicy="no-referrer"
              />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-200">
                Global Banking-as-a-Service Advisory
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-10 text-brand-primary tracking-tighter">
              The Bridge to <span className="text-brand-accent">Global</span> Finance.
            </h1>
            <p className="text-xl text-brand-secondary leading-relaxed mb-12 max-w-2xl font-light">
              BAAS INC is a specialized consulting firm connecting high-growth fintechs with established banking institutions worldwide. We navigate the complexity of BaaS so you can focus on innovation.
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
                    src={`https://picsum.photos/seed/partner${i}/100/100`} 
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
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-3xl shadow-slate-200 border border-slate-100">
              <img 
                src="https://picsum.photos/seed/modern-banking/1000/1200" 
                alt="Global Finance Hub" 
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-primary/20 to-transparent" />
            </div>
            
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
      title: "Bank Partnerships",
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
      description: "Tailored roadmaps for fintechs looking to launch cards, accounts, or lending."
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
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-primary">Our Global <span className="text-brand-accent">Ecosystem</span>.</h2>
            <p className="text-lg text-brand-secondary mb-10">
              We don't just consult; we connect. Our network includes over 100 banks, 
              EMIs, and technology providers worldwide, ensuring you find the perfect partner for your specific needs.
            </p>
            
            <div className="space-y-6">
              {[
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

            <button className="mt-12 px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-all">
              Explore Our Network
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://picsum.photos/seed/bank1/400/600" alt="Bank Partner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 rounded-3xl bg-brand-accent p-8 text-white flex flex-col justify-end">
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Partners</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 rounded-3xl bg-slate-100 p-8 text-brand-primary flex flex-col justify-end">
                  <p className="text-3xl font-bold">40+</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Currencies</p>
                </div>
                <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://picsum.photos/seed/fintech1/400/600" alt="Fintech Partner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/5 rounded-full blur-3xl" />
          </div>
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
      icon: <BarChart3 size={32} />
    },
    {
      title: "BaaS RFP Management",
      description: "We manage the entire selection process, from defining requirements to negotiating commercial terms with banks.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Technical Advisory",
      description: "Expert guidance on selecting the right middleware, ledger systems, and card processing partners.",
      icon: <Cpu size={32} />
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
            <div key={idx} className="group cursor-pointer p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-8 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-primary group-hover:text-brand-accent transition-colors">{service.title}</h3>
              <p className="text-brand-secondary leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="h-px w-full bg-slate-100 group-hover:bg-brand-accent transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-br from-brand-primary to-brand-secondary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/20">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to build the next generation of finance?</h2>
            <p className="text-xl text-white/90 mb-12">
              Schedule a discovery call with our experts and explore how our global BaaS network can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:shadow-xl transition-all">
                Book a Discovery Call
              </button>
              <button className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10">
                <img 
                  src="https://picsum.photos/seed/baas-logo-gold/200/200" 
                  alt="BAAS Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
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
              <li><a href="#" className="hover:text-brand-accent transition-colors">Lending as a Service</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Crypto & Web3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-brand-primary">Company</h4>
            <ul className="space-y-4 text-brand-secondary">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Our Network</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-brand-primary">Newsletter</h4>
            <p className="text-brand-secondary mb-6">Get the latest BaaS insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-brand-accent/20 transition-all"
              />
              <button className="p-3 bg-brand-primary text-white rounded-xl hover:bg-brand-primary/90 transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2026 BAAS INC. All rights reserved.</p>
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
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
