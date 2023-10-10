//REACT
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

//FCT
export default function Card(props) {

	return (
		<article>
			<Link to={`/Projet/${props.id}`} className="card">
				<img className="card_img"src={props.img} alt={props.title} />
				<h3 className="card_title">{props.title}</h3>	
			</Link>
		</article>
	)
}

Card.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
  };