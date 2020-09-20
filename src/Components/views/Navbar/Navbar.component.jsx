import React from "react";
import { NavLink as NavLinkRouter } from "react-router-dom";
// reactstrap components
import { Button, Collapse, Navbar, NavItem, Nav, Container } from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
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
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
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

              <NavItem>
                <NavLinkRouter to="/login">
                  <Button className="nav-link btn-neutral" color="info">
                    <p>Login</p>
                    <i
                      style={{ marginLeft: "0.5rem" }}
                      className="pi pi-sign-in"
                    ></i>
                  </Button>
                </NavLinkRouter>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
