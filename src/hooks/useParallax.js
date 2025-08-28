import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return { ref, y };
}

export function useParallaxTransform(speed = 0.5, offset = 0) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [offset, offset + (1000 * speed)]);
  
  return y;
}

export function use3DCardTilt() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    ref.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)
      `;
    }
  };

  return { ref, handleMouseMove, handleMouseLeave };
}
