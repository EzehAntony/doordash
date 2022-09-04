import React, { useEffect, useRef } from "react";
import "./css/Homepage.css";
import gsap from "gsap";

function Homepage() {
  let homepage = useRef("");

  useEffect(() => {
    console.log(homepage.current);
    
  }, []);

  /* gsap */
  useEffect(() => {
    gsap.from(homepage.current, {
      x: -50,
      duration: 0.8,
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
