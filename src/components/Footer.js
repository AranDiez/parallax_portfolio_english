import '../styles/components/Footer.scss';
import { FaCopyright } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <header className="footer">
      <h2 className="footer__title">Aran Díez 2022</h2>
      <FaCopyright className="footer__icon" />
    </header>
  );
};

export default Footer;
