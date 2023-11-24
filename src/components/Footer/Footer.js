import React from "react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div class="footernew">
      <div class="footer-container">
		<div class="footer-col">
			<div>
				<h4>Contact</h4>
				<div class="cgroup">
					<div class="singleitem">
						info@pfosolutions.com
					</div>
					
					<div class="singlesocial">
					 <a href="https://www.linkedin.com/company/precision-finops/">
						<AiFillLinkedin size="2rem" color="white" />
					  </a>
					  <a href="https://www.linkedin.com/company/precision-finops/">
						<AiOutlineMail size="2rem" color="white" />
					  </a>
					</div>
				</div>
			</div>
			<div>
				<h4>Visit Us</h4>
				<div class="cgroup">
					<div class="singleaddress">
						<b>South Africa Office</b><br />
						CSIR Site, Mering Naude Rd, Scientia 627 - Jr, Pretoria
					</div>
					
					<div class="singleaddress">
						<b>North America Office</b><br />
						6330 South Sandhill Road Las Vegas, NV 89120
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  );
}
export default Footer;
