import { useEffect, useState } from 'react';

const useAnimateOnScroll = (animationClass: string): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.querySelector(`#${animationClass}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationClass]);

  return isVisible;
};

const initialClass: string = "relative opacity-0 transition-opacity duration-1000 animate__animated";

export const applyAnimationClass = (isVisible: boolean, inAnimation: string) => {
  return `${initialClass} ${isVisible ? inAnimation : ''}`
}

export default useAnimateOnScroll;
