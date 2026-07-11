import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Database,
  FileText,
  Github,
  Landmark,
  Linkedin,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const contactMailto = 'mailto:sam.i.edelstein@gmail.com?subject=Data%20%26%20AI%20conversation';

const navItems = [
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Writing', '#writing'],
  ['Now', '/now/'],
];

const impactStats = [
  ['90%+', 'employee AI adoption across enterprise functions'],
  ['1B+', 'records unified into governed data foundations'],
  ['5', 'enterprise functions served: investment, HR, compliance, finance, and operations'],
  ['1st', 'Chief Data Officer for the City of Syracuse'],
];

const selectedWork = [
  {
    label: 'Enterprise leadership',
    title: 'AI in Practice',
    body: 'Building the data, controls, platforms, training, and working habits that move AI from isolated experiments into everyday enterprise workflows.',
    result: 'Adoption across investment and business operations',
    href: '/proof/enterprise-ai-in-practice/',
    image: '/work/sam-edelstein.png',
    imageAlt: 'Portrait of Sam Edelstein',
  },
  {
    label: 'Public data platform',
    title: 'DataCuse',
    body: "Launching Syracuse's open data program and public portal, supported by standards, publishing workflows, privacy policy, and durable governance.",
    result: 'A reusable public data capability, not just a website',
    href: '/proof/datacuse-open-data-platform/',
    image: '/work/datacuse.png',
    imageAlt: 'The original DataCuse open data portal interface',
  },
  {
    label: 'Predictive analytics',
    title: 'Water main risk analytics',
    body: 'Using operational history, infrastructure data, and machine learning to help Syracuse understand and act on water-main failure risk.',
    result: 'Data science applied to a visible city service problem',
    href: '/proof/predictive-water-main-analytics/',
    image: '/work/water-main.png',
    imageAlt: 'Map of Syracuse water-main risk analysis',
  },
];

const capabilities = [
  {
    title: 'Enterprise data and AI',
    body: 'Connecting strategy to the platforms, governance, workflows, and adoption required to make it operational.',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'Governed data foundations',
    body: 'Turning fragmented data into accessible, explainable systems that support decisions across an organization.',
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: 'Cross-functional leadership',
    body: 'Working between senior leaders, subject-matter experts, analysts, engineers, public officials, and communities.',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Public-minded delivery',
    body: 'Bringing the accountability and practical constraints of public-sector work into how systems are designed and led.',
    icon: <Building2 className="h-5 w-5" />,
  },
];

