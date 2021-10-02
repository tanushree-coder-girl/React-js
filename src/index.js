//1. import area
//Formula :
//import something from 'something';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
//2. components area

//3. object.method
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
