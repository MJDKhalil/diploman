import { useEffect, useState } from 'react';

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    function updatePosition() {
      const element = document.getElementById(id);
      if (!element) return;
      if (window.pageYOffset > element.offsetHeight * 0.7) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);

  return animation;
}
