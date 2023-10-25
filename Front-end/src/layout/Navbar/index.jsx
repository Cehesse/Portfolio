import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <nav className="nav-section">
        <ul className="nav-section_links">
          <li>
            <Link to="/" className="nav-section_link" title="Acceuil">
              Acceuil
            </Link>
          </li>
          <li>
            <Link
              to="/#about-section"
              className="nav-section_link"
              title="Présentation"
            >
              Présentation
            </Link>
          </li>
          <li>
            <Link
              to="/#projects-section"
              className="nav-section_link"
              title="Projets"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="/#contact-section"
              className="nav-section_link"
              title="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
