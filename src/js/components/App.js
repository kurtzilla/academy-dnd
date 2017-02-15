import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import ActiveLink from './ActiveLink';
import Tweets from './Tweets';
import Dnd from './Dnd';

class App extends Component {
  // static contextTypes = {
  //   router: React.PropTypes.object
  // }
  
  render() {
    //const
    //console.log
    
    return (
      <div>
        <div className="container">
          <nav className="nav-inverse">
            <ActiveLink activeOnlyWhenExact to="/" label="Tweets"/> &nbsp;|&nbsp;
            <ActiveLink activeOnlyWhenExact to="/drag-drop" label="Dnd"/>
          </nav>
          <div className="panel content">
            <Switch>
              <Route exact={true} path="/" component={Tweets}/>
              <Route exact={true} path="/drag-drop" component={Dnd}/>
              <Route render={() => (
                <h1>No Match</h1>
              )} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
