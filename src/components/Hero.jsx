import React, { useEffect } from 'react';
import chillImage from '../assets/programmer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  return (

    <main className="main">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-8 flex justify-center items-center mb-[50px]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-16">
          <div 
            className="w-full max-w-[300px] h-auto aspect-square sm:max-w-[400px] md:max-w-[500px] lg:w-[570px] lg:h-[570px] lg:max-w-none lg:aspect-auto relative" 
            data-aos="fade-right" 
            data-aos-delay="300"
          >
            <img 
              src={chillImage} 
              alt="James" 

              className="w-full h-full object-cover rounded-full"
              width="560"
              height="560"
            />
          </div>
          

          <div className="w-full max-w-md lg:w-auto lg:max-w-[600px] flex flex-col items-center text-center lg:items-start lg:text-left py-6 lg:py-8">

            <div className="w-full" data-aos="fade-left" data-aos-delay="400">

              <h1 className="inline-block w-full text-[#1B1B1B] font-bold capitalize text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] z-10 leading-tight sm:leading-snug md:leading-normal lg:leading-[50px]"> 

                <span className="inline-block mr-2">I'm</span> 
                <span className="inline-block">Mark Villiones</span>
              </h1>
            </div>
            
            <p 
              className="text-[#1B1B1B] opacity-100 z-10 my-8 sm:my-10 md:my-2 text-base sm:text-lg font-medium" 
              data-aos="fade-left" 
              data-aos-delay="600"
            >
              Full Stack Web Developer Specializing in Scalable Architecture and System Design
            </p>
            

            <div 
              className="flex items-center self-center lg:self-start" 
              data-aos="fade-left" 
              data-aos-delay="800"
            >
              <a 
                href="https://drive.google.com/file/d/1f-wKkq5Th8cz3LJFFYanMe7nYuxWSm_g/view?usp=drive_link"
                className="flex justify-center items-center bg-[#1B1B1B] text-white py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out border-2 border-transparent hover:bg-white hover:text-black hover:border-black no-underline h-10 sm:h-11 md:h-12 lg:w-[100px] lg:h-[40px]" 
                target="_blank" 
                
              >
                Resume

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 ml-1 fill-current">
                  <path d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"/>
                </svg>
              </a>
              

              <a 
                href="#contact" 
                className="flex items-center gap-1 ml-10 sm:ml-12 text-base sm:text-lg font-medium text-[#1B1B1B] underline underline-offset-2 transition-transform duration-300 ease-in-out hover:scale-103"
              >
                Contact

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 fill-current">
                   <path d="M21 8V7l-3 2-3-2v1l2.72 1.82a.5.5 0 0 0 .55 0L21 8zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm7.5-6h-7c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;