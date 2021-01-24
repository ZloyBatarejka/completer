import React from 'react';
import { observer } from "mobx-react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Main } from './pages/Main';
import { Auth } from './pages/Auth';
import GuardedRoute from './middleware/GuardRoute';
import { Container } from '@material-ui/core';

const  App = observer(() => {
  return (
      <Container maxWidth="md">
        <Router>
          <Switch>
            <Route exact path="/auth" component={Auth}  />
            <GuardedRoute exact path="/" component={Main} />
          </Switch>
        </Router>
      </Container>
  );
})

export default App;
