import React from "react";

import { NavLink as NavLinkRouter } from "react-router-dom";

// reactstrap components
import { Collapse, Navbar, NavItem, Nav, Container } from "reactstrap";

export const NavbarGlobal = () => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <div>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="bg-info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavLinkRouter to="/index">
              <div className="navbar-brand">
                <img
                  alt="..."
                  className="rounded"
                  src={require("../../../assets/img/logoTek-up_university.png")}
                  width="100"
                  height="40"
                ></img>
              </div>
            </NavLinkRouter>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLinkRouter to="/index">
                  <div className="nav-link">
                    <i className="now-ui-icons objects_globe"></i>
                    <p>Home</p>
                  </div>
                </NavLinkRouter>
              </NavItem>
              <NavItem>
                <NavLinkRouter to="/About">
                  <div className="nav-link">
                    <i className="now-ui-icons travel_info"></i>
                    <p>About</p>
                  </div>
                </NavLinkRouter>
              </NavItem>
              <NavItem>
                <NavLinkRouter to="/faq">
                  <div className="nav-link">
                    <i className="now-ui-icons education_hat"></i>

                    <p>FAQ</p>
                  </div>
                </NavLinkRouter>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
