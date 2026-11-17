import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './NextApp.jsx';
import './fonts.css';
import './system-tokens.css';
import './next-theme.css';
import './index-poster.css';
import './inner-system.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
