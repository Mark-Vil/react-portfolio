import React, { useEffect } from "react";
import chill from '../assets/chill.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <main className="flex w-full flex-col items-center justify-center text-[var(--light-color)] h-[800px]" id="about">
      <div className="w-full h-full inline-block relative bg-[var(--light-bg-color)] max-w-[1200px] mx-auto 
        mb-[30px] xs:mb-[40px] sm:mb-[50px] md:mb-[75px] lg:mb-[100px] xl:mb-[100px] 
        p-3 xs:p-3 sm:p-4 md:p-4 lg:p-0 xl:p-0">
        <div className="w-full mx-auto p-[2px] flex items-center justify-center text-center overflow-hidden cursor-default" 
          data-aos="fade-up" 
          data-aos-delay="200">
          <h1 className="inline-block w-full font-bold capitalize text-[#1B1B1B] 
            text-[0.9rem] xs:text-[0.9rem] sm:text-[1rem] md:text-[clamp(0.1rem,1vw+1rem,2rem)] lg:text-[clamp(2rem,0.1rem+3vw,1rem)] xl:text-[clamp(2rem,0.1rem+3vw,1rem)]
            mb-[30px] xs:mb-[30px] sm:mb-[40px] md:mb-[50px] lg:mb-[80px] xl:mb-[80px]">
            <span>Hi&nbsp;</span>
            <span>there!&nbsp;</span>
            <span>I'm&nbsp;</span>
            <span>Mark&nbsp;</span>
            <span>Anthony&nbsp;</span>
            <span>Villiones&nbsp;</span>
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-8 xl:grid-cols-8 
  gap-6 xs:gap-6 sm:gap-7 md:gap-16 lg:gap-50 xl:gap-55 justify-between">
          <div className="col-span-1 lg:col-span-4 xl:col-span-4 
            flex flex-col items-start justify-start 
            order-2 xs:order-2 sm:order-2 md:order-2 lg:order-1 xl:order-1" 
            data-aos="fade-right" 
            data-aos-delay="400">
            <h2 className="mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-[30px] xl:mb-[30px] 
              text-[0.9rem] xs:text-[0.9rem] sm:text-[0.95rem] md:text-base lg:text-[1.125rem] xl:text-[1.125rem] 
              font-bold uppercase text-black/75 lg:pr-8 xl:pr-8
  lg:ml-8 xl:ml-8">
              About Me
            </h2>
            <p className="my-2 xs:my-2 sm:my-3 md:my-3 lg:my-8 xl:my-8
  text-[0.85rem] xs:text-[0.85rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-base xl:text-base 
  font-medium text-black
  lg:pr-8 xl:pr-8
  lg:ml-8 xl:ml-8" 
>
              Beyond coding, I'm an enthusiastic problem-solver who thrives on learning new technologies 
              and staying ahead of industry trends. My experience spans from crafting intuitive user 
              interfaces to designing robust server architectures. I believe in writing clean, maintainable 
              code and creating applications that not only meet technical requirements but also deliver 
              exceptional user experiences.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-4 xl:col-span-4 
            relative h-max bg-[var(--light-bg-color)] p-1 
            order-1 xs:order-1 sm:order-1 md:order-1 lg:order-2 xl:order-2 
            mx-auto 
            max-w-[300px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none xl:max-w-none" 
            data-aos="fade-left" 
            data-aos-delay="600">
            <div className="relative xs:relative sm:relative md:relative lg:absolute xl:absolute 
              lg:top-0 xl:top-0 
              lg:-right-[2px] xl:-right-[2px] 
              lg:-z-10 xl:-z-10 
              w-full xs:w-full sm:w-full md:w-full lg:w-[470px] xl:w-[470px] 
              h-auto aspect-[3/4] xs:aspect-[3/4] sm:aspect-[3/4] md:aspect-[3/4] lg:h-[570px] xl:h-[570px] 
              rounded-[1em] bg-[var(--dark-bg-color)] lg:pr-8 xl:pr-8
  lg:mr-5 xl:mr-8">
              <img
                alt="Developer"
                width="670"
                height="570"
                decoding="async"
                className="w-full h-auto rounded-[1rem]  relative z-[1]"
                src={chill} 
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
