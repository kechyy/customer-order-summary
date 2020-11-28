import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from "./components/profile/profile.component";
import OrderSummary from "./components/order/orderSummary.component";

const Routes = (props) => (
        <Switch>
            <Route path="/"  component={Profile} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/order-summary" component={OrderSummary} />
        </Switch>

);

export default Routes;