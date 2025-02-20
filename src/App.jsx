import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'

function App() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Header onAboutClick={scrollToAbout} />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <About />
      </div>
    </Router>
  )
}

export default App