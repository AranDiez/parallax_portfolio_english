import '../styles/components/Section3.scss';
import skillsimg from '../images/skillsimg.png';

const Section3 = (props) => {
  return (
    <section className="section3">
      <img className="section3__skillsimg" src={skillsimg} />
      <div className="section3__skillslist">
        <h2 className="section3__title">SKILLS</h2>
        <div className="section3__skill">
          <h3 className="section3__skill--title">html5</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar1"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">css3</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar2"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">sass</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar3"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">javascript es6</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar4"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">react</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar5"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">node js</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar6"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">mysql</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar7"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">apis</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar8"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">agile</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar9"></div>
        </div>
        <div className="section3__skill">
          <h3 className="section3__skill--title">adobe photoshop</h3>
          <div className="section3__skill--bar"></div>
          <div className="section3__skill--orangebar section3__skill--orangebar10"></div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
