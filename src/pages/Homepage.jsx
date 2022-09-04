import React from "react";
import "./css/Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
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
    </div>
  );
}

export default Homepage;
