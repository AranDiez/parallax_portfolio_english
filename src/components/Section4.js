import '../styles/components/Section4.scss';

const Section4 = (props) => {
  return (
    <section className="section4" id="linkToProjects">
      <h2 className="section4__title">projects</h2>
      <div className="section4__boxes">
        <a
          href="https://htmlsass.arandiez.com/"
          target="_blank"
          class="section4__box1"
        >
          <h3 className="section4__boxtitle">HTML/SASS</h3>
          <p className="section4__boxparagraph">
            A responsive project using Html5, css3 and Sass.
          </p>
        </a>
        <a
          href="https://javascriptapi.arandiez.com/"
          target="_blank"
          class="section4__box2"
        >
          <h3 className="section4__boxtitle">JAVASCRIPT</h3>
          <p className="section4__boxparagraph">
            A project using javascript and third-party API.
          </p>
        </a>
        <a
          href="https://reactportfolio.arandiez.com/"
          target="_blank"
          class="section4__box3"
        >
          <h3 className="section4__boxtitle">REACT</h3>
          <p className="section4__boxparagraph">
            A project using the javascript focused library React.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Section4;
