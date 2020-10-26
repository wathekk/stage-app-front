import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink as NavLinkRouter } from "react-router-dom";
import { logout } from "../../../Redux/actions/auth";

// reactstrap components
import { Collapse, Navbar, NavItem, Nav, Container, Button } from "reactstrap";

const NavbarGlobal = ({ auth: { isAuthenticated, token }, logout }) => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const guestLinks = (
    <>
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
    </>
  );

  const authLinks = (
    <>
      <NavItem className="active">
        <NavLinkRouter to="/user">
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
      <NavItem>
        <NavLinkRouter to="/index">
          <Button
            onClick={logout}
            className="nav-link btn-neutral"
            color="info"
          >
            <p>Logout</p>
            <i style={{ marginLeft: "0.5rem" }} className="pi pi-sign-out"></i>
          </Button>
        </NavLinkRouter>
      </NavItem>
    </>
  );

  const studentLinks = (
    <>
      <NavItem className="active">
        <NavLinkRouter to="/user">
          <div className="nav-link">
            <i className="now-ui-icons objects_globe"></i>
            <p>Mon Profile</p>
          </div>
        </NavLinkRouter>
      </NavItem>
      <NavItem>
        <NavLinkRouter to="/stages">
          <div className="nav-link">
            <i className="now-ui-icons travel_info"></i>
            <p>Stages</p>
          </div>
        </NavLinkRouter>
      </NavItem>
      <NavItem>
        <NavLinkRouter to="/prop-stage">
          <div className="nav-link">
            <i className="now-ui-icons education_hat"></i>

            <p>Proposer un stage</p>
          </div>
        </NavLinkRouter>
      </NavItem>
      <NavItem>
        <NavLinkRouter to="/etudiant-stages">
          <div className="nav-link">
            <i className="now-ui-icons education_hat"></i>

            <p>Voir mes stages</p>
          </div>
        </NavLinkRouter>
      </NavItem>

      <NavItem>
        <NavLinkRouter to="/index">
          <Button
            onClick={logout}
            className="nav-link btn-neutral"
            color="info"
          >
            <p>Logout</p>
            <i style={{ marginLeft: "0.5rem" }} className="pi pi-sign-out"></i>
          </Button>
        </NavLinkRouter>
      </NavItem>
    </>
  );

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
      <Navbar className="bg-info" expand="lg" style={{ marginBottom: "0px" }}>
        <Container>
          <div className="navbar-translate">
            <NavLinkRouter to={isAuthenticated ? "/stage" : "/index"}>
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
              {<Fragment>{token ? studentLinks : guestLinks}</Fragment>}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

NavbarGlobal.prototypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavbarGlobal);
