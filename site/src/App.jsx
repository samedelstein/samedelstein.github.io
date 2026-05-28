import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  CheckCircle2,
  Code,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const executiveMailto = 'mailto:sam.i.edelstein@gmail.com?subject=Executive%20Data%20%26%20AI%20conversation&body=Hi%20Sam%2C%0A%0AI%27m%20reaching%20out%20about%20a%20Data%20%26%20AI%20leadership%20conversation.%0A%0A';

const navItems = [
  { id: 'home', label: 'Overview', type: 'section' },
  { id: 'roles', label: 'Work', type: 'link', href: '/roles/' },
  { id: 'skills', label: 'Skills', type: 'link', href: '/skills/' },
  { id: 'case-studies', label: 'Proof', type: 'link', href: '/proof/' },
  { id: 'experience', label: 'Experience', type: 'section' },
  { id: 'contact', label: 'Contact', type: 'link', href: '/contact/' },
];

const workOnItems = [
  ['Data people can trust', 'Put governance, quality, access, and context close enough to the work that leaders can actually use it.'],
  ['AI people actually use', 'Move past demos by pairing tools with workflow design, enablement, ownership, and practical guardrails.'],
  ['Platforms that reduce friction', 'Shape the data, analytics, and integration layers that let teams move faster without losing control.'],
  ['Change that shows up in operations', 'Connect strategy, delivery rhythm, adoption, and measurement so the work survives beyond launch.'],
];

const impactStats = [
  ['90%+', 'AI adoption across enterprise functions'],
  ['40%+', 'actively building with AI across business and IT teams'],
  ['12+', 'data sources integrated across cloud and on-prem systems'],
  ['1B+', 'rows unified into trusted, governed, accessible foundations'],
];

const leadershipFocus = [
  {
    label: 'Data people can trust',
    body: 'Make enterprise data usable, governed, and close enough to operations to shape decisions.',
    href: '/roles/chief-data-officer/',
  },
  {
    label: 'AI people actually use',
    body: 'Turn pilots into repeatable systems with ownership, training, guardrails, and delivery rhythm.',
    href: '/roles/vp-data-ai/',
  },
  {
    label: 'Governance that travels',
    body: 'Help teams use AI well through practical enablement, workflow design, and risk-aware rollout.',
    href: '/roles/head-of-ai-enablement/',
  },
  {
    label: 'Platforms that reduce friction',
    body: 'Shape the data, analytics, and integration layers that let product and business teams move faster.',
    href: '/roles/data-platform-strategy/',
  },
  {
    label: 'Change that shows up',
    body: 'Connect strategy, platforms, governance, and adoption to outcomes people can see and manage.',
    href: '/roles/executive-ai-transformation/',
  },
];

const leadershipReasons = [
  'AI strategy grounded in the work people actually do.',
  'Data foundations built for trust, access, and reuse.',
  'Adoption systems that combine products, platforms, and people.',
  'Operating models that clarify ownership and speed up delivery.',
  'Measurement that connects capability to visible outcomes.',
  'Governance that manages risk without freezing useful work.',
];

const operatingPrinciples = [
  ['AI adoption is an operating model problem first.', 'Tools matter, but durable adoption depends on ownership, workflow fit, governance, support, and the rhythm of delivery.'],
  ['Governance should make good work easier.', 'The best controls clarify what teams can do, what needs review, and how to move responsibly without turning every decision into theater.'],
  ['Data platforms fail when they sit too far from decisions.', 'A trusted foundation is not just storage. It is context, access, quality, lineage, and a product mindset around the decisions it supports.'],
  ['The useful question is what changes on Monday morning.', 'AI and data work should eventually show up in operating cadence, decision quality, service levels, cost, speed, or risk reduction.'],
];

