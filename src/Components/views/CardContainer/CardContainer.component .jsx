import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CardContainer.styles.scss";

import CardComponent from "../Card/Card.component";
import { getStages } from "../../../Redux/actions/stages";

export const CardContainer = () => {
  const dispatch = useDispatch();

  const { stages } = useSelector((state) => ({
    stages: state.stages,
  }));

  useEffect(() => {
    dispatch(getStages());
  }, [dispatch]);

  return (
    <div className="cards-component">
      <h1>Liste des Stages</h1>
      <p className="category">Tabs with Icons on Card</p>
      <div className="card-container">
        <ul className="cards_">
          {stages
            ? stages.map((stage) => {
                const { id, ...others } = stage;
                return <CardComponent key={id} {...others} />;
              })
            : "loading.."}
        </ul>
      </div>
    </div>
  );
};

export default CardContainer;
