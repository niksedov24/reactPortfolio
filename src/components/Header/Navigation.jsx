export default function Navigation() {
  return (
    <div className="header-wrapper">
      <a className="Logo" href="#">
        NSedov
      </a>
      <div>
        <nav className="nav">
          <div className="nav__list">
            <a className="nav__link" href="#home">
              Home
            </a>
            <a className="nav__link" href="#services">
              Services
            </a>
            <a className="nav__link" href="#portfolio">
              Portfolio
            </a>
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
