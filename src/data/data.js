import image from '../assets/images/shoppy.JPG';
import image1 from '../assets/images/todo.PNG';
import image2 from '../assets/images/resumeBuilder.JPG';
import image5 from '../assets/images/bootstrap.PNG';
import image6 from '../assets/images/jobster.JPG';
import image9 from '../assets/images/githubSearch.PNG';
import image10 from '../assets/images/jadoo.PNG';
export const ProjectList = [
  {
    name: 'Shoppy',
    image: image,
    tech: 'ReactJS, TailwindCSS, Redux Toolkit, Firebase, ',
    github: 'https://github.com/giorgio324/shoppy',
    netlify: 'https://shoppyecomerce.netlify.app/',
    description:
      'E-commerce app, which uses firebase for authentication , it uses redux toolkit for state management, redux-persist to load the state from localstorage and tailwindcss for styling',
  },
  {
    name: 'Resume Builder',
    image: image2,
    tech: 'ReactJS, TailwindCSS, Redux Toolkit, React Hook Form',
    github: 'https://github.com/giorgio324/redbery-resume',
    netlify: 'https://redberry-resume.netlify.app/',
    description:
      'Resume builder app, which saves user data in local storage and displays it in a resume format it uses redux toolkit for state management, tailwindcss for styling and react hook form for form validation',
  },
  {
    name: 'Jobster',
    image: image6,
    tech: 'ReactJS, Styled Components, API, Redux Toolkit',
    github: 'https://github.com/giorgio324/jobster',
    netlify: 'https://job-front.netlify.app',
    description:
      'Job tracking app, that utilizes API for CRUD operations, it uses redux toolkit for state management and styled components for styling',
  },
  {
    name: 'Github User Search',
    image: image9,
    tech: 'ReactJS, Styled Components, API',
    github: 'https://github.com/giorgio324/github-user-search',
    netlify: 'https://search-github-user-frontend.netlify.app/',
    description:
      'made a github user search app with login functionality, it uses github api to get data and display it to the user, this project also has a dark mode setting',
  },
  {
    name: 'TODO',
    image: image1,
    tech: 'ReactJS, CSS',
    github: 'https://github.com/giorgio324/todoapp',
    netlify: 'https://todoapp-frontend.netlify.app/',
    description: 'Todo app with some extra functionalities and animations',
  },
  {
    name: 'Jadoo',
    image: image10,
    tech: 'ReactJS, TailwindCSS',
    github: 'https://github.com/giorgio324/tailwind-website',
    netlify: 'https://tailwindjadoo.netlify.app/',
    description: 'Travel website made with tailwindcss for the first time',
  },

  {
    name: 'Website Development',
    image: image5,
    tech: 'HTML, CSS, Bootstrap',
    github: 'https://github.com/giorgio324/bootstrap-project',
    netlify: 'https://software-development-p.netlify.app/',
    description: 'used Boostrap5 for first time and built a static website',
  },
];
