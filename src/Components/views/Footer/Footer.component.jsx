import React from "react";
import { Container } from "reactstrap";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="https://www.creative-tim.com?ref=nukr-dark-footer">
                Creative Tim
              </a>
            </li>
            <li>
              <a href="http://presentation.creative-tim.com?ref=nukr-dark-footer">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com?ref=nukr-dark-footer">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a href="https://www.invisionapp.com?ref=nukr-dark-footer">
            Invision
          </a>
          . Coded by{" "}
          <a href="https://www.creative-tim.com?ref=nukr-dark-footer">
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
