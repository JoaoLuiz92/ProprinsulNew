import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import About from './About.tsx';
import './index.css';
import Plans from './Plans.tsx';
import Docs from './Docs.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  </StrictMode>
);