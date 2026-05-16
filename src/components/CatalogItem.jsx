import { useState } from 'react';
import { asset } from '../utils/asset';

function CatalogItem({ name, images }) {
  const [imgIndex, setImgIndex] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % images.length);
  };

  return (
    <li className="catalog-item catalog-list__catalog-item">
      <article className="catalog-item__inner">
        <img
          className="catalog-item__img"
          src={asset(images[imgIndex])}
          alt={name}
          loading="lazy"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="catalog-item__arrow catalog-item__arrow_prev"
              onClick={prev}
              aria-label="Previous image"
            >
              &larr;
            </button>
            <button
              type="button"
              className="catalog-item__arrow catalog-item__arrow_next"
              onClick={next}
              aria-label="Next image"
            >
              &rarr;
            </button>
          </>
        )}
        <h3 className="catalog-item__title">{name}</h3>
      </article>
    </li>
  );
}

export default CatalogItem;
