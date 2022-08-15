import '../styles/components/Section3.scss';
import skillsimg from '../images/skillsimg.png';

const Section3 = (props) => {
  return (
    <section className="section3">
      <img className="section3__skillsimg" src={skillsimg} />
      <div className="section3__skillslist">
        <h2 className="section3__title">SKILLS</h2>
        <div className="section3__skill">
          <h3 className="section3__skill--title">HTML</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">CSS</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">SASS</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">JAVASCRIPT</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">REACT</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">NODE JS</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">AGILE</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">SQ-LITO</h3>
          <div className="section3__skill--bar"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">ADOBE PHOTOSHOP</h3>
          <div className="section3__skill--bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
