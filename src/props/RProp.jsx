import React from "react";
import { FaStar } from "react-icons/fa";

function RProp({ user, name, rate = 0, review, reply }) {
  const safeRate = Math.max(0, Math.min(5, Number(rate) || 0)); // clamp 0..5

  return (
    <div className="rprop">
      <div className="inprop">
        <img src={user} className="usericon" alt="User" />
        <div className="in-inprop">
          <p>{name}</p>

          <div className="rateicon">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                color={i < safeRate ? "#f4a328" : "#cfcfcf"} // gold vs gray
              />
            ))}
          </div>
        </div>
      </div>

      <p>{review}</p>

      {reply && (
        <div className="rreply">
          <p>
            <strong>Tech2Shine Labs:</strong> {reply}
          </p>
        </div>
      )}
    </div>
  );
}

export default RProp;
