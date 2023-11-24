import React from "react";

import {
  AiOutlineFileSearch,
  AiOutlineHourglass,
  AiOutlineSafety,
} from "react-icons/ai";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <div class="responsive-container-block bigContainer">
        <hr class="separator separator--line" />
      </div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="imgContainer">
            <img class="mainImg" src="/images/newImage.png" />
          </div>
          <div class="responsive-container-block textSide">
            <p class="text-blk subHeading">
              <a class="a" href="">
                Precision FinOps (PFO)
              </a>
              is a leading provider of innovative Microsoft Dynamics solutions
              for businesses seeking to optimize their operations and drive
              growth. With a deep understanding of industry-specific challenges
              and a team of experienced professionals, we help organizations
              leverage the power of Microsoft Dynamics to streamline their
              processes, enhance customer relationships, and achieve their
              business objectives.
            </p>

            <p class="makeTextNice">
              At PFO, we are committed to delivering high-quality, tailored
              solutions that meet the unique needs of our clients. Our team of
              certified Microsoft Dynamics consultants and developers brings
              extensive expertise in implementing and customizing Dynamics
              finance and operations, which suit diverse industries, including
              manufacturing, retail, finance, healthcare, and more.
            </p>
            <br />
            <p class="makeTextNice">
              We understand that every business is unique, and that's why we
              take a consultative approach to each project. Our team works
              closely with clients to gain a deep understanding of their
              operations, challenges, and goals. We then design and implement
              customized Microsoft Dynamics solutions that align with their
              specific requirements, enabling them to optimize efficiency,
              improve decision-making, and drive sustainable growth.
            </p>
            <br />
            <p class="makeTextNice">
              What sets us apart is our unwavering commitment to customer
              satisfaction. We prioritize building long-term partnerships with
              our clients and strive to exceed their expectations at every stage
              of the engagement. Our dedicated support team is always available
              to provide ongoing assistance, training, and guidance to ensure
              our clients get the most out of their Microsoft Dynamics
              investment.
            </p>
            <br />

            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <AiOutlineFileSearch size="2rem" />
                <div class="cardText">
                  <p class="text-blk cardHeading">Transparency</p>
                </div>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <AiOutlineHourglass size="2rem" />
                <div class="cardText">
                  <p class="text-blk cardHeading">Dedication</p>
                </div>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <AiOutlineSafety size="2rem" />
                <div class="cardText">
                  <p class="text-blk cardHeading">Integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
