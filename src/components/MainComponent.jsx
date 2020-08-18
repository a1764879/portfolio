import React, { Component } from 'react';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/:page?" render={props => <Home {...props}/>}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}
export default Main