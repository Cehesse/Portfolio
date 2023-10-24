import { useState } from "react";
import PropTypes from 'prop-types';

import arrowRight from "../../assets/img/arrow_right.webp";
import arrowLeft from "../../assets/img/arrow_left.webp";

export default function Carousel(props) {
  const [indexCurrent, setIndexCurrent] = useState(0);
  const slidesLength = props.slides.length;

  const nextSlide = () => {
    setIndexCurrent(indexCurrent === slidesLength - 1 ? 0 : indexCurrent + 1);
  };

  const prevSlide = () => {
    setIndexCurrent(indexCurrent === 0 ? slidesLength - 1 : indexCurrent - 1);
  };

  return (
    <div className="carousel" role="listbox">
      {slidesLength > 1 && (
        <img
          src={arrowLeft}
          alt="Flèche gauche"
          onClick={prevSlide}
          className="carousel_arrow--left"
          title="Flèche gauche"
          role="button"
          aria-label="Image précédente"
        />
      )}
      {slidesLength > 1 && (
        <img
          src={arrowRight}
          alt="Flèche droite"
          onClick={nextSlide}
          className="carousel_arrow-right"
          title="Flèche droite"
          role="button"
          aria-label="Image suivante"
        />
      )}
      {props.slides.map((slide, index) => (
        <figure
          key={index}
          className="carousel_img"
          role="option"
          aria-selected={index === indexCurrent}
        >
          {index === indexCurrent && (
            <img
              src={slide}
              alt="Photo"
              title="Photo"
              aria-hidden={false}
            />
          )}
          {index === indexCurrent && slidesLength > 1 && (
            <p className="carousel_num" aria-live="assertive" aria-atomic="true">
              {indexCurrent + 1}/{slidesLength}
            </p>
          )}
        </figure>
      ))}
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
};