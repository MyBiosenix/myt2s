import React, { useState } from "react";
import Header from "../components/Header";
import Project2 from "../components/Project2";
import Extra from "../components/Extra";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import Patch2 from "../components/Patch2";
import ScrollTop from "../components/ScrollTop";

function Programs() {
  const [activePlan, setActivePlan] = useState(null);

  const handleKnowMore = (planId) => {
    setActivePlan((prev) => {
      // ✅ If same project clicked → CLOSE
      if (prev === planId) {
        return null;
      }
      // ✅ Else open new project
      return planId;
    });

    // Scroll only when opening
    setTimeout(() => {
      if (activePlan !== planId) {
        const el = document.getElementById(planId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <div className="myappage">
      <Header />
      <Patch2 />

      <Project2 onKnowMore={handleKnowMore} />

      <Plans activePlan={activePlan} />

      <Extra />
      <Footer />
      <ScrollTop/>
    </div>
  );
}


export default Programs;
