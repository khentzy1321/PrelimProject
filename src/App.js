import React from "react";
import "./App.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/pages/About";
import Form from "./Form";

import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import EditVisitor from "./components/visitors/EditVisitor";
import Visitor from "./components/visitors/Visitor";
function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/about" component={About} />
          <Route exact path="/visitors/edit/:id" component={EditVisitor} />
          <Route exact path="/visitors/:id" component={Visitor} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
