import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './screens/Main/Main';
import History from './screens/History/History';
import "./index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/History'>
          <History />
        </Route>
        <Route path='/' exact>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
