//REACT
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//FCT
export default function Card(props) {
  return (
    <article>
      <Link to={`/Projects/${props.id}`} className="card" title="Projet">
        <img
          className="card_img"
          src={props.img}
          alt={props.title}
          title="Logo"
          role="img" // Indiquer que l'image est décorative
          aria-label={props.title} // Donner un label à l'image
        />
        {/* <h3 className="card_title">{props.title}</h3> */}
        <h3 className="card_text">{props.text}</h3>
      </Link>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
