import React, { useEffect, useState } from 'react';
import './Home.css';
const Home = () => {
  const [helloText, setHelloText] = useState('');
  const [worldText, setWorldText] = useState('');
  const [finished, setFinished] = useState(false);
  const helloTextFinal = '< Hello';
  const worldTextFinal = 'World >';
  const name = 'My Name Is Giorgi';
  const description =
    'A Front End developer with a passion for learning and creating MORE';
  useEffect(() => {
    let currentHelloIndex = 0;
    let currentWorldIndex = 0;
    const helloInterval = setInterval(() => {
      setHelloText(helloTextFinal.slice(0, currentHelloIndex));
      currentHelloIndex++;
      if (currentHelloIndex > helloTextFinal.length) {
        setFinished(true);
        clearInterval(helloInterval);
      }
    }, 200);
    const worldInterval = setInterval(() => {
      setWorldText(worldTextFinal.slice(0, currentWorldIndex));
      currentWorldIndex++;
      if (currentWorldIndex > worldTextFinal.length) {
        setFinished(true);
        clearInterval(worldInterval);
      }
    }, 200);

    return () => {
      clearInterval(helloInterval);
      clearInterval(worldInterval);
    };
  }, []);
  return (
    <div className='home-main-container'>
      <div className='main-title'>
        <div className='name-container'>
          <h1 className='animated-text'>{helloText}</h1>
          <h1 className='name'>{finished ? name : ''}</h1>
          <h1 className='animated-text'>{worldText}</h1>
        </div>
        <div className='description-container'>
          <h3 className='description'>{finished ? description : ''}</h3>
        </div>
      </div>
      <div className='skills-container'>
        <h1>Skills</h1>
        <div className='skills-front-container'>
          <div className='front-title'>
            <h2>Front-End</h2>
            <h3>languages and tools that i use for Front-End</h3>
          </div>
          <p>ReactJS ,JavaScript ,HTML ,CSS, Bootstrap</p>
        </div>

        <div className='skills-languages-container'>
          <div className='languages-title'>
            <h2>Languages</h2>
            <h3>programming languages that i have used</h3>
          </div>
          <p>JavaScrit, Python, Kotlin</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
