import React, {useState} from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from './screens/Main/Main';
import History from './screens/History/History';
import { ScrollToTop } from '../src/components/ScrollToTop/ScrollToTop';
import "./index.scss";
import { SelectADevice } from './screens/SelectADevice/SelectADevice';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <HashRouter>
      <Switch>
        <Route path='/SelectADevice'>
          <ScrollToTop>
            <SelectADevice onClick={() => setLoggedIn(true)} />
          </ScrollToTop>
        </Route>
        <Route path='/History'>
          <ScrollToTop>
            <History />
          </ScrollToTop>
        </Route>
        <Route path='/' exact>
          <ScrollToTop>
            {!loggedIn ? <Redirect to="/SelectADevice" /> : <Main />}  
          </ScrollToTop>
        </Route>
      </Switch>
    </HashRouter>
  );
}


export default App;
