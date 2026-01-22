import React from "react";
import "../styles/privacy.css";

function Disclaimer() {
  return (
    <div className="ppWrap">
      <div className="ppContainer">
        <h1 className="ppTitle">Website & Earnings Disclaimer</h1>

        <p className="ppText">
          <strong>Introduction</strong><br />
          Tech2Shine Labs operates strictly as a Advanced digital services
          facilitator. The information provided on this website is intended to
          explain our services, workflows, and participation structure in a
          transparent manner.
        </p>

        <p className="ppText">
          This Disclaimer page clarifies the scope and limitations of all content
          presented across the platform.
        </p>

        <section className="ppSection">
          <h2 className="ppHeading">1. Nature of the Platform</h2>
          <ul className="ppList">
            <li>Tech2Shine Labs provides onboarding, training, and access to structured digital workflows</li>
            <li>All assignments offered through the platform are contractual in nature</li>
            <li>Engagement with our programs does not constitute employment</li>
            <li>The organization acts only as a facilitator for non-voice digital projects</li>
          </ul>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">2. Earnings Clarification</h2>

          <p className="ppText">
            <strong>No Guaranteed Income</strong>
          </p>

          <p className="ppText">
            Tech2Shine Labs does not promise, represent, or guarantee any fixed
            income, payout, or return on investment.
          </p>

          <p className="ppText">
            All earnings references, if mentioned anywhere on the platform, are
            purely:
          </p>

          <ul className="ppList">
            <li>Indicative</li>
            <li>Based on historical averages</li>
            <li>Subject to successful Quality Control approval</li>
            <li>Dependent on task accuracy, turnaround time, and project availability</li>
          </ul>

          <p className="ppText">
            Actual earnings may vary from user to user and from project to
            project.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">3. Fees Charged</h2>
          <p className="ppText">Any fee paid by a user is strictly for:</p>

          <ul className="ppList">
            <li>Onboarding &amp; account enablement</li>
            <li>Licensed access to authorized project software</li>
            <li>Project-specific training and documentation</li>
            <li>Technical and operational support</li>
            <li>Compliance verification and system maintenance</li>
          </ul>

          <p className="ppText">This fee is not:</p>

          <ul className="ppList">
            <li>An employment fee</li>
            <li>A job placement fee</li>
            <li>A guarantee or investment fee</li>
          </ul>

          <div className="ppCallout">
            Once onboarding and system access are completed, the fee becomes
            non-refundable.
          </div>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">4. Liability Limitation</h2>
          <p className="ppText">Tech2Shine Labs is not responsible for:</p>

          <ul className="ppList">
            <li>Lack of freelancer effort</li>
            <li>Internet or device-related issues</li>
            <li>Third-party platform downtime</li>
            <li>Losses due to inaccurate submissions</li>
            <li>Misinterpretation of program information</li>
          </ul>

          <p className="ppText">
            Users are solely responsible for meeting defined accuracy and
            confidentiality benchmarks.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">5. Payment Advisory</h2>
          <p className="ppText">For your protection:</p>

          <ul className="ppList">
            <li>Tech2Shine Labs never requests payments to any personal-name accounts</li>
            <li>Do not proceed with payment if any individual name is displayed</li>
            <li>
              Report any such incident immediately to{" "}
              <a className="ppMail" href="mailto:info@tech2shinelabs.com">
                info@tech2shinelabs.com
              </a>
            </li>
          </ul>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">6. Content Purpose</h2>
          <p className="ppText">All material on this website is meant only for:</p>

          <ul className="ppList">
            <li>Explaining available services</li>
            <li>Clarifying program structure</li>
            <li>Providing official communication channels</li>
            <li>Describing pricing and refund logic</li>
          </ul>

          <p className="ppText">
            This website does not create any legal employer-employee relationship.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">7. Governing Law</h2>
          <ul className="ppList">
            <li>All engagements are governed under Indian law</li>
            <li>Jurisdiction for any disputes: Bangalore, Karnataka, India</li>
            <li>This website and brochure content do not constitute an offer of employment</li>
          </ul>
        </section>

        <section className="ppSection" style={{ marginBottom: 0 }}>
          <h2 className="ppHeading">8. Contact for Clarification</h2>
          <p className="ppText">
            For any doubts regarding services, pricing, refunds, or program
            participation, contact only through official channels:
          </p>

          <div className="ppContact">
            <a className="ppMail" href="mailto:info@tech2shinelabs.com">
              info@tech2shinelabs.com
            </a>
          </div>
        </section>

        <p className="ppFooterNote">
          © {new Date().getFullYear()} Tech2Shine Labs. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
