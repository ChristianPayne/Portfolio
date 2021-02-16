import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const imgSrc = props.screenshotSrc ? ("./assets/" + props.screenshotSrc) : "./assets/CPFav-01.png";
  const projectLink = props.link ? props.link : "https://github.com/ChristianPayne"
  
  return (
    <div className="m-4 p-4">
      <ProjectModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        
      </ProjectModal>
      <button className="p-8 transition duration-500 ease-in-out hover:bg-green-400 hover:bg-opacity-30" onClick={()=> {
        // setModalIsOpen(true)
        window.open (projectLink, "_blank");

        }}>
        <h1 className="font-Sans text-left md:text-3xl pb-4">{props.projectName}</h1>
        <img src={imgSrc} alt={props.screenshotAlt} />
        {props.children}
      </button>
    </div>
  );
}

export default ProjectCard;
