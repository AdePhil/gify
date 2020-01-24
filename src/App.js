import React from "react";
// import logo from "./logo.svg";
import "./styles.scss";
import Home from "./pages/Home/index";
import Details from "./pages/Details";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gifs/:id" component={Details} />
          {/* <Route component={Notfound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
