import React from 'react';
import { FaSchool, FaUniversity, FaHammer, FaReact } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
const Experience = () => {
  return (
    <div className='experience'>
      <h1 className='timeline-title'>My Timeline</h1>
      <VerticalTimeline lineColor='#00337C'>
        {/* school */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021'
          iconStyle={{ background: '#00337C', color: '#fff' }}
          icon={<FaSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            High School Diploma
          </h3>
          <p>Graduated N163 High School And Recived Diploma</p>
        </VerticalTimelineElement>
        {/* univercity */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021-currently'
          iconStyle={{ background: '#00337C', color: '#fff' }}
          icon={<FaUniversity />}
        >
          <h3 className='vertical-timeline-element-title'>
            Enrolled in the university
          </h3>
          <p>
            Enrolled in Business and Technology University Where i am learning
            IT
          </p>
        </VerticalTimelineElement>
        {/* first project */}
        <VerticalTimelineElement
          className='vertical-timeline-element--project'
          date='2022'
          iconStyle={{ background: '#F0A04B', color: '#fff' }}
          icon={<FaHammer />}
        >
          <h3 className='vertical-timeline-element-title'>
            Built First Project In Front-End
          </h3>
          <p className='first-project-text'>
            Using HTML And CSS I Made My First Website
          </p>

          <a
            href='https://awesomecamp.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='first-project'
          >
            View Project
          </a>
        </VerticalTimelineElement>
        {/* currently */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2022 - currently'
          iconStyle={{ background: '#F0A04B', color: '#fff' }}
          icon={<FaReact />}
        >
          <h3 className='vertical-timeline-element-title'>
            Learning Modern JavaScript And React
          </h3>
          <p>Currently I Am Learning ReactJS and Building Projects With it</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
