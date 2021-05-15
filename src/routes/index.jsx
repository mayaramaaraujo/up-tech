import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
