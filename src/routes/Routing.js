import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { AboutView } from '../view/AboutView'
 

export const Routing = (props) => {

    return (

        <Router>
            {props.children}
            <Switch>
                <Route exact path="/home" component={HomeView} />
                <Route exact path="/about" component={AboutView} />
                <Route component={HomeView} />
            </Switch>
        </Router>


    )

}