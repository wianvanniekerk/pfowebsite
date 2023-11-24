import React from "react";

function Hero() {
  return (
    <div class="hero">
      <div class="hero__bg">
        <picture>
          <img src="/images/Wallmax.png" />
        </picture>
      </div>

      <div class="hero__cnt">
        <div class="fade-in">
          <img src="/images/latestLogo.png" />
          <img src="/images/Custodians.png" width="auto" height="150" />
        </div>       
      </div>
    </div>
  );
}
export default Hero;