const availabilitySignals = [
  ['Work shape', 'Strategy, platform, governance, adoption, and AI transformation treated as one operating system.'],
  ['Location', 'Syracuse / New York; experienced with distributed and hybrid executive teams.'],
  ['Conversation', 'Useful for founder, operating partner, board, and executive team conversations.'],
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
  ['Leadership and Strategy', 'Enterprise AI strategy and roadmaps | Executive AI transformation | AI operating model design | AI enablement and adoption | Team building | Stakeholder management'],
  ['Governance and Delivery', 'AI governance and risk | AI assurance | AI readiness | Data governance and quality | Data product leadership | Data ops and reliability'],
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
    links: [{ label: 'GovTech Coverage', url: 'https://www.govtech.com/civic/whats-new-in-civic-tech-07272017.html' }],
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
    title: 'Enterprise AI Enablement at Scale',
    blurb: 'Led an enterprise AI enablement portfolio spanning operating model, infrastructure, governance, adoption, and applied workflows.',
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
  { title: 'Open data comes to Syracuse', outlet: 'WRVO', url: 'https://www.wrvo.org/politics-and-government/2017-07-27/open-data-comes-to-syracuse' },
];

const speakingLinks = [
  { title: 'Open Data: What It Is, How It Can Help You, and Where to Start', outlet: 'New York State Local Government Innovation Conference', url: 'https://www.dos.ny.gov/lg/pdf/LGIC2016_Workshops.pdf' },
  { title: 'Smart Insights: Leveraging Data (Big and Small) in Moving Towards a Smarter City', outlet: 'Smart Cities International Symposium', url: 'https://www.smartcities-symposium.com/' },
  { title: 'Government Could Be the Mother of Your Data', outlet: 'MIT CDOIQ Symposium', url: 'https://www.mitcdoiq.org/' },
];

const blogPosts = [
  { title: 'What it Means to be AI-Ready', date: 'April 2025', link: 'https://samedelstein.medium.com/what-it-means-to-be-ai-ready-data-access-interoperability-and-the-future-of-software-part-1-a9abc8e0d03c', excerpt: 'Exploring data access, interoperability, and the future of software in the age of reasoning models.' },
  { title: '5 Years Later: How Generative AI Could Have Helped My CDO Work', date: 'January 2025', link: 'https://samedelstein.medium.com/5-years-later-how-generative-ai-could-or-couldnt-have-helped-my-chief-data-officer-work-86cd3b6dfbe9', excerpt: "Lessons learned from city-wide data coordination and reflecting on modern AI's potential in local government." },
];

const leadershipRoles = [
  ['Onondaga County Public Library', 'President, Board of Trustees'],
  ['Le Moyne College Madden School of Business', 'Advisory Board Member, Business Analytics'],
];

