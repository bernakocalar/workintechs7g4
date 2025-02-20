import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './components/login';
import Sucsess from './components/sucsess';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sucsess" element={<Sucsess />} />
    
      </Routes>
    </Router>
  </StrictMode>,
);