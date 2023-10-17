//REACT
import { useState } from "react"
import PropTypes from 'prop-types';

//IMG
import arrowRight from "../../assets/img/arrow_right.webp"
import arrowLeft from "../../assets/img/arrow_left.webp"

//FCT
export default function Carousel(props) {
	
	const [ indexCurrent, setIndexCurrent] = useState(0);
	const slidesLength = props.slides.length;
	
	const nextSlide = () => {setIndexCurrent(indexCurrent === slidesLength - 1 ? 0 : indexCurrent + 1)};
	const prevSlide = () => {setIndexCurrent(indexCurrent === 0 ? slidesLength - 1 : indexCurrent - 1)};

	return (
		<div className="carousel">
			{slidesLength > 1 && ( <img src={arrowLeft} alt="Fleche gauche" onClick={prevSlide} className="carousel_arrow--left"/>)}
			{slidesLength > 1 && (<img src={arrowRight} alt="Fleche droite" onClick={nextSlide} className="carousel_arrow-right"/>)}
			{props.slides.map((slide, index) => (
				<figure key={index} className="carousel_img">
					{index === indexCurrent && <img src={slide} alt="Photo" />}
					{index === indexCurrent && slidesLength > 1 && <p className="carousel_num">{indexCurrent + 1}/{slidesLength}</p>}
				</figure>
			))}
		</div>
	);
}

Carousel.propTypes = {
	slides: PropTypes.array.isRequired,
  };