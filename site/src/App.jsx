import React, { useEffect, useMemo, useState } from 'react';
import resumePdf from './assets/Edelstein_S_Resume_315.pdf';
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

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const navItems = [
  { id: 'home', label: 'Overview', type: 'section' },
  { id: 'work', label: 'What I Work On', type: 'section' },
  { id: 'case-studies', label: 'Case Studies', type: 'route' },
  { id: 'experience', label: 'Experience', type: 'section' },
  { id: 'press', label: 'Press', type: 'section' },
  { id: 'contact', label: 'Contact', type: 'section' },
];

const workOnItems = [
  ['Enterprise AI strategy', 'Set direction for AI investments and connect experimentation to durable operating capability.'],
  ['AI governance and adoption', 'Build practical guardrails, training, and rollout pathways so systems are trusted and used.'],
  ['Data platform modernization', 'Design the platforms and delivery layers that support self-service analytics and production AI.'],
  ['Team and operating model design', 'Shape teams, delivery processes, and decision rights that scale beyond a single project.'],
];

const impactStats = [
  ['90%+', 'AI adoption across the firm'],
  ['40%+', 'of the firm actively building with AI'],
  ['12+', 'enterprise data sources integrated into a modern foundation'],
  ['1B+', 'rows unified for analytics, reporting, and applied AI'],
];

const recruiterSignals = [
  ['Executive scope', 'Data and AI leadership across strategy, platform, enablement, governance, and adoption.'],
  ['Current mandate', 'Lead the teams solidifying the data platform and scaling AI enablement across the firm.'],
  ['Leadership scale', 'Builds teams, operating models, governance, platforms, and adoption paths that turn usage into capability.'],
  ['Signature outcome', 'Turns AI ambition into trusted workflows, measurable adoption, and durable business capability.'],
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
    blurb: "Built Syracuse's first open data program, turning scattered civic data into a governed transparency and analytics capability.",
    problem: 'City datasets lived in disconnected systems, slowing coordination between departments and limiting resident access to public information.',
    role: 'Led the data inventory, defined governance standards, and coordinated stakeholder alignment across city agencies.',
    shipped: ['Launched a Socrata-based open data portal.', 'Published a standardized data dictionary and intake workflow.', "Established the city's first open data policy."],
    impact: ['Enabled public visibility into city operations.', 'Improved cross-department analytics.', 'Created a durable foundation for civic technology partnerships.'],
    links: [{ label: 'GovTech Coverage', url: 'https://www.govtech.com/civic/Whats-New-in-Civic-Tech-07272017.html' }],
  },
  {
    slug: 'predictive-water-main-analytics',
    title: 'Predictive Water Main Analytics',
    blurb: 'Translated machine learning research into an operational risk model for prioritizing aging water infrastructure.',
    problem: 'Water infrastructure failures were difficult to anticipate, leading to costly emergency repairs.',
    role: 'Defined the operational problem, provided municipal data, and aligned outputs with field crews.',
    shipped: ['Built an ML pipeline with asset, maintenance, and geospatial features.', 'Developed a risk score to prioritize inspections.', 'Published findings in academic and civic technology channels.'],
    impact: ['Gave operations teams a defensible prioritization model.', 'Strengthened the case for proactive infrastructure investment.'],
    links: [{ label: 'Read arXiv Paper', url: 'https://ar5iv.labs.arxiv.org/html/1805.03597' }],
  },
  {
    slug: 'confidential-ai-portfolio',
    title: 'Confidential: AI Enablement Portfolio',
    blurb: 'Led an enterprise AI enablement portfolio spanning operating model, infrastructure, governance, and applied workflows.',
    problem: 'A global firm needed to coordinate AI adoption across teams without compromising confidentiality.',
    role: 'Led discovery with executive stakeholders and built a cross-functional roadmap balancing governance, delivery, and change management.',
    shipped: ['Defined a phased AI operating model.', 'Delivered prioritized use cases.', 'Established a data readiness program and enablement playbook.'],
    impact: ['Accelerated AI adoption while maintaining governance.', 'Created a repeatable approach to scaling AI across business units.'],
    links: [],
  },
];

