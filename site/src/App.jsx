import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Code,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Users,
  X,
  Zap,
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Overview', type: 'section' },
  { id: 'work', label: 'What I Work On', type: 'section' },
  { id: 'case-studies', label: 'Case Studies', type: 'route' },
  { id: 'experience', label: 'Experience', type: 'section' },
  { id: 'press', label: 'Press', type: 'section' },
];

const workOnItems = [
  ['Enterprise AI strategy', 'Set direction for AI investments and connect experimentation to durable operating capability.'],
  ['AI governance and adoption', 'Build practical guardrails, training, and rollout pathways so systems are trusted and used.'],
  ['Data platform modernization', 'Design the platforms and delivery layers that support self-service analytics and production AI.'],
  ['Team and operating model design', 'Shape teams, delivery processes, and decision rights that scale beyond a single project.'],
];

const experience = [
  {
    role: 'Senior Vice President, Data & AI',
    company: 'Insight Partners',
    period: '2021 - Present',
    description:
      'Lead firm-wide AI and data strategy across investment, HR, compliance, finance, and operations, with a focus on durable adoption through platforms, governance, and change management.',
    bullets: [
      'Built enterprise AI and data operating models that connect platform, governance, and delivery.',
      'Scaled practical AI workflows and self-service access across business functions.',
      'Led teams spanning analytics, engineering, and data product execution.',
    ],
    icon: <Database className="w-5 h-5" />,
  },
  {
    role: 'Senior Consultant',
    company: 'BlueGranite',
    period: '2020 - 2021',
    description:
      'Delivered Azure-based analytics modernization work for public and private sector clients, improving data delivery speed, reliability, and governance.',
    bullets: [
      'Modernized analytics stacks and cloud data workflows for client programs.',
      'Led stakeholder-facing implementation work across data engineering and BI delivery.',
    ],
    icon: <Code className="w-5 h-5" />,
  },
  {
    role: 'Chief Data Officer',
    company: 'City of Syracuse',
    period: '2015 - 2020',
    description:
      "Built the city's first analytics office, launched DataCuse, authored the first open data policy, and led programs that improved services, modernized operations, and generated millions in savings.",
    bullets: [
      "Built and led the city's first analytics team and operating model.",
      'Delivered predictive infrastructure and transparency programs with measurable public-sector impact.',
      'Established durable data practices across departments and public-facing products.',
    ],
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    role: 'Adjunct Professor and Earlier Roles',
    company: 'Syracuse University and prior organizations',
    period: 'Earlier',
    description:
      'Taught graduate courses at Syracuse University and held earlier roles in higher education, communications, and research.',
    bullets: [
      'Taught graduate courses in data-driven government, data visualization, and data science.',
      'Brought public-sector, academic, and operational perspectives into applied analytics work.',
    ],
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

const competencies = [
  ['Leadership and Strategy', 'Enterprise AI strategy and roadmaps | AI enablement and adoption | Team building | Organizational transformation | Stakeholder management'],
  ['Governance and Delivery', 'AI governance and risk | AI assurance | Data governance and quality | Information delivery | Data ops and reliability'],
  ['Platforms and Tools', 'Snowflake | dbt | Azure | GenAI and RAG | MLOps | Python | SQL | APIs and data integration'],
];

const caseStudies = [
  {
    slug: 'datacuse-open-data-platform',
    title: 'DataCuse: Open Data Platform',
    blurb: "Launched Syracuse's first open data portal, centralizing infrastructure and housing data for public transparency and internal analytics.",
    problem: 'City datasets lived in disconnected systems, slowing coordination between departments and limiting resident access to public information.',
    role: 'Led the data inventory, defined governance standards, and coordinated stakeholder alignment across city agencies.',
    shipped: ['Launched a Socrata-based open data portal.', 'Published a standardized data dictionary and intake workflow.', "Established the city's first open data policy."],
    impact: ['Enabled public visibility into city operations.', 'Improved cross-department analytics.', 'Created a durable foundation for civic technology partnerships.'],
    links: [{ label: 'GovTech Coverage', url: 'http://www.govtech.com/civic/Whats-New-in-Civic-Tech-07272017.html' }],
  },
  {
    slug: 'predictive-water-main-analytics',
    title: 'Predictive Water Main Analytics',
    blurb: 'Co-authored research on using machine learning to assess risk and prevent water main breaks.',
    problem: 'Water infrastructure failures were difficult to anticipate, leading to costly emergency repairs.',
    role: 'Defined the operational problem, provided municipal data, and aligned outputs with field crews.',
    shipped: ['Built an ML pipeline with asset, maintenance, and geospatial features.', 'Developed a risk score to prioritize inspections.', 'Published findings in academic and civic technology channels.'],
    impact: ['Gave operations teams a defensible prioritization model.', 'Strengthened the case for proactive infrastructure investment.'],
    links: [{ label: 'Read arXiv Paper', url: 'https://ar5iv.labs.arxiv.org/html/1805.03597' }],
  },
  {
    slug: 'confidential-ai-portfolio',
    title: 'Confidential: AI Enablement Portfolio',
    blurb: 'Enterprise AI program spanning operating model, infrastructure, and applied workflows for a global investment platform.',
    problem: 'A global firm needed to coordinate AI adoption across teams without compromising confidentiality.',
    role: 'Led discovery with executive stakeholders and built a cross-functional roadmap balancing governance, delivery, and change management.',
    shipped: ['Defined a phased AI operating model.', 'Delivered prioritized use cases.', 'Established a data readiness program and enablement playbook.'],
    impact: ['Accelerated AI adoption while maintaining governance.', 'Created a repeatable approach to scaling AI across business units.'],
    links: [],
  },
];

const pressLinks = [
  { title: 'Mayor Miner names new employees of Syracuse innovation office', outlet: 'Syracuse.com', url: 'http://www.syracuse.com/news/index.ssf/2015/05/mayor_miner_announces_four_new_hires_for_syracuse_innovation_team.html' },
  { title: 'Syracuse firefighters to get smoke detectors into high-risk homes', outlet: 'Syracuse.com', url: 'http://www.syracuse.com/news/index.ssf/2017/01/syracuse_fire_department_takes_data-driven_approach_to_getting_smoke_detectors_i.html' },
  { title: 'How Mathematicians in Chicago Are Stopping Water Leaks in Syracuse', outlet: 'Politico', url: 'http://www.politico.com/magazine/story/2017/04/20/syracuse-infrastructure-water-system-pipe-breaks-215054' },
  { title: 'Open data comes to Syracuse', outlet: 'WRVO', url: 'http://wrvo.org/post/open-data-comes-syracuse' },
];

const speakingLinks = [
  { title: 'Open Data: What It Is, How It Can Help You, and Where to Start', outlet: 'New York State Local Government Innovation Conference', url: 'https://www.dos.ny.gov/lg/pdf/LGIC2016_Workshops.pdf' },
  { title: 'Smart Insights: Leveraging Data (Big and Small) in Moving Towards a Smarter City', outlet: 'Smart Cities International Symposium', url: 'http://www.smartcities-symposium.com/' },
  { title: 'Government Could Be the Mother of Your Data', outlet: 'MIT CDOIQ Symposium', url: 'http://www.mitcdoiq.org/' },
];

const blogPosts = [
  { title: 'What it Means to be AI-Ready', date: 'April 2025', link: 'https://samedelstein.medium.com/what-it-means-to-be-ai-ready-data-access-interoperability-and-the-future-of-software-part-1-a9abc8e0d03c', excerpt: 'Exploring data access, interoperability, and the future of software in the age of reasoning models.' },
  { title: '5 Years Later: How Generative AI Could Have Helped My CDO Work', date: 'January 2025', link: 'https://samedelstein.medium.com/5-years-later-how-generative-ai-could-or-couldnt-have-helped-my-chief-data-officer-work-1234567890ab', excerpt: "Lessons learned from city-wide data coordination and reflecting on modern AI's potential in local government." },
];

const leadershipRoles = [
  ['Onondaga County Public Library', 'President, Board of Trustees'],
  ['Le Moyne College Madden School of Business', 'Advisory Board Member, Business Analytics'],
];

const SectionTitle = ({ icon, title, eyebrow, compact = false }) => (
  <div className={compact ? 'mb-6' : 'mb-8'}>
    {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 mb-2">{eyebrow}</p>}
    <div className="flex items-center space-x-3">
      {icon}
      <h2 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold tracking-tight text-slate-900`}>{title}</h2>
    </div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/case-studies/')) return { page: 'case-study', slug: hash.replace('#/case-studies/', '') };
    if (hash.startsWith('#/case-studies')) return { page: 'case-studies' };
    if (hash.startsWith('#/resume')) return { page: 'resume' };
    return { page: 'home' };
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pressSearch, setPressSearch] = useState('');
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const resumePdfUrl = 'https://docs.google.com/document/d/e/2PACX-1vTs3WwrJMp1Lif09iYsuXadtaKJ0hhIBVpk_mdzSRtPtTmf9IhwnHtXpJsSw-ZcmxH3WlmrWrqasMCX/pub?output=pdf';
  const resumeDocUrl = 'https://docs.google.com/document/d/e/2PACX-1vTs3WwrJMp1Lif09iYsuXadtaKJ0hhIBVpk_mdzSRtPtTmf9IhwnHtXpJsSw-ZcmxH3WlmrWrqasMCX/pub';

  useEffect(() => {
    const handleScroll = () => setShowStickyHeader(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/case-studies/')) return setRoute({ page: 'case-study', slug: hash.replace('#/case-studies/', '') });
      if (hash.startsWith('#/case-studies')) return setRoute({ page: 'case-studies' });
      if (hash.startsWith('#/resume')) return setRoute({ page: 'resume' });
      setRoute({ page: 'home' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route.page, route.slug]);

  const filteredPress = useMemo(
    () => pressLinks.filter((item) => item.title.toLowerCase().includes(pressSearch.toLowerCase()) || item.outlet.toLowerCase().includes(pressSearch.toLowerCase())),
    [pressSearch],
  );

  const featuredCaseStudies = caseStudies.slice(0, 2);
  const activeCaseStudy = caseStudies.find((study) => study.slug === route.slug);

  const scrollToSection = (sectionId) => {
    if (route.page !== 'home') {
      window.location.hash = '#/';
      setTimeout(() => scrollToSection(sectionId), 120);
      return;
    }
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 80;
    const top = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <nav className={`fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300 ${showStickyHeader || route.page !== 'home' ? 'translate-y-0 opacity-100 shadow-sm' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="font-bold text-xl tracking-tight text-blue-600">SAM EDELSTEIN</button>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => (item.type === 'route' ? (window.location.hash = '#/case-studies') : scrollToSection(item.id))}
                className={`text-sm font-semibold ${activeSection === item.id && route.page === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <a href={resumePdfUrl} download className="inline-flex items-center justify-center space-x-2 bg-slate-900 text-white px-3 sm:px-4 h-11 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-600 transition-all">
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/samedelstein" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 h-11 w-11 inline-flex items-center justify-center" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <button className="md:hidden text-slate-600 h-11 w-11 inline-flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => (item.type === 'route' ? (window.location.hash = '#/case-studies') : scrollToSection(item.id))} className="block text-left w-full text-sm font-semibold text-slate-700 hover:text-blue-600">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {route.page === 'home' && (
        <>
          <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
            <section id="home" className="mb-24 scroll-mt-32 max-w-[52rem]">
              <p className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">Sam Edelstein</p>
              <h1 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6 leading-tight">Senior Vice President, Data &amp; AI</h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-[42rem]">I lead enterprise AI and data strategy, helping organizations build the platforms, governance, and operating models that turn modern analytics and AI into measurable business outcomes.</p>
              <p className="text-base md:text-lg text-slate-500 mb-10 max-w-[38rem]">I&apos;m particularly interested in executive conversations around enterprise AI transformation, data platform strategy, and scaling high-impact teams.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#/resume" className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all"><FileText size={18} /><span>View Resume</span></a>
                <a href="mailto:sam.i.edelstein@gmail.com?subject=Executive%20conversation&body=Hi%20Sam%2C%0A%0A" className="flex items-center space-x-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full hover:border-blue-300"><Mail size={18} /><span>Contact Me</span></a>
                <button onClick={() => scrollToSection('writing')} className="flex items-center space-x-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full hover:border-blue-300"><BookOpen size={18} /><span>Read Articles</span></button>
              </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-16">
              <div className="space-y-28">
                <section>
                  <SectionTitle icon={<Briefcase className="text-blue-600" />} title="Executive Bio" eyebrow="Overview" />
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>I currently serve as Senior Vice President, Data &amp; AI at Insight Partners, where I lead firm-wide AI and data strategy across investment, HR, compliance, finance, and operations. My work focuses on building the systems behind durable adoption: modern data platforms, practical AI workflows, governance, and change management.</p>
                    <p>Previously, I was the City of Syracuse&apos;s first Chief Data Officer, where I built the city&apos;s first analytics office and led programs that improved public services, modernized operations, and generated millions in savings. Across both public and private sector settings, my work has centered on making data and AI useful, operational, and aligned with real organizational goals.</p>
                    <p>Hi, I&apos;m Sam Edelstein. I&apos;m a data and AI executive focused on building practical, high-impact programs at the intersection of technology, strategy, and execution.</p>
                    <p>A large part of my work is helping organizations move from interest in AI to actual operating capability: defining priorities, building data foundations, setting guardrails, creating adoption pathways, and making sure the end result is something people trust and use.</p>
                    <p>Before joining Insight, I built and led Syracuse&apos;s first analytics team, launched DataCuse, authored the city&apos;s first open data policy, and led projects that generated meaningful operational and financial impact.</p>
                    <p>I&apos;ve also taught graduate courses at Syracuse University and continue to be interested in how institutions build durable capability around data, analytics, and AI.</p>
                  </div>
                </section>

                <section id="work" className="scroll-mt-24 py-10 px-8 md:px-10 bg-slate-100/80 rounded-[2.5rem] border border-slate-200/70">
                  <SectionTitle icon={<Users className="text-blue-600" />} title="What I Work On" eyebrow="Focus Areas" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workOnItems.map(([title, description], index) => (
                      <div key={title} className="bg-white/90 border border-white p-8 rounded-[2rem] shadow-sm">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-5">{[<Zap key="0" className="text-amber-500" />, <Activity key="1" className="text-blue-500" />, <Database key="2" className="text-emerald-500" />, <Users key="3" className="text-violet-500" />][index]}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                        <p className="text-slate-600 leading-relaxed">{description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="press" className="scroll-mt-24 space-y-10">
                  <div className="bg-white border border-slate-100 rounded-[2rem] p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                      <SectionTitle icon={<Activity className="text-blue-600" />} title="Press & Media" eyebrow="Selected Coverage" compact />
                      <input type="text" placeholder="Search press..." className="px-4 py-2 bg-slate-100 rounded-full text-xs w-full sm:w-40 focus:w-full sm:focus:w-56 transition-all" onChange={(event) => setPressSearch(event.target.value)} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredPress.map((item) => (
                        <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 flex flex-col justify-between">
                          <div>
                            <span className="text-[9px] font-black uppercase text-blue-600 block mb-1">{item.outlet}</span>
                            <h4 className="font-bold text-slate-800 text-sm leading-snug">{item.title}</h4>
                          </div>
                          <ArrowUpRight size={14} className="mt-4 self-end text-slate-300" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-100/80 border border-slate-200/70 rounded-[2rem] p-8">
                    <SectionTitle icon={<BookOpen className="text-blue-600" />} title="Speaking" eyebrow="Talks" compact />
                    <div className="space-y-4">
                      {speakingLinks.map((item) => (
                        <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="block p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200">
                          <span className="text-[10px] font-black uppercase text-blue-600 block mb-2">{item.outlet}</span>
                          <span className="font-bold text-slate-800 text-sm leading-snug">{item.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-8">
                    <SectionTitle icon={<Code className="text-blue-600" />} title="Featured Case Studies" eyebrow="Selected Work" />
                    <button onClick={() => { window.location.hash = '#/case-studies'; }} className="text-sm font-semibold text-blue-600 hover:underline mb-8">View all <ChevronRight size={16} className="inline" /></button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredCaseStudies.map((study) => (
                      <div key={study.slug} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed text-sm">{study.blurb}</p>
                        <a href={`#/case-studies/${study.slug}`} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline">Read case study <ArrowUpRight size={14} className="ml-1" /></a>
                      </div>
                    ))}
                  </div>
                </section>
                <section id="experience" className="scroll-mt-24">
                  <SectionTitle icon={<Briefcase className="text-blue-600" />} title="Experience" eyebrow="Background" />
                  <div className="space-y-12">
                    {experience.map((exp) => (
                      <div key={exp.role} className="group relative pl-8 border-l-2 border-slate-200 hover:border-blue-500">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-500" />
                        <span className="text-sm font-semibold text-blue-600 tracking-wider">{exp.period}</span>
                        <div className="flex items-center gap-2 mt-1"><span className="text-slate-500">{exp.icon}</span><h3 className="text-xl font-bold text-slate-900">{exp.role}</h3></div>
                        <p className="text-lg font-medium text-slate-700">{exp.company}</p>
                        <p className="text-slate-600 mt-3 leading-relaxed">{exp.description}</p>
                        <ul className="mt-4 space-y-2 text-slate-600">
                          {exp.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start">
                              <span className="text-blue-600 mr-2">*</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="writing" className="scroll-mt-24">
                  <div className="flex items-center justify-between mb-8">
                    <SectionTitle icon={<BookOpen className="text-blue-600" />} title="Latest Writing" eyebrow="Articles" />
                    <a href="https://medium.com/@samedelstein" target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-600 hover:underline mb-8">All Posts <ChevronRight size={16} className="inline" /></a>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {blogPosts.map((post) => (
                      <a key={post.link} href={post.link} target="_blank" rel="noreferrer" className="group block p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                        <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600">{post.title}</h3>
                        <p className="text-slate-600 mt-2 leading-relaxed">{post.excerpt}</p>
                      </a>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-12">
                <section>
                  <SectionTitle icon={<Users className="text-blue-600" />} title="Core Competencies" eyebrow="Capabilities" compact />
                  <div className="space-y-6">
                    {competencies.map(([title, body]) => (
                      <div key={title} className="bg-white border border-slate-100 p-6 rounded-3xl">
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                        <p className="text-slate-600 leading-relaxed">{body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold uppercase tracking-tight mb-8">Civic Leadership</h2>
                  <ul className="space-y-6">
                    {leadershipRoles.map(([org, role]) => (
                      <li key={org} className="flex space-x-4">
                        <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600"><Award size={16} /></div>
                        <div><h4 className="font-bold text-slate-900 text-sm">{org}</h4><p className="text-xs text-slate-500">{role}</p></div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="p-8 bg-blue-600 rounded-[2.5rem] text-white">
                  <h3 className="text-xl font-bold mb-4">Let&apos;s Connect</h3>
                  <p className="text-sm leading-relaxed text-blue-50 mb-6">I&apos;m interested in conversations about enterprise AI transformation, data platform strategy, executive leadership roles, and advisory work.</p>
                  <div className="space-y-3">
                    <a href="https://www.linkedin.com/in/samedelstein" target="_blank" rel="noreferrer" className="block py-4 bg-white text-blue-600 font-bold rounded-2xl text-center">LinkedIn Profile</a>
                    <a href={resumeDocUrl} target="_blank" rel="noreferrer" className="block py-4 border border-blue-300 text-white font-bold rounded-2xl text-center">View Resume Online</a>
                  </div>
                </section>
              </aside>
            </div>
          </main>

          <section id="contact" className="max-w-5xl mx-auto px-6 pb-24 scroll-mt-24">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Let&apos;s Connect</h2>
              <p className="text-slate-600 mb-4">I&apos;m always interested in conversations about:</p>
              <ul className="text-slate-600 mb-6 text-left max-w-2xl mx-auto space-y-2">
                <li className="flex items-start"><span className="text-blue-600 mr-2">*</span><span>Enterprise AI transformation and data strategy leadership</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">*</span><span>Board advisory and consulting engagements</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">*</span><span>Speaking opportunities and thought leadership collaborations</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">*</span><span>Data platform modernization and operating model design</span></li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:sam.i.edelstein@gmail.com?subject=Hello%20Sam&body=Hi%20Sam%2C%0A%0A" className="inline-flex items-center justify-center space-x-2 bg-slate-900 text-white px-6 h-11 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all"><Mail size={16} /><span>Email Sam</span></a>
                <a href={resumePdfUrl} download className="inline-flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 px-6 h-11 rounded-full text-sm font-semibold hover:border-blue-300"><FileText size={16} /><span>Download Resume</span></a>
              </div>
            </div>
          </section>

          <footer className="py-12 text-center text-slate-400 text-sm">(c) {new Date().getFullYear()} Sam Edelstein</footer>
        </>
      )}

      {route.page === 'case-studies' && (
        <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          <section className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-4">Case Studies</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">A curated set of engagements showcasing how data, analytics, and AI strategies translate into measurable operational impact.</p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <div key={study.slug} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                <h2 className="text-xl font-bold mb-3">{study.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{study.blurb}</p>
                <a href={`#/case-studies/${study.slug}`} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline">Read case study <ArrowUpRight size={14} className="ml-1" /></a>
              </div>
            ))}
          </div>
        </main>
      )}

      {route.page === 'resume' && (
        <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
          <section className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Resume</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-4">Sam Edelstein</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">Download the latest PDF copy of my resume or view the current online version.</p>
          </section>
          <div className="flex flex-wrap gap-4">
            <a href={resumePdfUrl} download className="inline-flex items-center justify-center space-x-2 bg-slate-900 text-white px-6 h-12 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all"><FileText size={18} /><span>Download PDF</span></a>
            <a href={resumeDocUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 px-6 h-12 rounded-full text-sm font-semibold hover:border-blue-300"><ExternalLink size={18} /><span>View Online</span></a>
          </div>
        </main>
      )}

      {route.page === 'case-study' && (
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
          {activeCaseStudy ? (
            <>
              <div className="mb-10">
                <button onClick={() => { window.location.hash = '#/case-studies'; }} className="text-sm font-semibold text-blue-600 hover:underline"><ChevronRight size={16} className="inline rotate-180" /> Back to case studies</button>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">{activeCaseStudy.title}</h1>
                <p className="text-lg text-slate-600 mt-4 leading-relaxed">{activeCaseStudy.blurb}</p>
              </div>
              <div className="space-y-10">
                <div><h2 className="text-xl font-bold mb-2">Problem</h2><p className="text-slate-600 leading-relaxed">{activeCaseStudy.problem}</p></div>
                <div><h2 className="text-xl font-bold mb-2">Role</h2><p className="text-slate-600 leading-relaxed">{activeCaseStudy.role}</p></div>
                <div><h2 className="text-xl font-bold mb-2">What shipped</h2><ul className="list-disc list-inside text-slate-600 space-y-2">{activeCaseStudy.shipped.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h2 className="text-xl font-bold mb-2">Impact</h2><ul className="list-disc list-inside text-slate-600 space-y-2">{activeCaseStudy.impact.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Links</h2>
                  {activeCaseStudy.links.length > 0 ? <ul className="space-y-2">{activeCaseStudy.links.map((link) => <li key={link.url}><a href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline">{link.label} <ArrowUpRight size={14} className="ml-1" /></a></li>)}</ul> : <p className="text-slate-600">Details available in conversation.</p>}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Case study not found</h1>
              <p className="text-slate-600 mb-6">The requested case study could not be found.</p>
              <a href="#/case-studies" className="text-sm font-semibold text-blue-600 hover:underline">Back to case studies</a>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
