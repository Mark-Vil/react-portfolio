import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 260); 

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span> 
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden -z-10"> 
    
    <div className="absolute inset-0 bg-white blur-[60px] animate-pulse"></div>
   
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10 blur-[40px] animate-float"></div>
  </div>
);

const IconButton = ({ Icon }) => (

  <div className="relative inline-block p-4 bg-black/50 rounded-full border border-white/10 transition-transform duration-300 hover:scale-110">

    <div className="absolute -inset-2 bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-full blur-xl opacity-75 -z-10"></div> {/* Adjusted blur */}
    <Icon className="relative w-6 h-6 text-white" /> 
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);


  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div

          className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#efefef]" // Added base bg, overflow hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />


          <div className="relative w-full max-w-3xl mx-auto text-center z-10"> 

              <motion.div
                className="flex justify-center gap-6 mb-12"
                variants={childVariants}
              >
                {[Code2, User, Github].map((Icon, index) => (
                  <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>


              <motion.div
                variants={childVariants}
                className="mb-12" 
              >

                <h1 className="text-[42px] font-semibold text-[#1B1B1B]"> 
                  <div>
                    <span data-aos="fade-right" data-aos-delay="200" className="inline-block"> 
                      Welcome
                    </span>{' '}
                    <span data-aos="fade-right" data-aos-delay="400" className="inline-block">
                      To
                    </span>{' '}
                    <span data-aos="fade-right" data-aos-delay="600" className="inline-block">
                      My
                    </span>
                  </div>
                  <div>
                    <span data-aos="fade-up" data-aos-delay="800" className="inline-block"> {/* Removed highlight class */}
                      Portfolio
                    </span>{' '}
                    <span data-aos="fade-up" data-aos-delay="1000" className="inline-block">
                      Website
                    </span>
                  </div>
                </h1>
              </motion.div>


              <motion.div
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1200"
              >

                <a
                  href="https://markvilliones.netlify.app"
                  className="relative inline-flex items-center gap-2 py-4 px-6 bg-black/20 rounded-full text-white no-underline transition-transform duration-300 hover:scale-105 group" // Added group for potential hover effects
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-full blur-xl -z-10"></div> {/* Adjusted blur */}

                  <Globe className="relative w-5 h-5 text-[#1c1b1d]" /> {/* Adjusted size */}
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#1c1c1d] to-[#2e2a2e]">
                    <TypewriterEffect text="markvilliones.netlify.app" />
                  </span>
                </a>
              </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;