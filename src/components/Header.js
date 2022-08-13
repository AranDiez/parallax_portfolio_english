import '../styles/components/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__navlink">
        <ul className="header__menu">
          <li className="header__menu--link">projects</li>
          <li className="header__menu--link">about</li>
          <li className="header__menu--link">contact</li>
        </ul>
        <div className="header__nametitle">
          <h1 className="header__title">Aran Diez</h1>
          <h2 className="header__subtitle">Junior Front-end Developer</h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;
