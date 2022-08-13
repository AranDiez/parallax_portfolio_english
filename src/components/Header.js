import '../styles/components/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <nav>
        <ul className="header__menu">
          <li className="header__menu--link">projects</li>
          <li className="header__menu--link">about</li>
          <li className="header__menu--link">contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
