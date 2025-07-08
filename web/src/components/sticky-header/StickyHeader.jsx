import { useEffect, useRef, useState } from "react"

function StickyHeader({children}) {
  const [isSticky, setIsSticky] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const trigger = document.getElementById("sticky-trigger");
    if (!trigger) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); // sticky si el trigger ya no está visible
      },
      { threshold: 0 } // Apenas desaparece del viewport
    );

    observerRef.current.observe(trigger);

    return () => {
      if (observerRef.current && trigger) {
        observerRef.current.unobserve(trigger);
      }
    };
  }, []);

  return (
    <header className={`${isSticky? 'sticky top-0 shadow-xl' : 'relative'} bg-background z-50 h-[var(--header-height)] content-center transition-all duration-300 `}>
      {children}
    </header>
  )
}

export default StickyHeader