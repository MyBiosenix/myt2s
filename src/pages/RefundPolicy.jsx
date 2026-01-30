import React from "react";
import "../styles/privacy.css";
import ScrollTop from "../components/ScrollTop";

function RefundPolicy() {
  return (
    <div className="ppWrap">
      <div className="ppContainer">
        <h1 className="ppTitle">Refund Policy</h1>

        <p className="ppText">
          <strong>Introduction</strong><br />
          Tech2Shine Labs is committed to maintaining transparent and fair
          business practices. This Refund Policy explains the conditions under
          which users may request refunds for the Onboarding &amp; Enablement Fee
          or any purchased participation plan.
        </p>

        <p className="ppText">
          All fees charged by Tech2Shine Labs apply strictly to services such as
          account setup, training, workflow access, and operational support.
          These fees do not represent employment or guaranteed earnings. Refund
          eligibility is determined based on the guidelines below.
        </p>

        <section className="ppSection">
          <h2 className="ppHeading">1. Refund Eligibility</h2>
          <p className="ppText">
            Participants may request a refund only under the following
            circumstances:
          </p>
          <ul className="ppList">
            <li>The request is submitted within 48 hours of payment</li>
            <li>User onboarding has not been completed</li>
            <li>Access to licensed workflow infrastructure has not been activated</li>
            <li>No tasks or services have yet been delivered</li>
          </ul>
          <p className="ppCallout">
            If all the above conditions are satisfied, the user is eligible for a
            full refund.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">2. Non-Refundable Conditions</h2>
          <p className="ppText">Refunds will not be granted in these cases:</p>
          <ul className="ppList">
            <li>After onboarding and system access are completed</li>
            <li>Once training and documentation have been provided</li>
            <li>If the participant has already received workflow access</li>
            <li>For inaccurate submissions or QC failures</li>
            <li>For change of mind after service enablement</li>
          </ul>

          <div className="ppNotice">
            <strong>Important Clarification:</strong>
            <p className="ppText" style={{ margin: "8px 0 0" }}>
              Once onboarding and account enablement are successfully processed,
              the fee becomes non-refundable as infrastructure access and training
              are already delivered.
            </p>
          </div>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">3. Refund Request Process</h2>
          <p className="ppText">To request a refund:</p>

          <ol className="ppSteps">
            <li>
              Send an email to:{" "}
              <a className="ppMail" href="mailto:info@tech2shinelabs.com">
                info@tech2shinelabs.com
              </a>
            </li>
            <li>Include the following details:</li>
          </ol>

          <ul className="ppList">
            <li>Full Name</li>
            <li>Registered Email</li>
            <li>Phone Number</li>
            <li>Payment Receipt / Transaction ID</li>
            <li>Reason for refund request</li>
          </ul>

          <p className="ppText">
            Our team will review the request and confirm eligibility.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">4. Refund Timelines</h2>
          <ul className="ppList">
            <li>Eligible refunds are processed within 7–10 working days</li>
            <li>Refunds are credited back through the original payment mode</li>
            <li>Bank or UPI processing time depends on provider policies</li>
            <li>You will receive email confirmation after processing</li>
          </ul>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">5. Fee Adjustment Policy</h2>
          <p className="ppText">
            In certain programs, the onboarding fee may be adjusted against the
            first successful payout, subject to project terms and QC approval.
            This adjustment is discretionary and depends on program guidelines
            and performance benchmarks.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">6. Payment Safety Advisory</h2>
          <p className="ppText">For user protection:</p>
          <ul className="ppList">
            <li>Tech2Shine Labs accepts payments only through official company accounts</li>
            <li>Never proceed if any personal-name account appears</li>
            <li>Report suspicious requests immediately</li>
          </ul>
        </section>

        <section className="ppSection" style={{ marginBottom: 0 }}>
          <h2 className="ppHeading">7. Contact for Refund Queries</h2>
          <p className="ppText">
            For any questions related to refunds, contact only via:
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
      <ScrollTop/>
    </div>
  );
}

export default RefundPolicy;
