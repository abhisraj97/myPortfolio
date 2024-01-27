import React from "react";
import Link from "next/link";


function Projectitem({ children, projectName, gitLink, demoLink }) {
  return (
    <>
      <div className="details-container color-container">
        <div className="article-container">{children}</div>
        <h2 className="experience-sub-title project-title">{projectName}</h2>
        <div className="btn-container">
          <Link
            href={gitLink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <button className="btn btn-color-2 project-btn">Github</button>
          </Link>
          <Link
            href={demoLink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <button className="btn btn-color-2 project-btn">Live Demo</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projectitem;
