import { useEffect, useState } from 'react';

function initialLanguage() {
  try {
    const saved = localStorage.getItem('77-language') || localStorage.getItem('77-v2-draft-language');
    if (saved === 'zh' || saved === 'en') return saved;
  } catch { /* The toggle also works when storage is unavailable. */ }
  return 'zh';
}

export function useLanguage() {
  const [language, setLanguage] = useState(initialLanguage);
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('77-language', language); } catch { /* Optional preference. */ }
  }, [language]);
  return [language, () => setLanguage(current => current === 'en' ? 'zh' : 'en')];
}
