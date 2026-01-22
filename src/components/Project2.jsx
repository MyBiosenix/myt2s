import React from "react";
import ProjectProp from "../Props/ProjectProp";
import "../Styles/project.css";

function Project2({ onKnowMore }) {
  return (
    <div className="project">
      <div className="inpro">
        <h3 data-aos="fade-right">Programs You Can Participate In</h3>
        <p>
          Tech2Shine Labs provides access to structured, non-voice digital projects suitable for individuals seeking flexible remote participation. Our platform focuses on clarity, accuracy standards, and professional workflows. Each program defines the scope of work, quality benchmarks, submission cycles, and review processesAvailable program categories include:
          <br/>

✔ Data Conversion Program

✔ Data Segregation Program

✔ Captcha Code Entry Program
        </p>
        <p>
          All assignments delivered through Tech2Shine Labs are contractual in nature and do not constitute employment. Participants are engaged as independent contractors and are expected to follow defined program guidelines.
        </p>
      </div>

      <div className="myproject">
        <div className="projs" data-aos="fade-left">
          <ProjectProp
            title="DATA CONVERSION PROJECT"
            description={[
              "Each page contains approximately 45–50 lines",
              "Excellent income opportunities with flexible schedules.",
              "Data must be typed accurately.",
              "All technical and formatting rules must be followed strictly.",
            ]}
            buybtn="Know more...."
            onBuy={() => onKnowMore("data-conversion")}
          />

          <ProjectProp
            title="DATA SEGREGATION PROJECT"
            description={[
              "Forms typically contain 15–20 data fields.",
              "Tasks involve copying, validating, and sequencing data.",
              "Duplication and mismatched data are treated as errors.",
              "Participants work within company-secured tools",
            ]}
            buybtn="Know more...."
            onBuy={() => onKnowMore("data-segregation")}
          />

          <ProjectProp
            title="BANK CAPTCHA VERIFIER"
            description={[
              "Each captcha contains 7–8 characters.",
              "Work must be completed using individual login credentials.",
              "Accuracy thresholds must be met.",
              "Estimated Earnings are processed only after QC approval.",
            ]}
            buybtn="Know more...."
            onBuy={() => onKnowMore("bank-captcha")}
          />
        </div>

        <h4 className="mumu">
          All assignments are contractual in nature and do not constitute employment.
        </h4>
      </div>
    </div>
  );
}

export default Project2;
