import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import pic from "./images/image-jeremy.png";
import data from "./data";
import Task from "./components/Tasks";

const App = () => {
  return (
    <Router>
      <div className="container">
        <section className="person">
          <div className="profile">
            <img src={pic} alt="profile picture" className="profile-pic" />

            <div className="profile-details">
              <h4 className="dude">Report for</h4>

              <h2 className="name">Jeremy Robson</h2>
            </div>
          </div>

          <div className="detail">
            <Link className="link" to="./">
              Daily
            </Link>
            <Link className="link" to="./weekly">
              Weekly
            </Link>
            <Link className="link" to="./monthly">
              Monthly
            </Link>
          </div>
        </section>

        <Switch>
          <Route path="/" exact>
            <Task data={data} time="daily" last="Day" />
          </Route>
          <Route path="/weekly" exact>
            <Task data={data} time="weekly" last="Week" />
          </Route>
          <Route path="/monthly" exact>
            <Task data={data} time="monthly" last="Month" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
