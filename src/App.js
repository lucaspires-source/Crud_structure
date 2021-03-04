import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div style={{"maxWidth":"30rem","margin":"4rem auto"}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
