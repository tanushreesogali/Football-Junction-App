import { useEffect } from 'react';

const useVisibility = () => {
  useEffect(() => {
    const footer = document.getElementById('footer');
    const sidebar = document.getElementById('sidebar');
    const homebutton = document.getElementById('home-button');

    if (!footer || !sidebar || !homebutton) return;

    const isMobileWidth = () => window.innerWidth <= 650;

    const updateVisibility = (shouldHide) => {
      const displayStyle = shouldHide || isMobileWidth() ? 'none' : 'flex';
      sidebar.style.display = displayStyle;
      homebutton.style.display = displayStyle;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          updateVisibility(entry.intersectionRatio >= 0.6);
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(footer);

    const handleResize = () => updateVisibility(false);
    window.addEventListener('resize', handleResize);

    updateVisibility(false);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};

export default useVisibility;
