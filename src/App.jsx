import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WelcomeScreen from './components/WelcomeScreen'
import Portfolio from './components/Portfolio' 
import Contact from './components/Contact' 
import './App.css'

// Create a wrapper component that handles scrolling based on route
function AppContent() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/skills' || location.pathname === '/projects') {
      const portfolioSection = document.getElementById('Portfolio');
      portfolioSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header onAboutClick={() => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Hero />} /> 
        <Route path="/projects" element={<Hero />} />
      </Routes>
      <About />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/skills" element={<Portfolio initialTab={1} />} /> 
        <Route path="/projects" element={<Portfolio initialTab={0} />} />
      </Routes>
      <Contact />
    </div>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={handleWelcomeComplete} />
      ) : (
        <Router>
          <AppContent />
        </Router>
      )}
    </>
  );
}

export default App