import React from 'react'
import { Switch, Route } from 'react-router-dom'
import screens from 'screens'
import * as routePaths from 'constants/routePaths'


const Routes = () => (
    <Switch>
        <Route exact path={routePaths.HOME} component={screens.Home} />
        {/* TODO add Candidate screen */}

        <Route component={screens.NotFound} />
    </Switch>
)

export default Routes