const SectionTitle = ({ icon, title, eyebrow, compact = false }) => (
  <div className={`${compact ? 'mb-5' : 'mb-7'} border-t border-slate-200 pt-4`}>
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
    if (hash.startsWith('#/executive-brief')) return { page: 'executive-brief' };
    return { page: 'home' };
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pressSearch, setPressSearch] = useState('');
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const resumePdfUrl = '/sam-edelstein-resume.pdf';

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
      if (hash.startsWith('#/executive-brief')) return setRoute({ page: 'executive-brief' });
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

  const featuredCaseStudies = [caseStudies[2], caseStudies[0]];
  const orderedCaseStudies = [caseStudies[2], caseStudies[0], caseStudies[1]];
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
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950 font-sans selection:bg-blue-200">
      <nav className={`fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300 ${showStickyHeader || route.page !== 'home' ? 'shadow-sm' : 'shadow-none'}`}>
        <div className="mx-auto flex h-16 w-full max-w-[350px] items-center justify-between px-5 sm:max-w-6xl md:px-6">
          <button onClick={() => scrollToSection('home')} className="font-semibold text-[15px] tracking-tight text-slate-950">Sam Edelstein</button>
          <div className="hidden md:flex space-x-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => (item.type === 'link' ? window.location.assign(item.href) : scrollToSection(item.id))}
                className={`text-xs font-bold uppercase tracking-[0.12em] ${activeSection === item.id && route.page === 'home' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-950'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <a href={executiveMailto} className="hidden sm:inline-flex items-center justify-center space-x-2 border border-slate-200 text-slate-900 px-4 h-10 rounded-md text-xs font-bold uppercase tracking-[0.08em] hover:border-blue-700 hover:text-blue-700 transition-colors">
              <Mail size={16} />
              <span>Contact</span>
            </a>
            <a href={resumePdfUrl} download className="hidden h-10 items-center justify-center space-x-2 rounded-md bg-slate-950 px-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-blue-700 sm:inline-flex sm:px-4">
              <Download size={16} />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/samedelstein" {...externalLinkProps} className="hidden h-10 w-10 items-center justify-center text-slate-500 hover:text-blue-700 sm:inline-flex" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <button className="md:hidden text-slate-600 h-10 w-10 inline-flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => (item.type === 'link' ? window.location.assign(item.href) : scrollToSection(item.id))} className="block text-left w-full text-sm font-semibold text-slate-700 hover:text-blue-700">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {route.page === 'home' && (
        <>
          <main className="mx-auto w-full max-w-[350px] px-5 pt-24 pb-20 sm:max-w-6xl md:px-6">
            <section id="home" className="scroll-mt-28 border-b border-slate-200 py-10 md:py-16">
              <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1.16fr)_minmax(360px,0.84fr)] gap-10 lg:gap-14 items-stretch">
                <div className="flex min-w-0 flex-col justify-between">
                  <div>
                    <h1 className="max-w-full break-words text-4xl font-semibold leading-[0.98] tracking-tight text-slate-950 sm:text-5xl md:max-w-4xl md:text-7xl">AI becomes useful when the data, governance, workflows, and people systems are built together.</h1>
                    <p className="mt-7 max-w-full break-words text-lg leading-relaxed text-slate-600 md:max-w-2xl md:text-xl">I work on the operating systems behind enterprise AI: trusted data foundations, practical adoption, governance that can travel, and measurable change in how teams make decisions.</p>
                  </div>
                  <div className="mt-10">
                    <div className="flex flex-wrap gap-3">
                      <a href={executiveMailto} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-blue-700 sm:w-auto"><Mail size={17} /><span>Email Sam</span></a>
                      <a href={resumePdfUrl} download className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700 sm:w-auto"><Download size={17} /><span>Download Resume</span></a>
                      <a href="/executive-brief/" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700 sm:w-auto"><FileText size={17} /><span>Executive Brief</span></a>
                      <button onClick={() => scrollToSection('case-studies-preview')} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700 sm:w-auto"><ArrowUpRight size={17} /><span>See Proof</span></button>
                    </div>
                    <p className="mt-5 max-w-full break-words text-sm leading-relaxed text-slate-500 md:max-w-2xl">Current work spans enterprise AI strategy, data foundations, governance, enablement, and operating model design across investment, HR, compliance, finance, and operations.</p>
                  </div>
                </div>
                <div className="min-w-0 max-w-full border border-slate-950 bg-slate-950 text-white shadow-2xl shadow-slate-200">
                  <div className="border-b border-white/20 px-5 py-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-200">The Work</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">Where hard AI programs usually get real</h2>
                  </div>
                  <div className="divide-y divide-white/15">
                    {leadershipFocus.map((role) => (
                      <a key={role.label} href={role.href} className="grid grid-cols-[46px_minmax(0,1fr)] gap-4 px-5 py-5 transition-colors hover:bg-white/5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-blue-200"><Target size={18} /></span>
                        <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white">{role.label}</h3>
                        <p className="text-sm leading-relaxed text-slate-100">{role.body}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="case-studies-preview" className="scroll-mt-24 border-b border-slate-200 py-8">
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-4">
                {impactStats.map(([value, label]) => (
                  <div key={label} className="bg-slate-50 p-5 md:p-6">
                    <div className="text-4xl font-semibold tracking-tight text-slate-950">{value}</div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-12 border-b border-slate-200 py-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.85fr)]">
              <div>
                <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="The Pattern" eyebrow="Leadership Snapshot" />
                <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
                  {leadershipReasons.map((reason, index) => (
                    <div key={reason} className="bg-white p-5">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                        {[<Building2 key="0" />, <ShieldCheck key="1" />, <Network key="2" />, <Users key="3" />, <BarChart3 key="4" />, <CheckCircle2 key="5" />][index]}
                      </div>
                      <p className="text-base font-semibold leading-snug text-slate-900">{reason}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
                  <p>I currently serve as Senior Vice President, Data &amp; AI at Insight Partners, where I lead firm-wide AI and data strategy across investment, HR, compliance, finance, and operations. My work focuses on the systems behind durable adoption: modern data platforms, practical AI workflows, governance, and change management.</p>
                  <p>Previously, I was the City of Syracuse&apos;s first Chief Data Officer, where I built the city&apos;s first analytics office, launched DataCuse, authored the first open data policy, and led programs that improved public services, modernized operations, and generated millions in savings.</p>
                </div>
              </div>
              <aside className="space-y-6">
                <section>
                  <SectionTitle icon={<Target className="h-5 w-5" />} title="Executive Brief" eyebrow="Context" compact />
                  <div className="divide-y divide-slate-200 border border-slate-200 bg-slate-50">
                    {availabilitySignals.map(([title, body]) => (
                      <div key={title} className="p-5">
                        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-950">{title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <SectionTitle icon={<Users className="h-5 w-5" />} title="Capabilities" eyebrow="Operating Range" compact />
                  <div className="divide-y divide-slate-200 border border-slate-200 bg-white">
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

            <section className="border-b border-slate-200 py-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
                <div>
                  <SectionTitle icon={<ShieldCheck className="h-5 w-5" />} title="How I Think" eyebrow="Operating Principles" />
                  <p className="max-w-xl text-lg leading-relaxed text-slate-700">The common thread across public-sector analytics, enterprise AI adoption, governance, and platform work is not novelty. It is making complex systems usable enough, trusted enough, and well-owned enough to change how work happens.</p>
                </div>
                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {operatingPrinciples.map(([title, body]) => (
                    <article key={title} className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[minmax(180px,0.6fr)_minmax(0,1fr)]">
                      <h3 className="text-base font-semibold leading-snug text-slate-950">{title}</h3>
                      <p className="text-base leading-relaxed text-slate-600">{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="work" className="scroll-mt-24 border-b border-slate-200 py-16">
              <SectionTitle icon={<Users className="h-5 w-5" />} title="The Work In Practice" eyebrow="Focus Areas" />
              <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
                {workOnItems.map(([title, description], index) => (
                  <div key={title} className="bg-slate-50 p-6">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-blue-700">{[<Zap key="0" />, <Activity key="1" />, <Database key="2" />, <Users key="3" />][index]}</div>
                    <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-b border-slate-200 py-16">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <SectionTitle icon={<Code className="h-5 w-5" />} title="Evidence From The Work" eyebrow="Selected Work" />
                <a href="/proof/" className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">View all <ChevronRight size={16} /></a>
              </div>
              <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
                {featuredCaseStudies.map((study) => (
                  <article key={study.slug} className="bg-slate-50 p-6">
                    <h3 className="text-xl font-semibold text-slate-950">{study.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{study.blurb}</p>
                    <a href={`/proof/${study.slug}/`} className="mt-6 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">Read record <ArrowUpRight size={14} /></a>
                  </article>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 gap-12 border-b border-slate-200 py-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
              <section id="experience" className="scroll-mt-24">
                <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="Experience" eyebrow="Background" />
                <div className="divide-y divide-slate-200 border-y border-slate-200">
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
                <ul className="divide-y divide-slate-200 border border-slate-200 bg-slate-50">
                  {leadershipRoles.map(([org, role]) => (
                    <li key={org} className="p-5">
                      <h4 className="text-sm font-bold text-slate-950">{org}</h4>
                      <p className="mt-1 text-sm text-slate-600">{role}</p>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <section id="writing" className="scroll-mt-24 border-b border-slate-200 py-16">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <SectionTitle icon={<BookOpen className="h-5 w-5" />} title="Selected Writing" eyebrow="Point of View" />
                <a href="https://medium.com/@samedelstein" {...externalLinkProps} className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">All Posts <ChevronRight size={16} /></a>
              </div>
              <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
                {blogPosts.map((post) => (
                  <a key={post.link} href={post.link} {...externalLinkProps} className="group block bg-slate-50 p-6 transition-colors hover:bg-white">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{post.date}</span>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950 group-hover:text-blue-700">{post.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{post.excerpt}</p>
                  </a>
                ))}
              </div>
            </section>

            <section id="press" className="scroll-mt-24 border-b border-slate-200 py-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
                <div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <SectionTitle icon={<Activity className="h-5 w-5" />} title="Press & Media" eyebrow="Selected Coverage" />
                    <input type="text" placeholder="Search press..." className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none focus:border-blue-700 md:w-48" onChange={(event) => setPressSearch(event.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2">
                    {filteredPress.map((item) => (
                      <a key={item.url} href={item.url} {...externalLinkProps} className="flex min-h-36 flex-col justify-between bg-slate-50 p-5 transition-colors hover:bg-white">
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
                  <div className="divide-y divide-slate-200 border border-slate-200 bg-slate-50">
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
                <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">I welcome thoughtful conversations about enterprise AI strategy, trusted data foundations, operating model design, and scaled adoption.</p>
              </div>
              <div className="grid content-start gap-3">
                <a href={executiveMailto} className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-950 transition-colors hover:bg-blue-100"><Mail size={16} /><span>Email Sam</span></a>
                <a href="mailto:sam.i.edelstein@gmail.com" className="text-center text-sm font-medium text-blue-100 underline-offset-4 hover:text-white hover:underline">sam.i.edelstein@gmail.com</a>
                <a href="https://www.linkedin.com/in/samedelstein" {...externalLinkProps} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Linkedin size={16} /><span>LinkedIn</span></a>
                <a href={resumePdfUrl} download className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><FileText size={16} /><span>Download Resume</span></a>
                <a href="/executive-brief/" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><FileText size={16} /><span>Executive Brief</span></a>
                <a href="/roles/" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Target size={16} /><span>Work Themes</span></a>
                <a href="/skills/" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Zap size={16} /><span>Skills</span></a>
                <a href="/proof/" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Award size={16} /><span>Proof</span></a>
                <a href="/executive-brief.txt" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><ExternalLink size={16} /><span>Plain Text Brief</span></a>
                <a href="/sam-edelstein.vcf" download className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Download size={16} /><span>Save Contact</span></a>
                <a href="/resume/" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><ExternalLink size={16} /><span>Resume Page</span></a>
              </div>
            </div>
          </section>

          <footer className="bg-slate-950 px-6 pb-10 text-center text-sm text-slate-500">(c) {new Date().getFullYear()} Sam Edelstein</footer>
        </>
      )}

      {route.page === 'case-studies' && (
        <main className="max-w-5xl mx-auto px-5 md:px-6 pt-32 pb-20">
          <section className="mb-12 border-y border-slate-200 py-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-700">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-4 mb-4">Case Studies</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">Selected examples of turning data, analytics, and AI strategy into governed platforms, adopted workflows, and measurable operational impact.</p>
          </section>
          <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
            {orderedCaseStudies.map((study) => (
              <div key={study.slug} className="bg-slate-50 p-6 transition-colors hover:bg-white">
                <h2 className="text-xl font-semibold text-slate-950 mb-3">{study.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{study.blurb}</p>
                <a href={`/proof/${study.slug}/`} className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">Read record <ArrowUpRight size={14} /></a>
              </div>
            ))}
          </div>
        </main>
      )}

      {route.page === 'resume' && (
        <main className="max-w-4xl mx-auto px-5 md:px-6 pt-32 pb-24">
          <section className="mb-12 border-y border-slate-200 py-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-700">Resume</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-4 mb-4">Sam Edelstein</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">Download the current PDF resume or use the plain text version for a quick scan.</p>
          </section>
          <div className="flex flex-wrap gap-3">
            <a href={executiveMailto} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-blue-700"><Mail size={18} /><span>Email Sam</span></a>
            <a href={resumePdfUrl} download className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-slate-50 px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700"><FileText size={18} /><span>Download PDF</span></a>
            <a href="/sam-edelstein-resume.txt" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-slate-50 px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700"><ExternalLink size={18} /><span>Plain Text</span></a>
          </div>
        </main>
      )}

      {route.page === 'executive-brief' && (
        <main className="mx-auto w-full max-w-[350px] px-5 pt-32 pb-24 sm:max-w-5xl md:px-6">
          <section className="mb-10 border-y border-slate-200 py-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-700">Executive Brief</span>
            <h1 className="mt-4 max-w-full break-words text-4xl font-semibold tracking-tight text-slate-950 md:max-w-4xl md:text-6xl">Sam Edelstein: executive Data &amp; AI leadership brief.</h1>
            <p className="mt-5 max-w-full break-words text-lg leading-relaxed text-slate-600 md:max-w-3xl">A concise summary of operating themes, selected proof, working range, and contact details for Data &amp; AI conversations.</p>
          </section>

          <section className="grid grid-cols-1 gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
            <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
              {leadershipFocus.map((role) => (
                <a key={role.label} href={role.href} className="bg-slate-50 p-5 transition-colors hover:bg-white">
                  <h2 className="text-base font-semibold text-slate-950">{role.label}</h2>
                  <p className="mt-3 break-words text-sm leading-relaxed text-slate-600">{role.body}</p>
                </a>
              ))}
            </div>
            <aside className="border border-slate-950 bg-slate-950 p-6 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-200">Current Scope</p>
              <p className="mt-4 break-words text-lg leading-relaxed text-slate-100">Senior Vice President, Data &amp; AI at Insight Partners. Leads firm-wide AI and data strategy across investment, HR, compliance, finance, and operations.</p>
              <div className="mt-6 grid gap-3">
                <a href={executiveMailto} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-950 transition-colors hover:bg-blue-100"><Mail size={16} /><span>Email Sam</span></a>
                <a href={resumePdfUrl} download className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Download size={16} /><span>Resume PDF</span></a>
                <a href="/executive-brief.txt" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><FileText size={16} /><span>Plain Text Brief</span></a>
                <a href="/sam-edelstein.vcf" download className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"><Download size={16} /><span>Save Contact</span></a>
              </div>
            </aside>
          </section>

          <section className="border-b border-slate-200 py-12">
            <SectionTitle icon={<BarChart3 className="h-5 w-5" />} title="Proof Points" eyebrow="Fast Scan" compact />
            <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-4">
              {impactStats.map(([value, label]) => (
                <div key={label} className="bg-white p-5">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{value}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-8 border-b border-slate-200 py-12 lg:grid-cols-2">
            <div>
              <SectionTitle icon={<CheckCircle2 className="h-5 w-5" />} title="Why Connect" eyebrow="Leadership Signals" compact />
              <ul className="divide-y divide-slate-200 border border-slate-200 bg-slate-50">
                {leadershipReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-700" />
                    <span className="text-sm font-medium leading-relaxed text-slate-800">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="Selected Records" eyebrow="Relevant Proof" compact />
              <div className="divide-y divide-slate-200 border border-slate-200 bg-slate-50">
                {featuredCaseStudies.map((study) => (
                <a key={study.slug} href={`/proof/${study.slug}/`} className="block p-5 transition-colors hover:bg-white">
                    <h3 className="text-base font-semibold text-slate-950">{study.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{study.blurb}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-12">
            <SectionTitle icon={<Users className="h-5 w-5" />} title="Operating Range" eyebrow="Capabilities" compact />
            <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
              {competencies.map(([title, body]) => (
                <div key={title} className="bg-white p-5">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {route.page === 'case-study' && (
        <main className="max-w-3xl mx-auto px-5 md:px-6 pt-32 pb-24">
          {activeCaseStudy ? (
            <>
              <div className="mb-10 border-y border-slate-200 py-10">
                <a href="/proof/" className="inline-flex items-center text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950"><ChevronRight size={16} className="rotate-180" /> Back to proof</a>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-4">{activeCaseStudy.title}</h1>
                <p className="text-lg text-slate-600 mt-4 leading-relaxed">{activeCaseStudy.blurb}</p>
              </div>
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">Problem</h2><p className="text-slate-600 leading-relaxed">{activeCaseStudy.problem}</p></div>
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">Role</h2><p className="text-slate-600 leading-relaxed">{activeCaseStudy.role}</p></div>
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">What shipped</h2><ul className="list-disc list-inside text-slate-600 space-y-2">{activeCaseStudy.shipped.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="py-7"><h2 className="text-xl font-semibold mb-2">Impact</h2><ul className="list-disc list-inside text-slate-600 space-y-2">{activeCaseStudy.impact.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 pt-7">Links</h2>
                  {activeCaseStudy.links.length > 0 ? <ul className="space-y-2 pb-7">{activeCaseStudy.links.map((link) => <li key={link.url}><a href={link.url} {...externalLinkProps} className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">{link.label} <ArrowUpRight size={14} /></a></li>)}</ul> : <p className="text-slate-600 pb-7">Details helpful in conversation.</p>}
                </div>
              </div>
            </>
          ) : (
            <div className="border border-slate-200 bg-slate-50 p-8 text-center">
              <h1 className="text-2xl font-semibold text-slate-950 mb-2">Case study not found</h1>
              <p className="text-slate-600 mb-6">The requested case study could not be found.</p>
              <a href="/proof/" className="text-sm font-bold uppercase tracking-[0.08em] text-blue-700 hover:text-slate-950">Back to proof</a>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
