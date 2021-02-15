import React, { Component } from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

class ProjectsPage extends Component {
  render() {
    return (
      <div className="grid col-span-2">
        <ProjectCard projectName="Babel Box" screenshotSrc="Christian-Profile.jpg" onClick={()=>{alert("Project Model")}}>
          <p>Description: Lorem Ipsum</p>
        </ProjectCard>
        <ProjectCard projectName="Babel Box" screenshotSrc="Christian-Profile.jpg" onClick={()=>{alert("Project Model")}}>
          <p>Description: Lorem Ipsum</p>
        </ProjectCard>
        <ProjectCard projectName="Babel Box" screenshotSrc="Christian-Profile.jpg" onClick={()=>{alert("Project Model")}}>
          <p>Description: Lorem Ipsum</p>
        </ProjectCard>
        <ProjectCard projectName="Babel Box" screenshotSrc="Christian-Profile.jpg" onClick={()=>{alert("Project Model")}}>
          <p>Description: Lorem Ipsum</p>
        </ProjectCard>
      </div>
    );
  }
}

export default ProjectsPage;
