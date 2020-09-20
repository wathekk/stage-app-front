import React from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import { NavbarGlobal } from "../../Components/views/Navbar/Navbar-global.component";

const Login = () => {
  const [alert4, setAlert4] = React.useState(true);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ formData });
  };

  return (
    <>
      <NavbarGlobal />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="6">
              <Card className="card-login card-plain">
                <CardHeader className="text-center">
                  <div className="logo-container">
                    <img
                      alt="..."
                      src={require("../../assets/img/logoTek-up_university.png")}
                    ></img>
                  </div>
                  <p className="lead">
                    <i className="fas fa-user"></i> Sign into Your Account
                  </p>
                  <Alert color="danger" isOpen={alert4}>
                    <Container>
                      <div className="alert-icon">
                        <i className="now-ui-icons objects_support-17"></i>
                      </div>
                      <strong>Oh snap!</strong> Change a few things up and try
                      again.
                      <button
                        type="button"
                        className="close"
                        onClick={() => setAlert4(false)}
                      >
                        <span aria-hidden="true">
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        </span>
                      </button>
                    </Container>
                  </Alert>
                </CardHeader>

                <div className="text-center"></div>

                <Form className="form" onSubmit={(e) => onSubmit(e)}>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border" + (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        type="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" +
                        (passwordFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password..."
                        type="password"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        required
                      ></Input>
                    </InputGroup>
                    <div className="pull-right">
                      <h6>
                        <Link className="link" to="/forgotpassword">
                          Forgot password ?
                        </Link>
                      </h6>
                    </div>
                  </CardBody>

                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round mr-1"
                      color="info"
                      role="button"
                      size="lg"
                      type="submit"
                      value="Login"
                    >
                      Login
                    </Button>
                    <div className="pull-right">
                      <h6>
                        <Link className="link" to="/help">
                          Need Help?
                        </Link>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
