import { useEffect, useState } from 'react';

export default function ReviewPage({ path }) {
  const [markup, setMarkup] = useState('');

  useEffect(() => {
    let active = true;
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/refresh.css';
    document.head.append(stylesheet);
    fetch(`${path}index.html`).then((response) => response.text()).then((html) => {
      const parsed = new DOMParser().parseFromString(html, 'text/html');
      if (active) setMarkup(parsed.body.innerHTML);
    });
    return () => {
      active = false;
      stylesheet.remove();
    };
  }, [path]);

  return markup ? <div dangerouslySetInnerHTML={{ __html: markup }} /> : <div className="flex min-h-screen items-center justify-center text-slate-500">Loading page for review…</div>;
}
