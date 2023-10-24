import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.webp";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="header-section">
      <Link to="/" title="Accueil">
        <img
          src={Logo}
          className="header-section_img"
          alt="Steven Chatellet"
          title="Steven Chatellet"
          aria-label="Logo de Steven Chatellet"
        />
      </Link>
      <h1 className="header-section_title" aria-label="Titre de la page">
        Steven Chatellet Portofolio
      </h1>
      <Navbar />
    </header>
  );
}
