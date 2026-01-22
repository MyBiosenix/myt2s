import React from "react";

function ProjectProp({ title, description, buybtn, onBuy }) {
  return (
    <div className="project">
      <h4>{title}</h4>
      <ul>
        {description.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <button type="button" onClick={onBuy}>
        {buybtn}
      </button>
    </div>
  );
}

export default ProjectProp;
