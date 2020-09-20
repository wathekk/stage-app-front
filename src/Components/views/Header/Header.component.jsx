/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

import { NavLink } from "react-router-dom";

import "./Header.styles.css";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("../../../assets/img/internship-featured.jpg") +
              ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              style={{ marginBottom: "3rem" }}
              src={require("../../../assets/img/logoTek-up_university.png")}
            ></img>
            <h1 className="h1-seo">TEK-UP Stages</h1>
            <h5>
              TEK-UP Stages est une platforme de stages pour postuler vos
              rapports et pour fixer les dates de soutenances ... pour utiliser
              la platforme il faut que vous se connecter..
            </h5>
            <NavLink to="/login">
              <Button
                className="btn-round mr-1"
                color="info"
                role="button"
                size="lg"
              >
                Login
              </Button>
            </NavLink>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
