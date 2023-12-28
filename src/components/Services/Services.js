import React from "react";
import {
  AiOutlineTeam,
  AiOutlineCloudServer,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <div class="responsive-container-block bigContainer">
        <hr class="separator separator--line" />
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <AiOutlineDeploymentUnit size="2rem" />
            </div>
            <h3>Finance and Operation customization</h3>
            <p>
              Finance and operation customization in Dynamics 365 involves
              tailoring and extending the finance and operations modules of the
              Dynamics 365 suite to meet the specific financial and operational
              requirements of an organization. This customization allows
              businesses to align the system with their unique processes,
              industry regulations, reporting standards, and management needs.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <AiOutlineCloudServer size="2rem" />
            </div>
            <h3>Platform support</h3>
            <p>
              Platform support in Dynamics 365 refers to the services provided
              by Microsoft or authorized partners to assist organizations in
              managing and maintaining their Dynamics 365 environment. It
              encompasses technical support, troubleshooting, updates,
              performance monitoring, security, and ongoing assistance to ensure
              the smooth operation of the Dynamics 365 platform.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <AiOutlineTeam size="2rem" />
            </div>
            <h3>Technical Consulting </h3>
            <p>
              Technical consulting in Dynamics 365 involves providing expertise,
              guidance, and support for organizations implementing and utilizing
              the Dynamics 365 suite of business applications. Dynamics 365 is a
              comprehensive set of cloud-based applications that cover various
              functional areas such as sales, customer service, finance,
              operations, marketing, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