const publicRecord = [
  {
    label: 'Current role',
    title: 'Senior Vice President, Data & AI at Insight Partners',
    href: 'https://www.linkedin.com/in/samedelstein',
    source: 'LinkedIn',
    icon: <Network className="h-5 w-5" />,
  },
  {
    label: 'Institutional record',
    title: "Syracuse's first open data and privacy policies",
    href: 'https://library.syracuse.edu/news/syracuse-surge-the-path-to-becoming-a-smart-city-with-su-alum-sam-edelstein/',
    source: 'Syracuse University',
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    label: 'National coverage',
    title: 'Using data science on aging water infrastructure',
    href: 'https://www.politico.com/magazine/story/2017/04/20/syracuse-infrastructure-water-system-pipe-breaks-215054',
    source: 'Politico',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const writing = [
  {
    title: "What's Missing in AI + BI",
    body: 'Why chat interfaces and structured data tools still need a better shared loop.',
    href: 'https://samedelstein.medium.com/whats-missing-in-ai-bi-the-case-for-bi-directional-interfaces-bcba1849b8a4',
  },
  {
    title: 'How I Use Voice Recordings and AI',
    body: 'A lightweight workflow for turning loose thinking into proposals, posts, and clearer notes.',
    href: 'https://samedelstein.medium.com/how-i-use-voice-recordings-and-ai-to-draft-proposals-posts-and-work-through-ideas-f1ed8e94e835',
  },
  {
    title: 'What It Means to Be AI-Ready',
    body: 'Data access, interoperability, and what changes when reasoning models become part of everyday work.',
    href: 'https://samedelstein.medium.com/what-it-means-to-be-ai-ready-data-access-interoperability-and-the-future-of-software-part-1-a9abc8e0d03c',
  },
];

function SectionHeader({ eyebrow, title, body, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-[#a7f3d0]' : 'text-[#533afd]'}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-light tracking-normal sm:text-4xl ${light ? 'text-white' : 'text-[#061b31]'}`}>{title}</h2>
      {body && <p className={`mt-4 text-lg font-light leading-8 ${light ? 'text-white/70' : 'text-slate-600'}`}>{body}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-[#061b31] selection:bg-emerald-200">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8" aria-label="Primary navigation">
          <a href="#top" className="min-w-0 flex-none text-sm font-semibold text-[#061b31]">Sam Edelstein</a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-slate-500 transition hover:text-[#533afd]">{label}</a>
            ))}
          </div>
          <div className="flex flex-none items-center gap-2">
            <a href={contactMailto} className="inline-flex h-9 items-center justify-center gap-2 rounded bg-[#533afd] px-3 text-sm font-medium text-white transition hover:bg-[#4434d4]"><Mail className="h-4 w-4" /> <span className="hidden sm:inline">Start a conversation</span></a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 text-slate-600 md:hidden"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-3 md:hidden">
            <div className="mx-auto grid max-w-7xl">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 last:border-0">{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-[#e5edf5] lg:min-h-[680px]">
          <img src="/work/water-main.png" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] opacity-50" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_46%,rgba(255,255,255,0.84)_68%,rgba(255,255,255,0.38)_100%)]" />
          <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-[680px]">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#533afd]">Enterprise data and AI leadership</p>
              <h1 className="text-5xl font-light leading-[1.02] tracking-normal text-[#061b31] sm:text-7xl lg:text-8xl">Sam Edelstein</h1>
              <p className="mt-6 max-w-3xl text-2xl font-light leading-9 text-[#061b31] sm:text-3xl sm:leading-[1.25]">
                I turn fragmented data and emerging AI into systems people can trust and use.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                I lead enterprise data and AI work at Insight Partners. Before that, I served as Syracuse&apos;s first Chief Data Officer, building public data systems and applying analytics to city services.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#work" className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#533afd] px-5 text-base font-medium text-white shadow-[rgba(50,50,93,0.25)_0px_22px_35px_-20px] transition hover:bg-[#4434d4]">Explore selected work <ArrowRight className="h-4 w-4" /></a>
                <a href={contactMailto} className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#9ba7b4] bg-white/85 px-5 text-base font-medium text-[#061b31] transition hover:border-[#533afd] hover:text-[#533afd]"><Mail className="h-4 w-4" /> Start a conversation</a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Selected outcomes" className="border-b border-[#e5edf5] bg-[#f6f9fc]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#dfe7ef] lg:grid-cols-4">
            {impactStats.map(([value, label]) => (
              <div key={label} className="bg-[#f6f9fc] p-6 sm:p-8">
                <div className="text-4xl font-light text-[#061b31]">{value}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Selected work"
            title="Leadership measured in systems that changed how people worked."
            body="Three examples across private markets and city government, each involving technology, organizational constraints, and practical delivery."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {selectedWork.map((item) => (
              <article key={item.title} className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-[#dfe7ef] bg-white shadow-[rgba(23,23,23,0.06)_0px_3px_8px]">
                <a href={item.href} className="block aspect-[16/9] overflow-hidden border-b border-[#dfe7ef] bg-[#f6f9fc]">
                  <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-light text-[#061b31]">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.body}</p>
                  <p className="mt-5 border-l-2 border-emerald-400 pl-3 text-sm font-medium leading-6 text-[#19483b]">{item.result}</p>
                  <a href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#533afd]">View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-[#16283a] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:py-24">
            <div>
              <SectionHeader
                eyebrow="How I lead"
                title="Strategy stays connected to the real workflow."
                body="My work sits between executive priorities, technical systems, governance, and the people expected to use them. That range is where durable change happens."
                light
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {['Strategy', 'Governance', 'Platforms', 'Product', 'Adoption'].map((item) => (
                  <span key={item} className="rounded border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/80">{item}</span>
                ))}
              </div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 sm:grid-cols-2">
              {capabilities.map((item) => (
                <article key={item.title} className="bg-[#16283a] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-emerald-200/30 text-[#a7f3d0]">{item.icon}</div>
                  <h3 className="mt-5 text-xl font-light text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <SectionHeader
              eyebrow="Public record"
              title="Outside references behind the work."
              body="Institutional records and reporting offer a clearer view than another page of self-description."
            />
            <div className="border-y border-[#dfe7ef]">
              {publicRecord.map((item) => (
                <a key={item.title} href={item.href} {...externalLinkProps} className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-4 border-b border-[#dfe7ef] py-5 last:border-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-[#d6d9fc] text-[#533afd]">{item.icon}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                    <h3 className="mt-1 text-base font-medium text-[#061b31] sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.source}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#533afd] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="border-y border-[#e5edf5] bg-[#f6f9fc]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader
                eyebrow="Point of view"
                title="Writing about AI readiness and real work."
                body="Notes on interfaces, interoperability, and the working habits that make new tools stick."
              />
              <a href="/writing/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#533afd]">View all writing <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#dfe7ef] bg-[#dfe7ef] md:grid-cols-3">
              {writing.map((post) => (
                <a key={post.title} href={post.href} {...externalLinkProps} className="group bg-white p-6 transition hover:bg-[#fbfcfe]">
                  <BookOpen className="h-5 w-5 text-[#533afd]" />
                  <h3 className="mt-5 text-xl font-light leading-7 text-[#061b31]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#533afd]">Read on Medium <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid overflow-hidden rounded-lg border border-[#061b31] bg-[#061b31] text-white lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a7f3d0]">Start here</p>
              <h2 className="mt-3 text-3xl font-light leading-tight sm:text-4xl">Looking for a data and AI leader who can connect strategy to delivery?</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">I am always interested in thoughtful conversations about executive leadership, advisory work, public-minded technology, and difficult data problems.</p>
              <a href={contactMailto} className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded bg-[#a7f3d0] px-5 text-base font-semibold text-[#061b31] transition hover:bg-[#6ee7b7]"><Mail className="h-4 w-4" /> Start a conversation</a>
            </div>
            <div className="border-t border-white/15 bg-white/5 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-semibold text-white">Useful starting points</p>
              <ul className="mt-5 space-y-4 text-sm text-white/75">
                {[
                  ['Review selected case studies', '/proof/'],
                  ['Read the current resume', '/resume/'],
                  ['See what I am working on now', '/now/'],
                  ['Review press and speaking', '/press/'],
                ].map(([label, href]) => (
                  <li key={label}><a href={href} className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 transition hover:text-white"><span className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 flex-none text-[#a7f3d0]" /> {label}</span><ArrowRight className="h-4 w-4 flex-none" /></a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e5edf5] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-[#061b31]">Sam Edelstein</p>
            <p className="mt-1 text-sm text-slate-500">Enterprise data and AI leadership from Syracuse, New York.</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/samedelstein" {...externalLinkProps} aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-slate-500 transition hover:border-[#533afd] hover:text-[#533afd]"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/samedelstein" {...externalLinkProps} aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-slate-500 transition hover:border-[#533afd] hover:text-[#533afd]"><Github className="h-4 w-4" /></a>
            <a href="/resume/" aria-label="Resume" className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-slate-500 transition hover:border-[#533afd] hover:text-[#533afd]"><FileText className="h-4 w-4" /></a>
            <a href={contactMailto} aria-label="Email Sam" className="inline-flex h-10 w-10 items-center justify-center rounded bg-[#533afd] text-white transition hover:bg-[#4434d4]"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="border-t border-[#e5edf5] px-5 py-5 text-center text-xs text-slate-400">(c) {new Date().getFullYear()} Sam Edelstein</div>
      </footer>
    </div>
  );
}

export default App;
