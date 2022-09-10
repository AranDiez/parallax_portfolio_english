import '../styles/components/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__menu">
        <section className="header__menu--section1">
          <a href="#linkToAbout" className="header__menu--link">
            about
          </a>
          <a href="#linkToSkills" className="header__menu--link">
            skills
          </a>
          <a href="#linkToProjects" className="header__menu--link">
            projects
          </a>
          <a href="#linkToContact" className="header__menu--link">
            contact
          </a>
        </section>
        <section className="header__menu--section2">
          <a
            href="https://es.arandiez.com/"
            className="header__menu--linko header__menu--language"
          >
            ESPAÑOL
          </a>
        </section>
      </nav>
    </header>
  );
};

export default Header;
