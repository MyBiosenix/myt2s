import React, { useState } from "react";
import "../Styles/plans.css";
import PlanProp from "../Props/PlanProp";
import EnquiryModal from "../Modals/EnquiryModal";

function Plans({ activePlan, onClosePlans }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (planName, projectName) => {
    setSelectedPlan(planName);
    setSelectedProject(projectName);
    setShowModal(true);
  };

  if (!activePlan) return null;

  return (
    <div className="myplans">
      <div className="plansTop">
      </div>

      {activePlan === "data-conversion" && (
        <>
          <h4 id="data-conversion">DATA CONVERSION</h4>
          <div className="in-myplans">
            <PlanProp
              name="Basic"
              descri={[
                "Pages: 100 Pages",
                "Accuracy Required: 85.00%",
                "Max Errors Accepted: 15.00%",
                "Earning Per Page: Rs. 150.00/-",
                "Contract Duration: 06 Month",
                "Minimum Submission: 80 Pages",
                "Work Duration: 15 Days",
                "Estimated Earnings : ₹12,000-₹15,000",
              ]}
              btn="Enroll Now"
              project="Data Conversion"
              onBuy={openModal}
            />
            <PlanProp
              name="Advanced"
              descri={[
                "Pages: 200 Pages",
                "Accuracy Required: 60.00%",
                "Max Errors Accepted: 40.00%",
                "Earning Per Page: Rs. 180.00/-",
                "Contract Duration: 12 Months",
                "Minimum Submission: 160 Pages",
                "Work Duration: 30 Days",
                "Estimated Earnings: ₹28,000-₹36,000",
              ]}
              btn="Enroll Now"
              project="Data Conversion"
              onBuy={openModal}
            />
            <PlanProp
              name="Professional"
              descri={[
                "Pages: 240 Pages",
                "Accuracy Required: 50.00%",
                "Max Errors Accepted: 50.00%",
                "Earning Per Page: Rs. 210.00/-",
                "Contract Duration: 24 Months",
                "Minimum Submission: 150 Pages",
                "Work Duration: 30 Days",
                "Estimated Earnings: ₹31,000-₹50,000",
              ]}
              btn="Enroll Now"
              project="Data Conversion"
              onBuy={openModal}
            />
          </div>
        </>
      )}

      {/* DATA SEGREGATION */}
      {activePlan === "data-segregation" && (
        <>
          <h4 id="data-segregation">DATA SEGREGATION</h4>
          <div className="in-myplans">
            <PlanProp
              name="Basic"
              descri={[
                "Total Forms: 2000",
                "Accuracy Required: 85.00%",
                "Max Errors Accepted: 15.00%",
                "Earning Per Form: Rs. 8.00/-",
                "Contract Duration: 06 Month",
                "Minimum Submission: 1800 Forms",
                "Work Duration: 15 Days",
                "Estimated Earnings : ₹14,000-₹16,000",
              ]}
              btn="Enroll Now"
              project="Data Segregation"
              onBuy={openModal}
            />
            <PlanProp
              name="Advanced"
              descri={[
                "Total Forms: 3000",
                "Accuracy Required: 60.00%",
                "Max Errors Accepted: 40.00%",
                "Earning Per Form: Rs. 10.00/-",
                "Contract Duration: 12 Months",
                "Minimum Submission: 2500 Forms",
                "Work Duration: 30 Days",
                "Estimated Earnings: ₹30,000-₹36,000",
              ]}
              btn="Enroll Now"
              project="Data Segregation"
              onBuy={openModal}
            />
            <PlanProp
              name="Professional"
              descri={[
                "Total Forms: 3500",
                "Accuracy Required 50.00%",
                "Max Errors Accepted: 50.00%",
                "Earning Per Form: Rs. 14.00/-",
                "Contract Duration: 24 Months",
                "Minimum Submission: 2400 Forms",
                "Work Duration: 35 Days",
                "Estimated Earnings: ₹33,000-₹49,000",
              ]}
              btn="Enroll Now"
              project="Data Segregation"
              onBuy={openModal}
            />
          </div>
        </>
      )}

      {/* BANK CAPTCHA */}
      {activePlan === "bank-captcha" && (
        <>
          <h4 id="bank-captcha">BANK CAPTCHA VERIFIER</h4>
          <div className="in-myplans">
            <PlanProp
              name="Basic"
              descri={[
                "Captcha Count: 16000",
                "Skip Accuracy: 0%",
                "Per Captcha Amount: Rs 1/-",
                "Contract Duration: 06 Month",
                "Work Duration: 1 Month",
                "Estimated Earnings : ₹16,000",
                "System: Smart Phone Or Pc",
              ]}
              btn="Enroll Now"
              project="Bank Captcha Verifier"
              onBuy={openModal}
            />
            <PlanProp
              name="Advanced"
              descri={[
                "Captcha Count: 16000",
                "Skip Accuracy: 0%",
                "Per Captcha Amount: Rs 1.5/-",
                "Contract Duration: 12 Months",
                "Work Duration: 1 Month",
                "Estimated Earnings : ₹24,000",
                "System: Smart Phone Or Pc",
              ]}
              btn="Enroll Now"
              project="Bank Captcha Verifier"
              onBuy={openModal}
            />
            <PlanProp
              name="Professional"
              descri={[
                "Captcha Count: 16000",
                "Skip Accuracy: 0%",
                "Per Captcha Amount: Rs 3/-",
                "Contract Duration: 24 Months",
                "Work Duration: 1 Month",
                "Estimated Earnings : ₹48,000",
                "System: Smart Phone Or Pc",
              ]}
              btn="Enroll Now"
              project="Bank Captcha Verifier"
              onBuy={openModal}
            />
          </div>
        </>
      )}

      <p>
        Tech2Shine Labs displays only indicative program information based on structured workflows. The organization does not guarantee fixed income, employment, or job placement. Actual earnings and participation results vary depending on accuracy, turnaround time, and project availability.
      </p> 

      <EnquiryModal
        show={showModal}
        onClose={() => setShowModal(false)}
        planName={selectedPlan}
        projectName={selectedProject}
      />
    </div>
  );
}

export default Plans;
