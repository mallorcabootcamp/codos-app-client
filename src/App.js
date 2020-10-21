import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from './screens/Main/Main';
import History from './screens/History/History';
import "./index.scss";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/History'>
          <History />
        </Route>
        <Route path='/' exact>
          <Main />
        </Route>
      </Switch>
    </HashRouter>
  );
}


export default App;
