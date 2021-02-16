import React, { Component } from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

class ProjectsPage extends Component {
  projects = [
    {
      projectName: "BABELBox",
      screenshotSrc: "BabelBox-Screenshot.png",
      screenshotAlt: "BABELBoxSS",
    },
    {
      projectName: "Lyrics You Now Know",
      screenshotSrc: "LyricsYouNowKnow-Screenshot.png",
      screenshotAlt: "LyricsYouNowKnowSS",
    },
    {
      projectName: "Ennesults",
      screenshotSrc: "Christian-Profile.jpg",
      screenshotAlt: "BabelBoxSS",
    },
    {
      projectName: "Fitness Tracker",
      screenshotSrc: "Christian-Profile.jpg",
      screenshotAlt: "BabelBoxSS",
    },
    {
      projectName: "Employee Directory",
      screenshotSrc: "Christian-Profile.jpg",
      screenshotAlt: "BabelBoxSS",
    },
    {
      projectName: "Portfolio",
      screenshotSrc: "Christian-Profile.jpg",
      screenshotAlt: "BabelBoxSS",
    },
  ];

  render() {
    return (
      <div className="grid md:grid-cols-2">
        {
          this.projects.map((value, index)=> {
            return (
            <ProjectCard key={index} {...value}/>
            )
          })
        }
        
      </div>
    );
  }
}

export default ProjectsPage;
