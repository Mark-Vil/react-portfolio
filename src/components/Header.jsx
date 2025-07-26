import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GithubIcon, LinkedInIcon, FacebookIcon } from "./icons";

const Header = ({ onAboutClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  useEffect(() => {
    if (location.state && location.state.scrollTo && isMainPage) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });

          // Handle portfolio tab selection if needed
          if (
            location.state.scrollTo === "Portfolio" &&
            location.state.tabIndex !== undefined
          ) {
            if (window.setPortfolioTab) {
              window.setPortfolioTab(location.state.tabIndex);
            }
          }
        }
      }, 100);
    }
  }, [location, isMainPage]);

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (isMainPage) {
      onAboutClick();
    } else {
      navigate("/", { state: { scrollTo: "about" } });
    }
    setIsMenuOpen(false);
  };

  const handleExperienceClick = (e) => {
    e.preventDefault();
    if (isMainPage) {
      const blogsSection = document.getElementById("experience");
      blogsSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "experience" } });
    }
    setIsMenuOpen(false);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (isMainPage) {
      const portfolioSection = document.getElementById("Portfolio");
      portfolioSection?.scrollIntoView({ behavior: "smooth" });
      if (window.setPortfolioTab) {
        window.setPortfolioTab(0);
      }
    } else {
      navigate("/", { state: { scrollTo: "Portfolio", tabIndex: 0 } });
    }
    setIsMenuOpen(false);
  };

  const handleBlogsClick = (e) => {
    e.preventDefault();
    if (isMainPage) {
      const blogsSection = document.getElementById("blogs");
      blogsSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "blogs" } });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <header className="w-full h-20 max-w-[1440px] mx-auto px-[clamp(1rem,5vw,8rem)] py-8 font-['Montserrat',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] flex items-center justify-center relative z-10">
      {/* Mobile Hamburger */}
      <button
        className="mobile-menu flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer p-0 z-[1000] absolute right-8 top-8 lg:hidden"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span
          className={`block w-8 h-1 bg-[#1B1B1B] rounded-[10px] transition-all duration-300 ease-in-out origin-center
    ${isMenuOpen ? "translate-y-[0.625rem] rotate-45" : ""}
  `}
        ></span>
        <span
          className={`block w-8 h-1 bg-[#1B1B1B] rounded-[10px] transition-all duration-300 ease-in-out origin-center
    ${isMenuOpen ? "opacity-0 translate-x-4" : ""}
  `}
        ></span>
        <span
          className={`block w-8 h-1 bg-[#1B1B1B] rounded-[10px] transition-all duration-300 ease-in-out origin-center
    ${isMenuOpen ? "-translate-y-[0.625rem] -rotate-45" : ""}
  `}
        ></span>
      </button>
      {/* Nav Container */}
      <div
        className={`nav-container transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "pt-10 fixed top-1/2 left-1/2 w-[90%] sm:w-[400px] max-h-[80vh] -translate-x-1/2 -translate-y-1/2 bg-white/95 shadow-lg rounded-[15px] p-8 z-[1000] flex flex-col justify-between items-center gap-8 opacity-100 scale-100"
            : "hidden w-full max-w-[1167px] lg:flex lg:justify-between lg:items-center lg:gap-8"
        }`}
      >
        {/* Social Links */}
        <nav className="social-nav flex items-center justify-center gap-4 flex-wrap">
          <div className="social-links flex items-center gap-x-4">
            <a
              href="https://github.com/Mark-Vil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 mr-3 bg-black rounded-full p-1 flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-anthony-villiones-144455262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mr-3 hover:opacity-80 transition-opacity duration-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://web.facebook.com/Nocalan.Mark.007/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mr-3 hover:opacity-80 transition-opacity duration-300"
            >
              <FacebookIcon />
            </a>
          </div>
        </nav>

        {/* Main Nav */}
        <nav className="main-nav flex flex-col lg:flex-row items-center justify-center lg:mb-0">
          <NavLink
            to="/"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `text-base font-medium mx-2 text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in
              hover:after:w-full ${isActive ? "after:w-full" : ""}
              py-2 px-4 rounded-lg hover:bg-black/5 transition-colors duration-300`
            }
          >
            Home
          </NavLink>
          <a
            href="#about"
            onClick={handleAboutClick}
            className="text-base font-medium mx-2 text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in hover:after:w-full py-2 px-4 rounded-lg hover:bg-black/5 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={handleExperienceClick}
            className="text-base font-medium mx-2 text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in hover:after:w-full py-2 px-4 rounded-lg hover:bg-black/5 transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={handleProjectsClick}
            className="text-base font-medium mx-2 text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in hover:after:w-full py-2 px-4 rounded-lg hover:bg-black/5 transition-colors duration-300"
          >
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
