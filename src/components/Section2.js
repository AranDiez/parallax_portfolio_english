import '../styles/components/Section2.scss';
import { FaDownload } from 'react-icons/fa';

const Section2 = (props) => {
  return (
    <section className="section2" id="linkToAbout">
      <h2 className="section2__title">about me</h2>
      <p className="section2__boxparagraph1">
        Hello! I am Aran Díez, a graduate in digital photography and as a
        Front-end developer.
      </p>
      <p className="section2__boxparagraph2">
        During my career experience I have worked as a photographer and creator
        of content, as well as design and digital retouching. My interest in the
        digital world and the development of the final product led me to become
        a Front-End Developer.
      </p>
      <p className="section2__boxparagraph2">
        My goal is to be part of a team of developers from which I can learn as
        much as possible. I am a creative and empathic person drawn by the
        harmony of compositions and the aesthetic. I also have a good logical
        thinking and a great dedication.
      </p>
      <div className="section2__download">
        <h2 className="section2__download--title">SEE FULL RESUME</h2>
        <a
          href="https://media-exp1.licdn.com/dms/document/C4D2DAQHdp1y-6TDdaA/profile-treasury-document-pdf-analyzed/0/1662756836239?e=1663804800&v=beta&t=eNjHttQQgt2RI3c0VS5QtP19Jh0_rsmvGdPBEUG9bWk"
          target="_blank"
          className="section5__icon1"
          className="section2__download--icon"
        >
          <FaDownload className="section2__download--icondown" />
        </a>
      </div>
    </section>
  );
};

export default Section2;
