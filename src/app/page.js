"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
export default function Home() {

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
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
            {/* Text */}
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
            {/* Button */}
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