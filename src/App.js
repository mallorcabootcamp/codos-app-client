import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from './screens/Main/Main';
import History from './screens/History/History';
import { ScrollToTop } from '../src/components/ScrollToTop/ScrollToTop';
import "./index.scss";


function App() {

  return (
    <HashRouter>
      <Switch>
        <Route path='/History'>
          <ScrollToTop>
            <History />
          </ScrollToTop>
        </Route>
        <Route path='/' exact>
          <ScrollToTop>
            <Main />
          </ScrollToTop>
        </Route>
      </Switch>
    </HashRouter>
  );
}


export default App;
