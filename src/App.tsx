import { ThemeProvider } from '@mui/material';
import React from 'react';

import theme from './theme';
import Home from './components/Home';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './assets/style/root.css';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Menu from './components/Menu';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/testing/aboutme" element={<AboutMe />} />
            <Route path="/testing/portfolio" element={<Portfolio />} />
            <Route path="/testing/contact" element={<ContactForm />} />
            <Route path="/testing/menu" element={<Menu />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
