import { useEffect, useRef } from 'react';

const ScrollProgressBar = () => {
  const scrollLineRef = useRef(null);

  useEffect(() => {
    const updateScrollProgressBar = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

      if (scrollLineRef.current) {
        scrollLineRef.current.style.width = `${percentScrolled}%`;
      }
    };

    // Throttle using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgressBar();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollProgressBar(); // Initial call
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollProgressBar);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgressBar);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={scrollLineRef}
      className="scroll-line"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
    />
  );
};

export default ScrollProgressBar;
