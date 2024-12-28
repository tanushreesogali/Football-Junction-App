import React from "react";
// import Header from './Components/Header';
import Footer from './Components/Footer';
import MainBody from "./Components/MainBody";


export default function Home(){
    document.addEventListener('DOMContentLoaded', () => {
        const footer = document.querySelector('.footer-css');
        const sidebar = document.querySelector('.socials-column');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sidebar.style.display = 'none';
                } else {
                    sidebar.style.display = 'block';
                }
            });
        });

        observer.observe(footer);
    });

    return(
        <div>
            <MainBody/>
            <Footer/>
            
        </div>


    )


}