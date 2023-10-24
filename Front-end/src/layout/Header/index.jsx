//REACT
import { Link } from "react-router-dom";

//IMG
import Logo from "../../assets/img/logo.webp"

//LAYOUT
import Navbar from "../Navbar"

//FCT
export default function Header() {
	return (
		<header className="header-section">
			<Link to="/" title="Acceuil"><img src={Logo} className="header-section_img" alt="Steven Chatellet" title="Steven Chatellet" /></Link>
			<h1 className="header-section_title">Steven Chatellet Portofolio</h1>
			<Navbar />
		</header>
	)
}