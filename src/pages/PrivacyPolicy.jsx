import React from "react";
import "../styles/privacy.css";
import ScrollTop from "../components/ScrollTop";

function PrivacyPolicy() {
  return (
    <div className="ppWrap">
      <div className="ppContainer">
        <h1 className="ppTitle">Privacy Policy</h1>

        <p className="ppText">
          <strong>Introduction</strong><br />
          Tech2Shine Labs is committed to protecting the privacy and personal
          information of all visitors and participants using our platform. This
          Privacy Policy explains how we collect, use, store, and safeguard user
          data in accordance with applicable Indian laws and global best
          practices.
        </p>

        <p className="ppText">
          By accessing or using this website, you agree to the practices
          described in this policy.
        </p>

        <section className="ppSection">
          <h2 className="ppHeading">1. Information We Collect</h2>

          <h3 className="ppSubHeading">Personal Information</h3>
          <ul className="ppList">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Location details (city and state)</li>
            <li>Program preferences</li>
          </ul>

          <h3 className="ppSubHeading">Technical Information</h3>
          <ul className="ppList">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Cookies and usage analytics</li>
          </ul>

          <p className="ppText">
            This data is collected solely to enable service delivery and improve
            user experience.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">2. How We Use Your Information</h2>
          <p className="ppText">Tech2Shine Labs uses collected information for:</p>
          <ul className="ppList">
            <li>Account creation and verification</li>
            <li>Onboarding and enablement services</li>
            <li>Providing workflow access</li>
            <li>Responding to user inquiries</li>
            <li>Quality Control and performance tracking</li>
            <li>Sending service-related communications</li>
            <li>Website improvement and analytics</li>
          </ul>

          <p className="ppCallout">
            We do not use your data for unrelated purposes or sell personal
            information to third parties.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">3. Data Protection &amp; Security</h2>
          <p className="ppText">
            We implement appropriate technical and organizational security
            measures to protect your information from unauthorized access,
            misuse, alteration, or loss.
          </p>
          <ul className="ppList">
            <li>Access to user accounts is secured through authorized credentials</li>
            <li>Internal systems are monitored for compliance and maintenance</li>
            <li>Payments are processed only through official company accounts</li>
          </ul>
          <p className="ppText">
            All communications and submissions remain confidential and are used
            strictly within the boundaries of our services.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">4. Cookies Policy</h2>
          <p className="ppText">Tech2Shine Labs uses cookies to:</p>
          <ul className="ppList">
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
            <li>Improve site functionality</li>
            <li>Provide secure login sessions</li>
          </ul>
          <p className="ppText">
            You may disable cookies through browser settings, though some
            features may not function as intended.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">5. Third-Party Services</h2>
          <p className="ppText">We may use trusted third-party tools for:</p>
          <ul className="ppList">
            <li>Payment processing</li>
            <li>Analytics (e.g., Google Analytics)</li>
            <li>Email communication systems</li>
          </ul>
          <p className="ppText">
            Such providers have their own privacy policies. We ensure that only
            minimal necessary information is shared with them for service
            enablement.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">6. User Rights</h2>
          <p className="ppText">You have the right to:</p>
          <ul className="ppList">
            <li>Access your stored personal information</li>
            <li>Request corrections</li>
            <li>Request account deletion</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <div className="ppContact">
            <p className="ppText" style={{ margin: 0 }}>
              For any such requests, contact:
            </p>
            <a className="ppMail" href="mailto:info@tech2shinelabs.com">
              info@tech2shinelabs.com
            </a>
          </div>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">7. Data Retention</h2>
          <p className="ppText">
            User information is retained only as long as necessary to provide
            services, meet compliance requirements, or resolve disputes.
          </p>
          <p className="ppText">
            Inactive accounts may be removed periodically as part of system
            maintenance.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">8. Children’s Privacy</h2>
          <p className="ppText">
            Our services are intended for adults and individuals with legal
            capacity to enter into contractual participation. We do not knowingly
            collect data from minors without parental consent.
          </p>
        </section>

        <section className="ppSection">
          <h2 className="ppHeading">9. Changes to This Policy</h2>
          <p className="ppText">
            Tech2Shine Labs reserves the right to update this Privacy Policy at
            any time. Any modifications will be posted on this page with an
            updated revision date. Users are encouraged to review the policy
            periodically.
          </p>
        </section>

        <section className="ppSection" style={{ marginBottom: 0 }}>
          <h2 className="ppHeading">10. Jurisdiction</h2>
          <p className="ppText">
            This policy and all matters relating to privacy are governed by the
            laws of India. Jurisdiction for any disputes: Bangalore, Karnataka,
            India.
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

export default PrivacyPolicy;