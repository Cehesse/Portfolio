//REACT
import { useState } from "react";
import PropTypes from 'prop-types';

//IMG
import arrow from "../../assets/img/arrow.png";

//FCT
export default function Collapse(props) {

	const [open, setOpen] = useState(false);

	return (
		<div className="collapse" >
            <h2 className="collapse_title"> {props.title}
                <img onClick={() => setOpen(!open)} className={open ? "collapse_arrow--down" : "collapse_arrow--up"} src={arrow} alt="Flèche d'ouverture" />
            </h2>
            <div className={open ? "collapse_text" : "collapse_text--hidden"}>
                {Array.isArray(props.text) ? props.text.map((item, index) => {return (<p className="collapse_text--item"key={index} >{item}</p>)}) : props.text}
            </div> 
        </div>
    );
}

Collapse.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
  };