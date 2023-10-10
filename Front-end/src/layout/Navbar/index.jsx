import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
	return (
	<>
		<nav className='nav-section'>
			<ul className='nav-section_links'>
				<li>
					<Link to='/' className='nav-section_link' >Acceuil</Link>
				</li>			
				<li>
					<Link to='/#about-section' className='nav-section_link' >Présentation</Link>
				</li>
				<li>
					<Link to='/#project-section' className='nav-section_link' >Projets</Link>
				</li>
				<li>
					<Link to='/#contact-section' className='nav-section_link' >Contact</Link>
				</li>
			</ul>
		</nav>
	</>
	);
}