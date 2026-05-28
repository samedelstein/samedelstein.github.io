import React from 'react';
import {
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
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const contactMailto = 'mailto:sam.i.edelstein@gmail.com?subject=Data%20%26%20AI%20conversation';

const navItems = [
  ['Record', '#record'],
  ['Work', '#work'],
  ['Writing', '/writing/'],
  ['Press', '/press/'],
  ['Background', '/brief/'],
  ['Contact', '#contact'],
];

const publicRecord = [
  {
    label: 'Current role',
    title: 'Senior Vice President, Data & AI at Insight Partners',
    body: 'Current work spans data foundations, AI workflow design, governance, and practical tools across investment, HR, compliance, finance, and operations.',
    href: 'https://www.linkedin.com/in/samedelstein',
    source: 'LinkedIn',
    icon: <BriefcaseIcon />,
  },
  {
    label: 'Public data record',
    title: 'Syracuse data office and DataCuse',
    body: "Syracuse University Libraries notes the city's first open data policy, data privacy policy, Open Data Portal - DataCuse, and performance management office.",
    href: 'https://library.syracuse.edu/news/syracuse-surge-the-path-to-becoming-a-smart-city-with-su-alum-sam-edelstein/',
    source: 'Syracuse University Libraries',
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    label: 'Coverage',
    title: 'Water main analytics in Syracuse',
    body: 'Politico covered the Syracuse water main work and the effort to use data science on aging infrastructure.',
    href: 'https://www.politico.com/magazine/story/2017/04/20/syracuse-infrastructure-water-system-pipe-breaks-215054',
    source: 'Politico',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    label: 'Things made public',
    title: 'Code, essays, datasets, and local data projects',
    body: 'GitHub, DataCuse, Medium, and older public work show the parts of the work that are easier to share: tools, notes, and practical experiments.',
    href: 'https://github.com/samedelstein',
    source: 'GitHub / DataCuse / Medium',
    icon: <Github className="h-5 w-5" />,
  },
];

const impactStats = [
  ['90%+', 'AI use across enterprise functions'],
  ['1B+', 'rows unified into governed data foundations'],
  ['Cross-functional', 'work across investment, HR, compliance, finance, and operations'],
  ['Public data background', 'Syracuse open data, analytics, and service delivery work'],
];

const workThemes = [
  {
    title: 'AI in everyday work',
    body: 'Moving from AI ideas to useful workflows: the data, controls, platforms, training, and habits that make new tools stick.',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'Data foundations',
    body: 'Modernizing fragmented data into governed, accessible systems that support decisions across finance, operations, compliance, investment, and HR.',
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: 'Public data background',
    body: 'A public-sector background in open data, service delivery, infrastructure analytics, and public dashboards.',
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: 'Translation across audiences',
    body: 'Working between senior leaders, analysts, engineers, public officials, residents, boards, and students without losing the thread of the work.',
    icon: <Users className="h-5 w-5" />,
  },
];

const selectedWork = [
  {
    title: 'DataCuse open data platform',
    body: "Syracuse's open data program and public portal, built around transparency, data standards, intake workflows, and durable governance.",
    href: '/proof/datacuse-open-data-platform/',
  },
  {
    title: 'Predictive water main analytics',
    body: 'A city operations and machine-learning project using data science to assess and prevent water main breaks.',
    href: '/proof/predictive-water-main-analytics/',
  },
  {
    title: 'AI in Practice',
    body: 'Confidential enterprise work focused on making AI useful across real workflows while keeping data, controls, and delivery connected.',
    href: '/proof/enterprise-ai-in-practice/',
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
    title: 'What it Means to be AI-Ready',
    body: 'Data access, interoperability, and what software changes when reasoning models become part of everyday workflows.',
    href: 'https://samedelstein.medium.com/what-it-means-to-be-ai-ready-data-access-interoperability-and-the-future-of-software-part-1-a9abc8e0d03c',
  },
];

const timeline = [
  ['Now', 'Senior VP, Data & AI', 'Insight Partners'],
  ['2020', 'Senior Consultant', 'BlueGranite'],
  ['2015', 'Chief Data Officer', 'City of Syracuse'],
  ['Earlier', 'Adjunct / public-sector / higher-ed roles', 'Syracuse University and prior organizations'],
];

function BriefcaseIcon() {
  return <Network className="h-5 w-5" />;
}

function Pill({ children, tone = 'light' }) {
  const className = tone === 'dark'
    ? 'border border-white/15 bg-white/10 text-white/85'
    : 'border border-indigo-100 bg-white text-slate-700 shadow-[rgba(50,50,93,0.08)_0px_8px_20px_-12px]';
  return <span className={`inline-flex rounded px-2.5 py-1 text-xs font-medium ${className}`}>{children}</span>;
}

function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#533afd]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-light tracking-normal text-[#061b31] sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg font-light leading-8 text-slate-600">{body}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-[#061b31] selection:bg-indigo-200">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="min-w-0 flex-none text-sm font-semibold tracking-normal text-[#061b31]">Sam Edelstein</a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-slate-500 transition hover:text-[#533afd]">{label}</a>
            ))}
          </div>
          <div className="flex flex-none items-center gap-2">
            <a href="https://www.linkedin.com/in/samedelstein" {...externalLinkProps} aria-label="LinkedIn" className="hidden h-9 w-9 items-center justify-center rounded border border-slate-200 text-slate-500 transition hover:border-[#b9b9f9] hover:text-[#533afd] sm:inline-flex"><Linkedin className="h-4 w-4" /></a>
            <a href={contactMailto} aria-label="Email Sam" className="inline-flex h-9 w-9 items-center justify-center gap-2 rounded bg-[#533afd] text-sm font-medium text-white shadow-[rgba(50,50,93,0.25)_0px_18px_30px_-18px] transition hover:bg-[#4434d4] sm:w-auto sm:px-3"><Mail className="h-4 w-4" /> <span className="hidden sm:inline">Contact</span></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:items-center">
            <div className="min-w-0">
              <div className="mb-7 flex flex-wrap gap-2">
                <Pill>Enterprise Data & AI</Pill>
                <Pill>Insight Partners</Pill>
                <Pill>Syracuse, NY</Pill>
              </div>
              <h1 className="max-w-5xl text-4xl font-light leading-tight tracking-normal text-[#061b31] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
                Hi, I&apos;m Sam. I work on enterprise data and AI.
              </h1>
              <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-slate-600 sm:text-2xl sm:leading-9">
                At Insight Partners, I work across investment, HR, compliance, finance, and operations on data foundations, AI workflow design, governance, and tools people actually use. Before that, I was Syracuse&apos;s first Chief Data Officer; that work still shapes how I think about public accountability, messy systems, and practical analytics.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={contactMailto} className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#533afd] px-5 text-base font-medium text-white shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] transition hover:bg-[#4434d4]"><Mail className="h-4 w-4" /> Email Sam</a>
                <a href="/proof/" className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#b9b9f9] bg-white px-5 text-base font-medium text-[#533afd] transition hover:bg-indigo-50"><FileText className="h-4 w-4" /> Selected work</a>
              </div>
            </div>

            <aside className="min-w-0 overflow-hidden rounded-lg border border-[#e5edf5] bg-white p-6 shadow-[rgba(50,50,93,0.16)_0px_22px_36px_-28px,rgba(0,0,0,0.08)_0px_12px_24px_-18px]">
              <div className="border-b border-[#e5edf5] pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#533afd]">Current and past work</p>
                <p className="mt-2 text-base font-light leading-7 text-[#061b31]">Enterprise Data &amp; AI now; public data and city systems before that.</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">I tend to come back to the same questions: what is actually happening, what data would make it clearer, and what would make the next decision easier?</p>
              </div>
              <div className="pt-5">
                <div className="space-y-4">
                  {timeline.map(([year, role, org]) => (
                    <div key={`${year}-${role}`} className="grid grid-cols-[58px_minmax(0,1fr)] gap-4">
                      <span className="font-mono text-xs text-slate-400">{year}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#061b31]">{role}</p>
                        <p className="text-sm text-slate-500">{org}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-[#e5edf5] bg-[#f6f9fc]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#e5edf5] px-0 sm:grid-cols-4">
            {impactStats.map(([value, label]) => (
              <div key={label} className="bg-[#f6f9fc] p-6 sm:p-8">
                <div className="text-4xl font-light tracking-normal text-[#061b31]">{value}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="record" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader
            eyebrow="Public record"
            title="A few links behind the work."
            body="A few outside links, plus some of the artifacts that still explain how I think about data, tools, and institutions."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#e5edf5] bg-[#e5edf5] lg:grid-cols-4">
            {publicRecord.map((item) => (
              <a key={item.title} href={item.href} {...externalLinkProps} className="group flex min-h-[310px] flex-col bg-white p-6 transition hover:bg-[#f6f9fc]">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-[#d6d9fc] text-[#533afd]">{item.icon}</div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">{item.label}</p>
                <h3 className="mt-3 text-xl font-light leading-7 tracking-normal text-[#061b31]">{item.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{item.body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#533afd]">{item.source} <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </a>
            ))}
          </div>
        </section>

        <section id="work" className="bg-[#1c1e54] text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9b9f9]">Working range</p>
                <h2 className="mt-3 text-4xl font-light tracking-normal text-white sm:text-5xl">Making data and AI useful in real work.</h2>
                <p className="mt-5 text-lg font-light leading-8 text-white/70">
                  Across city government, consulting, and private-market work, the pattern is the same: take messy information, new technology, and real organizational constraints, then turn them into systems people understand and use.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  <Pill tone="dark">Governance</Pill>
                  <Pill tone="dark">Platforms</Pill>
                  <Pill tone="dark">Workflow design</Pill>
                  <Pill tone="dark">Public artifacts</Pill>
                </div>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 sm:grid-cols-2">
                {workThemes.map((item) => (
                  <article key={item.title} className="bg-[#1c1e54] p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-white/20 text-[#b9b9f9]">{item.icon}</div>
                    <h3 className="mt-5 text-xl font-light tracking-normal text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <SectionHeader
              eyebrow="Selected work"
              title="A few projects I&apos;m proud of."
              body="What I like about these projects is that they had to work for real people: enterprise teams, city staff, public officials, residents, students, and public institutions."
            />
            <div className="space-y-4">
              {selectedWork.map((item) => (
                <a key={item.title} href={item.href} className="group grid gap-4 rounded-lg border border-[#e5edf5] bg-white p-6 shadow-[rgba(23,23,23,0.06)_0px_3px_6px] transition hover:border-[#b9b9f9] hover:shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <div>
                    <h3 className="text-2xl font-light tracking-normal text-[#061b31]">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{item.body}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#533afd] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="border-y border-[#e5edf5] bg-[#f6f9fc]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <SectionHeader
              eyebrow="Point of view"
              title="Writing about AI readiness and real work."
              body="The public writing is where I think through access, interoperability, usefulness, and what makes new tools stick."
            />
            <div className="grid gap-px overflow-hidden rounded-lg border border-[#e5edf5] bg-[#e5edf5] md:grid-cols-3">
              {writing.map((post) => (
                <a key={post.title} href={post.href} {...externalLinkProps} className="group bg-white p-6 transition hover:bg-[#f6f9fc]">
                  <BookOpen className="h-5 w-5 text-[#533afd]" />
                  <h3 className="mt-5 text-xl font-light leading-7 tracking-normal text-[#061b31]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#533afd]">Read on Medium <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="rounded-lg border border-[#061b31] bg-[#061b31] p-8 text-white shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.55fr)] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9b9f9]">How I work</p>
                <h2 className="mt-3 max-w-4xl text-4xl font-light leading-tight tracking-normal sm:text-5xl">
                  Make the work easier to see.
                </h2>
                <p className="mt-5 max-w-3xl text-lg font-light leading-8 text-white/70">
                  The work I like most makes complex systems easier to see, explain, govern, and improve.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-white/75">
                {['Find the real workflow', 'Get the data into shape', 'Build the useful version', 'Explain the tradeoffs'].map((item) => (
                  <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#b9b9f9]" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[#e5edf5] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#533afd]">Contact</p>
            <h2 className="mt-3 text-3xl font-light tracking-normal text-[#061b31]">Data, AI, public-minded tools, or Syracuse datasets?</h2>
            <p className="mt-3 text-slate-600">Reach out for thoughtful conversations about enterprise data and AI work, useful tools, and the public data work that still shapes how I think.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={contactMailto} className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#533afd] px-5 text-base font-medium text-white transition hover:bg-[#4434d4]"><Mail className="h-4 w-4" /> Email Sam</a>
            <a href="/brief/" className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#b9b9f9] bg-white px-5 text-base font-medium text-[#533afd] transition hover:bg-indigo-50"><FileText className="h-4 w-4" /> Background</a>
            <a href="/sam-edelstein.vcf" className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#b9b9f9] bg-white px-5 text-base font-medium text-[#533afd] transition hover:bg-indigo-50"><FileText className="h-4 w-4" /> Save Contact</a>
            <a href="https://www.linkedin.com/in/samedelstein" {...externalLinkProps} className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#b9b9f9] bg-white px-5 text-base font-medium text-[#533afd] transition hover:bg-indigo-50"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="https://github.com/samedelstein" {...externalLinkProps} className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#b9b9f9] bg-white px-5 text-base font-medium text-[#533afd] transition hover:bg-indigo-50"><Github className="h-4 w-4" /> GitHub</a>
          </div>
        </div>
        <div className="border-t border-[#e5edf5] px-5 py-6 text-center text-sm text-slate-400">(c) {new Date().getFullYear()} Sam Edelstein</div>
      </footer>
    </div>
  );
}

export default App;


