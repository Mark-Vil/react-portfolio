import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogs } from '../blogs/blogsData';

const BlogCard = ({ title, description, image, date, index, id }) => (
  <div
    className="group flex-shrink-0 w-full relative overflow-hidden rounded-xl bg-[rgba(31,41,55,0.5)] p-6 transition-all duration-300 hover:bg-[rgba(51,65,85,0.5)] hover:-translate-y-1 hover:shadow-lg"
    data-aos="fade-down"
    data-aos-delay={index * 100}
    data-aos-duration="1000"
  >
    <div className="aspect-video overflow-hidden rounded-lg mb-4">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="space-y-3">
      <span className="text-sm text-slate-300">{date}</span>
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="text-slate-300 line-clamp-2">{description}</p>
      <Link
        to={`/blog/${id}`}
        className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
      >
        Read More
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
);

const Blogs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContainerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(320);
  const cardGap = 16; 


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
        setCardWidth(Math.min(window.innerWidth - 48, 320));
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
        setCardWidth(280);
      } else {
        setVisibleCards(3);
        setCardWidth(320);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      offset: 100,
    });
  }, []);


  const maxSlide = blogs.length - visibleCards;

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    if (index <= maxSlide) {
      setCurrentSlide(index);
    } else {
      setCurrentSlide(maxSlide);
    }
  };


  const translateX = -(currentSlide * (cardWidth + cardGap));

  return (
    <main className="min-h-screen bg-[#efefef] py-20" id="blogs">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className="mb-12 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-4">
           Blogs
          </h2>
          <p className="text-[#1B1B1B]/80 max-w-2xl mx-auto">
            Sharing my journey in system development and software engineering
          </p>
        </div>

        <div className="relative mx-auto" style={{ 
          maxWidth: `${(cardWidth * visibleCards) + (cardGap * (visibleCards - 1))}px` 
        }}>
          <div className="overflow-hidden">
            <div 
              ref={slideContainerRef}
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {blogs.map((blog, index) => (
                <div 
                  key={blog.id} 
                  className="flex-none"
                  style={{ width: `${cardWidth}px` }}
                >
                  <BlogCard {...blog} index={index} />
                </div>
              ))}
            </div>
          </div>
          
          {currentSlide > 0 && (
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-6 bg-[rgba(31,41,55,0.7)] hover:bg-[rgba(51,65,85,0.8)] text-white p-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {currentSlide < maxSlide && (
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-6 bg-[rgba(31,41,55,0.7)] hover:bg-[rgba(51,65,85,0.8)] text-white p-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index 
                    ? 'bg-[rgba(31,41,55,0.9)]' 
                    : 'bg-[rgba(31,41,55,0.3)] hover:bg-[rgba(31,41,55,0.5)]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;