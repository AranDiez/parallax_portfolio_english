import '../styles/components/Main.scss';
import layer0 from '../images/layer_0.png';
import layer1 from '../images/layer_1.png';
import layer2 from '../images/layer_2.png';
import layer3 from '../images/layer_3.png';
import layer4 from '../images/layer_4.png';
import layer5 from '../images/layer_5.png';
import layer6 from '../images/layer_6.png';

const Main = (props) => {
  return (
    <>
      <div className="parallax__all">
        <div className="parallax__layer parallax__layer__0 ">
          <img src={layer0} />
        </div>
        <div className="parallax__layer parallax__layer__1 ">
          <img src={layer1} />
        </div>
        <div className="parallax__layer parallax__layer__2">
          <img src={layer2} />
        </div>
        <div className="parallax__layer parallax__layer__3">
          <img src={layer3} />
        </div>
        <div className="parallax__layer parallax__layer__4">
          <img src={layer4} />
        </div>
        <div className="parallax__layer parallax__layer__5 ">
          <img src={layer5} />
        </div>
        <div className="parallax__layer parallax__layer__6">
          <img src={layer6} />
        </div>
        <div className="parallax__content">
          <div className="page__wrapper">
            <h2 className="content_title">Holi</h2>
            <p className="content_text">
              Lorem fistrum al ataquerl no puedor está la cosa muy malar mamaar
              benemeritaar jarl pupita está la cosa muy malar. Al ataquerl
              benemeritaar por la gloria de mi madre de la pradera te va a hasé
              pupitaa. Torpedo condemor hasta luego Lucas está la cosa muy malar
              se calle ustée. Condemor mamaar me cago en tus muelas te voy a
              borrar el cerito ese que llega al ataquerl mamaar ese hombree.
              Hasta luego Lucas fistro qué dise usteer de la pradera ese que
              llega fistro amatomaa ese que llega qué dise usteer qué dise
              usteer mamaar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
