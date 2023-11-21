import React from "react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className="fixed_footer">
        <div className="grid-container">
          <p className="content">Email:</p>
          <p className="content">
            South Africa Office: CSIR Site, Mering Naude Rd, Scientia 627 - Jr,
            Pretoria
          </p>
          <p className="content">
            North America Office: 6330 South Sandhill Road Las Vegas, NV 89120
          </p>
        </div>
        <div className="makeIcon">
          <a href="https://www.linkedin.com/company/precision-finops/">
            <AiFillLinkedin size="2rem" />
          </a>
          <a href="https://www.linkedin.com/company/precision-finops/">
            <AiOutlineMail size="2rem" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
