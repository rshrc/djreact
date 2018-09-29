import React, { Component } from "react";
import CustomLayout from "./containers/Layout";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
