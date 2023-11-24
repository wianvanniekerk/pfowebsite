import React from "react";

function Hero() {
  return (
    <div className="hero">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap');
      </style>

      <div className="hero__bg">
        <picture>
          <img src="/images/Wallmax.png" alt="Background" />
        </picture>
      </div>

      <div className="hero__cnt">
        <div className="fade-in">
          <p>&lt;&gt; | Precision FinOps  </p>
          <br></br> 
          <br></br> 
          <br></br> 
          <p className="custodians">Custodians of Logic</p>
        </div>        
      </div>
    </div>
  );
}

export default Hero;