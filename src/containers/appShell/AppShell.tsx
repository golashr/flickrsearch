/**
 *
 * This component has all routers defined for an application.
 *
 */
// tslint:disable: prettier
import React from 'react';
import FlickrImage from 'Containers/flickr';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'Containers/pageNotFound';

class AppShell extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/flickrsearch" component={FlickrImage} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppShell;
