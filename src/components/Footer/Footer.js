import React from "react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer class="fixed_footer">
        <div class="grid-container ">
          <p class="content">Email: </p>
          <p class="content">
            South Africa Office: CSIR Site, Mering Naude Rd, Scientia 627 - Jr,
            Pretoria
          </p>
          <p class="content">
            North America Office: 6330 South Sandhill Road Las Vegas, NV 89120
          </p>
        </div>
        <div class="makeIcon">
          <a href="https://www.linkedin.com/company/precision-finops/">
            <AiFillLinkedin size="2rem" color="white" />
          </a>
          <a href="https://www.linkedin.com/company/precision-finops/">
            <AiOutlineMail size="2rem" color="white" />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
