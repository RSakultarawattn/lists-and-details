import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AllCharacters from '../characters/AllCharacters';
import Header from './Header';
import DetailPage from './DetailPage';

export default class Characters extends Component {

  render() {

    return (
      <div>
        <Router>
          <Header name="Ray" />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <AllCharacters {...routerProps} />}
            />
            <Route
              path="/DetailPage/:id"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
