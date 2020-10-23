import React from "react";
import PropTypes from "prop-types";
import { Alert, Container } from "reactstrap";
import { connect } from "react-redux";
import { removeAlert } from "../../../Redux/actions/alert";

const AlertComponent = ({ alerts, removeAlert }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert key={alert.id} color={alert.alertType}>
      <Container>
        <div className="alert-icon">
          <i className="now-ui-icons objects_support-17"></i>
        </div>
        <strong>Oh snap!</strong> {alert.msg}
        <button
          type="button"
          className="close"
          onClick={() => removeAlert(alert.id)}
        >
          <span aria-hidden="true">
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </span>
        </button>
      </Container>
    </Alert>
  ));

AlertComponent.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(AlertComponent);
