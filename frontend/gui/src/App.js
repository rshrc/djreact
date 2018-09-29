import React, { Component } from "react";
import CustomLayout from "./containers/Layout";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup;
  }

  render() {
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state != null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
