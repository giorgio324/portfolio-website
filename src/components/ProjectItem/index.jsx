import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className='project-item'
      onClick={() => {
        navigate(`/projects/${id}`);
      }}
    >
      <div
        className='bgImage'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
