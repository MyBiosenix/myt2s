import React, { useState } from "react";
import "../Styles/hiw.css";
import {
  FaSignInAlt,
  FaUsers,
  FaUserCheck,
  FaClipboardCheck,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const steps = [
  { title: "Register", short: "Create a profile on the platform.", icon: FaSignInAlt },
  { title: "Onboarding", short: "Receive orientation and verification.", icon: FaUsers },
  { title: "Participate", short: "Access assigned workflows.", icon: FaUserCheck },
  { title: "Submit Work", short: "Complete tasks within deadlines.", icon: FaClipboardCheck },
  { title: "QC Approval", short: "Payment after successful QC clearance.", icon: FaMoneyCheckAlt },
];

export default function HIW2() {
  const [active, setActive] = useState(0);

  return (
    <div className="hiwss">
      <section className="hiw">
        <h2 className="hiwTitle">How It Works</h2>

        <div className="roadmap">
          <div className="roadTrack" aria-hidden="true" />

          <div className="roadRow">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;

              return (
                <button
                  key={i}
                  type="button"
                  className={`roadCard ${isActive ? "active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <div className="roadTop">
                    <span className="roadStep">Step {i + 1}</span>
                    <span className="roadDot" aria-hidden="true" />
                  </div>

                  <div className="roadIcon">
                    <Icon />
                  </div>

                  <h3 className="roadTitle">{s.title}</h3>
                  <p className="roadText">{s.short}</p>
                </button>
              );
            })}
          </div>
        </div>

        
      </section>
    </div>
  );
}
