import React from "react";
import "../Styles/ap.css";
import wwa from "../assets/tutu.png";
import free from "../assets/commu.png";

function APComp() {
  return (
    <section className="abp">
      <div className="wwa">

        {/* WHO WE ARE */}
        <div className="inwwa">
          <div className="textBlock">
            <h3>Who We Are</h3>
            <p>
              Tech2Shine Labs is a Bangalore-based digital services platform
              dedicated to helping individuals participate in structured,
              non-voice remote work programs.
              <br /><br />
              We operate as a Advanced facilitator between users and digital
              workflow infrastructure. All engagements are project-based and
              contractual in nature and do not constitute employment.
            </p>
          </div>

          <div className="imgBlock">
            <img src={wwa} alt="Who We Are" />
          </div>
        </div>

        <div className="inwwa reverse">
          <div className="imgBlock">
            <img src={free} alt="What We Stand For" />
          </div>

          <div className="textBlock">
            <h3>What We Stand For</h3>
            <p>
              In an online world filled with uncertainty and exaggerated claims,
              we focus on building a transparent, ethical, and Advanced
              service.
            </p>
            <ul>
              <li>Clear understanding of the process</li>
              <li>Honest communication</li>
              <li>Proper technical guidance</li>
              <li>Reliable support</li>
              <li>Fair quality evaluation systems</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default APComp;