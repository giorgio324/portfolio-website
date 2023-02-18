import './styles.css';
import { CgCopyright } from 'react-icons/cg';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className='footer-icons-container'>
          <a
            href='https://www.facebook.com/giorgi.kochuashvili.779'
            target='_blank'
            rel='noopener noreferrer'
            className='icon fb'
          >
            <BsFacebook />
          </a>
          <a
            href='https://www.linkedin.com/in/giorgi-kochuashvili-511069259/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon li'
          >
            <BsLinkedin />
          </a>
          <a
            href='https://github.com/giorgio324?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='icon git'
          >
            <BsGithub />
          </a>
        </div>
        <div className='footer-copyright-container'>
          <span>
            <i className='copy'>
              <CgCopyright />
            </i>
          </span>
          <p>{currentYear} Giorgi Kochuashvili</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
