import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  HashRouter,
} from "react-router-dom";
import pic from "./images/image-jeremy.png";
import data from "./data";
import Task from "./components/Tasks";

const App = () => {
  console.log(data);
  const daily = "daily";
  const weekly = "weekly";
  const monthly = "monthly";
  return (
    <HashRouter>
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
            <Link to="./">Daily</Link>
            <Link to="./weekly">Weekly</Link>
            <Link to="./monthly">Monthly</Link>
          </div>
        </section>

        <Switch>
          <Route path="/" exact>
            <Task data={data} time={daily} last="Day" />
          </Route>
          <Route path="/weekly" exact>
            <Task data={data} time={weekly} last="Week" />
          </Route>
          <Route path="/monthly" exact>
            <Task data={data} time={monthly} last="Month" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
