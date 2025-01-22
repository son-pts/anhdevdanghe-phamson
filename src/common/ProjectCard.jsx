import React from "react";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {/* <img className="hover" src={src} alt={`${h3} logo`} /> */}

      <iframe
        // width="maxcontent"
        // height="maxcontent"
        src={src}
        title={h3}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
