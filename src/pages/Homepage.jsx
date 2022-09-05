import React, { useEffect, useRef } from "react";
import "./css/Homepage.css";
import gsap, { TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Homepage() {
  gsap.registerPlugin(ScrollTrigger);
  let homepage = useRef("");
  const q = gsap.utils.selector(homepage);

  const heroTimeline = new TimelineMax({
    duration: 1,
  });
  const secondTimeline = new TimelineMax({
    duration: 0.8,
  });
  const thirdTimeline = new TimelineMax({
    duration: 0.6,
  });
  const lastTimeline = new TimelineMax({
    duration: 1,
    delay: 0.2,
  });

  /* gsap */
  useEffect(() => {
    heroTimeline
      .from(q(".hero"), {
        y: -50,
        opacity: 0,
      })
      .from(
        q("header"),
        {
          y: -50,
          opacity: 0,
        },
        "<0.2"
      )
      .from(
        q(".mobile"),
        {
          y: -20,
          opacity: 0,
        },
        "<0.2"
      )
      .from(
        q(".hero h1"),
        {
          y: 20,
          opacity: 0,
        },
        "<0.2"
      )
      .from(
        q(".hero input"),
        {
          x: -20,
          opacity: 0,
        },
        "<0.2"
      )
      .from(
        q(".hero a"),
        {
          y: -20,
          opacity: 0,
        },
        "<0.2"
      );

    secondTimeline
      .from(q(".scoot"), {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: q(".second .scoot"),
          start: "top 80%",
          scrub: 1,
          end: "bottom 70%",
        },
      })
      .from(q(".shop"), {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: q(".second .shop"),
          start: "top 80%",
          scrub: 1,
          end: "bottom 70%",
        },
      })
      .from(q(".iphone"), {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: q(".second .iphone"),
          start: "top 80%",
          scrub: 1,
          end: "bottom 70%",
        },
      });

    thirdTimeline
      .from(q(".third img"), {
        x: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: q(".third img"),
          start: "top 80%",
          scrub: 0.5,
          end: "bottom 70%",
        },
      })
      .from(q(".third .text"), {
        x: -40,
        delay: 0.2,
        opacity: 0,
        delay: 20,
        scrollTrigger: {
          trigger: q(".third img"),
          start: "top 75%",
          scrub: 0.5,
        },
      });

    lastTimeline
      .from(q(".last img"), {
        x: -40,
        opacity: 0,
        scrollTrigger: {
          trigger: q(".last img"),
          start: "top 80%",
          scrub: 0.5,
          end: "bottom 70%",
        },
      })
      
      .from(q(".last .text"), {
        x: 40,
        delay: 0.2,
        opacity: 0,
        delay: 20,
        scrollTrigger: {
          trigger: q(".last img"),
          start: "top 75%",
          scrub: 0.5,
        },
      });

    gsap.from(q("footer"), {
      y: 40,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: q("footer"),
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="homepage" ref={homepage}>
      <div className="hero">
        <header>
          <div className="logo">
            <svg width="42" height="24" viewBox="0 0 99.5 56.5" fill="#fff">
              <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path>
            </svg>
            <p>doordash</p>
          </div>
          <div className="nav">
            <button className="signin">Sign In</button>
            <button className="signin">Sign Up</button>
          </div>
        </header>

        <svg
          className="mobile"
          width="42"
          height="24"
          viewBox="0 0 99.5 56.5"
          fill="#fff"
        >
          <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path>
        </svg>
        <h1>Restaurants and more, delivered to your door</h1>

        <input type="text" placeholder="Enter deliver address" />

        <a href="#">Sign in for saved address</a>
      </div>

      <div className="second">
        <div className="scoot">
          <img src="/scoot.svg" alt="" />
          <div className="text">
            <h1>Become a Dasher</h1>
            <p>
              As a delivery driver, you'll make reliable money—working anytime,
              anywhere.
            </p>
            <button>Start earning</button>
          </div>
        </div>
        <div className="shop">
          <img src="/shop.svg" alt="" />
          <div className="text">
            <h1>Become a Dasher</h1>
            <p>
              As a delivery driver, you'll make reliable money—working anytime,
              anywhere.
            </p>
            <button>Start earning</button>
          </div>
        </div>
        <div className="iphone">
          <img src="/iphone.svg" alt="" />
          <div className="text">
            <h1>Become a Dasher</h1>
            <p>
              As a delivery driver, you'll make reliable money—working anytime,
              anywhere.
            </p>
            <button>Start earning</button>
          </div>
        </div>
      </div>

      <div className="third">
        <div className="text">
          <h1>It’s all here. All in one app.</h1>
          <p>
            Discover local, on-demand delivery or Pickup from restaurants,
            nearby grocery and convenience stores, and more.
          </p>
          <button>Get the app</button>
        </div>

        <div className="image">
          <img src="soup.png" alt="" />
        </div>
      </div>

      <div className="last">
        <div className="text">
          <h1>Every Flavor Welcome</h1>
          <p>
            From your neighborhood sushi spot to the burger and fries you crave,
            choose from over 300,000 local and national favorites across the
            U.S., Canada and Australia.
          </p>
          <button>Find restaurants</button>
        </div>

        <div className="image">
          <img src="soup.png" alt="" />
        </div>
      </div>

      <footer>
        <div className="up">
          <div className="topCities">
            <h1>Top Cities Near You</h1>
            <li>New York City</li>
            <li>Los Angeles</li>
            <li>Toronto</li>
            <li>Houston</li>
            <li>Brooklyn</li>
            <li>San Diego</li>
            <li>Las vegas</li>
            <li>San Francisco</li>
            <li>Seattle</li>
            <li>Atlanta</li>
            <li>Queens</li>
            <li>Vancouver, BC</li>
            <li>Miami</li>
            <li>San Antonio</li>
            <li>Phonix</li>
            <li>Denver</li>
            <li>Austin</li>
            <li>Washington, DC</li>
            <li>Dallas</li>
            <li>Melbourne</li>
            <li>Sydney</li>
            <li>Montreal</li>
            <li>All Cities</li>
          </div>
          <div className="cuisines">
            <h1>Top Cuisines Near You</h1>
            <li>Pizza Near Me</li>
            <li>Chinese Food Near Me</li>
            <li>Sushi Near Me</li>
            <li>Cafe Near Me</li>
            <li>Lunch Near Me</li>
            <li>Seafood Near Me</li>
            <li>Indian Food Near Me</li>
            <li>Dessert Near Me</li>
            <li>Burgers Near Me</li>
            <li>Asian Food Near Me</li>
            <li>Italian Food Near Me</li>
            <li>Vegan Food Near Me</li>
            <li>Sandwishes Near Me</li>
            <li>Restaurant Near Me</li>
          </div>
        </div>

        <div className="down"></div>
      </footer>
    </div>
  );
}

export default Homepage;
