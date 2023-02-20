import React from 'react';
import ProjectItem from '../components/ProjectItem';
import todoImg from '../assets/images/todo.PNG';
const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='projects-title'>Take A Look At My Projects</h1>
      <div className='projects-list'>
        <ProjectItem name={'TODO'} image={todoImg} />
        <ProjectItem name={'test'} image={todoImg} />
        <ProjectItem name={'test'} image={todoImg} />
        <ProjectItem name={'test'} image={todoImg} />
        <ProjectItem name={'test'} image={todoImg} />
        <ProjectItem name={'test'} image={todoImg} />
        <ProjectItem name={'test'} image={todoImg} />
      </div>
    </div>
  );
};

export default Projects;
