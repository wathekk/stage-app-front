import React from "react";

import "./Card.styles.scss";

const CardComponent = ({ titre, description, date_debut, status }) => {
  return (
    <li className="cards__item">
      <div className="card_">
        <div className="card__image card__image--fence" />
        <div className="card__content">
          <div className="card__header">
            <div className="card__title">{titre}</div>
            <p className="card__date">{date_debut}</p>
          </div>

          <p className="card__text">{description}</p>

          <div className="card__footer">
            <p className="card__status">
              {status ? "Etat: Disponible" : "Etat: non disponible"}
            </p>
            <button className="btn btn--block">Postuler</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardComponent;
