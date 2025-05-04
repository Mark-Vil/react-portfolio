import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WelcomeScreen from './components/WelcomeScreen'
import Portfolio from './components/Portfolio' 
import Contact from './components/Contact' 
import Experience from './components/Experience'
import Blogs from './components/Blogs'
import BlogDetail from './components/BlogDetail';
import { blogs } from './blogs/blogsData';
import './App.css'

// Create a wrapper component that handles scrolling based on route
function AppContent() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const blogsSection = document.getElementById('blogs');
      const contactSection = document.getElementById('contact');
      
      if (blogsSection && contactSection) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const blogsSectionTop = blogsSection.offsetTop;
        const contactSectionBottom = contactSection.offsetTop + contactSection.offsetHeight;
        
        setShowScrollTop(scrollPosition >= blogsSectionTop && scrollPosition <= contactSectionBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header onAboutClick={() => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Blogs />
            <Experience />
            <Portfolio />
            <Contact />
          </>
        } />
        <Route path="/skills" element={<Portfolio initialTab={1} />} />
        <Route path="/projects" element={<Portfolio initialTab={0} />} />
        <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
      </Routes>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#1B1B1B] text-white rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110 z-50"
          aria-label="Scroll to top"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
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