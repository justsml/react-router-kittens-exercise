import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Kitten from "./components/Kitten";
import LearnMore from "./components/LearnMore";
import "./styles.css";

/*
PART 1 INSTRUCTIONS:
Scenario: Your incredibly popular kitten blog is suddenly
      costing 3x more to run - especially since the last update.
      _Big Investor orders you to investigate._
      
      You find the client-side router appears to work at first glance...
> Does it really work?
> Can you review your notes or a checklist?
> What visual cues do you see?

Est. time: 3-30min.



*** STRETCH GOALS ***
PART 2 INSTRUCTIONS:
  Add "page component" routes under the /kitten/ route.
  
  You need to build 3 page routes, each to view
  multiple images on a page.

  The required routes:
  Show 3 Images:  /kitten/3 
  Show 6 Images:  /kitten/6
  Show 9 Images:  /kitten/9
*/

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/kitten/">Kitten</a>
              </li>
              <li>
                <a href="/learn/">Learn More</a>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/kitten/" component={Kitten} />
            <Route path="/learn/" component={LearnMore} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
