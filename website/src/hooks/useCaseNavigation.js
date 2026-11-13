import { useEffect, useRef, useState } from 'react';
import { cases } from '../content.js';

const pageTitle = '77 · Product Manager / AI Builder';

function caseFromHash() {
  const id = window.location.hash.replace(/^#work\//, '');
  return window.location.hash.startsWith('#work/') && Object.hasOwn(cases, id) ? id : null;
}

export default function useCaseNavigation() {
  const [selectedCase, setSelectedCase] = useState(caseFromHash);
  const trigger = useRef(null);
  const openedHere = useRef(false);
  const previousCase = useRef(null);

  useEffect(() => {
    const sync = () => setSelectedCase(caseFromHash());
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, []);

  useEffect(() => {
    document.title = selectedCase ? `${cases[selectedCase].title} · 77` : pageTitle;
    if (!selectedCase && previousCase.current) {
      openedHere.current = false;
      const target = trigger.current?.isConnected ? trigger.current :
        document.querySelector(`.project-image[href="#work/${previousCase.current}"]`);
      const frame = requestAnimationFrame(() => target?.focus({ preventScroll: true }));
      previousCase.current = null;
      return () => cancelAnimationFrame(frame);
    }
    previousCase.current = selectedCase;
  }, [selectedCase]);

  function openCase(id, event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    trigger.current = event.currentTarget;
    openedHere.current = true;
    // The anchor updates the hash so opening in a new tab works as expected.
  }

  function closeCase() {
    if (openedHere.current) {
      window.history.back();
    } else {
      window.history.replaceState(window.history.state, '', '#projects');
      setSelectedCase(null);
    }
  }

  function nextCase() {
    const ids = Object.keys(cases);
    const id = ids[(ids.indexOf(selectedCase) + 1) % ids.length];
    // Cycling replaces only the detail entry; Back still returns to the page.
    window.history.replaceState(window.history.state, '', `#work/${id}`);
    setSelectedCase(id);
  }

  return { selectedCase, openCase, closeCase, nextCase };
}
