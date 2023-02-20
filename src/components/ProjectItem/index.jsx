import React from 'react';
import './styles.css';
const ProjectItem = ({ image, name, id }) => {
  return (
    <div className='project-item'>
      <div
        className='bgImage'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
