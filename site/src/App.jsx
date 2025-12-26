import React, { useState } from 'react';
import { 
  Linkedin, 
  BookOpen, 
  FileText, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award,
  ChevronRight,
  Menu,
  X,
  Database,
  Users
} from 'lucide-react';
import './index.css'


const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'writing', label: 'Writing' },
    { id: 'volunteer', label: 'Civic Impact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const experience = [
    {
      role: "Senior Vice President, Data & AI",
      company: "Insight Partners",
      period: "Present",
      description: "Leading data & AI strategy and analytics initiatives for a premier global venture capital and private equity firm.",
      icon: <Database className="w-5 h-5" />
    },
    {
      role: "Chief Data Officer",
      company: "City of Syracuse",
      period: "Previous",
      description: "Appointed as the city's first CDO. Launched DataCuse and transformed municipal operations through data-driven infrastructure coordination.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      role: "Adjunct Professor",
      company: "Syracuse University",
      period: "Previous",
      description: "Teaching at the School of Information Studies (iSchool) and the Maxwell School of Citizenship and Public Affairs.",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const blogPosts = [
    {
      title: "What it Means to be AI-Ready",
      date: "April 2025",
      link: "https://samedelstein.medium.com/what-it-means-to-be-ai-ready-data-access-interoperability-and-the-future-of-software-part-1-a9abc8e0d03c",
      excerpt: "Exploring the capabilities and implications of the latest reasoning models in the data space."
    },
    {
      title: "5 Years Later: How Generative AI Could (or Couldn’t) Have Helped My Chief Data Officer Work",
      date: "January 2025",
      link: "https://samedelstein.medium.com/5-years-later-how-generative-ai-could-or-couldnt-have-helped-my-chief-data-officer-work-1234567890ab",
      excerpt: "Lessons learned from city-wide data coordination and ROI in local government."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-bold text-xl tracking-tight text-blue-600 hover:opacity-80 transition-opacity"
          >
            SAM EDELSTEIN
          </button>
          
          <div className="hidden md:flex space-x-8">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === s.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
             <a href="https://www.linkedin.com/in/samedelstein" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
               <Linkedin size={20} />
             </a>
             <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-2">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="block w-full text-left py-4 text-2xl font-semibold border-b border-slate-100 text-slate-800"
              >
                {s.label}
              </button>
            ))}
            <a 
              href="https://docs.google.com/document/d/e/2PACX-1vTs3WwrJMp1Lif09iYsuXadtaKJ0hhIBVpk_mdzSRtPtTmf9IhwnHtXpJsSw-ZcmxH3WlmrWrqasMCX/pub"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-left py-6 text-xl font-medium text-blue-600"
            >
              View Resume <ExternalLink size={18} className="inline ml-1" />
            </a>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <section id="home" className="mb-24 scroll-mt-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Leveraging data to build <span className="text-blue-600 italic">smarter</span> organizations.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I am the Senior Vice President of Data & Analytics at Insight Partners and the former Chief Data Officer for the City of Syracuse. I bridge the gap between complex data infrastructure and real-world impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://docs.google.com/document/d/e/2PACX-1vTs3WwrJMp1Lif09iYsuXadtaKJ0hhIBVpk_mdzSRtPtTmf9IhwnHtXpJsSw-ZcmxH3WlmrWrqasMCX/pub" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-lg"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </a>
              <button 
                onClick={() => scrollToSection('writing')}
                className="flex items-center space-x-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full hover:border-blue-300 transition-all"
              >
                <BookOpen size={18} />
                <span>Read Articles</span>
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-24">
            <section id="experience" className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase className="text-blue-600" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">Core Experience</h2>
              </div>
              <div className="space-y-12">
                {experience.map((exp, i) => (
                  <div key={i} className="group relative pl-8 border-l-2 border-slate-200 hover:border-blue-500 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-500 transition-colors" />
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-1 text-slate-900">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-700">{exp.company}</p>
                    <p className="text-slate-600 mt-3 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="writing" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <BookOpen className="text-blue-600" />
                  <h2 className="text-2xl font-bold uppercase tracking-tight">Latest Writing</h2>
                </div>
                <a href="https://medium.com/@samedelstein" target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-600 flex items-center hover:underline">
                  All Posts <ChevronRight size={16} />
                </a>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {blogPosts.map((post, i) => (
                  <a 
                    key={i} 
                    href={post.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1 transition-all"
                  >
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                    <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-slate-600 mt-2 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                      Read on Medium <ExternalLink size={14} className="ml-1" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-16">
            <section id="volunteer" className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <Users className="text-blue-600" />
                <h2 className="text-xl font-bold uppercase tracking-tight">Civic Impact</h2>
              </div>
              <ul className="space-y-8">
                <li className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Onondaga County Libraries</h4>
                    <p className="text-sm text-slate-500">President - Board of Trustees</p>
                  </div>
                </li>
                <li className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Le Moyne College</h4>
                    <p className="text-sm text-slate-500">Analytics Advisory Board</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  I'm always open to discussing civic tech, venture data strategy, and the future of analytics.
                </p>
                <a 
                  href="https://www.linkedin.com/in/samedelstein" 
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center w-full py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
            </section>

            <div className="text-slate-400 text-sm px-4">
              <p>© {new Date().getFullYear()} Sam Edelstein</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;