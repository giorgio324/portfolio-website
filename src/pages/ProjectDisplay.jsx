import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../data/data';
import { SiNetlify } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import './ProjectDisplay.css';
const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <div className='project-img-wrapper'>
        <img src={project.image} alt='' />
      </div>
      <div className='tech-container'>
        <h2>Used Tech: </h2>
        <h3>{project.tech}</h3>
      </div>
      <div className='project-description'>
        <h3>{project.description}</h3>
      </div>
      <div className='icons-container'>
        <a
          href={project.github}
          target='_blank'
          rel='noopener noreferrer'
          className='project-icon labeled-link'
        >
          <BsGithub />
          <span>Code</span>
        </a>
        <a
          href={project.netlify}
          target='_blank'
          rel='noopener noreferrer'
          className='project-icon labeled-link'
        >
          <SiNetlify />
          <span>Live</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
