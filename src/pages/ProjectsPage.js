import React, { Component } from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

class ProjectsPage extends Component {
  render() {
    return (
      <>
        <ProjectCard projectName="test" screenshotSrc="Christian-Profile" onClick={()=>{alert("Project Model")}}/>
      </>
    );
  }
}

export default ProjectsPage;
