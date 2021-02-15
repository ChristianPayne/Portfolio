import React from 'react';
import Modal from "react-modal";

const ProjectCard = (props) => {
  return (
    <div className="m-4 p-4">
      <button className="p-8" onClick={props.onClick}>
        <h1 className="font-Sans">{props.projectName}</h1>
        <img src={"./assets/" + props.screenshotSrc} alt={props.screenshotAlt} />
        {props.children}
      </button>
    </div>
  );
}

export default ProjectCard;
