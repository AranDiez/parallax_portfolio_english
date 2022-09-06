import '../styles/components/Section5.scss';
import Footer from './Footer';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

const Section5 = (props) => {
  return (
    <section className="section5" id="linkToContact">
      <h2 className="section5__title">CONTACT</h2>
      <div className="section5__icons">
        <a href="https://www.linkedin.com/in/arandiez/" target="_blank">
          <FaLinkedin className="section5__icon" />
        </a>
        <a href="https://github.com/Arandiez" target="_blank">
          <FaGithubSquare className="section5__icon" />
        </a>
        <a href="mailto:arandiezdehuerta@gmail.com" target="_blank">
          <FaRegEnvelope className="section5__icon" />
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default Section5;
