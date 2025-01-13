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

export default useAnimateOnScroll;
