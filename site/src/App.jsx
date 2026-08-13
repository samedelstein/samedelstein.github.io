import { useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import ReviewOverlay from './ReviewOverlay';
import ReviewPage from './ReviewPage';

const external = { target: '_blank', rel: 'noopener noreferrer' };
const email = 'mailto:sam.i.edelstein@gmail.com';
const navItems = [
  ['Work', '/proof/'],
  ['Writing', 'https://samedelstein.medium.com/'],
  ['About', '/about/'],
  ['Resume', 'https://www.linkedin.com/in/samedelstein'],
];

const credentials = [
  ['Now', 'Senior Vice President, Data & AI', 'Insight Partners'],
  ['Then', 'First Chief Data Officer', 'City of Syracuse'],
  ['Civic work', 'Board President', 'Onondaga County Public Library'],
];

const featuredWork = [
  {
    label: 'Enterprise AI',
    title: 'Making AI part of the work',
    outcome: '90%+ monthly active adoption',
    body: 'Building the conditions for broad, responsible use: practical experimentation, shared capabilities, and governance people can work with.',
    href: '/proof/enterprise-ai-in-practice/',
    image: null,
    alt: '',
  },
  {
    label: 'Public data',
    title: 'DataCuse',
    outcome: "Syracuse's first open-data program",
    body: 'Turning scattered public information into a durable civic capability, with the policy, standards, and habits needed to keep it useful.',
    href: '/proof/datacuse-open-data-platform/',
    image: '/work/datacuse.png',
    alt: 'DataCuse open data portal',
  },
  {
    label: 'Applied analytics',
    title: 'Planning for water-main risk',
    outcome: 'A better decision before the emergency',
    body: 'Combining infrastructure history, local knowledge, and research to help a city make proactive maintenance choices.',
    href: '/proof/predictive-water-main-analytics/',
    image: '/work/water-main.png',
    alt: 'Water-main risk analysis map',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reviewParams = new URLSearchParams(window.location.search);
  const reviewMode = reviewParams.get('review') === '1';
  const reviewPage = reviewParams.get('page');

  if (reviewMode && reviewPage) {
    return <div className="relative min-h-screen"><ReviewPage path={reviewPage} /><ReviewOverlay reviewPage={reviewPage} /></div>;
  }

  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-[#142a3d] selection:bg-[#d9ddf9]">
      <header className="sticky top-0 z-50 border-b border-[#d9ddd9] bg-[#f8f7f3]/95 backdrop-blur">
        <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-5 px-5 sm:px-8" aria-label="Primary navigation">
          <a href="/" className="text-sm font-semibold tracking-tight">Sam Edelstein</a>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map(([name, href]) => <a key={name} href={href} {...(href.startsWith('http') ? external : {})} className="text-sm text-slate-600 hover:text-[#3f53bd]">{name}</a>)}
            <a href={email} className="border-b border-[#142a3d] pb-0.5 text-sm font-medium text-[#142a3d] hover:border-[#3f53bd] hover:text-[#3f53bd]">Email Sam</a>
          </div>
          <button type="button" className="rounded border border-slate-300 p-2 md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </nav>
        {menuOpen && <div className="border-t border-slate-200 px-5 pb-3 md:hidden">{[...navItems, ['Email Sam', email]].map(([name, href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-slate-200 py-3 text-sm text-slate-700">{name}</a>)}</div>}
      </header>

      <main>
        <section className="border-b border-[#d9ddd9] bg-white">
          <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-16 sm:px-8 lg:min-h-[650px] lg:grid-cols-[1.12fr_.88fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xl font-semibold tracking-tight text-[#3f53bd] sm:text-2xl">Hi, I&apos;m Sam.</p>
              <h1 className="mt-6 font-serif text-5xl leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">I build the data and AI capabilities that help institutions do useful things.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">I lead Data &amp; AI at Insight Partners. Earlier, as Syracuse&apos;s first Chief Data Officer, I built public data systems and used analytics to improve city services.</p>
              <div className="mt-9 flex flex-wrap gap-5"><a href="/proof/" className="inline-flex items-center gap-2 border-b-2 border-[#3f53bd] pb-1 text-sm font-semibold text-[#3f53bd] hover:text-[#3144a6]">See selected work <ArrowRight size={16} /></a><a href="/about/" className="inline-flex items-center gap-2 border-b border-slate-400 pb-1 text-sm font-medium hover:border-[#3f53bd] hover:text-[#3f53bd]">My story <ArrowRight size={16} /></a></div>
            </div>
            <div className="relative mx-auto w-full max-w-md self-center lg:max-w-none">
              <img src="/work/sam-edelstein.png" alt="Sam Edelstein" className="aspect-[4/5] w-full border border-[#d9ddd9] object-cover object-top grayscale-[20%]" />
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">Enterprise AI, public systems, and the sometimes unglamorous work of making a useful idea real.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d9ddd9] bg-white">
          <div className="mx-auto grid max-w-6xl divide-y divide-[#d9ddd9] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
            {credentials.map(([label, title, organization]) => <article key={label} className="py-7 md:px-7 md:first:pl-0 md:last:pr-0"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#3f53bd]">{label}</p><h2 className="mt-3 text-xl font-medium leading-tight">{title}</h2><p className="mt-2 text-sm text-slate-600">{organization}</p></article>)}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#3f53bd]">Selected work</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.03em]">Three stories about making change stick.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Different contexts, same question: what does it take to move from an interesting idea to a capability people can rely on?</p></div><a href="/proof/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3f53bd]">All work <ArrowRight size={16} /></a></div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {featuredWork.map((item) => <article key={item.title} className="group border-t border-[#142a3d] pt-4">{item.image ? <a href={item.href} className="block aspect-[16/10] overflow-hidden bg-slate-100"><img src={item.image} alt={item.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></a> : <a href={item.href} className="flex aspect-[16/10] flex-col justify-between bg-[#142a3d] p-6 text-white"><span className="text-xs font-semibold uppercase tracking-[.16em] text-[#a7b5ff]">Enterprise AI adoption</span><strong className="font-serif text-6xl font-normal tracking-[-.06em]">90%+</strong><span className="max-w-44 text-sm leading-5 text-slate-300">Monthly active adoption of generative AI across the enterprise.</span></a>}<div className="pt-5"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#3f53bd]">{item.label}</p><h3 className="mt-3 font-serif text-3xl leading-tight">{item.title}</h3><p className="mt-4 text-sm font-semibold text-[#3f53bd]">{item.outcome}</p><p className="mt-4 text-sm leading-6 text-slate-600">{item.body}</p><a href={item.href} className="mt-6 inline-flex items-center gap-2 border-b border-[#3f53bd] pb-1 text-sm font-semibold text-[#3f53bd]">Read the story <ArrowRight size={15} /></a></div></article>)}
          </div>
        </section>

        <section className="border-y border-[#d9ddd9] bg-[#f2f2ee]"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#3f53bd]">How I work</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.03em]">The technology is only one part of the job.</h2></div><div className="grid gap-8 sm:grid-cols-3">{[['Start with a real problem', 'Make the decision and the people around it the center of the work.'], ['Build the capability', 'Create the data, tools, habits, and governance that make the change durable.'], ['Make it usable', 'Learn from the work itself and keep improving until it earns a place in the routine.']].map(([title, body], index) => <article key={title} className="border-t border-[#142a3d] pt-4"><span className="text-sm font-semibold text-[#3f53bd]">0{index + 1}</span><h3 className="mt-3 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div></div></section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:py-24"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#3f53bd]">Syracuse, too</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.03em]">Public institutions are part of how I see the world.</h2></div><div className="border-l-0 border-[#d9ddd9] lg:border-l lg:pl-10"><p className="text-xl leading-9 text-slate-600">I&apos;m based in Syracuse, New York. Work in city government, libraries, and civic projects has shaped how I think about accountability, constraints, and what makes technology genuinely useful.</p><a href="/about/" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3f53bd]">More about me <ArrowRight size={16} /></a></div></section>

        <section className="border-y border-[#d9ddd9] bg-white"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#3f53bd]">Writing</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.03em]">Notes from the messy middle.</h2></div><a href="https://samedelstein.medium.com/whats-missing-in-ai-bi-the-case-for-bi-directional-interfaces-bcba1849b8a4" {...external} className="group mt-10 block border-y border-[#142a3d] py-8 sm:py-10"><p className="text-sm font-semibold text-[#3f53bd]">Featured essay</p><h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">What&apos;s Missing in AI + BI</h3><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Why chat interfaces and structured data tools still need a better shared loop.</p><span className="mt-7 inline-flex items-center gap-2 border-b border-[#3f53bd] pb-1 text-sm font-semibold text-[#3f53bd]">Read on Medium <ArrowUpRight size={16} /></span></a><a href="https://samedelstein.medium.com/" {...external} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3f53bd]">More writing on Medium <ArrowRight size={16} /></a></div></section>

        <section className="bg-[#142a3d] text-white"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#a7b5ff]">Get in touch</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.03em]">Interested in a conversation about data, AI, or public-interest technology?</h2></div><a href={email} className="inline-flex w-fit items-center gap-2 border border-white px-5 py-3 text-sm font-medium text-white hover:border-[#a7b5ff] hover:text-[#a7b5ff]">Email Sam <Mail size={16} /></a></div></section>
      </main>

      {reviewMode && <ReviewOverlay />}
      <footer className="bg-[#f8f7f3]"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8"><p>Sam Edelstein · Syracuse, New York</p><div className="flex gap-4"><a href="https://www.linkedin.com/in/samedelstein" {...external} aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/samedelstein" {...external} aria-label="GitHub"><Github size={17} /></a><a href="/resume/" aria-label="Resume"><FileText size={17} /></a><a href={email} aria-label="Email Sam"><Mail size={17} /></a></div></div></footer>
    </div>
  );
}

export default App;
