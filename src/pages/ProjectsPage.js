import React from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      projectName: "BABELBox",
      description: "BabelBox description",
      screenshotSrc: "BabelBox-Screenshot.png",
      screenshotAlt: "BABELBoxSS",
      link: "https://github.com/https-github-com-steversonTong/BabelBox"
    },
    {
      projectName: "Lyrics You Now Know",
      screenshotSrc: "LyricsYouNowKnow-Screenshot.png",
      screenshotAlt: "LyricsYouNowKnowSS",
      link:"https://github.com/ChristianPayne/LyricsYouNowKnow"
    },
    {
      projectName: "Ennesults",
      screenshotSrc: "blank_robot.jpg",
      screenshotAlt: "EnnesultsIcon",
      link: "https://github.com/ChristianPayne/Ennesults"
    },
    {
      projectName: "Fitness Tracker",
      link: "https://github.com/ChristianPayne/HW17-FitnessTracker"
    },
    {
      projectName: "Employee Directory",
      link: "https://github.com/ChristianPayne/EmployeeDirectory"
    },
    {
      projectName: "Portfolio",
      link: "https://github.com/ChristianPayne/Portfolio"
    },
  ];

  return (
    <div className="grid md:grid-cols-2">
      {
        projects.map((value, index)=> {
          return (
          <ProjectCard key={index} {...value}/>
          )
        })
      }
      
    </div>
  );
}

export default ProjectsPage;
