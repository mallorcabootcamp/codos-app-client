import React from 'react';
import { HashRouter, Switch, Route  } from "react-router-dom";
import Main from './screens/Main/Main';
import History from './screens/History/History';
import UnexpectedError from './screens/UnexpectedError/UnexpectedError'
import { ScrollToTop } from '../src/components/ScrollToTop/ScrollToTop';
import "./index.scss";

function App() {


  return (
    <HashRouter>
      <Switch>
        <Route path='/history'>
          <ScrollToTop>
            <History />
          </ScrollToTop>
        </Route>
        <Route path={'/'} exact>
          <ScrollToTop>
            <Main />
          </ScrollToTop>
        </Route>
        <Route path="/unexpected-error" component={UnexpectedError} />
      </Switch>
    </HashRouter>
  );
}


export default App;
