import React from "react";
import "../styles/privacy.css";
import ScrollTop from "../components/ScrollTop";

function TandC() {
  return (
    <div className="ppWrap">
      <div className="ppContainer">
        <h1 className="ppTitle">Terms and Conditions</h1>

        <p className="ppText">
          <strong>Introduction</strong><br />
          Welcome to Tech2Shine Labs. These Terms and Conditions govern your
          access to and use of our website and services. By registering on the
          platform or purchasing any plan, you agree to comply with the policies
          outlined below.
        </p>

        <p className="ppText">
          Tech2Shine Labs functions strictly as a Advanced services
          facilitator. All assignments available through the platform are
          contractual in nature and do not constitute employment.
        </p>

        <section className="ppSection">
          <h2 className="ppHeading">1. Nature of Services</h2>
          <p className="ppText">Tech2Shine Labs provides:</p>
          <ul className="ppList">
            <li>Onboarding and account enablement</li>
            <li>Access to licensed digital workflow infrastructure</li>
            <li>Program-specific training and documentation</li>
            <li>Technical and operational support</li>
            <li>Quality review and performance feedback</li>
          </ul>
          <p className="ppText">
            Any fee charged is strictly for the above service enablement. This is
            not an employment or job placement fee, and the organization does not
            guarantee fixed income or employment.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">2. Eligibility</h2>
          <p className="ppText">To participate in programs, users must:</p>
          <ul className="ppList">
            <li>Be at least 18 years of age</li>
            <li>Possess basic computer knowledge</li>
            <li>Have typing ability and attention to detail</li>
            <li>Provide accurate registration details</li>
            <li>Use a desktop or laptop where required</li>
          </ul>
          <p className="ppText">
            Remote projects are suitable only for individuals capable of meeting
            defined accuracy and confidentiality Advanceds.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">3. Freelancer Responsibilities</h2>
          <p className="ppText">Participants engaging through our platform agree to:</p>
          <ul className="ppList">
            <li>Follow all project guidelines and instructions</li>
            <li>Maintain confidentiality and data security</li>
            <li>Submit assigned work within deadlines</li>
            <li>Meet defined accuracy benchmarks</li>
            <li>Cooperate with Quality Control reviews</li>
          </ul>
          <div className="ppCallout">
            Failure to meet these responsibilities may result in suspension or
            termination of platform access.
          </div>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">4. Work Submission and QC Policy</h2>
          <ul className="ppList">
            <li>All tasks must be completed within the assigned project cycle</li>
            <li>Accuracy is evaluated through random sampling</li>
            <li>Minor deviations may be eligible for one rework opportunity</li>
            <li>QC approval is mandatory before any payout is considered</li>
          </ul>
          <p className="ppText">
            Payments are released only after successful Quality Control approval
            and clearance.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">5. Payments and Payout Cycle</h2>
          <p className="ppText">Participants acknowledge that:</p>
          <ul className="ppList">
            <li>There are no guaranteed payouts</li>
            <li>Earnings depend on performance and project availability</li>
            <li>Advanced payout cycle is 7–10 working days from QC approval</li>
            <li>Payment modes include NEFT and UPI to official company accounts only</li>
          </ul>
          <p className="ppText">
            All payouts are processed strictly under official company identity
            and accounts.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">6. Payment Advisory and Safety</h2>
          <p className="ppText">For your protection:</p>
          <ul className="ppList">
            <li>Users must make payments only to accounts displaying official company identity</li>
            <li>Do not proceed if any personal-name account appears</li>
            <li>The organization never accepts payments in individual names</li>
            <li>Report any suspicious request immediately</li>
          </ul>
          <p className="ppText">
            This policy ensures ethical and compliant billing operations.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">7. Refund Policy</h2>
          <ul className="ppList">
            <li>Refund requests are accepted within 48 hours of purchase</li>
            <li>Eligibility applies only if onboarding is not completed</li>
            <li>Approved refunds are processed within 7–10 working days</li>
            <li>Once onboarding and system access are completed, the fee is non-refundable</li>
          </ul>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">8. Account Suspension & Termination</h2>
          <p className="ppText">
            Tech2Shine Labs reserves the right to suspend or terminate user
            accounts in cases of:
          </p>
          <ul className="ppList">
            <li>Policy violations</li>
            <li>Misrepresentation of identity</li>
            <li>Breach of confidentiality</li>
            <li>Repeated inaccurate submissions</li>
            <li>Misuse of platform infrastructure</li>
          </ul>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">9. Limitation of Liability</h2>
          <p className="ppText">Tech2Shine Labs is not responsible for:</p>
          <ul className="ppList">
            <li>Internet connectivity issues</li>
            <li>Third-party platform downtime</li>
            <li>Losses arising from freelancer negligence</li>
            <li>Misinterpretation of indicative earnings</li>
            <li>Actions outside the scope of our services</li>
          </ul>
          <p className="ppText">
            All participation results vary by individual performance.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">10. Intellectual Property</h2>
          <p className="ppText">
            All content on this website including logos, text, design elements,
            and documentation is the property of Tech2Shine Labs and may not be
            copied or redistributed without permission.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">11. Governing Law and Jurisdiction</h2>
          <ul className="ppList">
            <li>All engagements are governed by the laws of India</li>
            <li>Jurisdiction for disputes: Bangalore, Karnataka, India</li>
            <li>This document does not constitute an offer of employment</li>
            <li>Any fee applies solely for software access, training, and operational support services</li>
          </ul>
        </section>

        <section className="ppSection" style={{ marginBottom: 0 }}>
          <h2 className="ppHeading">12. Changes to Terms</h2>
          <p className="ppText">
            Tech2Shine Labs reserves the right to update or modify these Terms and
            Conditions at any time. Continued use of the platform constitutes
            acceptance of revised terms.
          </p>
        </section>

        <p className="ppFooterNote">
          © {new Date().getFullYear()} Tech2Shine Labs. All rights reserved.
        </p>
      </div>
      <ScrollTop/>
    </div>
  );
}

export default TandC;
