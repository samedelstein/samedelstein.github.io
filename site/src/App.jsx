import React, { useState, useMemo } from 'react';
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
  Users,
  Search,
  ArrowUpRight,
  Droplets,
  Snowflake,
  Activity,
  Zap,
  Code
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pressSearch, setPressSearch] = useState('');

  const sections = [
    { id: 'home', label: 'Overview' },
    { id: 'impact', label: 'Syracuse Impact' },
    { id: 'experience', label: 'Experience' },
    { id: 'writing', label: 'Writing' },
    { id: 'press', label: 'Press' }
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

  const cityImpacts = [
    {
      title: "DataCuse: Open Data Platform",
      icon: <Zap className="text-amber-500" />,
      description: "Launched Syracuse's first open data portal, centralizing infrastructure and housing data for public transparency and internal analytics.",
      tools: ["Socrata", "SQL", "Policy Design"],
      links: [
        { label: "GovTech Coverage", url: "http://www.govtech.com/civic/Whats-New-in-Civic-Tech-07272017.html" },
        { label: "WSYR Coverage", url: "https://www.localsyr.com/news/local-news/city-of-syracuse-opens-data-portal-for-potholes-other-infrastructure-issues/" }
      ]
    },
    {
      title: "Predictive Water Main Analytics",
      icon: <Droplets className="text-blue-500" />,
      description: "Co-authored research on using Machine Learning to assess risk and prevent water main breaks, shifting the city from reactive to proactive maintenance.",
      tools: ["Python", "Scikit-Learn", "GIS"],
      links: [
        { label: "Read arXiv Paper", url: "https://ar5iv.labs.arxiv.org/html/1805.03597" },
        { label: "Politico Feature", url: "http://www.politico.com/magazine/story/2017/04/20/syracuse-infrastructure-water-system-pipe-breaks-215054" }
      ]
    },
    {
      title: "Snow Operations Tracking",
      icon: <Snowflake className="text-sky-400" />,
      description: "Built an R-based data pipeline for real-time snowplow tracking, improving public trust and operational visibility during winter storms.",
      tools: ["R", "Shiny", "GPS Telematics"],
      links: [
        { label: "Technical Write-up", url: "https://www.innovatesyracuse.com/blog/snowplowmap" }
      ]
    },
    {
      title: "Performance OKR Dashboard",
      icon: <Activity className="text-emerald-500" />,
      description: "Institutionalized a culture of accountability by launching a public-facing performance dashboard tracking city-wide OKRs.",
      tools: ["Performance Analytics", "Stakeholder Mgmt"],
      links: [
        { label: "WhatMatters Case Study", url: "https://www.whatmatters.com/articles/syracuse-city-services-okrs" }
      ]
    }
  ];

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
      period: "2016 – 2020",
      description: "Appointed as the city's first CDO. Transformed municipal operations through data-driven infrastructure coordination and open data policy.",
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
      excerpt: "Exploring data access, interoperability, and the future of software in the age of reasoning models."
    },
    {
      title: "5 Years Later: How Generative AI Could Have Helped My CDO Work",
      date: "January 2025",
      link: "https://samedelstein.medium.com/5-years-later-how-generative-ai-could-or-couldnt-have-helped-my-chief-data-officer-work-1234567890ab",
      excerpt: "Lessons learned from city-wide data coordination and reflecting on modern AI's potential in local gov."
    }
  ];

  const pressLinks = [
    { title: "Mayor Miner names new employees of Syracuse innovation office", outlet: "Syracuse.com", url: "http://www.syracuse.com/news/index.ssf/2015/05/mayor_miner_announces_four_new_hires_for_syracuse_innovation_team.html" },
    { title: "Syracuse firefighters to get smoke detectors into high-risk homes", outlet: "Syracuse.com", url: "http://www.syracuse.com/news/index.ssf/2017/01/syracuse_fire_department_takes_data-driven_approach_to_getting_smoke_detectors_i.html" },
    { title: "Syracuse I-Team Tackles Infrastructure: Part I", outlet: "Time Warner Cable News", url: "http://www.twcnews.com/nys/central-ny/news/2016/05/20/syracuse-i-team-tackles-infrastructure-part-i.html" },
    { title: "iSchool and City of Syracuse Launch Civic Data Hackathon", outlet: "SU iSchool", url: "https://ischool.syr.edu/articles/news/view/ischool-city-syracuse-launch-hackathon-roads-data/" },
    { title: "Syracuse The Latest City To Use Data In The Fight Against Water Main Breaks", outlet: "Water Online", url: "http://www.wateronline.com/doc/syracuse-city-data-fight-against-water-main-breaks-0001" },
    { title: "Syracuse brings 'hipster' remedy to ancient problem", outlet: "Syracuse.com", url: "http://www.syracuse.com/news/index.ssf/2016/01/city_prepares_a_new_approach_to_its_oldest_problems.html" },
    { title: "How Mathematicians in Chicago Are Stopping Water Leaks in Syracuse", outlet: "Politico", url: "http://www.politico.com/magazine/story/2017/04/20/syracuse-infrastructure-water-system-pipe-breaks-215054" },
    { title: "Open data comes to Syracuse", outlet: "WRVO", url: "http://wrvo.org/post/open-data-comes-syracuse" },
    { title: "Syracuse City Hall releases open data on potholes, lead paint & more", outlet: "Syracuse.com", url: "http://www.syracuse.com/news/index.ssf/2017/07/datacuse_see_where_when_syracuse_potholes_have_been_filled_this_year.html" },
    { title: "How Syracuse i-Team Has Unearthed Value Through Infrastructure Coordination", outlet: "GovTech", url: "http://www.govtech.com/data/How-Syracuse-NYs-iTeam-Has-Unearthed-Value-Through-Infrastructure-Coordination.html" }
  ];

  const filteredPress = useMemo(() => {
    return pressLinks.filter(p => 
      p.title.toLowerCase().includes(pressSearch.toLowerCase()) || 
      p.outlet.toLowerCase().includes(pressSearch.toLowerCase())
    );
  }, [pressSearch]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="font-bold text-xl tracking-tight text-blue-600">SAM EDELSTEIN</button>
          <div className="hidden md:flex space-x-6">
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollToSection(s.id)} className={`text-sm font-semibold ${activeSection === s.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}>{s.label}</button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
             <a href="https://www.linkedin.com/in/samedelstein" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600"><Linkedin size={20} /></a>
             <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <section id="home" className="mb-24 scroll-mt-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Leveraging data & AI to build <span className="text-blue-600 italic">smarter</span> organizations.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I am the Senior Vice President of Data & AI at Insight Partners and the former Chief Data Officer for the City of Syracuse.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://docs.google.com/document/d/e/2PACX-1vTs3WwrJMp1Lif09iYsuXadtaKJ0hhIBVpk_mdzSRtPtTmf9IhwnHtXpJsSw-ZcmxH3WlmrWrqasMCX/pub" target="_blank" className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-lg">
                <FileText size={18} /><span>View Resume</span>
              </a>
              <button onClick={() => scrollToSection('writing')} className="flex items-center space-x-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full hover:border-blue-300">
                <BookOpen size={18} /><span>Read Articles</span>
              </button>
            </div>
          </div>
        </section>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-24">
            <section id="experience" className="scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8"><Briefcase className="text-blue-600" /><h2 className="text-2xl font-bold uppercase tracking-tight">Experience</h2></div>
              <div className="space-y-12">
                {experience.map((exp, i) => (
                  <div key={i} className="group relative pl-8 border-l-2 border-slate-200 hover:border-blue-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-500" />
                    <span className="text-sm font-semibold text-blue-600 tracking-wider">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-1 text-slate-900">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-700">{exp.company}</p>
                    <p className="text-slate-600 mt-3 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

        {/* Syracuse Impact Grid */}
        <section id="impact" className="mb-32 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest">Syracuse CDO Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityImpacts.map((impact, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">{impact.icon}</div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {impact.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase tracking-wider">{tool}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{impact.description}</p>
                <div className="flex flex-wrap gap-3">
                  {impact.links.map((link, lIdx) => (
                    <a key={lIdx} href={link.url} target="_blank" className="inline-flex items-center text-xs font-bold text-blue-600 hover:underline">
                      {link.label} <ArrowUpRight size={12} className="ml-1" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

            {/* Writing Section - Restored and Highlighted */}
            <section id="writing" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3"><BookOpen className="text-blue-600" /><h2 className="text-2xl font-bold uppercase tracking-tight">Latest Writing</h2></div>
                <a href="https://medium.com/@samedelstein" target="_blank" className="text-sm font-semibold text-blue-600 hover:underline">All Posts <ChevronRight size={16} className="inline" /></a>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {blogPosts.map((post, i) => (
                  <a key={i} href={post.link} target="_blank" className="group block p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                    <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600">{post.title}</h3>
                    <p className="text-slate-600 mt-2 leading-relaxed">{post.excerpt}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* Press Section */}
            <section id="press" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3"><Activity className="text-blue-600" /><h2 className="text-2xl font-bold uppercase tracking-tight">Press & Media</h2></div>
                <input type="text" placeholder="Search press..." className="px-4 py-2 bg-slate-100 rounded-full text-xs w-32 focus:w-48 transition-all" onChange={(e) => setPressSearch(e.target.value)} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredPress.map((press, i) => (
                  <a key={i} href={press.url} target="_blank" className="p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase text-blue-600 block mb-1">{press.outlet}</span>
                      <h4 className="font-bold text-slate-800 text-sm leading-snug">{press.title}</h4>
                    </div>
                    <ArrowUpRight size={14} className="mt-4 self-end text-slate-300" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-8">Civic Leadership</h2>
              <ul className="space-y-6">
                {[
                  { org: "Onondaga County Libraries", role: "President - Board of Trustees" },
                  { org: "Le Moyne College", role: "Analytics Advisory Board" },
                ].map((item, i) => (
                  <li key={i} className="flex space-x-4">
                    <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600"><Award size={16} /></div>
                    <div><h4 className="font-bold text-slate-900 text-sm">{item.org}</h4><p className="text-xs text-slate-500">{item.role}</p></div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-8 bg-blue-600 rounded-[2.5rem] text-white text-center">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <a href="https://www.linkedin.com/in/samedelstein" target="_blank" className="block py-4 bg-white text-blue-600 font-bold rounded-2xl">LinkedIn Profile</a>
            </section>
          </div>
        </div>
      </main>
      <footer className="py-12 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Sam Edelstein</footer>
    </div>
  );
};

export default App;