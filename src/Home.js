import React, { useEffect } from "react";
// import Header from './Components/Header';
import Footer from './Components/Footer';
import MainBody from "./Components/MainBody";

export default function Home() {
  useEffect(() => {
    const footer = document.getElementById('footer');
    const sidebar = document.getElementById('sidebar');

    if (!footer || !sidebar) return;
    const isMobileWidth = () => window.innerWidth <= 600;
    const updateSidebarVisibility = (shouldHide) => {
      sidebar.style.display = shouldHide || isMobileWidth() ? 'none' : 'flex';
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          updateSidebarVisibility(entry.intersectionRatio >= 0.6);
        });
      },
      { threshold: 0.6 }
    );
    
    observer.observe(footer);
    
    window.addEventListener('resize', () => {
      updateSidebarVisibility(false);
    });
    updateSidebarVisibility(false);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateSidebarVisibility);
    };

    // const observer = new IntersectionObserver(
    //   entries => {
    //     entries.forEach(entry => {
    //       if (entry.intersectionRatio >= 0.6) {
    //         sidebar.style.display = 'none';
    //       } else {
    //         sidebar.style.display = 'flex';
    //       }
    //     });
    //   },
    //   { threshold: 0.6 } 
    // );

    // observer.observe(footer);

    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  return (
    <div className="home-css">
      <MainBody />
      <Footer id="footer" className="footer-class" />          
    </div>
  );
}