const pressLinks = [
  { title: 'Mayor Miner names new employees of Syracuse innovation office', outlet: 'Syracuse.com', url: 'https://www.syracuse.com/news/index.ssf/2015/05/mayor_miner_announces_four_new_hires_for_syracuse_innovation_team.html' },
  { title: 'Syracuse firefighters to get smoke detectors into high-risk homes', outlet: 'Syracuse.com', url: 'https://www.syracuse.com/news/index.ssf/2017/01/syracuse_fire_department_takes_data-driven_approach_to_getting_smoke_detectors_i.html' },
  { title: 'How Mathematicians in Chicago Are Stopping Water Leaks in Syracuse', outlet: 'Politico', url: 'https://www.politico.com/magazine/story/2017/04/20/syracuse-infrastructure-water-system-pipe-breaks-215054' },
  { title: 'Open data comes to Syracuse', outlet: 'WRVO', url: 'https://www.wrvo.org/post/open-data-comes-syracuse' },
];

const speakingLinks = [
  { title: 'Open Data: What It Is, How It Can Help You, and Where to Start', outlet: 'New York State Local Government Innovation Conference', url: 'https://www.dos.ny.gov/lg/pdf/LGIC2016_Workshops.pdf' },
  { title: 'Smart Insights: Leveraging Data (Big and Small) in Moving Towards a Smarter City', outlet: 'Smart Cities International Symposium', url: 'https://www.smartcities-symposium.com/' },
  { title: 'Government Could Be the Mother of Your Data', outlet: 'MIT CDOIQ Symposium', url: 'https://www.mitcdoiq.org/' },
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
  <div className={`${compact ? 'mb-5' : 'mb-7'} border-t border-slate-300 pt-4`}>
    {eyebrow && <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-700 mb-2">{eyebrow}</p>}
    <div className="flex items-center gap-3">
      <span className="text-slate-500">{icon}</span>
      <h2 className={`${compact ? 'text-lg' : 'text-2xl'} font-semibold tracking-tight text-slate-950`}>{title}</h2>
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

  const resumePdfUrl = resumePdf;
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

  const navigateToHash = (hash) => {
    window.location.assign(hash);
    setIsMenuOpen(false);
  };

  const scrollHomeSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 80;
    const top = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (route.page !== 'home') {
      navigateToHash('#/');
      setTimeout(() => scrollHomeSection(sectionId), 120);
      return;
    }
    scrollHomeSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-slate-950 font-sans selection:bg-blue-200">
      <nav className={`fixed w-full z-50 bg-[#f8f6f0]/95 backdrop-blur-md border-b border-slate-300 transition-shadow duration-300 ${showStickyHeader || route.page !== 'home' ? 'shadow-sm' : 'shadow-none'}`}>
        <div className="max-w-6xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="font-semibold text-sm tracking-[0.18em] uppercase text-slate-950">Sam Edelstein</button>
          <div className="hidden md:flex space-x-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => (item.type === 'route' ? navigateToHash('#/case-studies') : scrollToSection(item.id))}
                className={`text-xs font-bold uppercase tracking-[0.12em] ${activeSection === item.id && route.page === 'home' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-950'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <a href={resumePdfUrl} download className="inline-flex items-center justify-center space-x-2 bg-slate-950 text-white px-3 sm:px-4 h-10 rounded-md text-xs font-bold uppercase tracking-[0.08em] hover:bg-blue-700 transition-colors">
              <FileText size={16} />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/samedelstein" {...externalLinkProps} className="text-slate-500 hover:text-blue-700 h-10 w-10 inline-flex items-center justify-center" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <button className="md:hidden text-slate-600 h-10 w-10 inline-flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-300 bg-[#f8f6f0] px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => (item.type === 'route' ? navigateToHash('#/case-studies') : scrollToSection(item.id))} className="block text-left w-full text-sm font-semibold text-slate-700 hover:text-blue-700">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {route.page === 'home' && (
        <>
          <main className="max-w-6xl mx-auto px-5 md:px-6 pt-24 pb-20">
            <section id="home" className="scroll-mt-28 border-b border-slate-300 py-10 md:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] gap-10 lg:gap-14 items-stretch">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700">Data &amp; AI executive leadership</p>
                    <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-slate-950">Sam Edelstein</h1>
                    <p className="mt-5 max-w-3xl text-2xl md:text-4xl font-semibold leading-tight text-slate-800">Building enterprise capability from data platform to AI adoption.</p>
                    <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">I lead the teams, operating models, governance, and enablement systems that turn AI strategy into trusted workflows and measurable business capability.</p>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a href="#/resume" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-blue-700"><FileText size={17} /><span>Resume</span></a>
                    <a href="mailto:sam.i.edelstein@gmail.com?subject=Executive%20Data%20%26%20AI%20conversation&body=Hi%20Sam%2C%0A%0A" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-400 bg-[#f8f6f0] px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700"><Mail size={17} /><span>Contact</span></a>
                    <button onClick={() => scrollToSection('case-studies-preview')} className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-400 bg-[#f8f6f0] px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700"><ArrowUpRight size={17} /><span>Evidence</span></button>
                  </div>
                </div>
                <div className="border border-slate-950 bg-slate-950 text-white">
                  <div className="border-b border-white/20 px-5 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-200">Operating Brief</p>
                  </div>
                  <div className="divide-y divide-white/15">
                    {recruiterSignals.map(([label, body]) => (
                      <div key={label} className="grid grid-cols-[112px_minmax(0,1fr)] gap-4 px-5 py-5">
                        <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</h2>
                        <p className="text-sm leading-relaxed text-slate-100">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="case-studies-preview" className="scroll-mt-24 border-b border-slate-300 py-8">
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-300 bg-slate-300 lg:grid-cols-4">
                {impactStats.map(([value, label]) => (
                  <div key={label} className="bg-[#f8f6f0] p-5 md:p-6">
                    <div className="text-4xl font-semibold tracking-tight text-slate-950">{value}</div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-12 border-b border-slate-300 py-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
              <div>
                <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="Leadership Profile" eyebrow="Mandate" />
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                  <p>I currently serve as Senior Vice President, Data &amp; AI at Insight Partners, where I lead firm-wide AI and data strategy across investment, HR, compliance, finance, and operations. My work focuses on the systems behind durable adoption: modern data platforms, practical AI workflows, governance, and change management.</p>
                  <p>At Insight, I&apos;ve helped drive more than 90% AI adoption across the firm, with more than 40% of employees actively building with AI. I lead the teams solidifying the firm&apos;s data platform and scaling AI enablement, including data integration work spanning more than a dozen sources and 1B+ rows.</p>
                  <p>Previously, I was the City of Syracuse&apos;s first Chief Data Officer, where I built the city&apos;s first analytics office and led programs that improved public services, modernized operations, and generated millions in savings.</p>
                </div>
              </div>
              <aside className="space-y-6">
                <section>
                  <SectionTitle icon={<Users className="h-5 w-5" />} title="Capabilities" eyebrow="Operating Range" compact />
                  <div className="divide-y divide-slate-300 border border-slate-300 bg-[#f8f6f0]">
                    {competencies.map(([title, body]) => (
                      <div key={title} className="p-5">
                        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-950">{title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </aside>
            </section>

            <section id="work" className="scroll-mt-24 border-b border-slate-300 py-16">
              <SectionTitle icon={<Users className="h-5 w-5" />} title="How I Create Leverage" eyebrow="Focus Areas" />
              <div className="grid grid-cols-1 gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">
                {workOnItems.map(([title, description], index) => (
                  <div key={title} className="bg-[#f8f6f0] p-6">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-blue-700">{[<Zap key="0" />, <Activity key="1" />, <Database key="2" />, <Users key="3" />][index]}</div>
                    <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-b border-slate-300 py-16">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <SectionTitle icon={<Code className="h-5 w-5" />} title="Proof Records" eyebrow="Selected Work" />
                <button onClick={() => navigateToHash('#/case-studies')} className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">View all <ChevronRight size={16} /></button>
              </div>
              <div className="grid grid-cols-1 gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">
                {featuredCaseStudies.map((study) => (
                  <article key={study.slug} className="bg-[#f8f6f0] p-6">
                    <h3 className="text-xl font-semibold text-slate-950">{study.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{study.blurb}</p>
                    <a href={`#/case-studies/${study.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">Read record <ArrowUpRight size={14} /></a>
                  </article>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 gap-12 border-b border-slate-300 py-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
              <section id="experience" className="scroll-mt-24">
                <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="Experience" eyebrow="Background" />
                <div className="divide-y divide-slate-300 border-y border-slate-300">
                  {experience.map((exp) => (
                    <div key={exp.role} className="grid grid-cols-1 gap-4 py-6 md:grid-cols-[150px_minmax(0,1fr)]">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">{exp.period}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2"><span className="text-slate-500">{exp.icon}</span><h3 className="text-xl font-semibold text-slate-950">{exp.role}</h3></div>
                        <p className="mt-1 font-medium text-slate-700">{exp.company}</p>
                        <p className="mt-3 leading-relaxed text-slate-600">{exp.description}</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                          {exp.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-700" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <aside>
                <SectionTitle icon={<Award className="h-5 w-5" />} title="Civic Leadership" eyebrow="Boards" compact />
                <ul className="divide-y divide-slate-300 border border-slate-300 bg-[#f8f6f0]">
                  {leadershipRoles.map(([org, role]) => (
                    <li key={org} className="p-5">
                      <h4 className="text-sm font-bold text-slate-950">{org}</h4>
                      <p className="mt-1 text-sm text-slate-600">{role}</p>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <section id="writing" className="scroll-mt-24 border-b border-slate-300 py-16">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <SectionTitle icon={<BookOpen className="h-5 w-5" />} title="Selected Writing" eyebrow="Point of View" />
                <a href="https://medium.com/@samedelstein" {...externalLinkProps} className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">All Posts <ChevronRight size={16} /></a>
              </div>
              <div className="grid grid-cols-1 gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">
                {blogPosts.map((post) => (
                  <a key={post.link} href={post.link} {...externalLinkProps} className="group block bg-[#f8f6f0] p-6 transition-colors hover:bg-white">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{post.date}</span>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950 group-hover:text-blue-700">{post.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{post.excerpt}</p>
                  </a>
                ))}
              </div>
            </section>

            <section id="press" className="scroll-mt-24 border-b border-slate-300 py-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
                <div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <SectionTitle icon={<Activity className="h-5 w-5" />} title="Press & Media" eyebrow="Selected Coverage" />
                    <input type="text" placeholder="Search press..." className="h-10 w-full rounded-md border border-slate-300 bg-[#f8f6f0] px-3 text-sm text-slate-700 outline-none focus:border-blue-700 md:w-48" onChange={(event) => setPressSearch(event.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
                    {filteredPress.map((item) => (
                      <a key={item.url} href={item.url} {...externalLinkProps} className="flex min-h-36 flex-col justify-between bg-[#f8f6f0] p-5 transition-colors hover:bg-white">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">{item.outlet}</span>
                          <h4 className="mt-2 text-sm font-semibold leading-snug text-slate-900">{item.title}</h4>
                        </div>
                        <ArrowUpRight size={15} className="mt-5 text-slate-500" />
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <SectionTitle icon={<BookOpen className="h-5 w-5" />} title="Speaking" eyebrow="Talks" />
                  <div className="divide-y divide-slate-300 border border-slate-300 bg-[#f8f6f0]">
                    {speakingLinks.map((item) => (
                      <a key={item.url} href={item.url} {...externalLinkProps} className="block p-5 transition-colors hover:bg-white">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">{item.outlet}</span>
                        <span className="mt-2 block text-sm font-semibold leading-snug text-slate-900">{item.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>

          <section id="contact" className="scroll-mt-24 bg-slate-950 text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 md:px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:py-16">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-200">Contact</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Executive conversations about Data &amp; AI leadership.</h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">I&apos;m interested in roles and conversations where enterprise AI strategy, trusted data foundations, operating model design, and scaled adoption are central to the mandate.</p>
              </div>
              <div className="grid content-start gap-3">
                <a href="mailto:sam.i.edelstein@gmail.com?subject=Executive%20Data%20%26%20AI%20conversation&body=Hi%20Sam%2C%0A%0A" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-950 transition-colors hover:bg-blue-100"><Mail size={16} /><span>Email Sam</span></a>
                <a href="https://www.linkedin.com/in/samedelstein" {...externalLinkProps} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Linkedin size={16} /><span>LinkedIn</span></a>
                <a href={resumePdfUrl} download className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><FileText size={16} /><span>Download Resume</span></a>
                <a href={resumeDocUrl} {...externalLinkProps} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><ExternalLink size={16} /><span>Online Resume</span></a>
              </div>
            </div>
          </section>

          <footer className="bg-slate-950 px-6 pb-10 text-center text-sm text-slate-500">(c) {new Date().getFullYear()} Sam Edelstein</footer>
        </>
      )}

      {route.page === 'case-studies' && (
        <main className="max-w-5xl mx-auto px-5 md:px-6 pt-32 pb-20">
          <section className="mb-12 border-y border-slate-300 py-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-700">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-4 mb-4">Case Studies</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">Selected examples of turning data, analytics, and AI strategy into governed platforms, adopted workflows, and measurable operational impact.</p>
          </section>
          <div className="grid grid-cols-1 gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div key={study.slug} className="bg-[#f8f6f0] p-6 transition-colors hover:bg-white">
                <h2 className="text-xl font-semibold text-slate-950 mb-3">{study.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{study.blurb}</p>
                <a href={`#/case-studies/${study.slug}`} className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">Read record <ArrowUpRight size={14} /></a>
              </div>
            ))}
          </div>
        </main>
      )}

      {route.page === 'resume' && (
        <main className="max-w-4xl mx-auto px-5 md:px-6 pt-32 pb-24">
          <section className="mb-12 border-y border-slate-300 py-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-700">Resume</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-4 mb-4">Sam Edelstein</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">Download the latest PDF copy of my resume or view the current online version.</p>
          </section>
          <div className="flex flex-wrap gap-3">
            <a href={resumePdfUrl} download className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-blue-700"><FileText size={18} /><span>Download PDF</span></a>
            <a href={resumeDocUrl} {...externalLinkProps} className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-400 bg-[#f8f6f0] px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700"><ExternalLink size={18} /><span>View Online</span></a>
          </div>
        </main>
      )}

      {route.page === 'case-study' && (
        <main className="max-w-3xl mx-auto px-5 md:px-6 pt-32 pb-24">
          {activeCaseStudy ? (
            <>
              <div className="mb-10 border-y border-slate-300 py-10">
                <button onClick={() => navigateToHash('#/case-studies')} className="inline-flex items-center text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950"><ChevronRight size={16} className="rotate-180" /> Back to case studies</button>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-4">{activeCaseStudy.title}</h1>
                <p className="text-lg text-slate-600 mt-4 leading-relaxed">{activeCaseStudy.blurb}</p>
              </div>
              <div className="divide-y divide-slate-300 border-y border-slate-300">
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">Problem</h2><p className="text-slate-600 leading-relaxed">{activeCaseStudy.problem}</p></div>
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">Role</h2><p className="text-slate-600 leading-relaxed">{activeCaseStudy.role}</p></div>
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">What shipped</h2><ul className="list-disc list-inside text-slate-600 space-y-2">{activeCaseStudy.shipped.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">Impact</h2><ul className="list-disc list-inside text-slate-600 space-y-2">{activeCaseStudy.impact.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 pt-7">Links</h2>
                  {activeCaseStudy.links.length > 0 ? <ul className="space-y-2 pb-7">{activeCaseStudy.links.map((link) => <li key={link.url}><a href={link.url} {...externalLinkProps} className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">{link.label} <ArrowUpRight size={14} /></a></li>)}</ul> : <p className="text-slate-600 pb-7">Details available in conversation.</p>}
                </div>
              </div>
            </>
          ) : (
            <div className="border border-slate-300 bg-[#f8f6f0] p-8 text-center">
              <h1 className="text-2xl font-semibold text-slate-950 mb-2">Case study not found</h1>
              <p className="text-slate-600 mb-6">The requested case study could not be found.</p>
              <a href="#/case-studies" className="text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">Back to case studies</a>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
