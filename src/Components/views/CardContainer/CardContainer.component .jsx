import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CardContainer.styles.scss";
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";

import CardComponent from "../Card/Card.component";
import { getStages } from "../../../Redux/actions/stages";

export const CardContainer = () => {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const dispatch = useDispatch();

  const { stages } = useSelector((state) => ({
    stages: state.stages,
  }));

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStages = !searchTerm
    ? stages
    : stages.filter((stage) =>
        stage.titre.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  useEffect(() => {
    dispatch(getStages());
  }, [dispatch]);

  return (
    <div className="cards-component">
      <h1>Liste des Stages</h1>
      <div className="damn">
        <InputGroup
          id="search"
          className={rightFocus ? "input-group-focus" : ""}
        >
          <Input
            placeholder="Search"
            type="text"
            onFocus={() => setRightFocus(true)}
            onBlur={() => setRightFocus(false)}
            onChange={searchHandler}
          ></Input>
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <i className="now-ui-icons ui-1_zoom-bold"></i>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p className="category">Chercher les stages</p>
      </div>
      <div className="card-container">
        <ul className="cards_">
          {filteredStages
            ? filteredStages.map((stage) => {
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
