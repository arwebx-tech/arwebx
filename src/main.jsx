import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Global design tokens & reset (kept minimal)
import './index.css';

// Bootstrap JS (for navbar collapse, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
