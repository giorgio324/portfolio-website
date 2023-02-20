import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../data/data';
const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='projects-title'>Take A Look At Some of My Projects</h1>
      <div className='projects-list'>
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              image={project.image}
              name={project.name}
              key={index}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
