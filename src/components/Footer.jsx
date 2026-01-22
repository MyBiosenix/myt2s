import React from "react";
import { FaWhatsapp, FaInbox, FaLocationArrow } from "react-icons/fa";
import "../Styles/footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="myfooter">
        <div className="myiaia">
          <h3>Important Disclaimer</h3>
          <p>
            Tech2Shine Labs does not provide employment or guaranteed income. All
            fees charged are strictly for onboarding, software access, training,
            and operational support services. Actual results vary based on
            individual effort and task availability.
          </p>
        </div>

        <div className="alerts" data-aos="fade-right">
          <h3>Note</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms&conditions">Terms & Conditions</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>
        </div>

        <div className="support" data-aos="fade-left">
          <h3>Support</h3>

          <div className="icntxt">
            <FaWhatsapp className="icn" />
            <a href="https://wa.me/918448387942" target="_blank" rel="noopener noreferrer">
              +91 84483 87942
            </a>
          </div>

          <div className="icntxt">
            <FaInbox className="icn" />
            <a href="mailto:info@tech2shinelabs.com">info@tech2shinelabs.com</a>
          </div>

          <div className="icntxt">
            <FaLocationArrow className="icn" />
            <a
              href="https://www.google.com/maps/place/Bommanahalli,+Bengaluru,+Karnataka/@12.9006227,77.6007098,14z/data=!3m1!4b1!4m6!3m5!1s0x3bae14eec814197d:0xcf0ad378f26271e9!8m2!3d12.9029804!4d77.6241936!16zL20vMGYwazMw"
              target="_blank"
              rel="noopener noreferrer"
              className="wrapLink"
            >
              Bommanahalli, Bangalore, Karnataka, 560068
            </a>
          </div>
        </div>

        <div className="cmps" data-aos="fade-left">
          <button onClick={() => navigate("/complain")}>Submit Complaint (if any)</button>
          <p>Complaints will be solved within 3 working days.</p>

          <a
            href="/Tech2shine CIN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="docLink"
          >
            Company Legal Document (CIN)
          </a>
        </div>
      </div>

      <div className="footBottom">
        <p>Copyright © 2025 Tech2Shine Labs PRIVATE LIMITED. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
