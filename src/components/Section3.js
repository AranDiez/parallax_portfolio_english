import '../styles/components/Section3.scss';
import skillsimg from '../images/skillsimg.png';

const Section3 = (props) => {
  return (
    <section className="section3" id="linkToSkills">
      <img className="section3__skillsimg" src={skillsimg} />

      <div className="section3__skillslist">
        <h2 className="section3__title">SKILLS</h2>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>HTML5</h3>
            <h3>90%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar1"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>css3</h3>
            <h3>85%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar2"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>sass</h3>
            <h3>85%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar3"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>javascript es6</h3>
            <h3>65%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar4"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>react</h3>
            <h3>75%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar5"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>nodejs</h3>
            <h3>55%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar6"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>mysql</h3>
            <h3>50%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar7"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>apis</h3>
            <h3>60%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar8"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>agile</h3>
            <h3>80%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar9"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>wordpress</h3>
            <h3>70%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar10"></div>
          </div>
        </div>
        <div class="section3__skill">
          <div class="section3__skill--title">
            <h3>adobe photoshop</h3>
            <h3>95%</h3>
          </div>
          <div class="section3__skill--bar">
            <div className="section3__skill--orangebar11"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
