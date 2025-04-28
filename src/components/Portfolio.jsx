import React, { useEffect, useState, useCallback } from "react";
import zamboangaConnectImg from "../assets/zconnect.png";
import wmsurmis from "../assets/wmsurmis.png";
import cvdjms from "../assets/cvdjms.png";
import coffeetearia from "../assets/coffeetearia.png";
import "../styles/Portfolio.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views-react-18";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "./CardProject";
import TechStackIcon from "./TechStackIcon";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import jqueryIcon from "../assets/icons/jquery.svg";
import phpIcon from "../assets/icons/php.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import reactjsIcon from "../assets/icons/reactjs.svg";
import viteIcon from "../assets/icons/vite.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import muiIcon from "../assets/icons/MUI.svg";
import pythonIcon from "../assets/icons/python.svg";
import djangoIcon from "../assets/icons/django.svg";
import sweetAlertIcon from "../assets/icons/SweetAlert.svg";
import AOS from "aos";
import "aos/dist/aos.css";

import { Code, Boxes } from "lucide-react";

const getAnimation = (index) => {
    const animations = ['fade-up', 'fade-right', 'fade-left'];
    return animations[index % animations.length];
  };
  
  const getDuration = (index) => {
    return 800 + (index * 100);
  };

  const staticProjects = [
    {
      id: "project1",
      Title: "WMSU Research Management System",
      Description: "A comprehensive digital platform for Western Mindanao State University that streamlines research proposal submissions, tracks approval workflows, archives completed studies, and generates analytics for academic research management.",
      Img: wmsurmis,
      ProjectLink: "https://example-ecommerce.com",
      TechStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce"
    },
    {
      id: "project2",
      Title: "Teacher Evaluation System",
      Description: "A comprehensive platform for educational institutions to conduct, manage, and analyze teacher performance evaluations from peers.",
      Img: cvdjms,
      ProjectLink: "https://weather-dashboard-demo.com",
      TechStack: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
      githubLink: "https://github.com/yourusername/weather-app"
    },
    {
      id: "project3",
      Title: "Coffee Tearia",
      Description: "An e-commerce platform for a coffee shop equipment supplier, featuring product catalogs, inventory management, ordering system, and customer relationship tools for coffee shop owners and baristas.",
      Img: coffeetearia,
      ProjectLink: "https://task-manager-demo.com",
      TechStack: ["React", "Redux", "Firebase", "Material UI"],
      githubLink: "https://github.com/yourusername/task-manager"
    },
    {
      id: "project4",
      Title: "Zamboanga Connect",
      Description: "A navigation helper website for the people of Zamboanga, providing local resources, services, and community information in an accessible format..",
      Img: zamboangaConnectImg,
      ProjectLink: "https://portfolio-example.com",
      TechStack: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio"
    }
  ];
  

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: htmlIcon, language: "HTML" },
  { icon: cssIcon, language: "CSS" },
  { icon: javascriptIcon, language: "JavaScript" },
  { icon: jqueryIcon, language: "JQuery" },
  { icon: bootstrapIcon, language: "Bootstrap" },
  { icon: tailwindIcon, language: "Tailwind CSS" },
  { icon: phpIcon, language: "PHP" },
  { icon: reactjsIcon, language: "ReactJS" },
  { icon: viteIcon, language: "Vite" },
  { icon: firebaseIcon, language: "Firebase" },
  { icon: pythonIcon, language: "Python" },
  { icon: djangoIcon, language: "Django" }
];

export default function Portfolio({ initialTab }) {
  const theme = useTheme();
  const [value, setValue] = useState(initialTab || 0);
  const [projects, setProjects] = useState(staticProjects);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

useEffect(() => {
  AOS.init({
    once: false, 
  });
}, []);

useEffect(() => {
  if (initialTab !== undefined) {
    setValue(initialTab);
  }
}, [initialTab]);

useEffect(() => {
  window.setPortfolioTab = (tabIndex) => {
    setValue(tabIndex);
  };
  return () => {
    window.setPortfolioTab = undefined;
  };
}, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback(() => {
    setShowAllProjects(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="portfolio-section" id="Portfolio">
      <div className="portfolio-header" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="portfolio-title">
          <span className="gradient-text">Portfolio Showcase</span>
        </h2>
        <p className="portfolio-description">
          Explore my journey through projects and technical expertise.
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>
    
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} className="portfolio-appbar">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            className="portfolio-tabs"
          >
            <Tab icon={<Code className="tab-icon" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Boxes className="tab-icon" />} label="Tech Stack" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
    
        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="project-container">
              {displayedProjects.map((project, index) => (
                <div key={index} className="project-card" data-aos={getAnimation(index)} data-aos-duration={getDuration(index)}>
                  <CardProject {...project} />
                </div>
              ))}
            </div>
            {projects.length > initialItems && (
              <div className="toggle-container">
                <ToggleButton onClick={toggleShowMore} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>
    
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="tech-stack-container">
              {techStacks.map((stack, index) => (
                <div key={index} className="tech-stack-card" data-aos={getAnimation(index)} data-aos-duration={getDuration(index)}>
                  <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                </div>
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}