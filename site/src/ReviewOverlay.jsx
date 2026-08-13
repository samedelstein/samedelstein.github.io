import { useEffect, useRef, useState } from 'react';

const storageKey = 'sam-site-review-notes';

export default function ReviewOverlay({ reviewPage = '/' }) {
  const [mode, setMode] = useState('comment');
  const [notes, setNotes] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { return []; }
  });
  const [drawing, setDrawing] = useState(null);
  const suppressClick = useRef(false);

  useEffect(() => localStorage.setItem(storageKey, JSON.stringify(notes)), [notes]);
  const point = (event) => ({ x: event.clientX, y: event.clientY + window.scrollY });
  const addNote = (type, location, bounds = {}) => {
    const text = window.prompt(type === 'circle' ? 'What would you like changed in this area?' : 'What would you like changed here?');
    if (text?.trim()) setNotes((items) => [...items, { id: crypto.randomUUID(), page: reviewPage, type, text: text.trim(), ...location, ...bounds }]);
  };
  const exportNotes = () => {
    const blob = new Blob([JSON.stringify({ page: window.location.href, notes }, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sam-site-review-notes.json';
    link.click();
    URL.revokeObjectURL(link.href);
  };
  const copyNotes = async () => {
    const text = notes.filter((note) => note.page === reviewPage || (!note.page && reviewPage === '/')).map((note, index) => `${index + 1}. ${note.type === 'circle' ? 'Circled area' : 'Comment'}: ${note.text} (about ${Math.round(note.x)}px across, ${Math.round(note.y)}px down)`).join('\n');
    await navigator.clipboard.writeText(text);
    window.alert('Notes copied. Paste them into this chat when you are ready.');
  };
  const onPointerDown = (event) => {
    if (mode !== 'circle' || event.button !== 0) return;
    const start = point(event);
    event.currentTarget.setPointerCapture(event.pointerId);
    setDrawing({ start, end: start });
  };
  const onPointerMove = (event) => drawing && setDrawing((current) => ({ ...current, end: point(event) }));
  const onPointerUp = (event) => {
    if (!drawing) return;
    const end = point(event);
    const left = Math.min(drawing.start.x, end.x);
    const top = Math.min(drawing.start.y, end.y);
    const width = Math.abs(drawing.start.x - end.x);
    const height = Math.abs(drawing.start.y - end.y);
    setDrawing(null);
    suppressClick.current = true;
    if (width >= 12 && height >= 12) addNote('circle', { x: left, y: top }, { width, height });
  };
  const onClick = (event) => {
    if (mode !== 'comment' || suppressClick.current) { suppressClick.current = false; return; }
    addNote('comment', point(event));
  };

  return <div className={`absolute inset-0 z-[100] min-h-full ${mode === 'circle' ? 'cursor-crosshair' : 'cursor-comment'}`} onClick={onClick} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp}>
      {notes.filter((note) => note.page === reviewPage || (!note.page && reviewPage === '/')).map((note, index) => note.type === 'circle' ? <div key={note.id} className="absolute rounded-full border-[3px] border-red-500 bg-red-300/10" style={{ left: note.x, top: note.y, width: note.width, height: note.height }}><span className="absolute -left-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white shadow">{index + 1}</span></div> : <button key={note.id} type="button" title={note.text} className="absolute flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white shadow ring-2 ring-white" style={{ left: note.x - 14, top: note.y - 14 }} onClick={(event) => { event.stopPropagation(); window.alert(`Comment ${index + 1}: ${note.text}`); }}>{index + 1}</button>)}
    {drawing && <div className="pointer-events-none absolute rounded-full border-[3px] border-red-500 bg-red-300/10" style={{ left: Math.min(drawing.start.x, drawing.end.x), top: Math.min(drawing.start.y, drawing.end.y), width: Math.abs(drawing.start.x - drawing.end.x), height: Math.abs(drawing.start.y - drawing.end.y) }} />}
    <div className="fixed bottom-5 right-5 z-[101] w-72 rounded-lg border border-slate-300 bg-white p-4 text-sm text-slate-800 shadow-xl" onClick={(event) => event.stopPropagation()} onPointerDown={(event) => event.stopPropagation()}>
      <p className="font-semibold">Review mode</p><p className="mt-1 text-xs leading-5 text-slate-500">Click to comment, or drag an oval around an area. Notes stay in this browser until you export or clear them.</p>
      <select aria-label="Review another page" className="mt-3 w-full rounded border border-slate-300 bg-white px-2 py-2 text-xs" value={reviewPage} onChange={(event) => { const selected = event.target.value; window.location.href = selected === '/' ? '/?review=1' : `/?review=1&page=${encodeURIComponent(selected)}`; }}><option value="/">Homepage</option><option value="/proof/">Work</option><option value="/about/">About</option><option value="/resume/">Resume</option><option value="/contact/">Email</option></select>
      <div className="mt-3 flex gap-2"><button type="button" onClick={() => setMode('comment')} className={`rounded px-3 py-2 text-xs font-medium ${mode === 'comment' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>Comment</button><button type="button" onClick={() => setMode('circle')} className={`rounded px-3 py-2 text-xs font-medium ${mode === 'circle' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>Circle area</button></div>
      <p className="mt-3 text-xs font-medium text-slate-600">{notes.filter((note) => note.page === reviewPage || (!note.page && reviewPage === '/')).length} note{notes.filter((note) => note.page === reviewPage || (!note.page && reviewPage === '/')).length === 1 ? '' : 's'} on this page</p><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={copyNotes} disabled={!notes.length} className="rounded border border-slate-300 px-2.5 py-1.5 text-xs font-medium disabled:opacity-40">Copy notes</button><button type="button" onClick={exportNotes} disabled={!notes.length} className="rounded border border-slate-300 px-2.5 py-1.5 text-xs font-medium disabled:opacity-40">Export JSON</button><button type="button" onClick={() => { if (notes.length && window.confirm('Clear all review notes?')) setNotes([]); }} disabled={!notes.length} className="ml-auto px-1 text-xs text-slate-500 underline disabled:opacity-40">Clear</button></div>
    </div>
  </div>;
}
