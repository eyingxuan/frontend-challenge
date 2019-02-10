import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from '../App';
import Receipt from './Receipt';

class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/subRec" component={Receipt}/>
        </Switch>
      </BrowserRouter>
      
    )
  }
}

export default MainRouter;
