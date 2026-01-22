import React, { useState } from "react";
import "../Styles/hiw.css";
import { useNavigate } from "react-router-dom";
import {
  FaSignInAlt,
  FaUsers,
  FaUserCheck,
  FaClipboardCheck,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { KeyRound, BookOpen, UserPlus, Headset, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Register",
    short: "Create a profile on the platform.",
    icon: FaSignInAlt,
    detail: {
      heading: "Create Your Profile",
      desc:
        "Begin by registering on our platform with your basic details. This allows you to explore available programs and select a plan that fits your goals.",
      points: [
        "Browse program categories",
        "Review pricing plans",
        "Read FAQs",
        "Submit your application",
      ],
      btn: "Register Now",
    },
  },
  {
    title: "Onboarding",
    short: "Receive orientation and verification.",
    icon: FaUsers,
    detail: {
      heading: "Onboarding & Account Verification",
      desc:
        "Once you choose a plan, our team assists you with account setup and verification. You receive orientation and access to tools.",
      points: ["Account enabled", "Workflow explained", "Compliance checks", "Support channels shared"],
      btn: "Proceed to Onboarding",
    },
  },
  {
    title: "Participate",
    short: "Access assigned workflows.",
    icon: FaUserCheck,
    detail: {
      heading: "Access Structured Workflows",
      desc:
        "After onboarding, you get access to documented workflows. Tasks are non-voice and must follow instructions.",
      points: ["Step-by-step tasks", "Accuracy Advanceds", "Timelines", "Rework guidance"],
      btn: "View Programs",
    },
  },
  {
    title: "Submit Work",
    short: "Complete tasks within deadlines.",
    icon: FaClipboardCheck,
    detail: {
      heading: "Submit Work for Quality Review",
      desc:
        "Complete your tasks and submit through the platform for Quality Control review. Feedback helps you improve.",
      points: ["Work evaluation", "Feedback", "Improvements", "Support tickets"],
      btn: "Submit Your Tasks",
    },
  },
  {
    title: "QC Approval",
    short: "Payment after successful QC clearance.",
    icon: FaMoneyCheckAlt,
    detail: {
      heading: "QC Approval & Payment Release",
      desc:
        "Payments are processed only after successful QC clearance and released through secure official channels.",
      points: ["Bank Transfer (NEFT/IMPS)", "UPI to official accounts"],
      btn: "Payment Info",
    },
  },
];

export default function HowItWorks() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0); // default open step 1

  return (
    <div className="hiwss">
      <section className="hiw">
        <h2 className="hiwTitle">How Tech2Shine Labs Works</h2>
        <h3 className="ttle2">Simple, Transparent, and Guided Process</h3>
        <p className="con">
          Tech2Shine Labs is built around a clear and ethical service model. Our platform ensures that every participant
          understands exactly what to expect—from registration to workflow access and ongoing support.
          <br /><br />
          We follow a structured five-step process designed to remove confusion and provide complete clarity.
        </p>

        {/* ✅ ROADMAP LOOK */}
        <div className="roadmap">
          <div className="roadTrack" aria-hidden="true" />

          <div className="roadRow">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = selected === i;

              return (
                <button
                  key={i}
                  type="button"
                  className={`roadCard ${isActive ? "active" : ""}`}
                  onClick={() => setSelected(i)}
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

                  <p className="roadHint">Tap to view details</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Details */}
        {selected !== null && (
          <div className="hiwDetails">
            <h3>{steps[selected].detail.heading}</h3>
            <p className="hiwDesc">{steps[selected].detail.desc}</p>

            <ul>
              {steps[selected].detail.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>

            <button className="hiwBtn" onClick={() => navigate("/")}>
              {steps[selected].detail.btn}
            </button>
          </div>
        )}
      </section>

      <div className="mypop">
        <p className="oef">What Tech2Shine Labs Provides</p>
        <div className="gtys">
          <div className="gty1">
            <p className="ys">
              <KeyRound size={18} className="tick-icon" />
              <span>Transparent pricing and enablement</span>
            </p>
            <p className="ys">
              <BookOpen size={18} className="tick-icon" />
              <span>Advanced onboarding</span>
            </p>
            <p className="ys">
              <UserPlus size={18} className="tick-icon" />
              <span>Verified workflow access</span>
            </p>
          </div>
          <div className="gty2">
            <p className="ys">
              <Headset size={18} className="tick-icon" />
              <span>Ongoing technical support</span>
            </p>
            <p className="ys">
              <ShieldCheck size={18} className="tick-icon" />
              <span>Ethical performance review</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bpatch">
        <p>
          Need Help Before You Begin?
          <br />
          If you still have questions about the process, our support team is always available to help you choose the right plan.
        </p>
        <button onClick={() => navigate("/contact")}>Contact Support</button>
      </div>
    </div>
  );
}
