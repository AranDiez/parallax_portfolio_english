import '../styles/components/Section4.scss';

const Section4 = (props) => {
  return (
    <section className="section4" id="linkToProjects">
      <h2 className="section4__title">projects</h2>
      <div className="section4__boxes">
        <a
          href="https://photojournalism.arandiez.com/"
          target="_blank"
          class="section4__box1"
        >
          <h3 className="section4__boxtitle section4__boxtitle1">REACT</h3>
          <p className="section4__boxparagraph section4__boxparagraph1">
            A responsive project using React library and implementing sass,
            bootstrap and React Router DOM.
          </p>
        </a>
        <a
          href="https://javascriptgame.arandiez.com/"
          target="_blank"
          class="section4__box2"
        >
          <h3 className="section4__boxtitle">JAVASCRIPT</h3>
          <p className="section4__boxparagraph">
            Small casino game using javascript and animations in css.
          </p>
        </a>
        <a
          href="https://reactthirdapi.arandiez.com/"
          target="_blank"
          class="section4__box3"
        >
          <h3 className="section4__boxtitle">API</h3>
          <p className="section4__boxparagraph">
            A project using javascript on React plus a third-party API.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Section4;
