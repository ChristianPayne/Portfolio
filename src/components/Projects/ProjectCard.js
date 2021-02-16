import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="m-4 p-4">
      <ProjectModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        
      </ProjectModal>
      <button className="p-8 transition duration-500 ease-in-out hover:bg-green-400 hover:bg-opacity-30" onClick={()=> {setModalIsOpen(true)}}>
        <h1 className="font-Sans text-left md:text-3xl pb-4">{props.projectName}</h1>
        <img src={"./assets/" + props.screenshotSrc} alt={props.screenshotAlt} />
        {props.children}
      </button>
    </div>
  );
}

export default ProjectCard;
