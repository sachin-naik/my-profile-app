import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <>
    <section className="contact">
        <h2>Contact Me</h2>
        <div className="social-links">
          <a href="https://github.com/sachin-naik" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sachin-naik-3353718a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:snaik2809@gmail.com">
            <SiGmail size={20} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Sachin Naik. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
