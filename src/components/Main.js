import '../styles/components/Main.scss';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

import layer0 from '../images/layer_0.png';
import layer1 from '../images/layer_1.png';
import layer2 from '../images/layer_2.png';
import layer3 from '../images/layer_3.png';
import layer4 from '../images/layer_4.png';
import layer5 from '../images/layer_5.png';
import layer6 from '../images/layer_6.png';

const Section1 = (props) => {
  return (
    <>
      <section className="main__section1__parallaxall">
        <div className="main__section1__layer main__section1__layer-0 ">
          <img src={layer0} />
          <div className="main__section1__nametitle">
            <h1 className="main__section1__title">Aran Díez</h1>
            <h2 className="main__section1__subtitle">Web designer</h2>
          </div>
        </div>
        <div className="main__section1__layer main__section1__layer-1 ">
          <img src={layer1} />
        </div>
        <div className="main__section1__layer main__section1__layer-2">
          <img src={layer2} />
        </div>
        <div className="main__section1__layer main__section1__layer-3">
          <img src={layer3} />
        </div>
        <div className="main__section1__layer main__section1__layer-4">
          <img src={layer4} />
        </div>
        <div className="main__section1__layer main__section1__layer-5 ">
          <img src={layer5} />
        </div>
        <div className="main__section1__layer main__section1__layer-6">
          <img src={layer6} />
        </div>
        <div className="main__section1__content">
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </section>
    </>
  );
};

export default Section1;
