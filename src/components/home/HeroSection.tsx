
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Simple parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const heroImage = containerRef.current.querySelector('.hero-image') as HTMLElement;
      const heroContent = containerRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (heroImage && heroContent) {
        // Move the background image slightly slower than scroll to create parallax
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        // Move the content slightly faster to create depth
        heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="hero-image absolute inset-0 bg-cover bg-center transform scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="hero-content relative h-full flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto z-10">
        <div className="staggered-fade max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-6">
            Discover the world with us
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Experience the journey of a lifetime
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            Explore breathtaking destinations, immerse yourself in diverse cultures, and create memories that will last forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/cities/tokyo"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium border border-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
