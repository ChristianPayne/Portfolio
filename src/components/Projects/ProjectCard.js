import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="w-1/2 m-4 bg-gray-500">
      <button className="p-8" onClick={props.onClick}>
        <h1 className="font-Sans">{props.projectName}</h1>
        <img src={props.screenshotSrc} alt={props.screenshotAlt} />
        {props.children}
      </button>
    </div>
  );
}

export default ProjectCard;
