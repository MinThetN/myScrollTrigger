"use client";
import { useEffect, useRef } from "react";  // Highlight: Added useRef import
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cardLeftRef = useRef(null);  // Highlight: Created ref for the left card
  const cardRightRef = useRef(null); // Highlight: Created ref for the right card

  useEffect(() => {
    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues= [100, -150, -400];
    
    // Ensure the DOM elements are available before applying GSAP animations
    if (cardLeftRef.current && cardRightRef.current) {  // Highlight: Added condition to check if refs are available
      gsap.to(cardLeftRef.current, {  // Highlight: Applied ref to GSAP animation
        x: leftXValues[0],  // For simplicity using first index values as example
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeftRef.current.style.transform = `translateX(${progress * leftXValues[0]}px) translateY(${progress * yValues[0]}px) rotate(${progress * leftRotationValues[0]}deg)`; 
            cardRightRef.current.style.transform = `translateX(${progress * rightXValues[0]}px) translateY(${progress * yValues[0]}px) rotate(${progress * rightRotationValues[0]}deg)`; 
          } 
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());  // Cleanup on component unmount
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left" ref={cardLeftRef}> 
            <img src={`/img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right" ref={cardRightRef}>
            <img src={`/img-${2 * i}.jpg`} alt="" />
          </div>
        </div>
      )
    }
    return rows;
  }

  return (
    <>
      <ReactLenis root>
        <section className="hero">
          <div className="img">
           <img src="/arcane_3.jpeg" alt="" />
          </div>
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
            <div className="copy"> 
              <div className="line">
                <p>Delve into coding without clutter.</p>
              </div>
              <div className="line">
                <p>One subscription. Endless web design.</p>
              </div>
              <div className="line">
                <p>Take the fast lane to mastery.</p>
              </div>
            </div>
            <div className="btn">
              <button> Get PRO </button>
            </div>
          </div>
          {generateRows()}
        </section>
        <section className="footer"></section>
      </ReactLenis>
    </>
  );
}
